请求头（Request）：
Accept：text/html application/xml 告诉服务器客户端浏览器这边可以出里什么数据；
Accept-Encodeing：gzip 告诉服务器我能支持什么样的压缩格式
accept-language：告诉服务器浏览器支持的语言
Cache-control：告诉服务器是否缓存
Connection:keep-alive 告诉服务器当前保持活跃（与服务器处于链接状态）
Host：远程服务器的域名
User-agent：客户端的一些信息，浏览器信息 版本
referer：当前页面上一个页面地址。一般用于服务器判断是否为同一个域名下的请求

返回头（response-header）：
cache-control:private/no-cache; 私有的不需要缓存/no-cache也不需要缓存
connection:keep-live; 服务器同意保持连接
content-Enconding：gzip；除去头的剩余部分压缩返回格式
content-length:内容长度
content-type：text/css;返回内容支持格式
Date： 时间
server：ngnix 服务器类型
set-Cookie:服务器向客户端设置cookie 第一次访问服务器会下发cookie当作身份认证信息，第二次访问服务器再把cookie送给服务器，可以当作认证信息
last-modified: 时间戳 文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304(Not Modified)状态。Last-Modified也可用setDateHeader方法来设置。
expires 告诉浏览器把回送的资源缓存多长时间 -1或0则是不缓存
etag:版本专有的加密指纹。（有的网站不用，并非必须）优先检查etag再检查last-modified的时间戳。向服务器请求带if-none-match,服务器判断是否过期未过期返回304，过期返回200
// 注释：第一次请求出来的数据先进行缓存协商，是否缓存expires，cache-control 缓存时间，etag，last-modified等
//注释：多次访问的时候，浏览器先判断是否有缓存，是否过期
//未过期：直接从缓存中读取。

//http状态码
//1.指示信息–表示请求已经接受，继续处理
//2.成功–表示请求已经被成功接受，理解
//3.重定向–表示完成请求必须进行更进一步操作
//4.客户端错误–请求有语法错误或者请求无法实现
//5.服务器端错误–服务器未能实现合法的请求