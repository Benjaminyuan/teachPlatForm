const jwt = require("../util/jwt")
const {res,token} = jwt.newJwt("ADMIN", "33333333","AUTHED")
if(res){
    console.log(token)
}
const {valid,parseRes} = jwt.verifyJwt(token)
console.log(parseRes)
// function jestJson(key,value){
//     const res = {
//         key:value
//     }
//     console.log(res)
// }
// const data = {
//     openid: "12333333333",
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
let a = "a好"
let b = "b好"
console.log(a>b)