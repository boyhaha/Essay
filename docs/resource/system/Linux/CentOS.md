---
sidebar: auto
---

# 命令

| 命令              | 功能         |     |
| ----------------- | ------------ | --- |
| lsb_release -a    | 查看内核版本 |     |
| cat /proc/version |              |     |
|                   |              |     |

## 1. 基本命令

- 查看内核版本 
  - lsb_release -a
  - cat /proc/version


## 2. crontab

- 环境变量
- 无法读取系统环境变量, 需要在crontab之前命令之前声明
- cat /etc/crontab
- crontab -e
- 添加crontab 任务
- crontab -l
- 查看正在运行的 任务

## 3. telnet