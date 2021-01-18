/**
   Array.prototype 上的方法原本只能用来操作 array 对象。
   但用 call 和 apply 可以把任意对象当作 this 传入某个方法，
   这样一来，方法中用到 this 的地方就不再局限于原来规定的对象，
   而是加以泛化并得到更广的适用性。 
 */

(function(){
    Array.prototype.push.call( arguments, 4);
    console.log( arguments);
})(1,2,3);


/**
    通过 uncurrying 的方式，Array.prototype.push.call 变成了一个通用的 push 函数。
    这样一来， push 函数的作用就跟 Array.prototype.push 一样了，同样不仅仅局限于只能操作 array 对象。
    而 对于使用者而言，调用 push 函数的方式也显得更加简洁和意图明了。
 */
Function.prototype.uncurrying = function (){
    var self = this;
    return function() {
        var obj = Array.prototype.shift.call( arguments);
        return self.apply(obj, arguments)
    }
};


var push = Array.prototype.push.uncurrying();

(function(){
    push(arguments,4);
    console.log( arguments );
})(1,2,3);


/**
    我们还可以一次性地把 Array.prototype 上的方法“复制”到 array 对象上，
    同样这些方法可 操作的对象也不仅仅只是 array 对象
 */

 for(var i = 0,fn, ary = ['push','shift','forEach'];fn = ary[ i++ ];){
     Array[ fn ] = Array.prototype[fn].uncurrying();
 };

 var obj = {
     'length':3,
     "0":1,
     "1":2,
     "2":3
 };

 Array.push( obj, 4);
console.log(obj.length);

var first = Array.shift( obj );
console.log(first);
console.log(obj);

Array.forEach(obj, function(i, n){
    console.log(i,n)
})

