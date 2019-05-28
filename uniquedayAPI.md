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
                        "id": Int,
                        "clueName": String,
                        "nextSceneId": Int,
                        "status": Boolean,
                        "sourceUrl": [
                            String,
                        ]
                    }
                ],
    }
    ```

    