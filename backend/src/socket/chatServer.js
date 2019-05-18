dispatcher = (socket)=>{
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
}
module.exports={
    dispatcher,
}