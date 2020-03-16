(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{608:function(e,a,s){"use strict";s.r(a);var n=s(19),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_060-缓存数据生产服务中的-zk-分布式锁解决方案的代码实现（三）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_060-缓存数据生产服务中的-zk-分布式锁解决方案的代码实现（三）"}},[e._v("#")]),e._v(" 060. 缓存数据生产服务中的 zk 分布式锁解决方案的代码实现（三）")]),e._v(" "),s("p",[e._v("启动项目来测试，会发现报错了。找到两个 StaticLoggerBinder，来自两个 jar 中；")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SLF4J: Class path contains multiple SLF4J bindings.\nSLF4J: Found binding in [jar:file:/E:/SoftwareDevelop/Repository/caches/modules-2/files-2.1/org.slf4j/slf4j-log4j12/1.7.25/110cefe2df103412849d72ef7a67e4e91e4266b4/slf4j-log4j12-1.7.25.jar!/org/slf4j/impl/StaticLoggerBinder.class]\nSLF4J: Found binding in [jar:file:/E:/SoftwareDevelop/Repository/caches/modules-2/files-2.1/ch.qos.logback/logback-classic/1.2.3/7c4f3c474fb2c041d8028740440937705ebb473a/logback-classic-1.2.3.jar!/org/slf4j/impl/StaticLoggerBinder.class]\nSLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.\nSLF4J: Actual binding is of type [org.slf4j.impl.Log4jLoggerFactory]\nException in thread \"main\" java.lang.IllegalArgumentException: LoggerFactory is not a Logback LoggerContext but Logback is on the classpath. Either remove Logback or the competing implementation (class org.slf4j.impl.Log4jLoggerFactory loaded from file:/E:/SoftwareDevelop/Repository/caches/modules-2/files-2.1/org.slf4j/slf4j-log4j12/1.7.25/110cefe2df103412849d72ef7a67e4e91e4266b4/slf4j-log4j12-1.7.25.jar). If you are using WebLogic you will need to add 'org.slf4j' to prefer-application-packages in WEB-INF/weblogic.xml: org.slf4j.impl.Log4jLoggerFactory\n\tat org.springframework.util.Assert.instanceCheckFailed(Assert.java:655)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("这里排除 zookper 中的")]),e._v(" "),s("h2",{attrs:{id:"gradle-解决冲突-查找依赖树"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gradle-解决冲突-查找依赖树"}},[e._v("#")]),e._v(" gradle 解决冲突&查找依赖树")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('gradle dependencyInsight --dependency slf4j-log4j12\n\nH:\\dev\\project\\mrcode\\cache-pdp\\eshop-cache>gradle dependencyInsight --dependency slf4j-log4j12\n\n> Task :eshop-cache:dependencyInsight\norg.slf4j:slf4j-log4j12:1.7.25 (selected by rule)\n   variant "runtime" [\n      org.gradle.status = release (not requested)\n      Requested attributes not found in the selected variant:\n         org.gradle.usage  = java-api\n   ]\n\norg.slf4j:slf4j-log4j12:1.6.1 -> 1.7.25\n   variant "runtime" [\n      org.gradle.status = release (not requested)\n      Requested attributes not found in the selected variant:\n         org.gradle.usage  = java-api\n   ]\n\\--- org.apache.zookeeper:zookeeper:3.4.5\n     +--- compileClasspath\n     +--- org.apache.kafka:kafka_2.9.2:0.8.1.1\n     |    \\--- compileClasspath\n     \\--- com.101tec:zkclient:0.3\n          \\--- org.apache.kafka:kafka_2.9.2:0.8.1.1 (*)\n\n(*) - dependencies omitted (listed previously)\n\nA web-based, searchable dependency report is available by adding the --scan option.\n\nBUILD SUCCESSFUL in 7s\n1 actionable task: 1 executed\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br")])]),s("p",[e._v("可以看到 在 zk 里面有引用，然后 kafka 里面有引用 zookper。所以需要排除两个地方")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("compile ('org.apache.kafka:kafka_2.9.2:0.8.1.1'){\n       exclude group: 'org.slf4j', module: 'slf4j-log4j12'\n   }\n compile ('org.apache.zookeeper:zookeeper:3.4.5'){\n     exclude group: 'org.slf4j', module: 'slf4j-log4j12'\n }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"测试缓存重建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试缓存重建流程"}},[e._v("#")]),e._v(" 测试缓存重建流程")]),e._v(" "),s("p",[e._v("首先先删除 redis 中的数据，通过之前的 redis 章节中的命令登录并删除")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("redis-cli -h eshop-cache02 -p 7003\neshop-cache02:7003> del product_info_1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("再启动 eshop-cache 服务；")]),e._v(" "),s("p",[e._v("访问："),s("code",[e._v("http://localhost:6002/getProductInfo?productId=1")]),e._v(",查看打印日志")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2019-05-14 22:22:38.618  INFO 11616 --- [nio-6002-exec-1] c.m.c.e.c.controller.CacheController     : 从 redis 中获取商品信息\n2019-05-14 22:22:38.643  INFO 11616 --- [nio-6002-exec-1] c.m.c.e.c.controller.CacheController     : 从 ehcache 中获取商品信息\n2019-05-14 22:22:45.276  INFO 11616 --- [p-cache03:2181)] org.apache.zookeeper.ClientCnxn          : Session establishment complete on server eshop-cache03/192.168.99.172:2181, sessionid = 0x26a8e8df54a0001, negotiated timeout = 5000\nwatch event：SyncConnected\nzookeeper 已连接\nzookeeper 初始化成功\n获取锁成功 product[id=1]\n2019-05-14 22:22:45.295  INFO 11616 --- [      Thread-14] c.m.c.e.cache.controller.RebuildCache    : 缓存重建成功：cn.mrcode.cachepdp.eshop.cache.model.ProductInfo@1ce9e40a\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("再次访问，只有一条日志了")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("2019-05-14 22:23:52.328  INFO 11616 --- [nio-6002-exec-4] c.m.c.e.c.controller.CacheController     : 从 redis 中获取商品信息\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"测试商品信息变更缓存重建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试商品信息变更缓存重建"}},[e._v("#")]),e._v(" 测试商品信息变更缓存重建")]),e._v(" "),s("p",[e._v("也就是  KafkaMessageProcessor 中的逻辑")]),e._v(" "),s("p",[e._v("这个测试需要手动往 kafka 中植入一条数据，触发这个消费逻辑")]),e._v(" "),s("p",[e._v("手动植入数据参考 "),s("RouterLink",{attrs:{to:"/cache-pdp/050.html#测试业务逻辑"}},[e._v("这里")])],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('bin/kafka-console-producer.sh --broker-list 192.168.99.170:9092,192.168.99.171:9092,192.168.99.172:9092 --topic eshop-message\n\n{"serviceId":"productInfoService","productId":"1"}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("日志打印")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("watch event：SyncConnected\nzookeeper 已连接\nzookeeper 初始化成功\n获取锁成功 product[id=1]\n2019-05-14 22:37:32.884  INFO 6692 --- [      Thread-29] c.m.c.e.c.kafka.KafkaMessageProcessor    : 获取刚保存到本地缓存的商品信息：cn.mrcode.cachepdp.eshop.cache.model.ProductInfo@37582749\n获取锁成功 product[id=1]\n2019-05-14 22:37:38.648  INFO 6692 --- [      Thread-29] c.m.c.e.c.kafka.KafkaMessageProcessor    : 数据未变更过\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h2",{attrs:{id:"测试两个流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试两个流程"}},[e._v("#")]),e._v(" 测试两个流程")]),e._v(" "),s("ol",[s("li",[e._v("增加 kafka 获取锁后的休眠，模拟耗时操作")]),e._v(" "),s("li",[e._v("删除 redis 缓存，重启项目后")]),e._v(" "),s("li",[e._v("先触发 kafka")]),e._v(" "),s("li",[e._v("再访问 "),s("code",[e._v("http://localhost:6002/getProductInfo?productId=1")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("watch event：SyncConnected\nzookeeper 已连接\nzookeeper 初始化成功\n获取锁成功 product[id=1]\n2019-05-14 22:44:56.225  INFO 9376 --- [      Thread-30] c.m.c.e.c.kafka.KafkaMessageProcessor    : kafka 休眠 10 秒\n2019-05-14 22:44:59.640 TRACE 9376 --- [nio-6002-exec-1] o.s.web.servlet.DispatcherServlet        : GET \"/getProductInfo?productId=1\", parameters={masked}, headers={masked} in DispatcherServlet 'dispatcherServlet'\n2019-05-14 22:44:59.649 TRACE 9376 --- [nio-6002-exec-1] s.w.s.m.m.a.RequestMappingHandlerMapping : Mapped to public cn.mrcode.cachepdp.eshop.cache.model.ProductInfo cn.mrcode.cachepdp.eshop.cache.controller.CacheController.getProductInfo(java.lang.Long)\n2019-05-14 22:44:59.672 TRACE 9376 --- [nio-6002-exec-1] .w.s.m.m.a.ServletInvocableHandlerMethod : Arguments: [1]\n2019-05-14 22:44:59.682  INFO 9376 --- [nio-6002-exec-1] c.m.c.e.c.controller.CacheController     : 从 redis 中获取商品信息\n2019-05-14 22:44:59.705  INFO 9376 --- [nio-6002-exec-1] c.m.c.e.c.controller.CacheController     : 从 ehcache 中获取商品信息\norg.apache.zookeeper.KeeperException$NodeExistsException: KeeperErrorCode = NodeExists for /product-lock-1\n\tat org.apache.zookeeper.KeeperException.create(KeeperException.java:119)\n\tat org.apache.zookeeper.KeeperException.create(KeeperException.java:51)\n\tat org.apache.zookeeper.ZooKeeper.create(ZooKeeper.java:783)\n\tat cn.mrcode.cachepdp.eshop.cache.ZooKeeperSession.acquireDistributedLock(ZooKeeperSession.java:58)\n\tat cn.mrcode.cachepdp.eshop.cache.controller.RebuildCache.lambda$start$0(RebuildCache.java:58)\n\tat cn.mrcode.cachepdp.eshop.cache.controller.RebuildCache$$Lambda$433/1623148876.run(Unknown Source)\n\tat java.lang.Thread.run(Thread.java:745)\n\n2019-05-14 22:45:06.243  INFO 9376 --- [      Thread-30] c.m.c.e.c.kafka.KafkaMessageProcessor    : 获取刚保存到本地缓存的商品信息：cn.mrcode.cachepdp.eshop.cache.model.ProductInfo@9fbc9fb\n获取锁成功 product[id=1] 尝试了 180 次.\n2019-05-14 22:45:06.293  INFO 9376 --- [      Thread-13] c.m.c.e.cache.controller.RebuildCache    : 此次数据版本落后，放弃重建\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br")])]),s("p",[e._v("上面的日志可以看到：")]),e._v(" "),s("ol",[s("li",[e._v("在休眠过程中，触发了缓存重建操作")]),e._v(" "),s("li",[e._v("缓存重建一直在等待锁的释放，最后尝试了 180 次，才获取到")]),e._v(" "),s("li",[e._v("获取到之后，发现 kafka 线程重建缓存后的数据比自己的新（其实是一样的时间，日志打印问题），所以放弃了往 redis 中放入数据的操作")])]),e._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("h3",{attrs:{id:"思想总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思想总结"}},[e._v("#")]),e._v(" 思想总结")]),e._v(" "),s("p",[e._v("缓存重建出现在两个地方：")]),e._v(" "),s("ol",[s("li",[e._v("当基础服务信息变更之后（被动）")]),e._v(" "),s("li",[e._v("当所有缓存失效之后（主动）")])]),e._v(" "),s("p",[e._v("一个主动一个被动，他们的执行逻辑都相同，其实可以使用一个队列逻辑来处理缓存重建")]),e._v(" "),s("p",[e._v("缓存重建重要依赖「zk 分布式锁」让多个实例/操作 串行化起来。避免脏数据覆盖新数据")]),e._v(" "),s("h3",{attrs:{id:"疑问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[e._v("#")]),e._v(" 疑问")]),e._v(" "),s("p",[e._v("此处的 kafka 调试还是不能 debug。一 debug 线程就卡卡住；")]),e._v(" "),s("p",[e._v("另外这个逻辑细节有些地方是不严谨的，比如从数据库获取数据，再用分布式锁去，\n那么会不会出现在分布式锁之前很多请求全部打到数据库中去了呢？")]),e._v(" "),s("p",[e._v("我这里只是提出来课程中的一点疑问，现在最主要的还是要跟着课程思路走")])])}),[],!1,null,null,null);a.default=r.exports}}]);