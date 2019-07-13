const { prisma } = require('./generated/prisma-client')
const student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const filter = require('./util/filter')
const admin = require("./resolvers/admin")
const search = require("./resolvers/search")
const {app,Server,io,upload} = require("./app")

const tryOrder = require("./resolvers/tryOrder")
app.use('/',(req,res)=>{
    console.log(req.url);
    console.log(req.body)
    console.log("----for test---")
})
app.get("/test",(req,res)=>{
    res.send("running !!")
})
app.use('/student*', (req, res, next) => {
    console.log("handle!!")
    req.prisma = prisma
    next()
})

app.post('/signup', selfAuth.weChatAuth)

app.all("/*", filter.extractJwtInfo)
app.all('/admin/*',filter.isAdmin)
app.get('/admin/role/:role/:id', admin.getRole)
app.get('/admin/roles/:role/:status',admin.getRoles)

app.get('/admin/auth/:role/:status',admin.getAuthList)
app.get("/admin/auth/:role/info/:id",admin.getAuthInfo)
app.post('/admin/:role/status/:id',admin.updateAuthStatus)


app.post('/parent/signup', parent.signup)
app.post('/student/signup', student.signup)

app.post("/:role/auth/upload",upload.array("auth",5),common.sendAuth)
app.get("/:role/auth/status/:id",common.getAuthStatus)
app.get("/auth/info/pic/:name",common.getPic)

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
app.get("/parent/publishlist/search",search.parentSearch)
app.get("/student/publishlist/search",search.studentSearch)
app.get("/:role/info/:id",common.getRoleInfo)
app.get("/:role/publish/status",common.getPublishStatus)
app.post("/:role/publish/:status",common.updatePublishStatus)
app.get("/:role/invitations",common.getInvitations)
//
app.post('/invitation/init', common.createInvitation)

app.get('/invitation/status/:id', common.getInvitationStatus)
app.post('/invitation/status/:id', common.updateInvitaion)



app.get('/star/:role/:id',common.star)
app.get('/unstar/:role/:id',common.unStar)
app.post('/user/exist', common.isExist)
app.get("/order/status/:id",tryOrder.getStatus)
app.post("/orders/status",tryOrder.getAllStatus)
app.get("/order/info/:id",tryOrder.getTryOrderInfo)
app.get("/order/role/:id",tryOrder.getUserAllTryOrder)
app.post("/orders/info",tryOrder.getAllTryOrderInfo)
app.post("/order/info",tryOrder.updateInfo)
app.post("/order/status",tryOrder.updateOrderstatus)


app.post('/student/update', student.updateInfo)


app.post('/parent/update', parent.updateInfo)
/*------------------------------- */
app.use((req, res) => {
    res.status(404).send("板块尚未开发")
})
const chat = io.of('/chat')


Server.listen(8010, 'localhost', () => {
    console.log("listening")
    console.log(process.env.JWTSECRET)
})
