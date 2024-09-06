

class APIException(Exception):
    def __init__(self, code, msg="", http_status=400):
        self.code = 4000 or code
        self.msg = msg or "请求异常"
        self.http_status = http_status

    def __str__(self):
        return "{}[code:{}; msg:{}]".format(
            self.__class__.__name__, self.code, self.msg
        )


class ArgumentError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4002
        self.msg = msg or "参数错误"
        self.http_status = http_status


class NotFoundError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4004
        self.msg = msg or "URI没有找到"
        self.http_status = http_status


class TargetNotFoundError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4005
        self.msg = msg or "目标没有找到"
        self.http_status = http_status


class TargetConflictError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4009
        self.msg = msg or "目标冲突"
        self.http_status = http_status


class OperationError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4020
        self.msg = msg or "操作失败"
        self.http_status = http_status


class FieldError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 4023
        self.msg = msg or "填写信息错误"
        self.http_status = http_status


class AthenaServerError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 5014
        self.msg = msg or "Internal Server Error"
        self.http_status = http_status


class LoadDataError(APIException):
    def __init__(self, msg="", http_status=400):
        self.code = 5015
        self.msg = msg or "Internal Server Error"
        self.http_status = http_status
