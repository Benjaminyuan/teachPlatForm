const { prisma } = require('./generated/prisma-client')
const express = require('express')
const bodyParser = require('body-parser')
const  student = require('./resolvers/Student')
const auth = require('./auth/login')
const multer = require('multer')
const auth = require("jsonwebtoken")

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/auth/*",auth.resource)

app.use('/student*',(req,res,next)=>{
    console.log("handle!!")
    req.prisma = prisma
    next()
})
app.post('/login',auth.login);
app.get('/student',student.getStudent)

app.post('/students',student.getStudents)
app.listen(8009,'localhost',()=>{
    console.log("listening ")
})