var extent = function(){
    var value = 0;
    return{
        call:function(){
            value++;
            console.log(value)
        }
    }
};

var extent = extent();

extent.call();
extent.call();
extent.call();
