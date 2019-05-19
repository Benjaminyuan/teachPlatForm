const{redisClient, mongoose } = require("../app")
const{chatSchema} = require("../mongo/models/chat")
addr = {}
let table
dispatcher = (socket)=>{
    socket.on('register',data=>{
        console.log(socket.id)
        console.log(data.user.name)
        addr[data.user.name] = socket
        const table = getCollection(data)
        const res = table.find({read:false})
        redisClient.sadd("online",data.user.name)
    })
    socket.broadcast.emit("online",id)
    socket.on('send',data=>{
        console.log("-----------")
        console.log(data)
        try{
           const table = getCollection(data)
            if(addr[data.receive.name]){ 
                addr[data.receive.name].emit('getMsg',{info:data.info})
                table.save({
                    send: data.send.name,
                    receive: data.receive.name,
                    message: data.info,
                    read: true
                })
            }else{
                table.save({
                    send: data.send.name,
                    receive: data.receive.name,
                    message: data.info,
                })
            }
            
        }catch(e){
            console.log('send fail')
        }
        console.log("-----------")
    })
}
function getCollection(data){
    let table = data.send.name > data.receive.name?`${data.send.name}${data.receive.name}`: `
    ${data.receive.name}${data.send.name}`
    return  mongoose.model(table,chatSchema,table)
}
module.exports={
    dispatcher,
}