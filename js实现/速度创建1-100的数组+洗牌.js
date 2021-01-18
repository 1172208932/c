var a = Array.prototype.map.call(Array(101).join('0').split(''),function(){
    return arguments[1]+1;
})

let arr = Array.from({length:100},(value,index)=>{index+1})

// 洗牌

let swap = a =>{
    let b=[];
    for(var i=a.length;i>0;){
        var index = Math.floor(Math.random()*i);
        b.push(a[index]);
        a[index] = a[--i];
    }
    return b;
}