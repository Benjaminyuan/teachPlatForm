const  parentRepo  = require("../Dao/parentsRepository")
async function signup(req,res){
    let parent =parentRepo.createParent(req.data)
    if(parent){
        const token = jwt.newJwt("STUDENT",parent.UnionID,parent.authStatus)
        res.append("Authorization",`Bearer ${token}`)
       res.status(200).json({create: true})
   }else{
       res.status(403).json({create: false})
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