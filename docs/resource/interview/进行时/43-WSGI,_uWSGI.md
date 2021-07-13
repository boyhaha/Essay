# 43-WSGI, uWSGI

* **WSGI：**
    * 全称是Web Server Gateway Interface，WSGI不是服务器，python模块，框架，API或者任何软件，只是一种规范，描述web server如何与web application通信的规范。server和application的规范在PEP3333中有具体描述。要实现WSGI协议，必须同时实现web server和web application，当前运行在WSGI协议之上的web框架有Bottle, Flask, Django。
* **uwsgi：**
    * 与WSGI一样是一种通信协议，是uWSGI服务器的独占协议，用于定义传输信息的类型\(type of information\)，每一个uwsgi packet前4byte为传输信息类型的描述，与WSGI协议是两种东西，据说该协议比wsgi协议
* **uWSGI：**
    * 是一个web服务器，实现了WSGI协议、uwsgi协议、http协议等等的服务器。

1. **WSGI**
    1. WSGI协议主要包括server和application两部分：
    2. WSGI server负责从客户端接收请求，将request转发给application，将application返回的response返回给客户端；
    3. WSGI application接收由server转发的request，处理请求，并将处理结果返回给server。application中可以包括多个栈式的中间件\(middlewares\)，这些中间件需要同时实现server与application，因此可以在WSGI服务器与WSGI应用之间起调节作用：对服务器来说，中间件扮演应用程序，对应用程序来说，中间件扮演服务器。
    4. WSGI协议其实是定义了一种server与application解耦的规范，即可以有多个实现WSGI server的服务器，也可以有多个实现WSGI application的框架，那么就可以选择任意的server和application组合实现自己的web应用。例如uWSGI和Gunicorn都是实现了WSGI server协议的服务器，Django，Flask是实现了WSGI application协议的web框架，可以根据项目实际情况搭配使用。
2. **uWSGI**
    1. uWSGI旨在为部署分布式集群的网络应用开发一套完整的解决方案。主要面向web及其标准服务。由于其可扩展性，能够被无限制的扩展用来支持更多平台和语言。uWSGI是一个web服务器，实现了WSGI协议，uwsgi协议，http协议等。
        1. uWSGI的主要特点是：
            1. 超快的性能
            2. 低内存占用
            3. 多app管理
            4. 详尽的日志功能（可以用来分析app的性能和瓶颈）
            5. 高度可定制（内存大小限制，服务一定次数后重启等）
    2. uWSGI服务器自己实现了基于uwsgi协议的server部分，我们只需要在uwsgi的配置文件中指定application的地址，uWSGI就能直接和应用框架中的WSGI application通信。
3. **Gunicorn**
    1. gunicorn是实现了wsgi协议的一个python web服务器
        * .  /etc/profile && gunicorn \-c python:config dcp.wsgi:application
        * /etc/profile   应用于所有用户的全局配置脚本
        * gunicorn \[OPTIONS\] 模块名：变量名
        * **\-c CONFIG **指定一个配置文件****

* 为什么不用runserver
    * 但是，为什么我们还需要 Nginx 呢？这些 WSGI 程序本身不是也提供访问吗？
    * 是的，uWSGI 和 Gunicorn 本身就是一个便携的 web 服务器了，但是我们一般还是在它们前面档一个更加专业的 HTTP 服务器。Nginx 作为一个经过更长时间验证的 HTTP 服务器来说，它有很多 uWSGI 没有支持的 feature。比如：
    * 此外，这样分开的好处还是得，到达 uWSGI 和 Gunicorn 的请求的情况变得简单了很多，Nginx 处理了一层，将过滤和处理之后的请求交给 uWSGI 或 Gunicorn。这使得这些 WSGI 程序的实现简单了一些，简化了开发的工作。专业的事情交给专业的人去做。

* Gunicorn 配置

```
bind = '127.0.0.1:8000' #绑定ip和端口号
backlog = 512 #监听队列
chdir = '/home/test/server/bin' #gunicorn要切换到的目的工作目录
timeout = 30 #超时
worker_class = 'gevent' #使用gevent模式，还可以使用sync 模式，默认的是sync模式

workers = multiprocessing.cpu_count() * 2 + 1 #进程数
threads = 2 #指定每个进程开启的线程数
loglevel = 'info' #日志级别，这个日志级别指的是错误日志的级别，而访问日志的级别无法设置
access_log_format = '%(t)s %(p)s %(h)s "%(r)s" %(s)s %(L)s %(b)s %(f)s" "%(a)s"' #设置gunicorn访问日志格式，错误日志无法设置

"""
其每个选项的含义如下：
h remote address
l '-'
u currently '-', may be user name in future releases
t date of the request
r status line (e.g. ``GET / HTTP/1.1``)
s status
b response length or '-'
f referer
a user agent
T request time in seconds
D request time in microseconds
L request time in decimal seconds
p process ID
"""
accesslog = "/home/test/server/log/gunicorn_access.log" #访问日志文件
errorlog = "/home/test/server/log/gunicorn_error.log" #错误日志文件
```
