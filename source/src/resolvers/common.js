const commonRepo = require("../Dao/commonRepository")
const filter = require("../util/filter")
const studentRepo = require("../Dao/studentsRepository")
const parentRepo = require("../Dao/parentsRepository")
const authRepo = require("../Dao/authRepo")
const PATH = require("path")
const jwt = require("jsonwebtoken")
const jwtUtil = require("../util/jwt")
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
                    openid:roleId
                }
            }
        }
    } else {
        data = {
            starList: {
                disconnect: {
                    openid:roleId
                }
            }
        }
    }
    if (role === "parent") {
        res = parentRepo.updateInfo(data,id)
    } else if(role === "student") {
        res = studentRepo.updateInfo(data,id)
    }
    return res

}
/*-----------star 和unStar 逻辑差不多，所以写了一个功能函数，减少代码重复------*/
async function createInvitation(req, res) {
    let role = req.tokenData.role
    //role: parent or student
    let roleId = req.tokenData.jti
    let query = {}
    //id
    let openid = req.body.openid
    let data =  {
        //邀请初始化，waiting 写死！！
        status: "WAITING",
    }
    data.invitor=role
    query.invitor=role
    if(role === 'PARENT'){
        
        data.student={
            connect:{
                openid: openid
            }
        }
        query.student={
            openid:openid
        }
        data.parent={
            connect:{
                openid:roleId             
            }
        }
        query.parent={
            openid:roleId
        }
    }else{
        data.student={
            connect:{
                openid:roleId
            }
        }
        query.student={
            openid:roleId
        }
        data.parent={
            connect:{
                openid: openid
            }
        }
        query.parent={
            openid:openid
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
async function getInvitations(req,res){
    const role = req.params.role;
    const tokenData = req.tokenData;
    let{get,data,info}= await commonRepo.getRoleInvitations({openid:tokenData.jti},role)
    if(get){
        res.status(200).json({data:data,info:info})
    }else{
        res.status(404).json({info:info})
    }
    return
}
async function getInvitationStatus(req,res){
    let id = req.params.id
    const{error,status} = await  commonRepo.getInvitationStatus({id:id})
    if(error){
        console.log(error)
        res.status(500).json({info:error})
    }else if(status === null){
        res.status(404).json({info:"查找邀请不存在"})
    }else{
        res.status(200).json({status:status.status})
    }
}
async function updateInvitaion(req,res){
    let role = req.tokenData.role
    let invitationId = req.params.id
    let status = req.body.status
    let {get,data}=await commonRepo.getInvitation({id:invitationId})
    if(!get){
        res.status(404).json({info:"请求不存在"})
    }
    let result 
    console.log(data)
    //上一层需要校验jwt,roleId和自身ID，role和jwt.role
    if(role === data.invitor){
        console.log(role)
        if(status === "DELETE" && data.status === "REJECTED"){
            result = await  commonRepo.deleteInvitation({id:invitationId})
        }else if(status === "REBACK" && data.status === "WAITING"){
            result = await commonRepo.updateInvitation({status: "REBACK",id:invitationId})
        }else if(status === "PAY" && data.status === "ACCEPT"){
            //to do  wechat pay 
            console.log("create tryOrder")
            result  = await commonRepo.createTryOrder(invitationId)
            if(result){
                res.status(200).json({result:result})
                return 
            }
        }
     
        //邀请者有两个权限，删除和取消
    }else{
       //被邀请者接受和拒绝
       if( data.status === "WAITING" &&(status==="ACCEPT"|| status==="REJECTED")){
                result = await  commonRepo.updateInvitation({status:status,id:invitationId})
       }else if(data.status === "ACCEPT" && status ==="PAIED"){
            //支付接口未定
            //undo 
       }
    }
    if(result){
        res.status(200).json({status: result.status})
    }else{
        res.status(403).json({info:"根据平台规定，无法进行响应操作订单"})
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

async function getAuthInfo(res,req){
    const id =res.tokenData.jti

}
async function sendAuth(req,response){
    let files = req.files
    let data = {}
    let tokenData = req.tokenData
    data.id = tokenData.jti
    let status = tokenData.authStatus;
    data.sourceUrl =[]
    const role = tokenData.role
    files.forEach(element => {
        console.log(element)
        data.sourceUrl.push(element.originalname)
    });
    console.log(data.sourceUrl)
    
    if( status === "AUTHED"){
        response.status(403).json({info:"您已经通过认证"})
    }else{
        console.log("createAuth")
        const{create,info}= await authRepo.createAuth(data,role)
        console.log(create)
        if(create){
            const {res,token} = jwtUtil.newJwt(role,tokenData.jti,"AUTHCOMMITED")
            response.append("Authorization",`Bearer ${token}`)
             response.status(200).json({info:info})
        }else{
            response.status(400).json({info:info})
        }
    }
    //存储图片
}

async function getAuthStatus(req,res){
    const role = req.params.role
    let data ={}
    data.id = req.tokenData.jti
    console.log(data)
    console.log(role)
   const {status,info}= await authRepo.getAuthStatus(data,role)
  console.log(status)
   if(status){
       if(status !== req.tokenData.authStatus){
           console.log(status.res)
           req.tokenData.authStatus = status.res
           newToken = jwt.sign(req.tokenData,process.env.JWTSECRET)
        //    res.setHeader('Authorization',`Bearer ${newToken}`)
           res.append("Authorization", `Bearer ${newToken}`)
           res.status(200).json({status:status,info:"授权状态更新成功"})
           return 
       }
       res.status(200).json({status:status,info:"授权状态未变化"})
       return 
   }else{
       res.status(403).json({status:status,info:info})
   }
}
async function getPic(req,res){
   let name =  req.params.name
   const file = `../../uploads/${req.tokenData.jti}-${name}`
   const path = PATH.join(__dirname,file)
   console.log(path)
   res.sendFile(path)
}
async function getPublishList(req,res){
    const skip = parseInt(req.query.skip)
    const first = parseInt(req.query.first)
    const role = req.params.role
    const data = await commonRepo.getPublishList(skip,first,role)
    if(data){
        res.status(200).json({data:data})
    }else{
        res.status(404).json({info:"查询失败"})
    }
}
async function updatePublishStatus(req,res){
    console.log(req.params.status)
   const status = req.params.status==="false"?false:true
   console.log(status)
   const update = await commonRepo.updatePublishStatus({status:status,openid:req.tokenData.jti},req.tokenData.role)
   if(update){
       res.status(200).json({info:"更新成功"})
   }else{
       res.status(404).json({info:"更新失败，请检查参数"})
   }
}
async function getPublishStatus(req,res){
    const id = req.tokenData.jti
    const role  =req.tokenData.role
    const status = await commonRepo.getPublishStatus({id:id},role)
    console.log(`status:${status.publish}`)
    if(status){
        res.status(200).json({
            status:status.publish
        })
        return 
    }
    res.status(403).json({info:"更新失败"})
}
async function getRoleInfo(req,res){
    const role =req.params.role
    const data = {
        id: req.params.id
    }
    console.log(`role:${role}`)
    console.log(`data:${data.id}`)
    const result = await commonRepo.getRoleInfo(data,role)
    console.log(`getRoleInfo:${result}`)
    if(result){
        res.status(200).json({data:result})
        return 
    }
    res.status(404).json({info:"未找到"})
    return
}
module.exports = {
    createInvitation,
    isExist,
    star,
    unStar,
    updateInvitaion,
    getInvitationStatus,
    sendAuth,
    getAuthStatus,
    getPic,
    getInvitations,
    getPublishList,
    getPublishStatus,
    updatePublishStatus,
    getRoleInfo
}