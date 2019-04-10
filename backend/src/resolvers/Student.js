async function getStudent(req,res){
  let query = {name:req.query.name,phone:req.query.phone}
  let student = await req.prisma.student(query)
    res.send(student)
}
async function getStudents(req,res){
    console.log(req.body)
//    let students = req.body;
    let students = await req.prisma.students({})
    res.send(students)
}
module.exports={
    getStudent,
    getStudents,
}