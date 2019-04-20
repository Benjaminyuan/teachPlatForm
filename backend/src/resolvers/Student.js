async function getStudent(req,res){
  let query = {name:req.query.name,phone:req.query.phone}
  let student = await req.prisma.student(query)
    res.send(student)
}
async function getStudents(req,res){
    console.log(req.body)
//    let students = req.body;
    if( Object.keys(req.body).length === 0){
        res.send("请输入筛选条件")
    }
    let students = await req.prisma.students({})
    res.send(students)
}
module.exports={
    getStudent,
    getStudents,
}