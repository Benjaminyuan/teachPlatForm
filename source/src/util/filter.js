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
        res.status(403).json({info:"无token, 无权访问"})
    }else{
        const{valid,parseRes}=jwt.verifyJwt(token)
        if(!valid){
            res.status(403).json({info:"非法token"})
        }
        req.tokenData = parseRes
        console.log(req.tokenData)
    console.log("jwt data extracted!!")
        next()
    }

}
function isPhoneNum(strNum){
   return  /^1[34578]\d{9}$/.match(strNum)
}
function isEmail(strEmail){
    
}
function isAdmin(req,res,next){
    let tokenData = req.tokenData;
    if(tokenData.role ==="ADMIN"){
        console.log("is Admin!!!")
        next()
    }else{
        res.status(403).json({info:"需要管理员权限"})
    }
}
module.exports={
    isEmpty,
    extractJwtInfo,
    isPhoneNum,
    isAdmin
}