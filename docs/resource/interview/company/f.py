# -*- coding: utf-8 -*-
import os


def main():
    dirs = os.listdir("./")
    di = [{key: key.split("-")[0]} for key in dirs]
    di.sort(key= lambda x: list(x.values())[0])
    for d in di:
        name = list(d.keys())[0]
        print("## [{}](./{})".format(name, name))


if __name__ == "__main__":
    main()
