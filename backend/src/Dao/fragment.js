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
        UnionID
      }
    res
}
`
const parentAuthUpdateResult = `
fragment parentAuthUpdateResult on ParentAuthInfo{
    id
    parent{
     UnionID
    }
    res
}
`
const studentRoleResult = `
fragment studentRoleResult on Student{
    UnionID
}`
const parentRoleResult = `
fragment parentRoleResult on Parent{
    UnionID
}
`
const orderCreateResult = `
fragment orderCreateResult  on Order{
    id
    student{
        UnionID,
        name,
        phone
    }
}
`
const studentInvitationResult = `
fragment studentInvitation on Student{
    UnionID
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
       status
     }
}
`
const parentInvitationResult = `
fragment studentInvitation on Parent{
    UnionID
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
    UnionID
    name
    university
    grades
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