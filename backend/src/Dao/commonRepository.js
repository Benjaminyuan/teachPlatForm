const { prisma } = require("../generated/prisma-client")
async function createInvitation(data){
   
   try{
    res = await prisma.createInvitation({
        //邀请初始化，waiting 写死！！
        status: "WAITING",
        stuednt: {
            connect: {
                id: data.studentId
            }
        },
        parent: {
            connect: {
                id: data.parentId
            }
        }
    })
    }catch(e){
        return false
    }
    return true
}
async function updateInvitation(data){
    try{
        prisma.updateInvitation({
            data:{
                status: data.status
            },
           where:{
                id: data.id
                //订单id
            }
        })
    }catch(e){
        return false
    }
    return true
}
async function deleteInvitation(data){
    try{
        await  prisma.deleteInvitation({
            id: data.id
        })
    }catch(e){
        return false
    }
    return true
}

async function getInvitation(data){
        try{
            invitation = await prisma.invitation({
                id:data.id
            })
        }catch(e){
            return { res: false,data :invitation }
        }
        return { res: true,data: invitation }
}
module.exports={
    createInvitation,
    getInvitation,
    updateInvitation,
    deleteInvitation
}