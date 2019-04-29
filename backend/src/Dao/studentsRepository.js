const{ prisma } = require("../generated/prisma-client")
async function getStudent(data){
    return await prisma.student(data)
}
async function findStudentById(UnionId){
    return await prisma.$exists.student({
        UnionID:UnionId
    })
}
async function studentExist(name,email,phone){
   return await prisma.$exists.student({
        AND:[
            {
                name: name
            },
            {
                email: email
            },
            {
              phone: phone  
            },
        ]
    })
}
async function createStudent(data){
    //未加锁，
   try{ 
       await prisma.createStudent({
       name: data.name,
       university: data.university,
       email: data.email,
       phone: data.phone,
       authstatus: 'UNCOMMITED',
       subjects: JSON.parse(data.subjects),
       order: {
       },
       invitations: {},
   })}catch(e){
       return false
   }
   return true
}
async function updateInfo(data){

    //未加锁
    try{
       res =  await prisma.updateStudent({
        data:{
            name: data.name,
            phone: data.phone,
            email: data.email,
            university: data.university,
            subjects: data.subjects
        },
        where:{
            id: data.id
        }
    })
        console.log(res)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}
async function  getStudentById(UnionID){
    Info = await prisma.student({
        UnionID:UnionID
    })
    return Info
}
module.exports ={
    studentExist,
    createStudent,
    updateInfo,
    getStudent,
    findStudentById,
    getStudentById,
}
