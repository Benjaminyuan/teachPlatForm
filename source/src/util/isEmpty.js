function isEmpty(data){
    let temp
    try{
       temp =  JSON.parse(data)
    }catch(e){
        console.log(e)
        return -1
        //not a json formate  data 
    }
     if(typeof temp === Object && temp){
         return 0
         //not a empty json  
     }
  
  if(Object.keys(data).length == 0){
      return 1
      //空json
  }
  return 0
  //非空json
}
// console.log(isEmpty(""))
console.log(isEmpty('{"name":"benji"}'))
// console.log(isEmpty("{}"))