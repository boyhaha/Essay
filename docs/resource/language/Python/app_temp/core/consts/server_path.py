
import os


class Path():
    PROJECT_PATH = os.path.abspath(os.path.join(__file__, '../../'))
    CONFIG_DIR = os.path.realpath(os.path.join(PROJECT_PATH, '../config'))
    LOG_PATH = os.path.abspath(os.path.join(PROJECT_PATH, '../logs'))
    STATIC_PATH = os.path.abspath(os.path.join(PROJECT_PATH, '../static'))
