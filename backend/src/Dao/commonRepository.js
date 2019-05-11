const { prisma } = require("../generated/prisma-client")
async function createInvitation(data) {
    try {
        res = await prisma.createInvitation(data)
        console.log(res)
    } catch (e) {
        console.log(e)
        return {
            create:false,
            invitation:""
        }
    }
    return {
        create: true,
        invitation:res
    }
}
async function updateInvitation(data) {
    try {
        prisma.updateInvitation({
            data: {
                status: data.status
            },
            where: {
                id: data.id
                //订单id
            }
        })
    } catch (e) {
        return false
    }
    return true
}
async function deleteInvitation(data) {
    try {
        await prisma.deleteInvitation({
            id: data.id,
            
        })
    } catch (e) {
        return false
    }
    return true
}

async function getInvitation(data) {
    let invitation
    try {
        invitation = await prisma.invitation({
            id: data.id
        })
    } catch (e) {
        return { get: false, data: "" }
    } finally {
        return { get: true, data: invitation }
    }
}
async function invitationExist(data) {
    let exist
    try {
        console.log("check")
        exist = await prisma.$exists.invitation()
        console.log(exist)
    } catch (e) {
        console.log(e)
        exist = false
    } finally {
        return exist
    }
}
module.exports = {
    createInvitation,
    getInvitation,
    updateInvitation,
    deleteInvitation,
    invitationExist
}