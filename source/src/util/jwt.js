const jwt = require("jsonwebtoken")
function getJwt(req){
    Authorization = req.get("Authorization")|| null
    if( Authorization === null ){
        return {
            exist:false,
            token: '',
        }
    }
    token = Authorization.replace("Bearer ","")
    return {
        exist: true,
        token: token,
    }
    
}
function newJwt(role,jti,auth){
    try{
        let playload = {iss:"Benji",sub:"auth for login",jti:jti,role: role,authStatus:auth}
        token =  jwt.sign(playload,process.env.JWTSECRET)
    }catch(e){
        console.log(e)
        return {
            res: false,
            token: ""
        }
    }
    return {
        res: true,
        token: token
    }
}
function verifyJwt(token){
    try{
        res = jwt.verify(token,process.env.JWTSECRET)
    }catch(e){
        console.log(e)
        return {
            valid: false,
            parseRes: ""
        }
    }
    return {
        valid: true,
        parseRes: res
    }
}
module.exports={
    getJwt,
    newJwt,
    verifyJwt,
}