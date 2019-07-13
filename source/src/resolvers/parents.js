const  parentRepo  = require("../Dao/parentsRepository")
const jwt = require("../util/jwt")
async function signup(req,response){
    try{
        console.log(req.body)
        let parent =await parentRepo.createParent(req.body)
    if(parent){
        const {res,token} = jwt.newJwt("PARENT",parent.openid,parent.authStatus)
        response.append("Authorization",`Bearer ${token}`)
       response.status(200).json({create: true})
   }else{
       response.status(403).json({create: false,info:"用户已存在"})
   }
    }catch(e){
        console.log(e)
        response.status(500).json({info:"服务器出现问题"})
    }
    
}
async function updateInfo(req,res){
    if(parentRepo.updateInfo(req.body.data,req.body.id)){
        res.status(200).json({updateInfo: true})
    }else{
        res.status(403).json({updateInfo: false})
    }
}
async function getParent(req,res){
   let {parent,found} = parentRepo.getParent(req.params.id)
    if(found){
         res.status(200).json({found: true,parent: parent})
    }else{
        res.status(404).json({found: false})
    }
}
module.exports ={
    signup,
    updateInfo,
    getParent
}