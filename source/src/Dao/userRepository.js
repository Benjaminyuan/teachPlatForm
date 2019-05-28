const {prisma} = require("../generated/prisma-client")
async function createUser(openid){
    try{
        user = await prisma.createUser({
            openid: openid
        })
        return user   
    }catch(e){
        return false
    }
}
async function userIsExist(openid){
    try{
        res = await prisma.$exists.user({
            openid: openid
        })
        return res
    }catch(e){
        //查询失败
        return -1
    }
}
module.exports={
    createUser,
    userIsExist
}