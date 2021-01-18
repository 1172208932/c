/*
　　还有就是call方法是放在Function().prototype上的也就是构造函数才有的call方法
　　 (我门可以查看自己的方法的原型链上的也就是
　　　　方法名.__proto__==Function.prototype 自己定义的构造函数通过原型链可以找到原型 Function.prototype中就有call方法 )
　　 那我门就在Function.prototype中定义一个自己的方法实现call的功能
*/
　　 Function.prototype.myCall = function() {
 
    　　　　/* 先接受参数把对象和参数区分开 center:对象 arg:参数 */
    　　　　let [center, ...arg] = [...arguments]
     
    　　　　/* 重点 用传递过来的对象 添加一个属性赋值为this(这是我感觉最神奇的地方 后面通过隐式绑定) */
    　　　　center.storageA = this;
     
    　　　　 /* 然后执行调用call这个方法的对象 */
    　　　　 /* js中有谁调用的this 就指向谁->this的隐式绑定 然后接收执行的结果 */
    　　　　let result = center.storageA(...arg)
     
    　　　　/* 这句话 就是隐式绑定 center.that(...arg) <==>this.(...arg) 这两句话等同
    　　　　在这个函数中this指向的是调用call的这个方法 就是应为Person.call 导致this指向了 Person
    　　　　同样的方法通过 center.that让this指向了center
    　　　　这个that属性是自己为了储存调用call的对象的 在原来的对象中是没有这个属性的所有要删除这个属性
    　　　　不删除的话可以看到that中的结构式Person对象  影响继承的结构
    　　　　*/
    　　　　delete center.storageA return result;
    　　}


// apply
    Function.prototype.myCall = function() {
        let [center, ...arg] = [...arguments]
        center.that = this;
        let result = center.that(...arg)
        delete center.that
        return result;
    }
     
    　　function Person() {
    　　　　this.firstname = 'Join'
    　　　　this.say = function() {
    　　　　　　console.log(`my name is: ${this.firstname} ~${this.listname}`)
    　　　　}
    　　 }
     
    　　function Baby(name) {
    　　　　this.listname = name Person.myCall(this, this.name)
    　　}
     
    　　let a = new Baby('inter')