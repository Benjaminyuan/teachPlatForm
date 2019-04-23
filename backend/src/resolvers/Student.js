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
//    let students = req.body;
    if( filter.isEmpty(req.body)){
        res.send("请输入筛选条件")
    }
    let students = await req.prisma.students({})
    res.send(students)
}
/*-------------------------- */


/*-------finish basic test--------  */
async function isExist(req,res){
    if(filter.isEmpty(req.body)){
        res.json({exist:"false"})
    }
    const {name , phone, email} = req.body
    console.log({name,phone,email})
    exist = await studentRepo.studentExist(name,phone,email)
    console.log(exist)
    res.json({exist: exist})   
}
/*-------finish basic test--------  */

/*-------finish basic test--------  */
async function updateInfo(req,res){
    const data = req.body
    if(filter.isEmpty(data)){
        res.json({info: "请输入有效请求！！"})
    }
    update = await studentRepo.updateInfo(data)
    res.json({update: update})
}
/*-------finish basic test--------  */



/*------- TEST UNDO--------  */
async function signup(req,res){
    console.log(req.body)
    if(filter.isEmpty(req.body)){
        res.status(415).json({info: "请输入有效请求！！"})
    }
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