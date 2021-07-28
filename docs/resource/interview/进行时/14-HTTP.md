# 14-HTTP

1. <span style="background-color: #ffaaaa">post和get的区别</span>
    1. GET 的本质是「得」，而 POST 的本质是「给」.GET 是「幂等」的，在这一点上，GET 被认为是「安全的」(不会对服务器的数据进行修改)
    2. GET请求在URL中传送的参数是有长度限制的，而POST没有,一般由服务器设定限制
        * 请求长度是由浏览器和web决定和设置,get请求其实没有限制
    3. 对参数的数据类型，GET只接受ASCII字符，而POST没有限制
    4. GET参数通过URL传递，POST放在Request body中,相对安全一点
        * 但如果没有加密,随便一个监听器都可以把所有的数据监听到。
    5. GET请求能够被cache，会保存在历史记录里面.POST默认不进行缓存。
    6. <span style="background-color: #ffaaaa">post和get的本质区别</span>
        1. HTTP的底层是TCP。所以GET和POST的底层也是TCP，也就是说，GET/POST都是TCP链接。
        2. 但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同
        3. GET产生一个TCP数据包；POST产生两个TCP数据包
            * 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
            * 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据））
    7. GET替换POST优化网站性能的可行性
        1.  GET与POST都有自己的语义，不能随便混用。
        2. 据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。
        3. 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。
2. Tips
    1. get请求参数大小：
        1. 对于IE浏览器，限制url的长度是2083字符
        2. 谷歌浏览器限制请求的url长度是8182个字符
    2. cookie限制
        1. 大小4KB
        2. Google限制个数最多为53个
    3. HTTP和https
        1. <span style="background-color: #ffaaaa">HTTP+加密+认证+完整性保护 = HTTPS</span>
        2. HTTP：是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从WWW服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，使网络传输减少。
        3. HTTPS：是以安全为目标的HTTP通道，简单讲是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。
        4. HTTPS协议的主要作用可以分为两种：一种是建立一个信息安全通道，来保证数据传输的安全；另一种就是确认网站的真实性。
        5. 区别：
            1. https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
            2. http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
            3. http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
            4. http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

---

1. HTTP
    1. 超文本传输协议( Hyper Text Transfer Protocol ),一种应用层协议,是万维网数据通信的基础
    2. 作用
        1. 规定了浏览器和web服务器发送和响应数据的格式
    3. 特点
        1. 请求+响应模式
        2. 无状态传输协议
    4. 长连接，短连接问题
        1. 长连接
            1. 长连接可以省去较多的TCP建立和关闭的操作，节约时间
            2. 服务器压力比较大，设置连接时间，客户端一定时间内没有进行通信,服务器会主动断开连接
        2. 短连接
            1. 短连接对于服务器来说实现起来较为简单，服务器压力小
            2. 相对而言请求响应时间会变长
2. 请求报文格式
    1. 完整格式
        1. 请求行
        2. 请求头
        3. 空行rn    -> 作用分割请求头和请求体的数据标记
        4. 请求体  扩展： get请求没有请求体，post请求有请求体
    2. 请求方式
        1. 请求指定的页面信息，并返回实体主体。
            <span style="background-color: #ffaaaa">GET</span>
        2. 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头
            HEAD
        3. 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
            <span style="background-color: #ffaaaa">POST</span>
        4. 从客户端向服务器传送的数据取代指定的文档的内容。
            <span style="background-color: #ffaaaa">PUT</span>
        5. PATCH
            * 类似于put，只不过是部分更新
        6. 请求服务器删除指定的页面。
            <span style="background-color: #ffaaaa">DELETE</span>
        7. HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
            CONNECT
        8. 允许客户端查看服务器的性能。
            OPTIONS
        9. 回显服务器收到的请求，主要用于测试或诊断。
            TRACE
3. 响应报文
    1. 完整格式
        1. 响应行
        2. 响应头
        3. 空行rn
        4. 响应体
    2. 状态码
        1. 100： 
            1. 100：继续，客户端继续进行请求
        2. 200： 
        3. 300： 
        4. 400： 
        5. 500： 

1. HTTPS
    1. SSL(Secure Sockets Layer
        1. SSL协议位于

```
100 Continue
继续。客户端应继续其请求
101
Switching Protocols
切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到HTTP的新版本协议
200 OK
请求成功。一般用于GET与POST请求
201  Created
已创建。成功请求并创建了新的资源
202
Accepted
已接受。已经接受请求，但未处理完成
203
Non-Authoritative Information
非授权信息。请求成功。但返回的meta信息不在原始的服务器，而是一个副本
204
No Content
无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档
205
Reset Content
重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域
206
Partial Content
部分内容。服务器成功处理了部分GET请求
300
Multiple Choices
多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择
301 Moved Permanently
永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替
302 Found
临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI
303
See Other
查看其它地址。与301类似。使用GET和POST请求查看
304
Not Modified
未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源
305
Use Proxy
使用代理。所请求的资源必须通过代理访问
306
Unused
已经被废弃的HTTP状态码
307
Temporary Redirect
临时重定向。与302类似。使用GET请求重定向
400 Bad Request
客户端请求的语法错误，服务器无法理解
401  Unauthorized
请求要求用户的身份认证
402
Payment Required
保留，将来使用
403 Forbidden
服务器理解请求客户端的请求，但是拒绝执行此请求
404
Not Found
服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面
405
Method Not Allowed
客户端请求中的方法被禁止
406
Not Acceptable
服务器无法根据客户端请求的内容特性完成请求
407
Proxy Authentication Required
请求要求代理的身份认证，与401类似，但请求者应当使用代理进行授权
408
Request Time-out
服务器等待客户端发送的请求时间过长，超时
409
Conflict
服务器完成客户端的PUT请求是可能返回此代码，服务器处理请求时发生了冲突
410
Gone
客户端请求的资源已经不存在。410不同于404，如果资源以前有现在被永久删除了可使用410代码，网站设计人员可通过301代码指定资源的新位置
411
Length Required
服务器无法处理客户端发送的不带Content-Length的请求信息
412
Precondition Failed
客户端请求信息的先决条件错误
413
Request Entity Too Large
由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个Retry-After的响应信息
414 Request-URI Too Large
请求的URI过长（URI通常为网址），服务器无法处理
415
Unsupported Media Type
服务器无法处理请求附带的媒体格式
416
Requested range not satisfiable
客户端请求的范围无效
417
Expectation Failed
服务器无法满足Expect的请求头信息
500  Internal Server Error
服务器内部错误，无法完成请求
501
Not Implemented
服务器不支持请求的功能，无法完成请求
502
Bad Gateway
充当网关或代理的服务器，从远端服务器接收到了一个无效的请求
503  Service Unavailable
由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中
504
Gateway Time-out
充当网关或代理的服务器，未及时从远端服务器获取请求
505  HTTP Version not supported
服务器不支持请求的HTTP协议的版本，无法完成处理
```
