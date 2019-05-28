const mongoose = require("mongoose")
const Schema = mongoose.Schema
const chatSchema = new Schema({
    send: String,
    receive:String,
    time:{type:Date,default:Date.now(),expires:120} ,
    message:Buffer,
    read:{type:Boolean,default:"false"}
})
module.exports={
    chatSchema,
}