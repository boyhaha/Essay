(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{389:function(t,e,n){"use strict";n.r(e);var s=n(42),a=Object(s.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("h1",{attrs:{id:"转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[this._v("#")]),this._v(" 转换")]),this._v(" "),e("ul",[e("li",[this._v("查询content.raw")])]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("s = s.query('term', content__raw='python')\nfrom elasticsearch import Elasticsearch\nfrom elasticsearch_dsl import Search\n\nclient = Elasticsearch()\n\ns = Search(using=client, index=\"my-index\") \\\n    .filter(\"term\", category=\"search\") \\\n    .query(\"match\", title=\"python\")   \\\n    .exclude(\"match\", description=\"beta\")\n\ns.aggs.bucket('per_tag', 'terms', field='tags') \\\n    .metric('max_lines', 'max', field='lines')\n\nresponse = s.execute()\n\nfor hit in response:\n    print(hit.meta.score, hit.title)\n\n# 查询所有 \nfor hit in s.scan():\n    hit.to_dict()\n\nfor tag in response.aggregations.per_tag.buckets:\n    print(tag.key, tag.max_lines.value)\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);