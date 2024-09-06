import json
from datetime import date, datetime

from flask import Response


class MyJsonEncoder(json.JSONEncoder):

    @property
    def encode_dic(self):
        return {
            "ObjectId": self.encode_object_id,
            date.__name__: self.encode_datetime,
            datetime.__name__: self.encode_datetime,
        }

    @staticmethod
    def encode_object_id(obj):
        return obj.__str__()

    @staticmethod
    def encode_datetime(obj: datetime):
        return int(obj.timestamp() * 1000)

    def default(self, o):
        return self.encode_dic.get(o.__class__.__name__, super(MyJsonEncoder, self).default)(o)


def customize_json_result(data, code, msg, status=200):
    return Response(json.dumps(dict(code=code, msg=msg, data=data), ensure_ascii=False, cls=MyJsonEncoder),
                    mimetype="application/json",
                    status=status)


def jsonify(data, code=200, msg="success"):
    return customize_json_result(data, code, msg)
