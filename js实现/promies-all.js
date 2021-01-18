
Promise.myAll = function(...args){
    const result = [];
    let isFail = false;
    let errInfo;
    let j = args.length;
    for (let i = 0; i < args.length; i++){
        // 如果有错误就停止循环
        if(isFail) {
           return Promise.reject(errInfo);
        };
        // 挨个运行promise
        args[i].then(res => {
           // 处理结果
           result.push(res);
           j--;
           if(j === 0){
               return Promise.resolve(result);
           }
        }).catch(err => {
           // 设置停止循环的标志，存储错误信息
           isFail = true;
           errInfo = err;
        })
    }



    //判断是不是一个promise
function isPromise(value){
    if(typeof value === 'function' || (typeof value === 'undefined' && value != null)){
        if(typeof value.then === 'function'){
            return true;
        }
    }
    return false;
}

Promise.all = function(values){
    return new Promise((resolve,reject)=>{
        let arr = [];
        let i = 0;
        let processData = function(key,value){
            arr[key] = value;
            if(++i === values.length){
                resolve(arr)
            }
        }
        for(let i = 0; i < values.length; i++){
            let current = values[i];
            if(isPromise(current)){   //判断传进来的是promise还是普通数据
                current.then(y=>{
                    processData(i,y)
                },reject)
            }else{
                processData(i,current)
            }
        }
    })
}