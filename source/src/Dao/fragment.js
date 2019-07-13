const invitationStatus = `
fragment invitationStatus on Invitation{
    status
}
`
const studentAuthStatus = `
fragment studentAuthStatus on StudentAuthInfo{
    res
}
`
const parentAuthStatus = `
fragment parentAuthStatus on ParentAuthInfo{
    res
}
`
const studentAuthUpdateResult = `
fragment studentAuthUpdateResult on StudentAuthInfo{
    id
    student{
        openid
      }
    res
}
`
const parentAuthUpdateResult = `
fragment parentAuthUpdateResult on ParentAuthInfo{
    id
    parent{
     openid
    }
    res
}
`
const studentRoleResult = `
fragment studentRoleResult on Student{
    openid
}`
const parentRoleResult = `
fragment parentRoleResult on Parent{
    openid
}
`
const orderCreateResult = `
fragment orderCreateResult  on Order{
    id
    student{
        openid,
        name,
        phone
    }
}
`
const studentInvitationResult = `
fragment studentInvitation on Student{
    openid
    invitations{
        parent{
              name
         address
         updatedAt
         publishTerm{
           subjects
           Level
         }
        
         }
      invitor
       status
     }
}
`
const parentInvitationResult = `
fragment studentInvitation on Parent{
    openid
    invitations{
        student{
          name
          university
          expectPay
          updatedAt
          avalible{
            day
           detail
          }
        }
        invitor
        status
      }
}`
const orderChangeResult  = `
fragment OrderChange on  TryOder{
    id
    parent{
    name
    address
    publishTerm{
    subjects
    Level
    }
    student{
        name
        university
        expectPay
    }
    phone
    status 
}
`
const studentBasicPublishInfo = 
`fragment studentPublishInfo on Student{
    openid
    name
    university
    grade
    Gender
    subjects{
      name
      level
    }
    expectPay
    avalible{
      day
      detail
    }
}
`
const parentBasicPublishInfo=`
fragment parentPublishInfo on Parent{
    address
    name
  	publishTerm{
    	Level
      pay
      subjects
      childGender
      teacherGender
      longTerm{
        days
        lessonTime
        timeList{
          day
          detail
        } 
      }
      shortTerm{
      lessonTime
      all
        timeList
      }
    }
}`
module.exports={
    invitationStatus,
    studentAuthStatus,
    parentAuthStatus,
    studentAuthUpdateResult,
    parentAuthUpdateResult,
    studentRoleResult,
    parentRoleResult,
    studentInvitationResult,
    parentInvitationResult,
    orderChangeResult,
    studentBasicPublishInfo ,
    parentBasicPublishInfo

}