import os

from flask import Flask
from werkzeug.utils import import_string

from config.config import init_global_conf

blueprints = [
    "core.apps.demo:bp",
]


def create_app(config_file=None):

    # 读取配置文件
    pwd = os.getcwd()
    config_file = config_file or "application-dev.yaml"
    config_path = os.path.join(pwd + "/config", config_file)
    conf = init_global_conf(config_path)
    static = conf.get('static', {})
    app = Flask(
        __name__,
        static_url_path=static.get('static_url_path'),
        static_folder=static.get("static_folder"),
    )
    app.config.update(conf)

    for blueprint in blueprints:
        blueprint = import_string(blueprint)
        app.register_blueprint(blueprint)

    return app
