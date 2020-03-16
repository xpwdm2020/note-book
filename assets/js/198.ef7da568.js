(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{681:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_138-商品详情页动态渲染系统：redis-复习以及-twemproxy-基础知识讲解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_138-商品详情页动态渲染系统：redis-复习以及-twemproxy-基础知识讲解"}},[s._v("#")]),s._v(" 138. 商品详情页动态渲染系统：redis 复习以及 twemproxy 基础知识讲解")]),s._v(" "),t("h2",{attrs:{id:"部署-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-redis"}},[s._v("#")]),s._v(" 部署 redis")]),s._v(" "),t("p",[s._v("本次使用 redis-2.8.19.tar.gz，关于该版本过旧问题：实际在做类似这种 nginx+lua 生产环境的部署的时候，不一定用最新的版本就是最好，老版本一般比较稳定，nginx+lua 整合用老点的版本，会比较保险一些")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/redis-test\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-2.8.19.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-2.8.19\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/local/redis-test/redis-2.8.19/src/redis-server /usr/local/redis-test/redis-2.8.19/redis.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 redis 进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接该实例")]),s._v("\n/usr/local/redis-test/redis-2.8.19/src/redis-cli -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 简单测试是否正常存取值")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v1\nget k1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h1",{attrs:{id:"twemproxy-部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#twemproxy-部署"}},[s._v("#")]),s._v(" twemproxy 部署")]),s._v(" "),t("p",[s._v("不要使用自动安装，因为对版本有要求，自动安装的版本过低")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y autoconf automake libtool\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 由于对版本有要求，所以这里还是需要自己手动安装")]),s._v("\nyum remove -y autoconf --直接将 autoconf 和 automake、libtool 都删除掉了\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("安装到 /usr/local/twemproxy-test 目录下")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/twemproxy-test\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 依赖安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" ftp://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf autoconf-2.69.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" autoconf-2.69\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://ftp.gnu.org/gnu/automake/automake-1.14.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf automake-1.14.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" automake-1.14\n./bootstrap.sh\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://ftpmirror.gnu.org/libtool/libtool-2.4.2.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf libtool-2.4.2.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" libtool-2.4.2\n./configure --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# twemproxy 安装")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf twemproxy-0.4.0.tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" twemproxy-0.4.0\nautoreconf -fvi\n./configure "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/twemproxy-test/twemproxy-0.4.0/conf/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先备份一下原始配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" nutcracker.yml nutcracker.back.yml\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" nutcracker.yml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将一下内容写入新建的 nutcracker.yml 文件中，配置什么意思先不要管，后续会讲解")]),s._v("\nserver1:  \n  listen: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1111  \n  hash: fnv1a_64  \n  distribution: ketama  \n  redis: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("  \n  servers:  \n   - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:6379:1\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动：-d 后台启动 -c 指定配置文件")]),s._v("\n/usr/local/twemproxy-test/twemproxy-0.4.0/src/nutcracker -d -c /usr/local/twemproxy-test/twemproxy-0.4.0/conf/nutcracker.yml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看启动进程")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nutcracker\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 redis-cli 连接到 tewmproxy 中间件")]),s._v("\n/usr/local/redis-test/redis-2.8.19/src/redis-cli -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111")]),s._v("  \n\nget k1\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k1 v2\nget k1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br")])]),t("h2",{attrs:{id:"redis-复习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-复习"}},[s._v("#")]),s._v(" redis 复习")]),s._v(" "),t("p",[s._v("这里的复习，本人未练习，之前讲过的")]),s._v(" "),t("h3",{attrs:{id:"redis-部分配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-部分配置"}},[s._v("#")]),s._v(" redis 部分配置")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('redis.conf\n\nport 6379\nlogfile ""\nmaxmemory 100mb\nmaxmemory-policy volatile-lru\nmaxmemory-samples 10\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"redis-主从"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-主从"}},[s._v("#")]),s._v(" redis 主从")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 两份文件分别将端口设置为 6379 和 6380")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis_6379.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" redis.conf redis_6380.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分别启动两个 redis 实例")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/local/redis-2.8.19/src/redis-server  /usr/local/redis-2.8.19/redis_6379.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" /usr/local/redis-2.8.19/src/redis-server  /usr/local/redis-2.8.19/redis_6380.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" redis\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过从实例客户端挂载主从")]),s._v("\n/usr/local/redis-2.8.19/src/redis-cli  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\nslaveof "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\ninfo replication\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试注册是否正常")]),s._v("\n/usr/local/redis-2.8.19/src/redis-cli -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" k2 v2\n\n/usr/local/redis-2.8.19/src/redis-cli -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6380")]),s._v("\nget k2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h1",{attrs:{id:"twemproxy-讲解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#twemproxy-讲解"}},[s._v("#")]),s._v(" twemproxy 讲解")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("eshop-detail-test")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1111  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" fnv1a_64  \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("distribution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ketama  \n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("redis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true  ")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("servers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6379"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 127.0.0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6380"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1 test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("redis"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("eshop-detail-test：redis 集群的逻辑名称")])]),s._v(" "),t("li",[t("p",[s._v("listen：twemproxy 监听的端口号")])]),s._v(" "),t("li",[t("p",[s._v("hash：hash 散列算法")])]),s._v(" "),t("li",[t("p",[s._v("distribution：分片算法：有一致性 hash、取模等")])]),s._v(" "),t("li",[t("p",[s._v("timeout：与 redis 连接的超时时长")])]),s._v(" "),t("li",[t("p",[s._v("redis：true 为 redis，否则是 memcached")])]),s._v(" "),t("li",[t("p",[s._v("servers：redis 实例列表")]),s._v(" "),t("p",[s._v("一定要加别名，否则默认使用 ip:port:weight 来计算分片，如果宕机后更换机器，那么分片就不一样了，因此加了别名后，可以确保分片一定是准确的")])])]),s._v(" "),t("p",[s._v("你的客户端，java/nginx+lua，连接 twemproxy 写数据的时候，twemproxy 负责将数据分片，写入不同的 redis 实例")]),s._v(" "),t("p",[s._v("如果某个 redis 机器宕机，需要自动从一致性 hash 环上摘掉，等恢复后自动上线，可以使用以下配置")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auto_eject_hosts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_retry_timeout")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server_failure_limit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("auto_eject_hosts：自动摘除故障节点")]),s._v(" "),t("li",[s._v("server_retry_timeout：每隔 30 秒判断故障节点是否正常，如果正常则放回一致性 hash 环")]),s._v(" "),t("li",[s._v("server_failure_limit：多少次无响应，就从一致性 hash 环中摘除")])]),s._v(" "),t("p",[s._v("关于"),t("RouterLink",{attrs:{to:"/cache-pdp/redis/027.html#一致性-hash-算法（自动缓存迁移）-虚拟节点（自动负载均衡）"}},[s._v("一致性 hash")]),s._v(" 前面也讲解过了")],1)])}),[],!1,null,null,null);a.default=e.exports}}]);