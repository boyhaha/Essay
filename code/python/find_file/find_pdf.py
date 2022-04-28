

import os
import shutil


def get_pdf_file(path):
    dirs = os.listdir(path)
    files = []
    for dir in dirs:
        dir_path = os.path.join(path, dir)
        if os.path.isdir(dir_path):

            files.extend(get_pdf_file(dir_path))
            continue
        if dir.endswith(".pdf"):
            # print(dir_path)
            files.append(dir_path)
    return files


def main():
    path = "/Users/alan/Documents/临时文件/uploadfile"
    temp = "/Users/alan/Documents/临时文件/temp"
    files = get_pdf_file(path)
    for file in files:
        new_file = os.path.join(temp, os.path.basename(file))
        shutil.copyfile(file, new_file)
    print(files)


if __name__ == "__main__":
    main()
