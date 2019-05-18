const jwt = require("./jwt")
function isEmpty(data){
    if(Object.keys(data).length === 0){
        return true
    }
    return false
}
function extractJwtInfo(req,res,next){
    console.log("extract jwt data")
    const {exist,token}= jwt.getJwt(req)
    if(!exist){
        res.status(403).json({info:"无权访问"})
    }else{
        const{valid,parseRes}=jwt.verifyJwt(token)
        if(!valid){
            res.status(403).json({info:"非法token"})
        }
        req.tokenData = parseRes
    console.log("jwt data extracted!!")
        next()
    }

}
module.exports={
    isEmpty,
    extractJwtInfo
}