const jwt = require("jsonwebtoken")
function getJwt(req){
    Authorization = req.get("Authorization")|| null
    if( Authorization === null ){
        return {
            res:false,
            token: '',
        }
    }
    jwt = Authorization.repalce("Bearer ","")
    return {
        res: true,
        token: jwt,
    }

}
function newJwt(role,jti,auth,unionid){
    try{
        let playload = {iss:"Benji",sub:"auth for login",jti:jti,role: role,authStatus:auth,unionid:unionid}
        token =  jwt.sign(playload,process.env.JWTSECRET)
    }catch(e){
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