const {prisma} = require("../generated/prisma-client")
async function createUser(openid){
    try{
        user = await prisma.createUser({
            openid: openid
        })
        return user   
    }catch(e){
        console.log(e)
        return false
    }
}
async function userIsExist(openid){
    try{
        const res = await prisma.$exists.user({
            openid: openid
        })
        return res
    }catch(e){
        //查询失败
        console.log(e)
        return -1
    }
}
module.exports={
    createUser,
    userIsExist
}