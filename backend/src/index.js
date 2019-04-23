const { prisma } = require('./generated/prisma-client')
const express = require('express')
const bodyParser = require('body-parser')
const  student = require('./resolvers/Student')
const selfAuth = require('./auth/login')
const multer = require('multer')
const auth = require("jsonwebtoken")
const parent = require('./resolvers/parents')
const common = require('./resolvers/common')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use("/auth/*",.resource)
app.use('')
app.use('/student*',(req,res,next)=>{
    console.log("handle!!")
    req.prisma = prisma
    next()
})
app.get('/student',student.getStudent)
app.get('/parent',parent.getParent)
app.post('/login',selfAuth.login);

app.post('/invitation',)
/*-----------student------------ */
app.post('/student/signup',student.signup)
app.post('/student/update',student.updateInfo)
/*-------------暂时暴露----------------*/
app.post('/students',student.getStudents)
/*------------------------------------- */
app.post('/student/exist',student.isExist)
/*------------------------------ */
/*-----------parent--------------*/
app.post('/parent/signup',parent.signup)
app.post('/parent/update',parent.updateInfo)
app.post('/parent/exist',parent.isExist)
/*------------------------------- */
app.listen(8009,'localhost',()=>{
    console.log("listening ")
})