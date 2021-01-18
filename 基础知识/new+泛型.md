New
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj);


Canvas和SVG的区别
1.什么是Canvas？
Canvas 是H5新出来的标签
Canvas画布，利用JavaScript在网页绘制图像
在标签中给上宽高： 不用加单位
如果在css中给宽高 会对图像造成拉伸 （默认宽高300px*150px）
通过过去绘制工具 .getContext(“2d”) 来在画布中绘制图形
2.什么是SVG？
SVG 可缩放矢量图形（Scalable Vector Graphics），基于可扩展标记语言XML 出来的时间比较老
SVG 用来定义用于网格的基于矢量的图形
不同：
1.绘制的图片格式不同
Canvas 的工具getContext 绘制出来的图形或传入的图片都依赖分辨率，能够以 .png 和 .jpg格式保存存储图像，可以说是位图
SVG 可以在H5中直接绘制，但绘制的是矢量图
由于位图依赖分辨率，矢量图不依赖分辨率，所以Canvas和SVG的图片格式的不同实际上是他们绘制出来的图片的格式不同造成的。
2.Canvas不支持事件处理器，SVG支持事件处理器
Canvas 绘制的图像 都在Canvas这个画布里面，是Canvas的一部分，不能用js获取已经绘制好的图形元素。

git rebase 和 git merge 有啥区别？
rebase会把你当前分支的 commit 放到公共分支的最后面, merge 会把公共分支和你当前的commit 合并在一起，形成一个新的 commit 提交

rem的移动适配原理 设置html的 font-size= 移动设备 / 设计稿宽度 * 100  = 100px，那么 1rem = 100px 

什么是泛型？
* 		泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。 
