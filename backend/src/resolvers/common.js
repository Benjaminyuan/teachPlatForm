const commonRepo = require("../Dao/commonRepository")
const filter = require("../util/filter")
async function createInvitation(req,res){
    if(filter.isEmpty(req.body)){
        res.status(400).json({info:"请求参数不能为空"})
    }
   create  = await commonRepo.createInvitation(req.body)
   res.status(200).json({create:create})
}
async function updateInfo(req,res){
    if(filter.isEmpty(req.body)){
        res.status(400).json({info:"请求参数不能唯空"})
    }
}
async function deleteInvitaion(req,res){
    if(filter.isEmpty(req.body)){
        res.status(400).json({info:"请求参数能不为空"})
    }
}
async function invitationIsTouchable(data){
   const{ res,invitation} = commonRepo.getInvitation(data)
}
module.exports ={
    createInvitation,
}