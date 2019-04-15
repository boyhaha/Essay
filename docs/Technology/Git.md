

1. fork 
   1. 添加 源地址
   2. git remote add upstream https://github.com/被fork的仓库.git 
   3. fetch
      1. git fetch upstream master:master 
      2. git rebase master 
   4. pull
      1. git pull upstream master:master --rebase