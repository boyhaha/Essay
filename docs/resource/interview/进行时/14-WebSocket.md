# 14-WebSocket

* WebSocket也是一种协议，并且也是基于TCP协议的。具体流程是WebSocket通过HTTP先发送一个标记了 Upgrade 的请求，服务端解析后开始建立TCP连接，省去了HTTP长连接每次请求都要上传header的冗余，可以理解为WebSocket是HTTP的优化，但WebSocket不仅仅在Web应用程序上得到支持。
