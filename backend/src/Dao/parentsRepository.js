const{ prisma } = require("../generated/prisma-client")
async function parentExist(name,email,phone){
    return prisma.$exists.parents({
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
async function getParent(data){
        return await prisma.student({
            data
        })
}
 async function createParent(data){
    //未加锁，
   try{ 
       await prisma.createParent({
       name: data.name,
       university: data.university,
       email: data.email,
       phone: data.phone,
       address: data.address,
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
        res = await prisma.updateParent({
        data:{
            name: data.name,
            phone: data.phone,
            email: data.email,
            subjects: data.subjects,
            address: data.address
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
module.exports={
    updateInfo,
    parentExist,
    createParent
}