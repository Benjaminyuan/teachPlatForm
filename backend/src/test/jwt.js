// const jwt = require("../util/jwt")
// function jwtTest(){
//     start = Date.now()
//     res =  jwt.newJwt("user",604800,"cjutjh8hw00c90742se98slsl")
//     end = Date.now()
//     console.log(res)
//     console.log("time cost:"+(end-start)+"ms")
//     return res
// }
// res = jwtTest()

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
function testLet(data){
    let test 
    if(data){
        test={
            data:true
        }
    }else{
        test = {
            data:false
        }
    }
    test.otherdata ={
        connect: "data"
    }
    console.log(test)
}
testLet(true)