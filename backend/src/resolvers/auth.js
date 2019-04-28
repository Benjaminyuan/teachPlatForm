const request = require("request")
async function getInfoFromWeChat(code){
    const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${process.env.APPID}&secret=${process.env.SECRET}&js_code=${process.env.CODE}E&grant_type=authorization_code`
    data = await request.get(url)
    return data 
}