const io = require('socket.io-client')

const chat = io('http://localhost:8010/chat')

chat.emit('register',{user:{id:'xxxxxx111',name:"client-1"}})
setInterval(()=>{
    chat.emit('send',{user:{id:'xxxxxx222',name:"client-1"},toUser:"client-2",info:'send from node-1'})
    console.log('send to 222 ')
},5000)

chat.on('getMsg',(data)=>{
    console.log(data)
})