(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{597:function(e,n,a){"use strict";a.r(n);var t=a(19),r=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_056-基于-nginx-lua-java-完成多级缓存架构的核心业务逻辑（三）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_056-基于-nginx-lua-java-完成多级缓存架构的核心业务逻辑（三）"}},[e._v("#")]),e._v(" 056. 基于 nginx + lua + java 完成多级缓存架构的核心业务逻辑（三）")]),e._v(" "),a("p",[e._v("前面章节已经测试通了流程，但是漏掉了一个核心：没有检测 nginx 本地缓存是否有效")]),e._v(" "),a("p",[e._v("这里来多次访问："),a("code",[e._v("http://eshop-cache03/product?method=product&productId=1&shopId=1")]),e._v(",\n并观察后台打印日志信息")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2019-05-07 21:37:24.009  INFO 5792 --- [nio-6002-exec-1] c.m.c.e.c.controller.CacheController     : 从 redis 中获取商品信息\n2019-05-07 21:37:24.275  INFO 5792 --- [nio-6002-exec-3] c.m.c.e.c.controller.CacheController     : 从 redis 中获取店铺信息\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("第一次访问的时候，nginx 本地缓存没有，会去 redis 中获取，后面多次访问的时候，\n就会走 nginx 本地缓存了，过期时间设置的是 10 分钟")]),e._v(" "),a("p",[e._v("来回顾下流程：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("缓存数据生产")]),e._v(" "),a("p",[e._v("有数据变更则主动更新两级缓存（ehcache + redis）")]),e._v(" "),a("p",[e._v("通过缓存维度化拆分，来达到细粒度和小影响更新缓存")])]),e._v(" "),a("li",[a("p",[e._v("分发层 ngix + 应用层 nginx")]),e._v(" "),a("p",[e._v("自定义流量分发策略，提高缓存命中")]),e._v(" "),a("p",[e._v("nginx shared dice 缓存 ->  redis 和 ehcache，")]),e._v(" "),a("p",[e._v("渲染 htm 模板并返回客户端")])])]),e._v(" "),a("p",[e._v("但是还差一个关键的要点，当前面的三级缓存失效（nginx、redis、ehcache）时，\n就需要缓存服务重新拉取数据，去更新到 redis 和 ehcache 中。")]),e._v(" "),a("p",[e._v("这个关键点涉及到分布式缓存重建并发冲突问题")])])}),[],!1,null,null,null);n.default=r.exports}}]);