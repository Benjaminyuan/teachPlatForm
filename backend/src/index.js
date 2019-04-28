const { prisma } = require('./generated/prisma-client')
const express = require('express')
const bodyParser = require('body-parser')
const  student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const multer = require('multer')
const auth = require("jsonwebtoken")
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const filter = require('./util/filter')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req,res,()=>{
    res.status(404).send("板块尚未开发")
}))
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
app.post('/auth/login',)
app.post('/*',(req,res,next)=>{
    if(filter.isEmpty(req.body)){
        res.status(400).json({info:"请求为空，请输入有效请求！！"})
    }
    next()
})
app.get('/student/:id',student.getStudent)
app.get('/parent/:id',parent.getParent)
app.post('/login',selfAuth.login);
app.post('user/exist',common.isExist)
app.post('/invitation',common.createInvitation)

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
app.listen(8009,'localhost',()=>{
    console.log("listening ")
})