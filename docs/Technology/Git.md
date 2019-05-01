

1. fork 
   1. 添加 源地址
   2. git remote add upstream https://github.com/被fork的仓库.git 
   3. fetch
      1. git fetch upstream master:master 
      2. git rebase master 
   4. pull
      1. git pull upstream master:master --rebase







### 查看某次提交

* 查看某次提交修改了那些文件
  * git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190
* 将某次提交文件打包
  * git diff-tree -r --no-commit-id --name-only cca58dfd8a7f0363bb05d22cdf2801faf692c190 | xargs tar -rf mytarfile.tar