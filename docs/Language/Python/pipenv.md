* # Pipenv
  
  ### pipenv [1](https://crazygit.wiseturtles.com/2018/01/08/pipenv-tour/)
  
  - 安装
  - sudo pipenv --python 2.7
  - sudo pipenv --python 3.7
  - 卸载
  - sudo pipenv --rm
  - 安装依赖
  - 
  
  ### 卸载其他Python版本
  
  - **第 1 步，删除框架**：
  
  ```
  sudo rm -rf /Library/Frameworks/Python.framework/Versions/x.x
  ```
  
  - **第 2 步，删除应用目录**：
  
  ```
  sudo rm -rf "/Applications/Python x.x"
  ```
  
  - **第 3 步，删除指向 Python 的连接**：
  
  ```
  cd /usr/local/bin/
  ls -l /usr/local/bin | grep '../Library/Frameworks/Python.framework/Versions/x.x' | awk '{print $9}' | tr -d @ | xargs rm12
  ```
  
  # virtualenv
  
  - pip install virtualenv
  - mkdir env
  - cd env
  - 
  
  ```shell
  pip install virtualenv
  
  # 创建文件夹
  mkdir  env
  cd env
  
  
  virtualenv --no-site-packages venv
  ```
  
  
