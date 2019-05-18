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
    if
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
module.exports={
    invitationStatus,
    studentAuthStatus,
    parentAuthStatus,
    studentAuthUpdateResult,
    parentAuthUpdateResult,
    studentRoleResult,
    parentRoleResult,
    studentInvitationResult,
    parentInvitationResult
}