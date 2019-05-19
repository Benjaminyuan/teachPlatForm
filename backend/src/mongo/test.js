(async ()=>{
    const mongo = require("mongoose")
    const { chatSchema }  = require("./models/chat")
    await mongo.connect("mongodb://localhost:27017/chat",{autoIndex:false,useNewUrlParser:true})
    // (async ()=> {
    //     await mongo.connect("mongodb://localhost:27017/chat",{autoIndex:false,useNewUrlParser:true})
    //     console.log("connection sucess ")
    // })()
    const chat = mongo.model("benjimorryChat",chatSchema,"benjimorryChat")
    let message = new chat({
        send:"Jack",
        receive:"Benji",
         message:"你好呀Benji"
    })
   await message.save((err,data)=>{
        if(err){
            console.log(err)
        } else{
            console.log(data)
        }
    })
    await mongo.disconnect()
})()