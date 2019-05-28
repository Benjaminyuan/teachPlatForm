const studentRepo = require("../Dao/studentsRepository")
const authRepo = require("../Dao/authRepo")
const filter = require("../util/filter")
const jwt = require("../util/jwt")
/*-------finish basic test--------  */

/*-------------------------- */


/*-------finish basic test--------  */
 function updateInfo(req, res) {
    const data = req.body
    update =  studentRepo.updateInfo(data.data,data.id)
    res.json({ update: update })
}
/*-------finish basic test--------  */

async function sendAuth(req,res){
    const data = JSON.parse(req.body)
}



/*------- TEST UNDO--------  */
/**
  {
    openid: String!@unique
    openid: String! @unique
    phone: String!@unique
    name: String!@unique
    university: University!
    email: String!@unique
    Gender: Gender @default(value:MALE)
    authstatus: AuthStatus!
    avalible:[AvalibelTime!]!
  }
  
 */
async function signup(req, response) {
    console.log(req.body)
    // const {name,uni,email,phone,auth,subjects,order,invitations} = req.body
    // console.log({name,uni,email,phone,auth,subjects,order,invitations})
    const data = req.body
    console.log(data)
    let {create,student} = await studentRepo.createStudent(data)
    // const{name,uni,email,phone,}
    if(create){
        const {res,token} = jwt.newJwt("STUDENT",student.openid,student.authStatus)
        response.append("Authorization",`Bearer ${token}`)
        response.status(200).json({create: true})
        return 
    }
    response.status(400).json({ create:false })
}

/*---------------  */




/*--简单过滤，还需改进--*/

/*---------------------- */
module.exports = {
    signup,
    updateInfo,
}