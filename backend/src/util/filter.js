function isEmpty(data){
    if(Object.keys(data).length === 0){
        return true
    }
    return false
}
module.exports={
    isEmpty,
}