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
async function createInvitation(req, res) {
    let role = req.body.tokenData.role
    //role: parent or student
    let roleId = req.body.tokenData.jti
    let query = {}
    //id
    let id = req.body.id
    let data =  {
        //邀请初始化，waiting 写死！！
        status: "WAITING",
    }
    if(role === 'parent'){
        data.invitor="PARENT"
        query.invitor="PARENT"
        data.student={
            connect:{
                id:id
            }
        }
        query.student={
            id:id
        }
        data.parent={
            connect:{
                id: roleId
            }
        }
        query.parent={
            id:id
        }
    }else{
        data.invitor="STUDENT"
        query.invitor="STUDENT"
        data.student={
            connect:{
                id: roleId
            }
        }
        query.student={
            id:roleId
        }
        data.parent={
            connect:{
                id:id
            }
        }
        query.parent={
            id:id
        }
    }
    console.log(data)
    console.log(query)
    let exist = await commonRepo.invitationExist(query)
    console.log(exist)
    if(exist){
        res.status(403).json({info:"请勿重复邀请！！"})
    }else{
        let{create,invitation} = await commonRepo.createInvitation(data)
        res.status(200).json({ create: create,invitation:invitation})
    }
}
async function updateInvitaion(req,res){
    let role = req.body.tokenData.role
    let roleId = req.boyd.roleId.jti
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
       //被邀请者接受和拒绝
       if( data.status === "WAITING"&&(status === "REJECTED"|| status ==="ACCEPT") ){
           result = commonRepo.updateInvitation({status:status,id:invitationId})
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
    updateInvitaion
}