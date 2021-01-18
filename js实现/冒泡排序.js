Object.assign(Array.prototype,{
    bubbleSort(){
        for(let i =0,l=this.length;i<l-1;i++){
            for(let j = i+1;j<l-1;j++){
                if(this[i]> this[j]){
                    [this[i],this[j]] = [this[j],this[i]]
                }
            }
        }
    }
})