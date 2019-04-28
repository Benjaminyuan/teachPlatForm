const studentRepo = require("../Dao/studentsRepository")
const filter = require("../util/filter")
async function getStudent(req,res){
  let query = {name:req.query.name,phone:req.query.phone}
  let student = await req.prisma.student(query)
    res.send(student)
}

/*-------finish basic test--------  */
async function getStudents(req,res){
    console.log(req.body)
    let students = await req.prisma.students({})
    res.send(students)
}
/*-------------------------- */


/*-------finish basic test--------  */
async function updateInfo(req,res){
    const data = req.body
    update = await studentRepo.updateInfo(data)
    res.json({update: update})
}
/*-------finish basic test--------  */





/*------- TEST UNDO--------  */
async function signup(req,res){
    console.log(req.body)
    // const {name,uni,email,phone,auth,subjects,order,invitations} = req.body
    // console.log({name,uni,email,phone,auth,subjects,order,invitations})
   const data = req.body
   create = await studentRepo.createStudent(data)
    // const{name,uni,email,phone,}
    res.json({"create": create})
}
/*---------------  */




/*--简单过滤，还需改进--*/

/*---------------------- */
module.exports={
    getStudent,
    getStudents,
    isExist,
    signup,
    updateInfo
}