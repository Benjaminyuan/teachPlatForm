const { prisma } = require('./generated/prisma-client')
const express = require('express')
const bodyParser = require('body-parser')
const  student = require('./resolvers/Student')
const multer = require('multer')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/student*',(req,res,next)=>{
    console.log("handle!!")
    req.prisma = prisma
    next()
})
app.get('/student',student.getStudent)
// app.post('/home',(req,res)=>{
//     console.log(req.prisma)
//     Authentication = req.get("Authorization")
//      res.send(Authentication)
// })
app.post('/students',student.getStudents)
app.listen(8009,'localhost',()=>{
    console.log("listening ")
})