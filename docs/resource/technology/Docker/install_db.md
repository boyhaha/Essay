# 

## 安装redis

1. 拉取镜像
   1. docker pull redis
2. 运行
   1. docker run -itd --name redis -p 6379:6379 redis
   2. -p 为端口映射


## postgres
1. docker run
2. 运行
   1. docker run -d --name postgres --restart always -e POSTGRES_USER='test' -e POSTGRES_PASSWORD='123456' -e ALLOW_IP_RANGE=0.0.0.0/0 -p 5432:5432 -t postgres


## mongo
1. docker pull mongo
2. 运行
   1. docker run -p 27017:27017 --name mongodb -d mongo