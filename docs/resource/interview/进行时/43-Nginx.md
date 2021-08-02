# 43-Nginx

1. **Nginx：**
    1. **轻量级的Web服务器、反向代理服务器。 **内存占用少，启动极快，高并发能力强，在互联网项目中广泛应用.****
    2. Nginx是一款面向性能设计的HTTP服务器，一个邮件代理服务器和一个通用的TCP / UDP代理服务器，一个异步框架的
    3. Nginx使用异步事件驱动的方法来处理请求。Nginx的模块化事件驱动架构可以在高负载下提供更可预测的性能。
    4. Nginx在官方测试的结果中，能够支持五万个并行连接，而在实际的运作中，可以支持二万至四万个并行连接。
    5. Nginx提供缓存机制，可以加快访问速度
2. Nginx的Master-Worker模式
    1. 启动Nginx后，其实就是在80端口启动了Socket服务进行监听，Nginx涉及Master进程和Worker进程。
        1. Master进程的作用是？
            * 读取并验证配置文件nginx.conf；管理worker进程；
        2. Worker进程的作用是？
            * 每一个Worker进程都维护一个线程（避免线程切换），处理连接和请求；注意Worker进程的个数由配置文件决定，一般和CPU个数相关
    2. Nginx 热部署  nginx reload
        1. master进程检查配置的正确性，如果不正确则不reload，nginx按照原配置工作。
        2. 如果正确，则nginx启动新的worker，采用新的配置文件。
        3. nginx将新的请求分配给新的worker。
        4. nginx等以前的worker处理完旧的请求，关闭以前的woker。
        5. 重复上面过程，直到全部旧的worker进程都被关闭掉
    3. Nginx高并发下的有效处理
        1. Nginx采用了Linux的epoll模型，epoll模型基于事件驱动机制，它可以监控多个事件是否准备完毕，如果OK，那么放入epoll队列中，这个过程是异步的。worker只需要从epoll队列循环处理即可
3. Nginx挂了怎么办
    1. **Keepalived+Nginx实现高可用**
        1. 请求不要直接打到Nginx上，应该先通过Keepalived（这就是所谓虚拟IP，VIP）
        2. Keepalived应该能监控Nginx的生命状态（提供一个用户自定义的脚本，定期检查Nginx进程状态，进行权重变化,从而实现Nginx故障切换）
4. 负载均衡四种调度算法
   1. weight 轮询（默认）。每个请求按时间顺序逐一分配到不同的后端服务器。weight。指定轮询权值，weight值越大，分配到的访问机率越高，主要用于后端每个服务器性能不均的情况下
   2. ip_hash
   3. fair. 依据页面大小和加载时间长短智能地进行负载均衡, 响应时间短的优先分配. 须下载Nginx的upstream_fair模块
   4. url_hash. 须安装Nginx 的hash软件包
5. upstream其他参数
    1. down，表示当前的server暂时不参与负载均衡。
    2. backup，预留的备份机器。当其他所有的非backup机器出现故障或者忙的时候，才会请求backup机器，因此这台机器的压力最轻。
    3. max_fails，允许请求失败的次数，默认为1。当超过最大次数时，返回proxy_next_upstream 模块定义的错误。
    4. fail_timeout，在经历了max_fails次失败后，暂停服务的时间。max_fails可以和fail_timeout一起使用
    5. 当负载调度算法为ip_hash时，后端服务器在负载均衡调度中的状态不能是down和backup
6.  反向代理 / 正向代理
    1. 反向
        1. 客户端不需要配置，直接访问域名或ip，由代理服务器进行分发
        2. 服务端不可见
        3. 反向代理中，proxy和server同属一个LAN，对client透明
    2. 正向
        1. 客户端需要一些配置，代理服务器将请求分发。
        2. 客户端不可见
        3. 正向代理中，proxy和client同属一个LAN，对server透明

**main(全局设置)****、****events(nginx工作模式)****、****http(http设置)****、** 

**sever(主机设置)****、****location(URL匹配)****、****upstream(负载均衡服务器设置)****。**

```
    # main
    
    user nobody nobody;
    worker_processes 2;
    error_log /usr/local/var/log/nginx/error.log notice;
    pid /usr/local/var/run/nginx/nginx.pid;
    worker_rlimit_nofile 1024;
    events {
        use kqueue; #mac平台 / linux 一般使用 epoll
        worker_connections 1024;
    }

    http{
        include mime.types;
        default_type application/octet-stream;
        log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for"';
        access_log /usr/local/var/log/nginx/access.log main;
        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 10;
        #gzip on;
        upstream myproject {
        .....
        }
        server {
        ....
        }
    }

----------------------------------------------------------------------

    # 负载均衡
    upstream dcp{
         ip_hash
server 10.211.55.2:8001; # 此处为uwsgi运行的ip地址和端口号
# 如果有多台服务器，可以在此处继续添加服务器地址
}

server {
listen 80;
server_name dcp.linkdoc.com;

#charset koi8-r;

access_log logs/host.access.log main;
        location /xadmin {
proxy_pass dcp;
}
        
        # 开启正则匹配
location ~ .py {
proxy_pass dcp;
}

# root 说明是静态资源
        location / {
root /home/python/Desktop/front_end_pc;
index index.html index.htm;
}

error_page 500 502 503 504 /50x.html;
location = /50x.html {
root html;
}

}
```
