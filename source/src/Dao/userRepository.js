const {prisma} = require("../generated/prisma-client")
async function createUser(UnionID){
    try{
        user = await prisma.createUser({
            UnionID: UnionID
        })
        return user   
    }catch(e){
        return false
    }
}
async function userIsExist(UnionID){
    try{
        res = await prisma.$exists.user({
            UnionID: UnionID
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