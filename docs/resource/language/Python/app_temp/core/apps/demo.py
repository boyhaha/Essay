
from config.config import global_conf as config
from core.apps._blueprint import create_blueprint
from core.utils.decorator import api_cost_time
from core.utils.log import logger
from core.utils.serialization import jsonify

bp = create_blueprint("demo", __name__, url_prefix="")


@bp.route("/", methods=["GET"])
@api_cost_time
def demo():
    logger.info("info log")
    logger.warning("warning log")
    logger.error("error log")
    return jsonify("欢迎使用星河文档")


@bp.route("/config", methods=["GET"])
@api_cost_time
def get_config():
    return jsonify(config)
