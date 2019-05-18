const { prisma } = require('./generated/prisma-client')
const student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const filter = require('./util/filter')
const admin = require("./resolvers/admin")
const {app,Server,io,upload} = require("./app")
const sokcet= require("./socket/chatServer")

app.use('/student*', (req, res, next) => {
    console.log("handle!!")
    req.prisma = prisma
    next()
})



app.post('/student/signup', student.signup)
//这条路由优先级高一些，位置不要调换
app.all("/*", filter.extractJwtInfo)

app.post("/:role/auth/upload",upload.array("auth",5),common.sendAuth)
app.get("/:role/auth/status/:id",common.getAuthStatus)
app.get("/auth/info/pic/:name",common.getPic)
app.post("/*", (res, req, next) => {
    let status = res.tokenData.authStatus;
    console.log("auth check")
    if (status !== "AUTHED") {
        req.status(403).json({ info: "未授权访问" })
    }
    console.log("auth check finished !!")
    next()
})
app.get("/:role/invitations",common.getInvitations)
//
app.get("/:role/publishlist",common.getPublishList)
app.post("/:role/publish/:status",common.getPublishStatus)
//
app.post('/*', (req, res, next) => {
    if (filter.isEmpty(req.body)) {
        res.status(400).json({ info: "请求为空，请输入有效请求！！" })
    }else{
        next()
    }
})
//查看parent或者student
app.get('/admin/role/:role/:id', admin.getRole)
app.get('/admin/roles/:role/:status',admin.getRoles)
//查看授权列表
app.get('/auth/:role/:status',admin.getAuthList)
app.post('/admin/:role/status/:id',admin.updateAuthStatus)
/**
 * /star/:role/:roleid?id=id
 * 
 */
app.get('/star/:role/:id',common.star)
app.get('/unstar/:role/:id',common.unStar)
//检查用户是否存在，用于填写表单校验
app.post('/user/exist', common.isExist)
/**-------邀请------------- */
// app.post('/invitation',filter.extractJwtInfo)
//发送邀请
app.post('/invitation/init', common.createInvitation)
//改变邀请状态：参数  invitationId，状态
app.get('/invitation/status/:id', common.getInvitationStatus)
app.post('/invitation/status', common.updateInvitaion)
/**-------邀请------------- */

app.post('/signup', selfAuth.weChatAuth)
// app.post('/auth/login',)


/*-----------student------------ */
app.post('/student/update', student.updateInfo)
/*-------------暂时暴露----------------*/
/*------------------------------------- */
 
/*------------------------------ */
/*-----------parent--------------*/

app.post('/parent/signup', parent.signup)
app.post('/parent/update', parent.updateInfo)
/*------------------------------- */
app.use((req, res) => {
    res.status(404).send("板块尚未开发")
})
const chat = io.of('/chat')
addr={}
chat.on('connection',sokcet.dispatcher)

Server.listen(8009, 'localhost', () => {
    console.log("listening ")
})
