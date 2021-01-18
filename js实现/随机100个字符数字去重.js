var arr = Array.from(length:100).map(()=>{
    String(Math.floor(Math.random()*100))
})

var newArr = [];

arr.forEach((val)=>{
    if(newArr.indexOf(val)<0){
        newArr.push(val)
    }
})

console.log('succc',newArr)