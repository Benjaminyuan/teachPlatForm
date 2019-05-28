// let a = {
//     name: "xn",
//     subjects:{
//         create: [
//             {
//                 name: "CHINESE",
//                 level: {
//                     set: ["MIDDLE","PRIMARY"]
//                 }
                
//             }
//         ]
//     }
// }
// let s = JSON.stringify(a)
// console.log(s)
// const Sdata = {
//     openid:"22222222",
//     openid:"22222222",
//     phone:"15623337356",
//     name:"叶东楠",
//     university:"HUST",
//     grades:"大三",
//     email:"benjiyjw@aliyun.com",
//     Gender:"MALE",
//     expectPay:60,
//     authStatus:"UNCOMMITED",
//     subjects:{
//       create:[
//         {
//           name:"ENGLISH",
//         	level:{
//             set:["PRIMARY","MIDDLEHIGH"]
//           }
//         },
//         {
//           name:"MATH",
//           level:{
//             set:[
//               "PRIMARY",
//               "MIDDLEHIGH"
//             ]
//           }
//         }
//       ]
//     },
//     starList:{},
//     avalible:{
//       create:[
//         {
//           day:"SUN",
//           detail:"MORN"
//         },
//         {
//           day:"FRI",
//           detail:"MORN"
//         }
//       ]
//     },
//     studentDetail:{},
//     invitations:{},
//     order:{},
//     publish:false
// }
// const parent = {
//     openid:"1111111111",
//     phone:"15623337359",
//     name:"袁佳",
//     address:"华中科技大学韵苑23栋",
//     email:"1459477412@qq.com",
//     authStatus:"UNCOMMITED",
//     starList:{},
//     invitations:{},
//     order:{},
//     publish:false,
//     publishTerm:{
//       create:{
//       	Level:"PRIMARY",
//         pay:60,
//         childGender:"FEMALE",
//         teacherGender:"BOTH",
//         teacherReuqire:"无",
//         childStatus:"成绩非常差",
//         subjects:{
//           set:[
//             "MATH",
//             "CHINESE","ENGLISH"
//           ]
//         },
//         longTerm:{
//           create:{
//             lessonTime:2,
//             days:3,
//             timeList:{
//               create:[
//                 {
//                   day:"SUN",
//                   detail:"MORN"
//                 }
//               ]
//             }
//           }
//         }
//     }}
// }
const shortterm = {
  openid: "1111111111",
  phone: "15623337359",
  name: "袁佳",
  address: "华中科技大学韵苑23栋",
  email: "1459477412@qq.com",
  authStatus: "UNCOMMITED",
  starList: {},
  invitations: {},
  order: {},
  publish: "false",
  publishTerm: {
      create: {
          Level: "PRIMARY",
          pay: 60,
          childGender: "FEMALE",
          teacherGender: "BOTH",
          teacherReuqire: "无",
          childStatus: "成绩非常差",
          subjects: {
              set: [
                  "MATH",
                  "CHINESE",
                  "ENGLISH"
              ]
          },
        shortTerm:{
          create:{
            lessonTime:2,
            all:4,
            timeList: {
              set:[
                "2019-05-31",
                "2019-06-17"
              ]
            }
          }
        }
           }
  }
  
}
console.log(JSON.stringify(shortterm))
// console.log('-------------')
// console.log(JSON.stringify(parent))
// const request = require("request")
// const SECRET = "4c3801dcc2a0f601b69aecdac20b12ff" 
// const APPID = "wxd48257c42c622c9d"
// const code = "0331EH8m07GMls1jwp6m08Yq8m01EH8P"
// const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}E&grant_type=authorization_code`
// request.get(url,(err,repsonse, data)=>{
//   if(err){
//     console.log(err)
//     return 

//   }
//   console.log(data)
// })