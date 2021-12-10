## RFC

### RFC 6749

```
（A）用户打开客户端以后，客户端要求用户给予授权。

（B）用户同意给予客户端授权。

（C）客户端使用上一步获得的授权，向认证服务器申请令牌。

（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。

（E）客户端使用令牌，向资源服务器申请获取资源。

（F）资源服务器确认令牌无误，同意向客户端开放资源。
```

### 访问控制策略（AC）

- 基于访问控制列表（ACL）还是基于用户角色的访问控制（RBAC）或者其他访问控制策略

### 认证授权方式

- ### HTTP Basic Authentication

- 家用路由器管理界面

- ### HMAC（AK/SK）认证

- RFC 2104

- 七牛

- 流程如下

  - 客户端需要在认证服务器中预先设置 access key（AK 或叫 app ID） 和 secure key（SK）
  - 在调用 API 时，客户端需要对参数和 access key 进行自然排序后并使用 secure key 进行签名生成一个额外的参数 digest
  - 服务器根据预先设置的 secure key 进行同样的摘要计算，并要求结果完全一致
  - **注意 secure key 不能在网络中传输，以及在不受信任的位置存放（浏览器等）**

### Token

1. refresh_token
2. access token 是客户端访问资源服务器的令牌。拥有这个令牌代表着得到用户的授权
3. refresh token 一定是保存在客户端的服务器上的，而绝不能存放在狭义的客户端
4. http://xxx.xxx.com/refresh?refreshtoken=&client_id=&client_secret=

### Python 接入