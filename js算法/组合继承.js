/*组合继承
 */

 function SuperType(name){
     this.name = name;
     this.colors = ["red","blue"]
 }

 SuperType.prototype.sayName = function(){
     alert(this.name);
 }

 function SubType(name,age){
     SuperType.call(this,name);

     this.age = age;
 }

 SubType.prototype = new SuperType();
 SubType.prototype.constructor = SubType;

/*寄生组合式继承*/

function inheritPrototype(subType,superType){
    var prototype = Object.create(superType);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.color = ["red","blue"];
}

SuperType.prototype.sayName = function(){
    console.log(this.name)
}

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}

inheritPrototype(SubType,SuperType)


SubType.prototype.sayAge = function(){
    alert(this.age)
}

var instance = new SubType("lichonglou");