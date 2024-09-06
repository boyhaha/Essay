import os

import yaml

global_conf = {}


class ReadYaml:

    @classmethod
    def read(cls, path):
        with open(path, 'r', encoding='utf-8') as f:
            config_info = f.read()
        return yaml.load(config_info, yaml.SafeLoader)


def init_global_conf(path):
    global global_conf
    global_conf.clear()
    if not os.path.exists(path):
        return global_conf
    global_conf.update(ReadYaml.read(path))
    return global_conf


global_conf = init_global_conf(os.path.join(
    os.path.dirname(__file__),
    os.environ.get('local_config', 'application-dev.yaml')
))
