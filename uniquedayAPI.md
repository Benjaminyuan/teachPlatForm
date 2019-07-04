## GET

### /load

 *  Response

    ```json
    {
      "backgroundImage":String,
      "roles": [
            {
                "id": Int,
                "name": String,//角色
                "roleInfo": String,//角色介绍
                "roleImage": String,//角色的图片名称
                "clueSet": [
                    {
                        "id": Int,//clue Id
                        "clueName": String,//线索的名字
                        "nextSceneId": Int,//指向的下一个场景
                        "status": Boolean,//解锁状态，默认为false
                       "sourceUrl": {
                            "image":[String,...String],
                            "voice":[String,...String],
                            "video":[String,...String]
               				 },
                    }
                ],
       "scenes": [
            {
            "id": Int,
                "clueSet": [
                    {
                        "id": 1,
                        "clueName": String,
                        "nextSceneId": 1,
                        "status": Boolean,
                         "sourceUrl": {
                  					"image":[String,...String],
                            "voice":[String,...String],
                            "video":[String,...String]
               					 }
                    }
                ],
                "sceneName": String,//场景的名字
                 "sourceUrl": {
                  "image":[String,...String],
                  "voice":[String,...String],
                  "video":[String,...String]
                }
            }
        ]
    }
    ```
    
*  说明

    ```json
    第一次加载角色(role),场景(scene).角色和场景有对应的线索(Clue)，Clue有对应属性，sourceUrl存储资源的位置
    ```



### /role/:id

* Response

  ```json
  {
      "clueSet": [
          {
              "id": 4,
              "clueName": "诡异的笑容",
              "nextSceneId": 1,
              "status": false,
                "sourceUrl": {
                "image":[String,...String],
                "voice":[String,...String],
                "video":[String,...String]
              }
          }
      ],
      "sourceUrl": [
          "123.jgp"
      ],
      "name": String 
}
  ```
  
  



###/scene/:id

* Response

  ```json
  {
      "sourceUrl": [
          "123.jgp"
      ],
      "clueSet": [
          {
              "id": 1,
              "clueName": "破旧的手表",
              "nextSceneId": 1,
              "status": false,
              "sourceUrl": {
                "image":[String,...String],
                "voice":[String,...String],
                "video":[String,...String]
              }
                 
          }
    ]
  }
  ```
  
  