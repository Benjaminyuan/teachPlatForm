const io = require('socket.io-client')
// const socket = io('http://localhost:3000')
// socket.on('news',(data)=>{
//     console.log(data)
// })

// socket.emit('server',{info: 'hello from root client '})
// const roomer = io('http://localhost:3000/news')
// roomer.on('new',(data)=>{
//     console.log(data)
// })
// roomer.on('room',(data)=>{
//     console.log(data)
// })
const chat = io('http://localhost:8010/chat')
// chat.on('connection',(socket)=>{
//     socket.emit('register',{user:{id:'xxxxxx111'}})
// })
chat.emit('register',{user:{id:'xxxxxx222',name:"client-2"}})
setInterval(()=>{
    chat.emit('send',{user:{id:'xxxxxx111',name:"client-2"},toUser:"client-1",info:'send from node-2'})
    console.log('send to 111 ')
},5000)
// chat.emit('send',{user:{id:'xxxxxx111'},info:'send from node-2'})
chat.on('getMsg',(data)=>{
    console.log(data)
})