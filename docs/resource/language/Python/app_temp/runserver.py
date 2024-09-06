#!/usr/bin/python
# -*- coding: utf-8 -*-
from gevent import monkey

monkey.patch_all()
import argparse  # noqa
import logging  # noqa
import os  # noqa

from core.app import create_app  # noqa

__all__ = ["app"]


if __name__ != "__main__":
    yaml = os.getenv("YAML")
    app = create_app(yaml)
    gunicorn_logger = logging.getLogger("gunicorn.error")
    logging.basicConfig(level=gunicorn_logger.level, handlers=gunicorn_logger.handlers)
    app.logger.handlers = gunicorn_logger.handlers


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('-H', '--host', help="server listen host", default="0.0.0.0")
    parser.add_argument('-P', '--port', type=int, help="server listen port", default=2548)
    parser.add_argument('-Y', '--yaml', type=str, help="config name", default="application-dev.yaml")
    args = parser.parse_args()
    logging.info(f'已加载配置文件：  {args.yaml}')
    app = create_app(args.yaml)
    app.run(host=args.host, port=args.port, debug=True)
