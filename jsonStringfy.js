let a = {
    name: "xn",
    subjects:{
        create: [
            {
                name: "CHINESE",
                level: {
                    set: ["MIDDLE","PRIMARY"]
                }
                
            }
        ]
    }
}
let s = JSON.stringify(a)
console.log(s)
const Sdata = {
    UnionID:"22222222",
    openid:"22222222",
    phone:"15623337356",
    name:"叶东楠",
    university:"HUST",
    grades:"大三",
    email:"benjiyjw@aliyun.com",
    Gender:"MALE",
    expectPay:60,
    authStatus:"UNCOMMITED",
    subjects:{
      create:[
        {
          name:"ENGLISH",
        	level:{
            set:["PRIMARY","MIDDLEHIGH"]
          }
        },
        {
          name:"MATH",
          level:{
            set:[
              "PRIMARY",
              "MIDDLEHIGH"
            ]
          }
        }
      ]
    },
    starList:{},
    avalible:{
      create:[
        {
          day:"SUN",
          detail:"MORN"
        },
        {
          day:"FRI",
          detail:"MORN"
        }
      ]
    },
    studentDetail:{},
    invitations:{},
    order:{},
    publish:false
}
const parent = {
    UnionID:"1111111111",
    phone:"15623337359",
    name:"袁佳",
    address:"华中科技大学韵苑23栋",
    email:"1459477412@qq.com",
    authStatus:"UNCOMMITED",
    starList:{},
    invitations:{},
    order:{},
    publish:false,
    publishTerm:{
      create:{
      	Level:"PRIMARY",
        pay:60,
        childGender:"FEMALE",
        teacherGender:"BOTH",
        teacherReuqire:"无",
        childStatus:"成绩非常差",
        subjects:{
          set:[
            "MATH",
            "CHINESE","ENGLISH"
          ]
        },
        longTerm:{
          create:{
            lessonTime:2,
            days:3,
            timeList:{
              create:[
                {
                  day:"SUN",
                  detail:"MORN"
                }
              ]
            }
          }
        }
    }}
}
console.log(JSON.stringify(Sdata))
console.log('-------------')
console.log(JSON.stringify(parent))