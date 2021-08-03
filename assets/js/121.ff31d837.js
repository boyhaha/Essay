(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{499:function(t,a,e){"use strict";e.r(a);var s=e(44),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"rfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rfc"}},[t._v("#")]),t._v(" RFC")]),t._v(" "),e("h3",{attrs:{id:"rfc-6749"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rfc-6749"}},[t._v("#")]),t._v(" RFC 6749")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("（A）用户打开客户端以后，客户端要求用户给予授权。\n\n（B）用户同意给予客户端授权。\n\n（C）客户端使用上一步获得的授权，向认证服务器申请令牌。\n\n（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。\n\n（E）客户端使用令牌，向资源服务器申请获取资源。\n\n（F）资源服务器确认令牌无误，同意向客户端开放资源。\n")])])]),e("h3",{attrs:{id:"访问控制策略-ac"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问控制策略-ac"}},[t._v("#")]),t._v(" 访问控制策略（AC）")]),t._v(" "),e("ul",[e("li",[t._v("基于访问控制列表（ACL）还是基于用户角色的访问控制（RBAC）或者其他访问控制策略")])]),t._v(" "),e("h3",{attrs:{id:"认证授权方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证授权方式"}},[t._v("#")]),t._v(" 认证授权方式")]),t._v(" "),e("ul",[e("li",[e("h3",{attrs:{id:"http-basic-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-basic-authentication"}},[t._v("#")]),t._v(" HTTP Basic Authentication")])]),t._v(" "),e("li",[e("p",[t._v("家用路由器管理界面")])]),t._v(" "),e("li",[e("h3",{attrs:{id:"hmac-ak-sk-认证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hmac-ak-sk-认证"}},[t._v("#")]),t._v(" HMAC（AK/SK）认证")])]),t._v(" "),e("li",[e("p",[t._v("RFC 2104")])]),t._v(" "),e("li",[e("p",[t._v("七牛")])]),t._v(" "),e("li",[e("p",[t._v("流程如下")]),t._v(" "),e("ul",[e("li",[t._v("客户端需要在认证服务器中预先设置 access key（AK 或叫 app ID） 和 secure key（SK）")]),t._v(" "),e("li",[t._v("在调用 API 时，客户端需要对参数和 access key 进行自然排序后并使用 secure key 进行签名生成一个额外的参数 digest")]),t._v(" "),e("li",[t._v("服务器根据预先设置的 secure key 进行同样的摘要计算，并要求结果完全一致")]),t._v(" "),e("li",[e("strong",[t._v("注意 secure key 不能在网络中传输，以及在不受信任的位置存放（浏览器等）")])])])])]),t._v(" "),e("h3",{attrs:{id:"token"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),e("ol",[e("li",[t._v("refresh_token")]),t._v(" "),e("li",[t._v("access token 是客户端访问资源服务器的令牌。拥有这个令牌代表着得到用户的授权")]),t._v(" "),e("li",[t._v("refresh token 一定是保存在客户端的服务器上的，而绝不能存放在狭义的客户端")]),t._v(" "),e("li",[t._v("http://xxx.xxx.com/refresh?refreshtoken=&client_id=&client_secret=")])]),t._v(" "),e("h3",{attrs:{id:"python-接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#python-接入"}},[t._v("#")]),t._v(" Python 接入")])])}),[],!1,null,null,null);a.default=r.exports}}]);