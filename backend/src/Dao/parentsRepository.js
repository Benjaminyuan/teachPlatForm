const{ prisma } = require("../generated/prisma-client")
async function findParentById(UnionId){
    return await prisma.$exists.parent({
        UnionID: UnionId
    })
}
async function parentExist(name,email,phone){
    let res =  await prisma.$exists.parents({
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
async function getParent(data){
        let info  
        try{
            info = await prisma.parent({
                id:data
            })
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
 async function createParent(data){
    //未加锁，
   try{ 
       await prisma.createParent(data)
    }catch(e){
       return false
   }
   return true
}
async function updateInfo(data,id){

    //未加锁
    try{
        res = await prisma.updateParent({
        data: data,
        where:{
            id:id
        }
    })
        console.log(res)
        return true
    }catch(e){
        console.log(e)
        return false
    }
}
async function getParentById(UnionID){
   Info =  prisma.parent({
        UnionID:UnionID
    })
    return Info
}
module.exports={
    updateInfo,
    parentExist,
    createParent,
    getParent,
    findParentById,
    getParentById,
}