import logging.config

from config.config import global_conf

log_conf = {
    "version": 1,
    "formatters": {
        "default": {
            "format": "%(asctime)s.%(msecs)03d [%(process)d] [%(thread)d] %(levelname)8s [%(module)s.%(funcName)s:%(lineno)d]: "  # noqa
            "%(message)s",
            "datefmt": "%Y-%m-%d %H:%M:%S"
        },
    },
    "handlers": {
        "info": {
            "level": "INFO",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "backupCount": 10,
            "when": "D",
            "delay": True,
            "filename": "logs/info.log",
            "encoding": "utf-8",
            "formatter": "default"
        },
        "error": {
            "level": "ERROR",
            "class": "logging.handlers.TimedRotatingFileHandler",
            "backupCount": 10,
            "when": "D",
            "delay": True,
            "filename": "logs/error.log",
            "encoding": "utf-8",
            "formatter": "default"
        },
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "default",
            "level": "DEBUG",
        },
    },
    "root": {
        "handlers": ["info", "console", "error"],
        "level": global_conf.get("log", {}).get("level", "INFO"),
    },
}

logging.config.dictConfig(log_conf)
logger = logging.getLogger(__name__)
log = logging.getLogger('werkzeug')
log.disabled = True
