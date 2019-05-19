const {prisma } = require("../generated/prisma-client")
const { isPhoneNum } = require("../util/filter")
const {orderChangeResult} = require("../Dao/fragment")
async function updateInfo(req,res){
    let data = req.body
    if(!isPhoneNum(data.phone)){
        res.status(403).json({info:"请输入正确手机号"})
    }
    try{
        let result = await prisma.updateTryOrder({
            data:{
                address: data.address,
                startTime: data.startTime,
                endTime: data.endTime,
                phone: data.phone,
                status:"INFOCOMPLETE"
            },
            where:{
                id: data.id
            }
        }).$fragment(orderChangeResult)
    }catch(e){
        res.status(500).json({info:"服务器错误，请重试"})
    }
    res.status(200).json({info:"更新成功"})
}
async function updateOrderstatus(req,res) {
       let status = req.params.status
       let  data = req.body
        let tokenData = req.tokenData
       try{
           let orderStatus = await prisma.tryOrder({
               id:data.id
           }).$fragment(`
           fragment tryOrderStatus on TryOrder {
               status 
           } 
           `)
           if(!orderStatus){
               res.status(404).json({info:"订单不存在"})
           }
            if(status === "cancle"){
               await  prisma.updateTryOrder({
                    data:{
                        status:"CANCLED"
                    },
                    where:{
                        id: data.id
                    }
            })
        }else if (orderStatus === "INIT" && status === "pack"){
             await prisma.updateTryOrder({
                 data:{
                     status:"PACK"
                 },
                 where:{
                     id:data.id
                 }
             })
        }else if (orderStatus === "PACK" && status ==="sack"){
            await prisma.updateTryOrder({
                data:{
                    emerContact:data.emerContact,
                    status:"SACK"
                },
                where:{
                    id:data.id
                }
           })
        }else if (orderStatus === "SACK" && status === "finish" &&tokenData.role ==="PARENT"){
                await prisma.updateTryOrder({
                    data:{
                        status:"FINISHED"
                    },
                    where:{
                        id:data.id
                    }
                })
        }
       }catch(e){
           res.status(400).json({info:"操作失败"})
       }
       res.status(200)
       
}
async function getTryOrderInfo(req,res){
    let data= req.body
    let result 
    try {
        result = await prisma.tryOrders({
            where:{
                id_in:data.ids
            }
        }).$fragment(`
        fragement tryOrderInfo on TryOrder({
            address
            startTime
            endTime
            phone
            otherInfo
        })
        `)
    }catch(e){
        res.status(400).json({info:"请重试"})
    }
    res.status(200).send(result)
}
async function getStatus(req,res){
    let result 
    let data = req.body 
    try {
        result = await prisma.tryOrders({
            where:{
                id_in:data.ids
            }
        }).$fragment(`
             status 
        `)
    }catch(e){
        res.status(400)
    }
    res.status(200).send(result)
}
module.exports={
    updateInfo,
    updateOrderstatus,
    getTryOrderInfo,
    getStatus
}