# 

## 安装redis

1. 拉取镜像
   1. docker pull redis
2. 运行
   1. docker run -itd --name redis -p 6379:6379 redis
   2. -p 为端口映射