const { prisma } = require("../generated/prisma-client")
const {invitationStatus,studentInvitationResult,parentInvitationResult} =  require("./fragment")
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
        await prisma.updateInvitation({
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
        exist = await prisma.$exists.invitation(data)
        console.log(exist)
    } catch (e) {
        console.log(e)
        exist = false
    } finally {
        return exist
    }
}
/*------------pm说不需要抽象出订单----
async function createOrder(data){
    let invitation,order
    prisma.transaction(async()=>{
         invitation = prisma.updateInvitation({
            data:{
                status:"ACCEPT",
             },
             where:{
                 id:data.invitationId
             }
        })
         order = prisma.createOrder({
            stuednt:{
                connect:{
                    UnionID: invitation.student.UnionID
                }
            },
            parent:{
                connect:{
                    UnionID: invitation.parent.UnionID
                }
            },
            status:"UNPAIED"
        }).$fragment(``)
    })
    return {
        order:order,
        invitation:invitation
    }
}
*/

async function getRoleInvitations(data,role){
    let query =  {
        UnionID:data.UnionID,               
    }
    let invitations
    try{
        if(role === "student"){
            invitations  = await prisma.student(query).$fragment(studentInvitationResult)
        }else if(role === "parent"){
            invitations = await prisma.parent(query).$fragment(parentInvitationResult)
        }
    }catch(e){
        return {
            get:false,
            data:"",
            info:"非法请求"
        }
    } 
    if(invitations){
        return {
            get: true,
            data:"",
            info:"获取成功"
        }
    }else{
        return {
            get: false,
            data:invitations,
            info:'数据不存在'
        }
    }
}
async function getInvitationStatus(data){
    let status
    try{
        status = await prisma.invitation({
            id:data.id
        }).$fragment(invitationStatus)
    }catch(e){
        console.log(e)
        return {
            error: "查询失败",
            status: ""
        }
    }
    console.log(status)
    return {
        error: "",
        status:status.status
    }
}
async function getPublishList(skip,first,filter,role){
    let resData
    try{
        if(role === "student"){
            //学生获取的是parent的
            resData = await prisma.parents({
                where:{
                    publish:true
                },
                skip:skip,
                first:first,
            }).$fragment(parentInvitationResult)
        }else if(role === "parent"){
            resData = await prisma.student({
                where:{
                    publish:true
                },
                skip:skip,
                first:first
            }).$fragment(studentInvitationResult)
        }
    }catch(e){
        return resData
    }
    return resData
   

}
async function updatePublishStatus(data,role){
    let query = {
        data:{
            publish: data.status
        },
        where:{
            UnionID:data.UnionID
        }
    }
    try{
        if(role === "STUDENT"){
            await  prisma.updateStudent(query)
         }else {
             await prisma.updateParent(query)
         }
    }catch(e){
        return false
    }
    return true 
}
async function createTryOrder(data,invitationId){
    let TryOrder
    try{
            await prisma.updateInvitation({
                data: {
                    status: "PAIED"
                },
                where: {
                    id:invitationId
                    //订单id
                }
            })
          TryOrder =   await prisma.createTryOrder({
                parent:{
                    connect:{
                        UnionID: data.parent.UnionID
                    }
                },
                student:{
                    connect:{
                        UnionID: data.student.UnionID
                    }
                },
                address: data.parent.address
            }).$fragment()
    
       
    }catch(e){
        return {
            result:""
        }
    }
    return {
        result: TryOrder
    }
}
async function getPublishStatus(data,role){
    let result 
    try{
        if(role === "STUDNET"){
            result = await prisma.student({
                id: data.id
            }).$fragment(`
            fragment Sstatus on Student{
                publish
            }
            `)
    }else if (role === "PARENT"){
            result = await prisma.parent({
                id: data.id
            }).$fragment(`
            fragment Pstatus on Parent{
                publish
            }`)
    }
}catch(e){

}
}
module.exports = {
    createInvitation,
    getInvitation,
    updateInvitation,
    deleteInvitation,
    invitationExist,
    getInvitationStatus,
    createTryOrder,
    getRoleInvitations,
    getPublishList,
    updatePublishStatus,
    createTryOrder
}