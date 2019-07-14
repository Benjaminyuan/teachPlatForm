const{redisClient, mongoose } = require("../app")
const{chatSchema} = require("../mongo/models/chat")
addr = {}
let table
dispatcher = async (socket)=>{
    socket.on('register',data=>{
        console.log(data)
        addr[data.user.name] = socket
        const table = getCollection(data)
        const res = table.find({read:false})
        redisClient.sadd("online",data.user.name)
    })
    // socket.broadcast.emit("online",id)
    socket.on('send', async (data)=>{
        console.log("-----------")
        console.log(data)
        try{
           const chatSchema = getCollection(data)
           console.log("-----------") 
           console.log({
            send: data.user.name,
            receive: data.toUser,
            message: data.info,
        })
           const chatData= new chatSchema({
               send: data.user.name,
               receive: data.toUser,
               message: data.info,
           })
           await chatData.save(); 
            if(addr[data.toUser]){ 
                addr[data.toUser].emit('getMsg',{info:data.info,time:chatData.time})
              
            }
            // console.log(chatSchema)
            console.log("data to save ")
           
       
            
        }catch(e){
            console.log(e)
            console.log('send fail')
        }
        console.log("-----------")
    })
}
function getCollection(data){
    let table = data.user.name > data.toUser?`${data.user.name}${data.toUser}`: `
    ${data.toUser}${data.user.name}`
    // console.log(table)
    return  mongoose.model(table,chatSchema,"testCol")
}
function sendInfo(){
    
}
module.exports={
    dispatcher,
}