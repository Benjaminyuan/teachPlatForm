const commonRepo = require("../Dao/commonRepository")
const filter = require("../util/filter")
const studentRepo = require("../Dao/studentsRepository")
const parentRepo = require("../Dao/parentsRepository")

function star(req, res) {
    let result
    try {
        result= handleStarOrUnstarData(req,true)
    } catch (e) {
        result = false
    }
    if(result){
         res.status(200).json({ star: true })
    }
    res.status(502).json({ unStar: false })    
}
function unStar(req, res) {
   let result
    try {
         result = handleStarOrUnstarData(req,false)
    } catch (e) {
        result = false
    }
    if(result){
        res.status(200).json({ unStar: true })
    }
    res.status(502).json({ unStar: false })
    
}
/**---------- */
function handleStarOrUnstarData(req, star) {
    let    data
    let    res
    let    role= req.params.role
    let    id= req.params.id
    let    roleId= req.query.roleId
    if (star === true) {
        data = {
            starList: {
                connect: {
                    id: id
                }
            }
        }
    } else {
        data = {
            starList: {
                disconnect: {
                    id: id
                }
            }
        }
    }
    if (role === "parent") {
        res = parentRepo.updateInfo(data,roleId)
    } else {
        res = studentRepo.updateInfo(data,roleId)
    }
    return res

}
/*-----------star 和unStar 逻辑差不多，所以写了一个功能函数，减少代码重复------*/
function createInvitation(req, res) {
    let role = req.body.role
    let roleId = req.body.roleId
    let id = req.body.id
    let data =  {
        //邀请初始化，waiting 写死！！
        status: "WAITING",
    }
    if(role === 'parent'){
        data.invitor="PARENT"
        data.student={
            connect:{
                id:id
            }
        }
        data.parent={
            connect:{
                id: roleId
            }
        }
    }else{
        data.invitor="STUDENT"
        data.student={
            connect:{
                id: roleId
            }
        }
        data.parent={
            connect:{
                id:id
            }
        }
    }
    console.log(data)
    let exist = commonRepo.invitationExist(data)
    if(exist){
        req.status(403).json({info:"请勿重复邀请！！"})
    }
    let{create,invitation} =  commonRepo.createInvitation(data)
    res.status(200).json({ create: create,invitation:invitation})
}
function updateInvitaion(req,res){
    let role = req.body.role
    let roleId = req.boyd.roleId
    let invitationId = req.body.invitationId
    let status = req.body.status
    let {get,data}=commonRepo.getInvitation({id:invitationId})
    if(!get){
        res.status(404).json({info:"请求不存在"})
    }
    let result 
    //上一层需要校验jwt,roleId和自身ID，role和jwt.role
    if(role === data.invitor){
        if(status === "DELETE" && data.status === "REJECTED"){
            result = commonRepo.deleteInvitation({id:invitationId})
        }else if(status === "REBACK" && data.status === "WAITING"){
            result = commonRepo.updateInvitation({status: "REBACK",id:invitationId})
        }
     
        //邀请者有两个权限，删除和取消
    }else{
       //被邀请者
       if(status === "REJECTED" && data.status === "WAITING" ){
           result = commonRepo.updateInvitation({status:"REJECTED",id:invitationId})
       }
    }
    if(result){
        res.status(200).json({status: status})
    }else{
        res.status(403).json({info:"根据平台规定，无法取消订单"})
    }
}

async function updateInfo(req, res) {

}
async function deleteInvitaion(req, res) {

}

async function invitationIsTouchable(data) {
    const { res, invitation } = commonRepo.getInvitation(data)
}
async function isExist(req, res) {
    const { name, phone, email } = req.body
    console.log({ name, phone, email })
    parentExist = await parentRepo.parentExist(name, phone, email)
    studentExist = await studentRepo.studentExist(name, phone, email)
    const exist = parentExist || studentExist
    console.log(exist)
    res.json({ exist: exist, info: "student or parent role already registed!!" })
}
module.exports = {
    createInvitation,
    isExist,
    star,
    unStar,
    sendInvitation,
    updateInvitaion
}