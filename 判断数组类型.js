/**
我们来看看这个例子，判断一个数据是否是数组，在以往的实现中，可以基于鸭子类型的概念来判断，
比如判断这个数据有没有 length 属性，有没有 sort 方法或者 slice 方法等。
但更好 的方式是用 Object.prototype.toString 来计算。Object.prototype.toString.call( obj )返回一个 字符串，
比如 Object.prototype.toString.call( [1,2,3] )总是返回"[object Array]"，
而 Object.prototype.toString.call( “str”)总是返回"[object String]"。
所以我们可以编写一系列的 isType 函数。
 */

 //1
var isString = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object String]';
};

var isArray = function( obj ){
    return Object.prototype.toString.call( obj ) === '[object Array]';
};

var isNumber = function( obj ){
    return Object.prototype.toString.call( obj ) === "[object Number]";
};

//2
var isType = function( type ){
    return function( obj ){
        return Object.prototype.toString.call( obj ) === '[object ' + type + ']';
    }
};

var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');

//3
var Type = {};
for( var i = 0, type; type = [ 'String', 'Array', 'Number' ][ i++ ];){
    (function( type ){
        Type['is'+type] = function( obj ){
            return Object.prototype.toString.call( obj ) === '[object '+ type +']';
        }
    })( type )
};

console.log(Type.isArray([]))

