const jwt = require("../util/jwt")
function jwtTest(){
    start = Date.now()
    res =  jwt.newJwt("user",604800,"cjutjh8hw00c90742se98slsl")
    end = Date.now()
    console.log(res)
    console.log("time cost:"+(end-start)+"ms")
    return res
}
res = jwtTest()


// console.log(jwtRes)
// test ={
//     name:"name",
//     age: 14
// }
// console.log(typeof res.token)
// verifyRes = jwt.verifyJwt(res.token.replace("J","Z"))
// console.log(verifyRes)
// jwtRes = jwt.verifyJwt(res.token)
// console.log(jwtRes)