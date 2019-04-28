const redis = require("../../redis/redis")
async function onLine(userId){
    redis.zadd('onLineList',1,"xxxxxxx")
} 