
import time
from functools import wraps

from flask import request

from core.utils.log import logger


def api_cost_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        url = request.path
        res = func(*args, **kwargs)
        end_time = time.time()
        logger.info("URL:{} 耗时：{}秒".format(url, end_time - start_time))
        return res
    return wrapper


def func_cost_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        # logger.info(f"{func.__name__} start")
        res = func(*args, **kwargs)
        end_time = time.time()
        logger.info("耗时统计: func: {} TIME：{}秒".format(str(func).split(" ")[1], end_time - start_time))
        return res
    return wrapper
