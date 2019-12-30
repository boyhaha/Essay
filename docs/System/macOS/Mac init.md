* ### 初始化

  - imem2 https://cloud.tencent.com/developer/article/1125081
  - sys
  - sudo 免密
    - chmod u+w /etc/sudoers
    - root ALL = (ALL) NOPASSWD: NOPASSWD: ALL
    - %admin ALL = (ALL) NOPASSWD: NOPASSWD: ALL
  - home
    - sudo vim /etc/auto_master
    - sudo automount
  - sudo spctl --master-disable
    - 允许任何来源
  - 配置远程 https://linux.cn/article-8306-1.html
  - brew
  - /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  - ssh
    - [命令简化](https://linux.cn/article-8306-1.html)
    - 免密码
      - ssh-copy-id username@remote-server

  ### 邮件设置

  - http://mailhelp.mxhichina.com/smartmail/detail.vm?knoId=10647093