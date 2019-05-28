const jwt = require("../util/jwt")
async function resource(req,res,next){
    jwt = jwt.getJwt(req)
    if(jwt === false){
        res.status()
    }
}
