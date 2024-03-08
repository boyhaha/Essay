## pip 遇到的问题

1. wsl pip install 失败(NewConnectionError)
   1. 重启电脑, 刷新DNS缓存



pip list --format=freeze > requirements.txt
- 使用上述命令导出的文件中，会包含如下几个包：distribute，pip，setuptools，wheel，建议手动删除！
