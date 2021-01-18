Object.assign(String.prototype,{
    findMaxDuplicateChar(){
        if(str.length == 1){
            return str;
        }
        let charObj ={};

        for(let i of Object.keys(this)){
            let c = this[i];
            if(charObj[c] === undefined){
                charObj[c] = 1;
            }else{
                charObj[c] ++;
            }
        }

        let maxChar = '';
        let maxNum = 0;

        for(let i of Object.keys(charObj)){
            let num = charObj[i];
            if(num > maxNum){
                maxNum = num;
                maxChar = i;
            }
        }
        return maxChar
    }
})