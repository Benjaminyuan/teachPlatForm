const jwtAuth = require("./jwtAuth")
const jwt = require("../util/jwt")
const studentRepo = require("../Dao/studentsRepository")
const parentRepo = require("../Dao/parentsRepository")
const userRepo = require("../Dao/userRepository")
const EXPIRE_TIME = 604800


async function getUserInfo(role,req) {
    if (role === "student") {
        info = await studentRepo.getStudent(req.body.data)
    } else if (role === "parent") {
        info = await parentRepo.getParent(req.body.data)
    }
    return info
}
async function login(req, res) {

}
async function weChatAuth(req, response) {
    /**
     * {
     *      code: string,
     * }
     */
    let user
    data = await jwt.getInfoFromWeChat(req.body.code)
    console.log(data)
    if (data.errcode) {
        response.status(404).jsonp({ info: "请求微信后台服务器失败" })
    }
    exist = await userRepo.userIsExist(data.unionid)
    if (exist === false) {
        //用户不存在，则创建
        user = userRepo.createUser(data.unionid)
        token = jwt.newJwt("USER", "xxx", "UNCOMMITED")
        //此时的访问权限最低
        response.append("Authorization", `Bearer ${token}`)
        response.status(200).jsonp({ auth: true })
    } else {
        //用户存在
        studentExist = studentRepo.findStudentById(data.unionid)
        parentExist = parentRepo.findParentById(data.unionid)
        if (studentExist === true) {
            //已经注册为学生
            student = studentRepo.getStudentById(data.unionid)
            let { res, token } = jwt.newJwt("STUDENT", "xxx", student.authstatus, data.unionid)
            //签名失败未处理 
            response.append("Authorization", `Bearer ${token}`)
            response.status(301).jsonp({ role: "STUDENT" })
        } else if (parentExist === true) {
            //已经注册为parent
            parent = studentRepo.getParentById(data.unionid)
            let { res, token } = jwt.newJwt("PARENT", "xxx", parent.authstatus)
            //签名失败未处理 
            response.append("Authorization", `Bearer ${token}`)
            response.status(301).jsonp({ role: "PARENT" })
        }
        //仍然是USER
        response.status(301).jsonp({ role: "USER" })
    }
}
module.exports = {
    weChatAuth,
}