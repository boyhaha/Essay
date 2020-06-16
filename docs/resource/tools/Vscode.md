| 中文               | cmd + shift + v    |      |
| ------------------ | ------------------ | ---- |
| 格式化代码         | Shift + Option + F |      |
| 跳转到光标上次位置 | cmd + alt + $ $    |      |
| 预览MarkDown       | cmd + shift + v    |      |
| 搜索文件           | ctrl+P             |      |
| 跳转回之前位置     | ctrl+-             |      |
| 删除当前行         | ctrl+shift+k       |      |
|                    |                    |      |
|                    |                    |      |
|                    |                    |      |

### [快捷键](https://blog.csdn.net/u010019717/article/details/50443970)

- 查看函数, 变量 在哪里被引用
- 右键, peek reference
- 错误提示
- python.linting.flake8Enabled: true

### settings

- 设置文件隐藏
- files.exclude
- 标尺
- editor.rulers
- 一个制表符等于的空格数
- editor.tabSize

```
{
    "python.pythonPath": "xx",
    "editor.rulers": [80],
    "editor.tabSize": 4,
    "files.exclude": {
        "**/__pycache__": true  
    },
    "python.linting.flake8Args": ["--max-line-length=120"]
}
```

# 调试

```shell
# 快捷键
继续/暂停F5
越过F10
进入F11
步出⇧F11
重启⇧⌘F5
停止⇧F5
```

# 插件
GitLens
TabNine
Markdown All in one
Code Spell Checker