const { prisma } = require("../generated/prisma-client")
const {invitationStatus,studentInvitationResult,parentInvitationResult,studentBasicPublishInfo,parentBasicPublishInfo} =  require("./fragment")
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
    let result
    try {
       result =  await prisma.updateInvitation({
            data: {
                status: data.status
            },
            where: {
                id: data.id
                //订单id
            }
        }).$fragment(invitationStatus)
    } catch (e) {
        return ""
    }
    return result
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
                    openid: invitation.student.openid
                }
            },
            parent:{
                connect:{
                    openid: invitation.parent.openid
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
        openid:data.openid,               
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
        status:status
    }
}
async function getPublishList(skip,first,role){
    let resData
    console.log(skip)
    console.log(first)
    console.log(role)
    try{
        if(role === "student"){
            //学生获取的是parent的
            resData = await prisma.parents({
                where:{
                    publish:true
                },
                skip:skip,
                first:first,
            }).$fragment(parentBasicPublishInfo)
        }else if(role === "parent"){
            resData = await prisma.students({
                where:{
                    publish:true
                },
                skip:skip,
                first:first
            }).$fragment(studentBasicPublishInfo)
        }
    }catch(e){
        console.log(e)
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
            openid:data.openid
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
async function createTryOrder(invitationId){
    let TryOrder
    try{
           const res =  await prisma.updateInvitation({
                data: {
                    status: "PAIED"
                },
                where: {
                    id:invitationId
                    //订单id
                }
            }).$fragment(`fragment  updateInvi on Invitaion{
                parent{
                    openid
                    address
                    phone
                }
                student{
                    openid
                }
                
            } `)
            console.log(res)
          TryOrder =   await prisma.createTryOrder({
                parent:{
                    connect:{
                        openid: res.parent.openid
                    }
                },
                student:{
                    connect:{
                        openid: res.student.openid
                    }
                },
                address: res.parent.address,
                status:"INIT",
                phone:res.parent.phone
            })
    
       
    }catch(e){
        console.log(e)
        return  ""
        
    }
    return TryOrder
}
async function getPublishStatus(data,role){
    let result 
    console.log(`data:${data}`)
    console.log(`role:${role}`)
    try{
        if(role === "STUDNET"){
            result = await prisma.student({
                openid: data.id
            }).$fragment(`
            fragment Sstatus on Student{
                publish
            }
            `)
    }else if (role === "PARENT"){
            result = await prisma.parent({
                openid: data.id
            }).$fragment(`
            fragment Pstatus on Parent{
                publish
            }`)
    }
}catch(e){
    console.log(e)
    return ''
}
return result
}
async function getRoleInfo(data,role){
    let result
    try{
      if(role === "student"){
        result = await prisma.student({
            openid:data.id
        }).$fragment(studentBasicPublishInfo)
      }else if(role ==="parent"){
          result =  await prisma.parent({
              openid:data.id
          }).$fragment(parentBasicPublishInfo)
      }  
    }catch(e){
        console.log(e)
        return ""
    }
    return result
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
    createTryOrder,
    getPublishStatus,
    getRoleInfo
}