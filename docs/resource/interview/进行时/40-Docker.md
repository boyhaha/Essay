# 40-Docker

1. 对docker的理解
    1. 一种容器，沙盒技术，可以加快服务构建流程，使其更加高效，轻量化
2. [docker构建](https://www.cnblogs.com/Bourbon-tian/p/6867796.html)
    1. 使用docker commit命令。
        1. 可以想象为是在往版本控制系统里提交变更。我们先创建一个容器，并在容器里做出修改，就像修改代码一样，最后再将修改提交为一个镜像
        2. docker commit b437ffe4d630 test/apache2
            1. 指定了要提交的修改过的容器的ID（可以通过docker ps命令得到刚创建的容器ID），以及一个目标镜像仓库和镜像名，这里是test/apahce2
        3. 缺点： 不够灵活
    2. 使用docker build命令和 Dockerfile 文件
        1. Dockerfile使用基本的基于DSL（
        2. 首先创建一个名为static_web的目录用来保存Dockerfile，这个目录就是我们的构建环境（build environment）,Docker则称此环境为上下文（context）或者构建上下文（build context）。Docker会在构建镜像时将构建上下文和该上下文中的文件和目录上传到Docker守护进程。这样Docker守护进程就能直接访问你想在镜像中存储的任何代码、文件或者其他数据。这里我们还创建了一个Dockerfile文件，我们将用它构建一个能作为Web服务器的Docker镜像。
        3. Dockerfile由一系列指令和参数组成。每条指令都必须为大写字母，且后面要跟随一个参数。Dockerfile中的指令会按照顺序从上到下执行，所以应该根据需要合理安排指令的顺序。每条指令都会创建一个新的镜像层并对镜像进行提交。Docker大体上按照如下流程执行Dockerfile中的指令。
            1. Docker从基础镜像运行一个容器。
            2. 执行第一条指令，对容器进行修改。
            3. 执行类似docker commit的操作，提交一个新的镜像层。
            4. Docker再基于刚提交的镜像运行一个新的容器。
            5. 执行Dockerfile中的下一条命令，直到所有指令都执行完毕。
3. Docker Compose
    1. 用于定义和运行多容器Docker应用程序的工具
        1. 使用 Dockerfile 定义应用程序的环境
        2. 使用 docker-compose.yml 定义构成应用程序的服务，这样它们可以在隔离环境中一起运行
        3. 最后，执行 docker-compose up 命令来启动并运行整个应用程序

```
# Version: 0.0.1
  # FROM指令指定一个已经存在的镜像，后续指令都是将基于该镜像进行，这个镜像被称为基础镜像
FROM reg.linkdoc-inc.com/dw_dp/pypy-base
ADD . /opt/dcp
WORKDIR /opt/dcp

# 告诉Docker该镜像的作者是谁，以及作者的邮箱地址
MAINTAINER Bourbon Tian "bourbon@1mcloud.com"
# RUN指令会在当前镜像中运行指定的命令
RUN apt-get update
RUN apt-get install -y nginx
RUN echo 'Hi, I am in your container' > /usr/share/nginx/html/index.html
# 告诉Docker该容器内的应用程序将会使用容器的指定端口
  EXPOSE 80
  CMD make server
```

```
# cd static_web
#  -t选项为新镜像设置了仓库和名称。
# docker build -t="test/static_web" .       
Sending build context to Docker daemon 2.048 kB
Sending build context to Docker daemon
...
Successfully built 94728651ce15
```

```
# docker run -d -p 80 --name static_web test/static_web nginx -g "daemon off;"
-d选项，告诉Docker以分离（detached）的方式在后台运行。这种方式非常适合运行类似Nginx守护进程这样的需要长时间运行的进程
-p/-P， 指定容器暴露的端口 ，或者添加映射
-e, --env=[]               指定环境变量，容器中可以使用该环境变量
-h, --hostname=""          指定容器的主机名
 -v, --volume=[]            给容器挂载存储卷，挂载到容器的某个目录
```

* 搭建本地镜像源
    * # docker pull registry
    * # docker run -d -v /opt/registry:/var/lib/registry -p 5000:5000 --restart=always --name registry registry:latest
    * # 使用新的Registry给该镜像打上标签
    * # docker tag 9c30616364f4 [docker.example.com:5000/test/apache2](http://docker.example.com:5000/test/apache2)
    * # 通过docker push 命令将它推送到新的Registry中去
    * # docker push [docker.example.com:5000/test/apache2](http://docker.example.com:5000/test/apache2)

1. docker和容器化
    1. Docker是现在使用最多的容器化软件。与其它已经存在的容器化系统相比，Docker可以更加简单的创建和管理容器，并与其它开源软件集成
2. docker的优点
    * 轻量级资源使用：容器在
    * 可移植性：一个容器应用所需要的依赖都在容器中，这就让它可以在任意一台Docker主机上运行。
    * 可预测性：宿主机不需要关心容器内运行的是什么，同样，容器也不需要关心是在哪个宿主机上运行。所需要的接口都是标准化的，并且交互也都是可预测的。
3. 引擎
    1. [Docker Engine](https://www.docker.com/docker-engine)
    2. [rkt](https://coreos.com/rkt/docs/latest/)
4. 容器编排工具：
    1. [Kubernetes](http://kubernetes.io/)
        1. kubernetes特性：
            1. 自动包装
            2. 自我修复
            3. 服务发现和负载均衡
            4. 自动部署回滚
            5. 批处理
5. 操作系统
6. 容器镜像仓库
    1. [Docker Registry](https://github.com/docker/distribution)
    2. [Docker Hub](https://hub.docker.com/)
7. 监控
    * 容器输出的日志可以很方便与已有日志收集工具整合。容器监控软件通常关注容器的资源使用情况（CPU、内存）。
    * [cAdvisor](https://github.com/google/cadvisor)

* # Machine、Swarm、Compose、SocketPlane这些Docker生态圈软件
    * [Machine](https://docs.docker.com/machine/)
    * [Swarm](https://docs.docker.com/swarm/)
    * [Compose](https://docs.docker.com/compose/)
    * SocketPlane： 为容器提供了一层虚拟网络，使得网络的配置不必那么繁琐。
