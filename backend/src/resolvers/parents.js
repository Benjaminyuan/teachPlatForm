const  parentRepo  = require("../Dao/parentsRepository")
async function signup(req,res){
   if( parentRepo.createParent(req.data)){
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