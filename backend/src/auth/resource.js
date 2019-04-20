async function resource(req,res,next){
    jwt = getJwt(req)
    if(jwt === false){
        res.
    }
}
function getJwt(req){
    Authorization = req.get("Authorization")|| null
    if( Authorization === null ){
        return false
    }
    jwt = Authorization.repalce("Bearer ","")
    return jwt

}