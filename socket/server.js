const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
http.listen(3000,()=>{
    console.log('listen on *:3000')
})
app.get('/',(req,res)=>{
    res.send('hello world')
})
// socket是一个连接实例
// io.on('connection',(socket)=>{
//     console.log('user connected')
//     socket.on('server',(data)=>{
//         console.log(data)
//     })
//     socket.broadcast.emit('news',{ info: 'user add !!!'})
// })
// let count = 1
// // timer = setInterval(()=>{
// //     console.log("news:"+count++)
// //     io.emit('news-push',{for: 'everyone'})
// // },2000)
// const nsp = io.of('/news')
// nsp.on('connection',(socket)=>{
//     console.log("new-sub-connected!!")
//     console.log(socket.id)
//     socket.join('room')
// })

// timer = setInterval(()=>{
//     console.log("news:"+count++)
//     nsp.emit('new',{info:'nsp push'})
//     nsp.to('room').emit('room',{info:'new memeber join new-room'})
// },2000)
const chat = io.of('/chat')
addr={}
chat.on('connection',(socket)=>{
    socket.on('register',data=>{
        console.log(socket.id)
        console.log(data.user.id)
        addr[data.user.id]= socket
    })
    socket.on('send',data=>{
        console.log("-----------")
        console.log(data)
        try{
            addr[data.user.id].emit('getMsg',{info:data.info})
        }catch(e){
            console.log('send fail')
        }
        console.log("-----------")
    })
})
setInterval(()=>{
    console.log(addr)
    // console.log(chat)
},3000)