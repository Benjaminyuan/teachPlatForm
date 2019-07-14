const express = require('express')
const multer = require('multer')
const bodyParser = require('body-parser')
const log4js = require('log4js')
const http = require('http')
const app = express()
const Server = http.Server(app)
const io = require('socket.io')(Server)
const path = require("path")
const mongoose = require("mongoose")
const redis = require("redis")
const redisClient = redis.createClient(6379)
log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: 'cheese.log' },
        myappender: {
            type: "dateFile",
            filename: "../logs/access.log",
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
        }
    },
    categories: {
        cheese: { appenders: ['file'], level: 'info' },
        default: { appenders: ['console'], level: 'info' },
        myappender:{appenders:['myappender'],level: 'info'}
    }
});
const logger = log4js.getLogger("myappender")
app.use(log4js.connectLogger(logger, { level: 'info' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    console.log(JSON.stringify(req.body))
    cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
      console.log(req.tokenData)
      cb(null,`${req.tokenData.jti}-${file.originalname}`)
    }
  })
   
const  upload = multer({ storage: storage })
mongoose.connect("mongodb://localhost:27016/chat",{autoIndex:false,useNewUrlParser:true})
module.exports={
    app,
    Server,
    io,
    upload,
    mongoose,
    redisClient
}