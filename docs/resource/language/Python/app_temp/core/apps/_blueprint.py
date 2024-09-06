import traceback

from flask import Blueprint

from core.utils.exception import APIException
from core.utils.log import logger
from core.utils.serialization import customize_json_result


def create_blueprint(name, import_name, **kwargs):
    bp = Blueprint(name, import_name, **kwargs)

    @bp.errorhandler(APIException)
    def handle_request_error(error):
        msg = traceback.format_exc()
        logger.error(msg)
        return customize_json_result({}, code=error.code, msg=error.msg, status=error.http_status)

    @bp.errorhandler(Exception)
    def handle_unknown_request_error(error):
        msg = traceback.format_exc()
        # 先不主动发送，借用sentry webhook发送
        # wx_send(msg)
        logger.error(msg)
        return customize_json_result({}, code=5001, msg=str(error), status=500)

    return bp
