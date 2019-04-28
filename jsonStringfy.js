let a = {
    name: "xn",
    subjects:{
        create: [
            {
                name: "CHINESE",
                level: {
                    set: ["MIDDLE","PRIMARY"]
                }
                
            }
        ]
    }
}
let s = JSON.stringify(a)
console.log(s)