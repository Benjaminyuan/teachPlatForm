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
        console.log(`students:${JSON.stringify(students)}`)
        let resData = []
        const des = new Set(data.levels)
        const openSet = new Set()
        for(let stu of students){
            let add = false
            for(let sub of stu.subjects){
                if(add){
                    break
                }
                for(let level of sub.level){
                    console.log(`level:${level}`)
                    if(add){
                        break
                    }
                    if(des.has(level)){
                        resData.push(stu)
                        add = true
                    }
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