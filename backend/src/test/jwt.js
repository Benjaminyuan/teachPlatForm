const jwt = require("../util/jwt")
const {res,token} = jwt.newJwt("STUDENT","cjv9b6kwh00go07421skgs41h","AUTHED","12333333333")
if(res){
    console.log(token)
}
// function jestJson(key,value){
//     const res = {
//         key:value
//     }
//     console.log(res)
// }
// const data = {
//     UnionID: "12333333333",
//     openid: "122222222233",
//     name: "xn",
//     university:"HUST",
//     phone:"15623337359",
//     email:"xn@MediaList.com",
//     authstatus: "UNCOMMITED",
//     Gender:"MALE",
//     subjects: {
//         create: [
//             {
//                 name:"CHINESE",
//                 level: {
//                     set: [
//                         "MIDDLE",
//                         "PRIMARY"
//                     ]
//                 }
//             }
//         ]
//     },
//     avalible:{
//         create:[
//             {
//                 day:"SUN",
//                 detail:"MORN"
//             }
//         ]
//     },
//     invitations:{},
//     order:{}
// }
// console.log(JSON.stringify(data))
// function testLet(data){
//     let test 
//     if(data){
//         test={
//             data:true
//         }
//     }else{
//         test = {
//             data:false
//         }
//     }
//     test.otherdata ={
//         connect: "data"
//     }
//     console.log(test)
// }
// testLet(true)