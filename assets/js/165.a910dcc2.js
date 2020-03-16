(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{603:function(_,v,e){"use strict";e.r(v);var p=e(19),t=Object(p.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"_057-分布式缓存重建并发冲突问题以及-zookeeper-分布式锁解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_057-分布式缓存重建并发冲突问题以及-zookeeper-分布式锁解决方案"}},[_._v("#")]),_._v(" 057. 分布式缓存重建并发冲突问题以及 zookeeper 分布式锁解决方案")]),_._v(" "),e("p",[_._v("整个三级缓存的架构已经走通了，对于 3 级缓存失效，缓存重建并发冲突问题还没有解决。")]),_._v(" "),e("p",[_._v("什么是分布式缓存重建并发冲突问题？")]),_._v(" "),e("p",[_._v("很简单，多个缓存服务实例提供服务，发现缓存失效，那么就会去重建，这个时候回出现以下几种情况：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("多个缓存实例都去数据库获取一份数据，然后放入缓存中")])]),_._v(" "),e("li",[e("p",[_._v("新数据被旧数据覆盖")]),_._v(" "),e("p",[_._v("缓存 a 和 b 都拿了一份数据，a 拿到 12:00:01 的数据，b 拿到 12:00:05 的数据")]),_._v(" "),e("p",[_._v("缓存 b 先写入 redis，缓存 a 后写入。")])])]),_._v(" "),e("p",[_._v("以上问题有多重解决方案，如：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("利用 hash 分发")]),_._v(" "),e("p",[_._v("相同商品分发到同一个服务中，服务中再用队列去重建")]),_._v(" "),e("p",[_._v("但是这就变成了有状态的缓存服务，压力全部集中到同一个服务上")])]),_._v(" "),e("li",[e("p",[_._v("利用 kafka 队列")]),_._v(" "),e("p",[_._v("源头信息服务，在发送消息到 kafka topic 的时候，都需要按照 product id 去分区")]),_._v(" "),e("p",[_._v("和上面 hash 方案类似")])]),_._v(" "),e("li",[e("p",[_._v("基于 zookeeper 分布式锁的解决方案")])])]),_._v(" "),e("p",[_._v("分布式锁：多个机器在访问同一个共享资源，需要给这个资源加一把锁，让多个机器串行访问")]),_._v(" "),e("p",[_._v("对于分布式锁，有很多种实现方式，比如 redis 也可以实现。")]),_._v(" "),e("p",[_._v("这里讲解 zk 分布式锁，zk 做分布式协调比较流程，大数据应用里面 hadoop、storm 都是基于 zk 去做分布式协调")]),_._v(" "),e("p",[_._v("zk 分布式锁的解决并发冲突的方案")]),_._v(" "),e("ol",[e("li",[_._v("变更缓存重建以及空缓存请求重建，更新 redis 之前，都需要先获取对应商品 id 的分布式锁")]),_._v(" "),e("li",[_._v("拿到分布式锁之后，需要根据时间版本去比较一下，如果自己的版本新于 redis 中的版本，那么就更新，否则就不更新")]),_._v(" "),e("li",[_._v("如果拿不到分布式锁，那么就等待，不断轮询等待，直到自己获取到分布式的锁")])])])}),[],!1,null,null,null);v.default=t.exports}}]);