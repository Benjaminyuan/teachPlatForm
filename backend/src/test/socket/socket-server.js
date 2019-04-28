const app = require('express')()
const server = require('http')(app)
const io = require('socket.io')(server)
server.listen(80)
io.on('connection',(socket)=>{
    console.log(socket)
    socket.emit("news",{
        hello:" test "
    })
})