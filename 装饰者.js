/**
    这种给对象动态增加职责的方式，并没有真正地改动对象自身，而是将对象放入另一个对象之中，
    这些对象以一条链的方式进行引用，形成一个聚合对象。这些对象都拥有相同的接口(fire 方法)，
    当请求达到链中的某个对象时，这个对象会执行自身的操作，随后把请求转发给链中的 下一个对象。

    假设我们在编写一个飞机大战的游戏，随着经验值的增加，我们操作的飞机对象可以升级成 更厉害的飞机，
    一开始这些飞机只能发射普通的子弹，升到第二级时可以发射导弹，升到第三级 时可以发射原子弹.
 */

 var Plane = function(){};

 Plane.prototype.fire = function(){
     console.log('发射普通子弹');
 }

 //接下来增加两个装饰类，分别是导弹和原子弹:

 var MissileDecorator = function( plane ){
     this,plane = plane
 }
 MissileDecorator.prototype.fire = function(){
     this.plane.fire();
     console.log('发射导弹');
 }

 var AtomDecorator = function( plane ){
     this.plane = plane;
 }
 AtomDecorator.prototype.fire = function(){
     this.plane.fire();
     console.log('发射原子弹');
 }

//使用：
var plane = new Plane();
plane = new MissileDecorator(plane);
plane = new AtomDecorator(plane);

plane.fire();