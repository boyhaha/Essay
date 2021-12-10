
import os
import glob
import shutil
from PIL import Image
from comtypes import client
from docx2pdf import convert
from pathlib import Path
from win32com.client import Dispatch, constants, gencache, DispatchEx


class PDFConverter:
    def __init__(self, pathname, export_folder='.'):
        self._handle_postfix = ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx']
        self._filename_list = list()
        self._export_folder = export_folder
        print(export_folder)
        if not os.path.exists(self._export_folder):
                os.makedirs(self._export_folder)
        self._enumerate_filename(pathname)
    
    def _enumerate_filename(self, pathname):
        '''
        读取所有文件名
        '''
        full_pathname = os.path.abspath(pathname)
        if os.path.isfile(full_pathname):
            if self._is_legal_postfix(full_pathname):
                self._filename_list.append(full_pathname)
            else:
                raise TypeError('文件 {} 后缀名不合法！仅支持如下文件类型：{}。'.format(pathname, '、'.join(self._handle_postfix)))
        elif os.path.isdir(full_pathname):
            for relpath, _, files in os.walk(full_pathname):
                for name in files:
                    filename = os.path.join(full_pathname, relpath, name)
                    if self._is_legal_postfix(filename):
                        self._filename_list.append(os.path.join(filename))
        else:
            raise TypeError('文件/文件夹 {} 不存在或不合法！'.format(pathname))

    def _is_legal_postfix(self, filename):
        return filename.split('.')[-1].lower() in self._handle_postfix and not os.path.basename(filename).startswith('~')
    
    def run_conver(self):
        '''
        进行批量处理，根据后缀名调用函数执行转换
        '''
        # print('需要转换的文件数：', len(self._filename_list))
        for filename in self._filename_list:
            postfix = filename.split('.')[-1].lower()
            funcCall = getattr(self, postfix)
            # print('原文件：', filename)
            funcCall(filename)
        # print('转换完成！')
    
    def doc(self, filename):
        '''
        doc 和 docx 文件转换
        '''
        name = os.path.basename(filename).split('.')[0] + '.pdf'
        exportfile = os.path.join(self._export_folder, name)
        # print('保存 PDF 文件：', exportfile)
        gencache.EnsureModule('{00020905-0000-0000-C000-000000000046}', 0, 8, 4)
        w = Dispatch("Word.Application")
        doc = w.Documents.Open(filename)
        doc.ExportAsFixedFormat(exportfile, constants.wdExportFormatPDF,
                Item=constants.wdExportDocumentWithMarkup,
                CreateBookmarks=constants.wdExportCreateHeadingBookmarks)
        
        w.Quit(constants.wdDoNotSaveChanges)
    
    def docx(self, filename):
        self.doc(filename)
    
    def xls(self, filename):
        '''
        xls 和 xlsx 文件转换
        '''
        try:
            name = os.path.basename(filename).split('.')[0] + '.pdf'
            exportfile = os.path.join(self._export_folder, name)
            xlApp = DispatchEx("Excel.Application")
            xlApp.Visible = False    
            xlApp.DisplayAlerts = 0   
            books = xlApp.Workbooks.Open(filename,False)
            books.ExportAsFixedFormat(0, exportfile)
        except Exception as e:
            print(filename)
            raise e
        finally:
            books.Close(False)
            xlApp.Quit()
        print('保存 PDF 文件：', exportfile)
    
    def xlsx(self, filename):
        self.xls(filename)
    
    def ppt(self, filename):
        '''
        ppt 和 pptx 文件转换
        '''
        name = os.path.basename(filename).split('.')[0] + '.pdf'
        exportfile = os.path.join(self._export_folder, name)
        gencache.EnsureModule('{00020905-0000-0000-C000-000000000046}', 0, 8, 4)
        p = Dispatch("PowerPoint.Application")
        ppt = p.Presentations.Open(filename, False, False, False)
        ppt.ExportAsFixedFormat(exportfile, 2, PrintRange=None)
        # print('保存 PDF 文件：', exportfile)
        p.Quit()
    
    def pptx(self, filename):
        self.ppt(filename)


def rea(p):
    file_list = list(p.glob("**/*.*"))
    pic_name = []
    im_list = []
    for x in file_list:
        name = str(x.absolute())
        if "jpg" in name or 'png' in name or 'jpeg' in name:
            pic_name.append(x)
            # break
    for i in pic_name:
        img = Image.open(i)
        file_name, dir = get_file_name(i)
        # file_name = "".join(i.split(".")[:-1])
        img.save(f"{dir}/{file_name}.pdf", "PDF")
        # print("输出文件名称：", f"{file_name}.pdf")
 

def main():
    path = f"./in"
    p = Path(path)  # 初始化构造Path对象
    file_list = list(p.glob("**/*.pdf*"))
    for file in file_list:
        # src = os.path.join(file.absolute(), file)
        file_name, dir = get_file_name(file)
        shutil.copy(file, f"{dir}/{file_name}.pdf")

    file_list = list(p.glob("**/*.doc*"))
    for file in file_list:
        file_name, dir = get_file_name(file)
        convert(file, f"{dir}/{file_name}.pdf")
        # break
    
    rea(p)
    file_list = list(p.glob("**/*.xls*"))
    i = 0
    print(len(file_list))
    for file in file_list:
        # if i <= 1:
        #     i += 1
        #     continue
        f, dir = get_file_name(file)
        # pdfConverter = PDFConverter(str(file.absolute()), "D:/deploy/study/Essay/code/python/to_file/pdfconver/")
        pdfConverter = PDFConverter(str(file.absolute()), dir)
        pdfConverter.run_conver()
        i += 1
        # break


def get_file_name(file):
    parent = str(file.parent)
    file_name = "".join(file.name.split(".")[:-1])
    # dir = f"D:/deploy/study/Essay/code/python/to_file/pdfconver/{parent}"
    dir = os.path.join("D:/deploy/study/Essay/code/python/to_file/pdfconver", parent)
    if not os.path.exists(dir):
        os.makedirs(dir)

    dir = dir.replace("/", "\\")
    return file_name, dir


if __name__ == "__main__":
    main()
    # pdfConverter = PDFConverter("材料供应商信息表-艾仕得.xlsx", "D:/deploy/study/Essay/code/python/to_file/pdfconver/")
    # pdfConverter.run_conver()
