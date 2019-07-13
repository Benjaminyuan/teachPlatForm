const{ prisma } = require("../generated/prisma-client")
async function findParentById(openid){
    return await prisma.$exists.parent({
        openid:openid
    })
}
async function parentExist(name,email,phone){
    let res =  await prisma.$exists.parent({
         OR:[
             {
                 name: name || ''
             },
             {
                 email: email || '',
             },
             {
               phone: phone ||''
             },
         ]
     })
     return res
 }
async function getParent(data){
        let info  
        try{
            info = await prisma.parent({
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
            return {
                resData: "",
                found: false
            }
        }
    }
async function getParents(skip,first,status){
    const resData = await prisma.parents({
        where:{
            authStatus:status
        },
        skip:skip,
        first:first
    })
    return resData
}
 async function createParent(data){
    //未加锁，
    let parent
   try{ 
       parent = await prisma.createParent(data)
    }catch(e){
        console.log(e)
       return ""
   }
   return parent
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
async function getParentById(openid){
   const Info =  prisma.parent({
        openid:openid
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
    getParents
}