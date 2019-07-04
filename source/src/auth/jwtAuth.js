const request = require("request")
const util = require("util")
const promiseRequest = util.promisify(request)
const jwt = require("../util/jwt")
const CODE = "023Wd4KY0LHS2W1w3MGY0rYZJY0Wd4Kf"
const SECRET = "a2643e46e816fc31dcd6da2c2cdf3166" 
const APPID = "wxd48257c42c622c9d"
/*GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code
 */
async function getInfoFromWeChat(code){
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`
    console.log(url)
    const options = {
        method: 'GET',
        uri: url
     }
     const {response,body} = await promiseRequest(options)
     console.log(body)
    return body
}

function getAuthStatus(token){
   const{valid,parseRes} = jwt.verifyJwt(token)
   if(valid && parseRes["authStatus"]==="AUTHED"){
        return true
   }
   return false
}
function hasRole(parseRes,role){
   if( parseRes["role"] === role ){
       return true
   }
   return false
}
function tokenAuth(req, response) {
    let { res, token } = jwt.getJwt(req)
    if (res === true) {
        valid, parseRes  = jwt.verifyJwt(token)
        //有人篡改jwt
        if (valid === false) {
            return {
                res: false,
                data: "" 
            }
        }
        return {
            res: true,
            data: parseRes
        }
    }
      
    //鉴于jwt不设置过期日期，只有在认为故意更改的情况下，重新授权登录    
    //没有jwt，新设备登录，或者换了设备登录，重新请求授权
    return {
        res:false,
        data:""
    }
    
}
module.exports = {
    getInfoFromWeChat,
    getAuthStatus,
    tokenAuth
}