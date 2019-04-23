async function login(req,res){
   auth =  req.get("Authorization")
   jwt = auth.replace("Bearer ","")
   res.status(200).jsonp({"jwt": jwt})
}
module.exports={
    login,
}