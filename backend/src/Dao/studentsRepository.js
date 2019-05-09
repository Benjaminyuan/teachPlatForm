const{ prisma } = require("../generated/prisma-client")
async function getStudent(data){
    let info  
    try{
        info = await prisma.student(data)
    }catch(e){
        return {
            parent: "",
            found: false
        }
    }
    return {
        parent:info,
        found: true
    }
}
async function findStudentById(UnionId){
    return await prisma.$exists.student({
        UnionID:UnionId
    })
}
async function studentExist(name,email,phone){
   let res =  await prisma.$exists.student({
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
    return res
}
async function createStudent(data){
    //未加锁，
    let student 
   try{ 
        student = await prisma.createStudent(data)
    }catch(e){
        
       return {
           create:false,
           student:student
        }
   }
   return {
       create:true,
       student:student
   }
}
async function updateInfo(data,id){

    //未加锁
    try{
       res =  await prisma.updateStudent({
        data:data,
        where:{
            id: id
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
