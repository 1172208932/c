HTTP和HTTPS区别的。
SSL 是“Secure Sockets Layer”的缩写，中文叫做“安全套接层”。它是在上世纪90年代中期，由网景公司设计的。 为啥要发明 SSL 这个协议？因为原先互联网上使用的 HTTP 协议是明文的，存在很多缺点——比如传输内容会被偷窥（嗅探）和篡改。发明 SSL 协议，就是为了解决这些问题。 到了1999年，SSL 因为应用广泛，已经成为互联网上的事实标准。IETF 就在那年把 SSL 标准化。标准化之后的名称改为 TLS（是“Transport Layer Security”的缩写），中文叫做“传输层安全协议”。 所以这两者其实就是同一种协议，只不过是在不同阶段的不同称呼。
SSL协议位于TCP/IP协议与各种应用层协议之间，为数据通讯提供安全支持。SSL协议可分为两层： SSL记录协议（SSL Record Protocol）：它建立在可靠的传输协议（如TCP）之上，为高层协议提供数据封装、压缩、加密等基本功能的支持。 SSL握手协议（SSL Handshake Protocol）：它建立在SSL记录协议之上，用于在实际的数据传输开始前，通讯双方进行身份认证、协商加密算法、交换加密密钥等。


cdn
cdn的原理主要答出负载均衡和缓存再就是dns解析这三部分就行了吧，通过dns解析到全局负载均衡服务器，然后再到区域的负载均衡，之后根据一些条件来找合适的缓存服务器，如果第一次访问就从源站拿过来缓存。 需要注意的是一切都是根据请求的ip来的，如果ip不合理，那么可能起不到加速效果。缓存和负载均衡的思想在减轻服务器压力方面其实是很常见的

this4种绑定规则

默认绑定（严格/非严格模式）严格是undefined；非严格独立函数调用时this指向window。
隐式绑定，当函数引用有上下文对象时，隐式绑定会把函数中的this绑定到这个上下文对象。
var obj = {
  name: "wcky",
  foo: function() {
    console.log(this.name); //wcky
  }
};
obj.foo();
显示绑定，通过call()或者apply()方法，第一个参数是一个对象。
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2
};
foo.call(obj); // 2
new绑定，如果有new关键字，this指向new出来的那个对象。
