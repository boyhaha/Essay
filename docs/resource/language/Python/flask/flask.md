# 快速上手

```
# 外部可见
flask run --host=0.0.0.0

# 打开开发模式
export FLASK_ENV=development

# 单独控制调试模式开关
export FLASK_DEBUG=1
```

# 教程

- 项目可安装化
- 编写setup.py
- 测试 - tests
- conftest.py
- 固件

## 消息闪现
1. Flask 模块包含 flash() 方法。它将消息传递给下一个请求，该请求通常是一个模板
   1. message 参数是要闪现的实际消息。
   2. category 参数是可选的。它可以是“error”，“info”或“warning”。