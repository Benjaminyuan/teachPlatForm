const{ prisma } = require("../generated/prisma-client")
async function getStudent(data){
    let info  
    try{
        info = await prisma.student({
            openid:data.openid
        })
    }catch(e){
        return {
            resData: "",
            found: false
        }
    }
    if(info){
        return {
            resData:info,
            found: true
        }
       
    }else{
        return  {
            resData: "",
            found: false
        }
    }
    
}
async function findStudentById(openid){
    return await prisma.$exists.student({
        openid:openid
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
    data.authStatus="UNCOMMITED"

   try{ 
        student = await prisma.createStudent(data)
    }catch(e){
        console.log(e)
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
async function  getStudentById(openid){
    Info = await prisma.student({
        openid:openid
    })
    return Info
}
async function getStudents(skip,first,status){
   const resData = await prisma.students({
        where:{
            authStatus:status
        },
        skip:skip,
        first:first
    })
    return resData
}
module.exports ={
    studentExist,
    createStudent,
    updateInfo,
    getStudent,
    findStudentById,
    getStudentById,
    getStudents
}
