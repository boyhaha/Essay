# 安装

## CentOS 安装docker

```
# 查看内核版本
uname -r 
```

### 启动服务

- service docker start
- 自动启动
- su root # 先切换到root用户, 再执行以下命令
- systemctl enable docker # 开机自动启动docker
- systemctl start docker # 启动docker
- systemctl restart docker # 重启dokcer

### 搭建registry

- docker run -d -p 5000:5000 --restart always --name registry registry:2
- 使用V2版本的 registry
- 启动UI界面
- docker run -d -p 8080:8080 --name registry-web --link registry -e REGISTRY_URL=http://registry:5000/v2 -e REGISTRY_NAME=localhost:5000 hyper/docker-registry-web
- 上传
- 命令
  - docker tag athena:0.1 127.0.0.1:5000/athena:0.1
  - docker push 127.0.0.1:5000/athena
- 需要修改镜像名
  - 格式为 `docker tag IMAGE[:TAG] [REGISTRY_HOST[:REGISTRY_PORT]/]REPOSITORY[:TAG]`

### 常用命令

- 列出镜像
- docker system df
  - 查看镜像，容器，数据卷所占用的空间
- docker image ls -f since=mongo:3.2
  - 某个tag之后建立的
  - before
  - options
  - -f
    - 过滤条件
  - -q
    - 只显示 ID
- 删除镜像
- docker rmi …..
  - docker image rm $(docker image ls -q redis)
- docker image rm 504
  - 删除的时候可以用短 id ，只要足够区分于别的镜像就可以
- docker image rm centos
  - 也可以使用<仓库名>:<标签>
- 
- 构建镜像
  - docker commit
    - 使用 `docker commit` 意味着所有对镜像的操作都是黑箱操作，生成的镜像也被称为**黑箱镜像**
- 进入Docker容器
  - sudo docker exec -it xxx /bin/bash
- 查看日志
  - docker logs [OPTIONS] CONTAINER
  - Options:
        --details        显示更多的信息
    -f, --follow         跟踪实时日志
        --since string   显示自某个timestamp之后的日志，或相对时间，如42m（即42分钟）
        --tail string    从日志末尾显示多少行日志， 默认是all
    -t, --timestamps     显示时间戳
        --until string   显示自某个timestamp之前的日志，或相对时间，如42m（即42分钟）
