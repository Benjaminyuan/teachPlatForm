const { prisma } = require('./generated/prisma-client')
const student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const filter = require('./util/filter')
const admin = require("./resolvers/admin")
const {app,Server,io,upload} = require("./app")
const sokcet= require("./socket/chatServer")
const tryOrder = require("./resolvers/tryOrder")
app.use('/student*', (req, res, next) => {
    console.log("handle!!")
    req.prisma = prisma
    next()
})

app.post('/signup', selfAuth.weChatAuth)
// app.post('/admin/signup',admin.signup)
//查看parent或者student
//这条路由优先级高一些，位置不要调换
app.all("/*", filter.extractJwtInfo)
app.all('/admin/*',filter.isAdmin)
app.get('/admin/role/:role/:id', admin.getRole)
app.get('/admin/roles/:role/:status',admin.getRoles)
//查看授权列表
app.get('/admin/auth/:role/:status',admin.getAuthList)
app.get("/admin/auth/:role/info/:id",admin.getAuthInfo)
app.post('/admin/:role/status/:id',admin.updateAuthStatus)
/**
 * /star/:role/:roleid?id=id
 * 
 */

app.post('/parent/signup', parent.signup)
app.post('/student/signup', student.signup)

app.post("/:role/auth/upload",upload.array("auth",5),common.sendAuth)
app.get("/:role/auth/status/:id",common.getAuthStatus)
app.get("/auth/info/pic/:name",common.getPic)
// app.post('/*', (req, res, next) => {
//     if (filter.isEmpty(req.body)) {
//         res.status(400).json({ info: "请求为空，请输入有效请求！！" })
//         next()
//     }else{
//         next()
//     }
// })
app.post("/*", (req, res, next) => {
    let status = req.tokenData.authStatus;
    console.log("auth check")
    if (status !== "AUTHED") {
        res.status(403).json({ info: "未授权访问" })
    }
    console.log("auth check finished !!")
    next()
})
app.get("/:role/publishlist",common.getPublishList)
app.get("/:role/info/:id",common.getRoleInfo)
app.get("/:role/publish/status",common.getPublishStatus)
app.post("/:role/publish/:status",common.updatePublishStatus)
app.get("/:role/invitations",common.getInvitations)
//
app.post('/invitation/init', common.createInvitation)
//改变邀请状态：参数  invitationId，状态
app.get('/invitation/status/:id', common.getInvitationStatus)
app.post('/invitation/status/:id', common.updateInvitaion)

//


app.get('/star/:role/:id',common.star)
app.get('/unstar/:role/:id',common.unStar)
//检查用户是否存在，用于填写表单校验
app.post('/user/exist', common.isExist)
/**-------邀请------------- */
// app.post('/invitation',filter.extractJwtInfo)
//发送邀请

/**-------邀请------------- */


// app.post('/auth/login',)
app.get("/order/status/:id",tryOrder.getStatus)
app.post("/orders/status",tryOrder.getAllStatus)
app.get("/order/info/:id",tryOrder.getTryOrderInfo)
app.post("/orders/info",tryOrder.getAllTryOrderInfo)
app.post("/order/info",tryOrder.updateInfo)
app.post("/order/status",tryOrder.updateOrderstatus)

/*-----------student------------*/
app.post('/student/update', student.updateInfo)
/*-------------暂时暴露----------------*/
/*------------------------------------- */
 
/*------------------------------ */
/*-----------parent--------------*/

app.post('/parent/update', parent.updateInfo)
/*------------------------------- */
app.use((req, res) => {
    res.status(404).send("板块尚未开发")
})
const chat = io.of('/chat')
chat.on('connection',sokcet.dispatcher)

Server.listen(8009, 'localhost', () => {
    console.log("listening")
})
