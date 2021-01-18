/**
    通常，在 JavaScript 中实现 AOP，都是指把一个函数“动态织入”到另外一个函数之中，
    具体的实现技术有很多，本节我们通过扩展 Function.prototype 来做到这一点。
 */

 Function.prototype.before = function( beforefn ){
     var _self = this;      //保存原函数的引用
     return function(){
         beforefn.apply( this, arguments);
         return _self.apply( this, arguments);
     }
 };

Function.prototype.after = function( afterfn ){
    var _self = this;
    return function(){
        var ret = _self.apply(this, arguments);
        afterfn.apply(this, arguments);
        return ret;
    }
};

var func = function(){
    console.log(2);
};

func = func.before(function(){
    console.log(1)
}).after(function(){
    console.log(3)
});

func()