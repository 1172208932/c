function unique(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let repeat = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                repeat = true;
                break;
            }else{
                
            }
        }
        if (!repeat) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));
// 结果是[1, 2, 3, 5, 6, 7, 4]


var arr=[2,8,5,0,5,2,6,7,2];
function unique1(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(hash.indexOf(arr[i])==-1){
      hash.push(arr[i]);
     }
  }
  return hash;
}