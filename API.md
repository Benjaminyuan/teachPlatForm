### /signup	

* Method: POST

* Request 

  ```json
  {
    "code":""
  }
  
  ```

* Response

  * Status: 200, Header : Authorization Bearer token

    ```json
    {
      "auth": true
    }
    ```

  * 301 Header :Authorization Bearer token

    ```json
    {
      "role":"STUDENT"
    }
    {
      "role":"PARENT"
    }
    ```

    

  

### /student/signup

* Method: POST,  with token 

* Request

  ```json
  {
      "openid": "12333333333",
      "openid": "122222222233",
      "name": "xn",
      "university": "HUST",
      "phone": "15623337359",
      "email": "xn@MediaList.com",
      "authStatus": "UNCOMMITED",
      "Gender": "MALE",
      "subjects": {
          "create": [
              {
                  "name": "CHINESE",
                  "level": {
                      "set": [
                          "MIDDLE",
                          "PRIMARY"
                      ]
                  }
              }
          ]
      },
      "avalible": {
          "create": [
              {
                  "day": "SUN",
                  "detail": "MORN"
              }
          ]
      },
      "invitations": {},
      "order": {}
  }
  ```

* Response

  * 200  with token 

    ```json
    {
      "create":true 
    }
    ```

    

  * 400 

    ```json
    {
      "create":false,
    }
    ```



### /parent/signup

* Request 

  * Method: POST with token 

    ```json
    {
        "openid": "1111111111",
        "phone": "15623337359",
        "name": "袁佳",
        "address": "华中科技大学韵苑23栋",
        "email": "1459477412@qq.com",
        "authStatus": "UNCOMMITED",
        "starList": {},
        "invitations": {},
        "order": {},
        "publish": false,
        "publishTerm": {
            "create": {
                "Level": "PRIMARY",
                "pay": 60,
                "childGender": "FEMALE",
                "teacherGender": "BOTH",
                "teacherReuqire": "无",
                "childStatus": "成绩非常差",
                "subjects": {
                    "set": [
                        "MATH",
                        "CHINESE",
                        "ENGLISH"
                    ]
                },
              "shortTerm":{
                "create":{
                  "lessonTime":1,
                  "all":3
                  "timeList":["2019-05-10"]
                }
              },
                "longTerm": {
                    "create": {
                        "lessonTime": 2,
                        "days": 3,
                        "timeList": {
                            "create": [
                                {
                                    "day": "SUN",
                                    "detail": "MORN"
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
    ```

* Response

  * 200 with token 

    ```json
    {
      "create":true
    }
    ```

  * 400 

    ```json
    {
      "create":false
    }
    ```

### /:role/auth/upload

* Request 

  * Method: POST with token

  * Form-data

    | key  | value |
    | :--: | :---: |
    | auth | File  |
    | auth | File  |

    

* Response

  - - 200/400

      ```json
      {
        "info":"xxx"
      }
      ```



### /:role/auth/status/:id

- Request 

  - Method:GET with token

- Response

  - 200 with token 

    ```json
    {
      "status":status,
      "info":"xxxxx"
    }
    ```

  - 403 (非法请求，一般不会出现)

    ```json
    {
      "status":status,
      "info":"xxxx"
    }
    ```

    

### /auth/info/pic/:name

- Request 
  - Method:GET with token 
- Response
  - Picfile



### /:role/publishlist?first={value}&skip={value}

- Request 

  - Method:GET with token 

- Response

  - 200 

    ```json
    //role student 
    {
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
            timeList{
            day
            detail 
          }
          }
        }
    }
    //role parent 
    {
       	openid
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
    }
    ```

  - 403

    ```json
    {
      "info":"查询失败"
    }
    ```

    



### /:role/info/:id

- Request 

  - Method：GET with token 

- Response

  - 200 

    ```json
    //同publishlist 的 200 
    ```

  * 404

    

### /:role/publish/status

- Request 

  - Method：GET with token 

- Response

  - 200

    ```json
    {
      "status": Boolean
    }
    ```

  - 403

    ```json
    {
      "info":"xxxxx"
    }
    ```

    



### /:role/publish/:status

- Request 

  - Method：POST  with token 

- Response

  - 200

    ```json
    {
      "info":"xxx"
    }
    
    ```

  - 404

    ```json
    {
      "info":"xxx"
    }
    ```

    

### /:role/invitations

- Request 

  - Method：GET with token 

- Response

  * 200

    ```json
    {
      "data":[{
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
           status
         }
    }],
    [{
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
     				invitation
            status
          }
    }]
    "info":"xxxx"
    }
    ```

  * 404

    ```json
    {
      "info":"xxxxx"
    }
    ```

    



### /invitation/init

- Request 

  - Method：POST with token 

    ```json
    {
        "id": "xxxxx"
    }
    ```

    

- Response

  * 200

    ```json
    {
      "invitation":{
        id
      student
      parent
      invitor
      status: 
      createdAt
      updatedAt
      }
    }
    ```

  * 403

    ```json
    {
      "info":"请勿重复邀请"
    }
    ```

    



### /invitation/status/:id

- Request 

  - Method：GET with token

- Response

  * 200

    ```json
    {
     "status":status
    }
    ```

  * 404

    ```json
    {
      info:"xxxx"
    }
    ```

    

### /invitation/status/:id

- Request 

  - Method：POST with token

    ```json
    {
      "status":"DELETE"/"REBACK"/"PAY"
      /"ACCEPT"/"REJECTED"
    }
    ```

    

- Response

  - 200

    ```json
    {
      "status":""
    }
    ```

  - 403

    ```json
    {
      info:"根据平台规定，无法进行响应操作订"
    }
    ```

    

### /star/:role/:id

- Request 
  - Method：GET with token

### /unstar/:role/:id

- Request 
  - Method：GET with token

* Response

### /order/status/:id     /order/info/:id

- Request 

  - Method：GET with token

- Response 

  * 200

    ```json
    {
      "status":"status"
    }
    ```

  * 200

    ```json
    {
      [{
         address
        startTime
        endTime
        phone
        otherInfo
        parent{
            openid
            name
          }
            student{
              openid
              name
            }
      },]
    }
    ```

    

### /orders/status       /orders/info

- Request 

  - Method：POST with token

    ```json
    {
      "id":["ids"]
    }
    ```

    

- Response 

  - ```json
    {
      "status":["status"]
    }
    ```

  