const studentRepo = require("../Dao/studentsRepository")
const filter = require("../util/filter")
async function getStudent(req, res) {
   studentRepo.getStudent(data)
    res.send(student)
}

/*-------finish basic test--------  */
async function getStudents(req, res) {
    console.log(req.body)
    let students = await req.prisma.students({})
    res.send(students)
}
/*-------------------------- */


/*-------finish basic test--------  */
 function updateInfo(req, res) {
    const data = req.body
    update =  studentRepo.updateInfo(data.data,data.id)
    res.json({ update: update })
}
/*-------finish basic test--------  */





/*------- TEST UNDO--------  */
/**
  {
    UnionID: String!@unique
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
async function signup(req, res) {
    console.log(req.body)
    // const {name,uni,email,phone,auth,subjects,order,invitations} = req.body
    // console.log({name,uni,email,phone,auth,subjects,order,invitations})
    const data = req.body
    let {create,student} = await studentRepo.createStudent(data)
    // const{name,uni,email,phone,}
    res.json({ "create": create,student:student })
}
/*---------------  */




/*--简单过滤，还需改进--*/

/*---------------------- */
module.exports = {
    getStudent,
    getStudents,
    signup,
    updateInfo
}