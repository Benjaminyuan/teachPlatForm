const {prisma} = require("../generated/prisma-client")
const {parentBasicPublishInfo,studentBasicPublishInfo} = require("../Dao/fragment")
async function parentSearch(req,res){
    const data = req.body
    try{
        const students = await prisma.students({
            where:{
                Gender_in:data.gender,
                university_in:data.university,
                subjects_some:{
                        name_in:data.subjects
                }
            }
        }).$fragment(studentBasicPublishInfo)
        let resData = []
        const des = new Set(data.levels)
        for(let stu of students){
            for(let sub in stu.subjects){
                if(des.has(sub.level)){
                    resData.push(stu)
                }
            }
        }
        res.status(200).json({students:resData})
    }catch(e){
        console.log(e)
        res.status(400).json({info:"请输入合法筛选信息"})
    }
    return 
}
async function studentSearch(req,res){
    const data = req.body
    try{
        const parents = await prisma.parents({
            where:{
                publishTerm:{
                    Level_in:data.levels,
                    teacherGender_in: data.genders
                }
            }
        }).$fragment(parentBasicPublishInfo)
        let resData = []
        for(let parent of parents){
            if(isExsit(data.subjects,parent.publishTerm.subjects)){
                resData.push(parent)
            }
        }
        res.status(200).json({parents:resData})
        return 
    }catch(e){
        console.log(e)
        res.status(400).json({info:"请输入正确的"})
        return 
    }
}
function isExsit(des,test){
    const set1 = new Set(des)
    for(let item of test){
        if(set1.has(item)){
            return true
        }
    }
    return false 
}
module.exports={
    studentSearch,
    parentSearch
}