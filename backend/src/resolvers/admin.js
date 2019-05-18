const studentRepo = require("../Dao/studentsRepository")
const parentRepo = require("../Dao/parentsRepository")
const authRepo = require("../Dao/authRepo")
const statusMap = {
    uncommited:"UNCOMMITED",
    authcommited:"AUTHCOMMITED",
    authed:"AUTHED",
    rejected:"REJECTED"
}

 async function  getRole(req,res){
    let id = req.params.id
    const role = req.params.role
    let data
    if(role === "parent"){
          data = await parentRepo.getParent({UnionID:id})
    }else if(role === "student"){
            data = await studentRepo.getStudent({UnionID:id})
    }
   if(data && data.found){
       res.status(200).json({data:data.resData})
   }else{
       res.status(404)
   }
}
async function getRoles(req,res){
    const status = req.params.status
    const skip = parseInt(req.query.skip)
    const first = parseInt(req.query.first)
    const role = req.params.role
    let data
    let s = statusMap[status] || undefined
    if(s === undefined){
        res.status(404).json({info:"查询条件错误"})
        return
    }
    if(role === "student"){
         data  = await studentRepo.getStudents(skip,first,s)
    }else if(role === "parent"){
        data = await parentRepo.getParents(skip,first,s)
    }
    if(data){
        res.status(200).send(data)
    }else{
        res.status(404).send("请输入合法的分页字段！！")
    }
}
async function getAuthList(req,res){
    const status = req.params.status;
    const role = req.params.role;
    const skip = parseInt(req.query.skip)
    const first =parseInt(req.query.first)
    const data = {
        status:status,
        skip:skip,
        first:first 
    }
    const {result,get} = await authRepo.getAuthList(data,role)
    if(get){
        res.status(200).json({data:result})
    }else{
        res.status(400).json({info:"查询失败，请重试"})
    }
}
async function updateAuthStatus(req,res){
   const status= req.body.status
   const id= req.params.id
   const role = req.params.role
   const admin = req.tokenData.jti
   const info = req.body.info
   if(status === "AUTHED" || status === "REJECTED"){
       try{
            const{authResult,authUpdate} =await authRepo.updateAuthStatus({
                status:status,
                id:id,
                admin:admin,
                info:info
            },role)
            //没有使用事务，有危险
            if(authUpdate && authResult){
                    res.status(200).json({info:"更新成功"})
                
            }
                res.status(404).json({info:"更新失败"})
            return 
       }catch(e){
            res.status(400).json({info:"更新失败"})
            return 
        }
   }else{
       res.status(403).json({info:"无权更改"})
        return 
    }
}
async function isAdmin(req,res,next){
    const tokenData = req.tokenData
    if(tokenData.role!=="ADMIN"){
        res.status(403).json({info:"无权访问"})
    }else{
         next()
    }
}
module.exports={
    getRoles,
    getRole,
    getAuthList,
    updateAuthStatus,
}