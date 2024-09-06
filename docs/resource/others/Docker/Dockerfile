# FROM tensorflow/tensorflow:devel-gpu
# FROM starsee-translate:v1.0  # csanmt

# nllb
FROM pytorch/pytorch:2.0.1-cuda11.7-cudnn8-devel

ARG KALDI_MKL
ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=Etc/UTC

COPY requirements.txt requirements.txt

RUN pip install -r requirements.txt -i https://pypi.doubanio.com/simple --timeout=1000 --no-cache





# asr
FROM python:3.10.11
ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=Etc/UTC
COPY requirements.txt requirements.txt

# 设置 ENTRYPOINT
ENTRYPOINT ["tail", "-f", "requirements.txt"]



### 
FROM ubuntu:18.04
RUN apt-get update && apt-get install -y ca-certificates --reinstall

COPY /sources.list /etc/apt/sources.list

RUN rm -rf /etc/apt/sources.list.d && \
    apt-get update &&\
    apt-get install -y --assume-yes apt-utils wget vim git build-essential zlib1g-dev \
    libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev \
    libsqlite3-dev  libbz2-dev  zsh liblzma-dev lzma language-pack-en && \
    git config --global --add safe.directory "*"

COPY /Python-3.9.18.tgz /opt/

RUN cd /opt && tar -xvf Python-3.9.18.tgz && cd Python-3.9.18 && \
    ./configure --enable-optimizations  && make && make altinstall && \
    cd / && rm -rf /opt/Python-3.9.18 && \
    ln -s /usr/local/bin/python3.9  /usr/bin/python && \
    python -m pip config set global.index-url 'https://pypi.douban.com/simple' && \
    python -m pip install --upgrade pip
RUN python -m pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && \
    python -m pip install --upgrade pip

WORKDIR /repo

ENTRYPOINT [ "python", "runserver.py" ]