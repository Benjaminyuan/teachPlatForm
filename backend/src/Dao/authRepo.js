const {prisma} = require("../generated/prisma-client")
const {studentAuthStatus,parentAuthStatus,studentAuthUpdateResult,
    parentAuthUpdateResult,studentRoleResult,parentRoleResult} = require("./fragment")
async function createAuth(data,role){ 
    let res
   try{
        if(role === "STUDENT"){
            res = await prisma.createStudentAuthInfo({
                 student:{
                     connect:{
                         UnionID:data.id
                     }
                 },
                 UnionID:data.id,
                 sourceUrl:{
                     set:data.sourceUrl
                 },
                 res:"AUTHCOMMITED",
             })
              await prisma.updateStudent({
                 data:{
                     authStatus:"AUTHCOMMITED"
                 },
                 where:{
                     UnionID:data.id
                 }
             })
         }else if(role === "PARENT"){
             console.log(data.sourceUrl)
         res =  await prisma.createParentAuthInfo({
                 parent:{
                     connect:{
                         UnionID:data.id
                     }
                 },
                 UnionID: data.id,
                 sourceUrl:{
                     set:data.sourceUrl
                    },
                 res:"AUTHCOMMITED",
             })
          await prisma.updateParent({
             data:{
                 authStatus:"AUTHCOMMITED",
             },
             where:{
                 UnionID:data.id
             }
         })
         }
         console.log(res)
       if(!res){
            return {
                create:false,
                info: "无法为未知角色创建认证请求",
            }
        }
   }catch(e){
       console.log(e)
       return {
           create: false,
           info:"请求失败，请重新创建",
       }
   }
   console.log("return true ")
   return {
       create: true,
       info:"创建成功",
   }
}
async function getAuthInfo(data,role){
    let result 
    try{
        if(role ==="student"){
            result = await prisma.studentAuthInfo({
                UnionID:data.id
            })
        }else if (role === "parent"){
            result = await prisma.parentAuthInfo({
                UnionID:data.id
            })
            
        }else{
            return {
                result:"",
                info:"非合法请求"
            }
        }
    }catch(e){
        return {
            result:"",
            info:"更新失败"
        }
    }
    if(result){
        return {
            result:result,
            info:"更新成功"
        }
    }else{
        return {
            result:"",
            info:"查询不存在"
        }
    }
}
async function getAuthStatus(data,role){
    let status 
    try{
        if(role ==="student"){
            status = await prisma.studentAuthInfo({
                UnionID:data.id
            }).$fragment(studentAuthStatus)
        }else if (role === "parent"){
            status = await prisma.parentAuthInfo({
                UnionID:data.id
            }).$fragment(parentAuthStatus)
            
        }else{
            return {
                status:"",
                info:"非合法请求"
            }
        }
    }catch(e){
        return {
            status:"",
            info:"更新失败"
        }
    }
    if(status){
        return {
            status:status,
            info:"更新成功"
        }
    }else{
        return {
            status:"",
            info:"查询不存在"
        }
    }
}
async function getAuthList(data,role){
    let result
    try{
        if(role === "student"){
            result = await  prisma.studentAuthInfoes({
                 where:{
                     res:data.status
                 },
                 skip:data.skip,
                 first:data.first
             })
         }else if(role === "parent"){
            result = await  prisma.parentAuthInfoes({
                 where:{
                     res:data.status
                 },
                 skip:data.skip,
                 first:data.first
             })
         }
    }catch(e){
        return {
            result:"",
            get:false
        }
    }
    return {
        result:result,
        get: true
    }
   
}
async function updateAuthStatus(data,role){

    console.log(data)
    let authResult ,roleResult
    const updateData = {
        data:{
            info:data.info,
            res:data.status,
            Auth:{
                connect:{
                    UnionID:data.admin
                }
            }
        },
        where:{
            UnionID:data.id
        }
        }   
    try{
            if(role === "student"){
                authResult = await prisma.updateStudentAuthInfo(updateData).$fragment(studentAuthUpdateResult)
                roleResult=prisma.updateStudent({
                    data:{
                      authStatus: authResult.res,
                      publish:true
                    },
                    where:{
                        UnionID:authResult.student.UnionID
                    }
                }).$fragment(studentRoleResult)
            }else if(role === "parent"){
                authResult = await prisma.updateParentAuthInfo(updateData).$fragment(parentAuthUpdateResult)
                console.log(authResult)
                roleResult = prisma.updateParent({
                    data:
                    {
                        authStatus:authResult.res,
                        publish:true
                    },
                    where:{
                        UnionID:authResult.parent.UnionID
                    }
                }).$fragment(parentRoleResult)
            }
        
        if(!authResult){
            return {
                authResult:"",
                roleResult:"",
                authUpdate:false
            }
        }
    }catch(e){
        console.log(e)
        return {
            authResult:"",
            roleResult:"",
            authUpdate:false
        }
    }
    return {
        authResult: authResult,
        roleResult:roleResult,
        authUpdate: true
    }
}


module.exports={
    createAuth,
    getAuthStatus,
    getAuthList,
    updateAuthStatus,
    getAuthInfo
}