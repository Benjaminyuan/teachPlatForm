const commonRepo = require("../Dao/commonRepository")
const filter = require("../util/filter")
const studentRepo = require("../Dao/studentsRepository")
const parentRepo = require("../Dao/parentsRepository")
async function createInvitation(req,res){
   create  = await commonRepo.createInvitation(req.body)
   res.status(200).json({create:create})
}
async function updateInfo(req,res){
   
}
async function deleteInvitaion(req,res){
   
}
async function invitationIsTouchable(data){
   const{ res,invitation} = commonRepo.getInvitation(data)
}
async function isExist(req,res){
    const {name , phone, email} = req.body
    console.log({name,phone,email})
    parentExist = await parentRepo.parentExist(name,phone,email)
    studentExist = await studentRepo.studentExist(name,phone,email)
    const exist = parentExist || studentExist
    console.log(exist)
    res.json({exist: exist,info:"student or parent role already registed!!"})   
}
module.exports ={
    createInvitation,
    isExist,
}