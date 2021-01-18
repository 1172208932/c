/**
    于函数节流的代码实现有许多种，下面的 throttle 函数的原理是，
    将即将被执行的函数用 setTimeout 延迟一段时间执行。如果该次延迟执行还没有完成，
    则忽略接下来调用该函数的请求。
    throttle 函数接受 2 个参数，第一个参数为需要被延迟执行的函数，
    第二个参数为延迟执行的时间。
 */
var throttle = function (fn, interval) {
    var _self = fn,
        timer,
        firstTime = true;
    return function () {
        var args = arguments,
            _me = this;
        if (firstTime) {
            _self.apply(_me, args);
            return firstTime = false;
        }

        if (timer) {
            return false;
        }

        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            _self.apply(_me, args);
        }, interval || 500)
    }
};

window.onresize = throttle(function(){
    console.log(1)
},500);


const debounce = function(func, interval){
    let timerId;
    return function(e){
        clearTimeout(timerId)
        timerId = setTimeout(function(){
            func.apply()
        },interval)
    }
}

debounce(apiCall,200)