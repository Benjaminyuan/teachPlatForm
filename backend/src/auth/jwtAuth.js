const request = require("request")
const jwt = require("../util/jwt")
const CODE = "023Wd4KY0LHS2W1w3MGY0rYZJY0Wd4Kf"
const SECRET = "4c3801dcc2a0f601b69aecdac20b12ff" 
const APPID = "wxd48257c42c622c9d"
async function getInfoFromWeChat(code){
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}E&grant_type=authorization_code`
    request.get(url,(err,response,body)=>{
        console.log("err",err)
        // console.log("response",response)
        console.log("body:",body)
        return body
    })
}

function getAuthStatus(token){
   const{res,info} = jwt.verifyJwt(token)
   if(res && info[authStatus]==="AUTHED"){
        return true
   }
   return false
}
module.exports = {
    getInfoFromWeChat,
    getAuthStatus
}