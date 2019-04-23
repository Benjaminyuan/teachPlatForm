function getJwt(req){
    Authorization = req.get("Authorization")|| null
    if( Authorization === null ){
        return false
    }
    jwt = Authorization.repalce("Bearer ","")
    return jwt

}


module.exports={
    getJwt,
}