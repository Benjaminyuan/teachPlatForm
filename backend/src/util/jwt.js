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
function newJwt(role,exp,jti){
    try{
        token =  jwt.sign({iss:"Benji",exp:Math.floor(Date.now()/1000)+exp,sub:"auth for login",jti:jti,role: role},process.env.JWTSECRET)
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
            res: false,
            jwt: ""
        }
    }
    return {
        res: true,
        jwt: res
    }
}
module.exports={
    getJwt,
    newJwt,
    verifyJwt,
}