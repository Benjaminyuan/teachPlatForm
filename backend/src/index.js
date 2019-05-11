const { prisma } = require('./generated/prisma-client')
const express = require('express')
const bodyParser = require('body-parser')
const  student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const filter = require('./util/filter')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use("/auth/*",.resource)
// app.use('/*',(req,res,next)=>{
//     console.log(req.method)
//     if(req.method==="POST" && filter.isEmpty(req.body)){
//         res.status(400).json({info:"请求为空！！请输入有效请求！！"})
//     }
//     next()
// })
app.use('/student*',(req,res,next)=>{
    console.log("handle!!")
    req.prisma = prisma
    next()
})
app.post('/*',(req,res,next)=>{
    if(filter.isEmpty(req.body)){
        res.status(400).json({info:"请求为空，请输入有效请求！！"})
    }
    next()
})

app.post("/*",filter.extractJwtInfo)
app.post("/*",(res,req,next)=>{
   let status =  res.body.tokenData.authStatus;
   console.log("auth check")
   if(status !== "AUTHED"){
       req.status(403).json({info:"未授权访问"})
   }
   console.log("auth check finished !!")
   next()
})
app.get('/student/:id',student.getStudent)
app.get('/parent/:id',parent.getParent)
/**
 * /star/:role/:roleid?id=id
 * 
 */
app.get('/star/:role/:id',)
//检查用户是否存在，用于填写表单校验
app.post('/user/exist',common.isExist)
/**-------邀请------------- */
// app.post('/invitation',filter.extractJwtInfo)
//发送邀请
app.post('/invitation/init',common.createInvitation)
//改变邀请状态：参数  invitationId，状态
// app.get('/invitation/status/:id',common.getInvitationStatus)
app.post('/invitation/status',common.updateInvitaion)
/**-------邀请------------- */

app.post('/signup',selfAuth.weChatAuth)
// app.post('/auth/login',)


/*-----------student------------ */
app.post('/student/signup',student.signup)
app.post('/student/update',student.updateInfo)
/*-------------暂时暴露----------------*/
app.post('/students',student.getStudents)
/*------------------------------------- */

/*------------------------------ */
/*-----------parent--------------*/

app.post('/parent/signup',parent.signup)
app.post('/parent/update',parent.updateInfo)
/*------------------------------- */
app.use((req,res)=>{
    res.status(404).send("板块尚未开发")
})
app.listen(8009,'localhost',()=>{
    console.log("listening ")
})