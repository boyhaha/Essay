## 生成证书
1. 使用openssl生成密钥privkey.pem：
openssl genrsa -out privkey.pem 1024/2038

2. 使用密钥生成证书server.pem：
openssl req -new -x509 -key privkey.pem -out server.pem -days 365

证书信息可以随便填或者留空，只有Common Name要根据你的域名填写。

以我的个人网站为例
Common Name (e.g. server FQDN or YOUR name) []: wuyanxin.com

也可以通过*.yourdomain.com来匹配你的二级域名

## 配置nginx
server {
    listen 443;
  server_name youdomain.com;

  ssl on;
    ssl_certificate /path/to/server.pem;
    ssl_certificate_key /path/to/privkey.pem;
  
  ...
}
验证配置，重启nginx

$ sudo nginx -t && sudo nginx -s reload
## 信任证书
这时访问你的站点会得到一个不安全提示，因为你的证书不是一个有效的证书颁发机构颁发的。
这时需要我们手动信任证书。

1 点击地址栏前面的红色感叹号，再点击“详细信息”


2 点击“View certification”


3 将上图中的证书拖拽到桌面，会在桌面生成一个“wuyanxin.com.cer”文件


4 双击打开，并输入密码


5 在列表中找到你的证书，双击打开


6 将证书改为“始终信任”，然后关闭窗口，输入密码


7 刷新页面，你将获得一个绿色小锁（valid HTTPS）
