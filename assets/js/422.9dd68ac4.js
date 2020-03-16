(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{528:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"嵌入配置服务器-embedding-the-config-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌入配置服务器-embedding-the-config-server"}},[t._v("#")]),t._v(" 嵌入配置服务器 / Embedding the Config Server")]),t._v(" "),a("p",[t._v("配置服务器最好作为独立的应用程序运行。但是，如果需要，您可以将其嵌入到另一个应用程序中（还可以不使用 boot？）。\n在 spring boot 中可以使用 "),a("code",[t._v("@EnableConfigServer")]),t._v(" 注解，还有一个 "),a("code",[t._v("spring.cloud.config.server.bootstrap")]),t._v(" 可选属性，\n如果为 true ，则指示服务器应该从自己的远程存储库配置自己。默认是关闭的，因为它可以延迟启动。")]),t._v(" "),a("p",[t._v("然而，当嵌入到另一个应用程序中时，以与任何其他应用程序相同的方式初始化是有意义的。"),a("code",[t._v("spring.cloud.config.server.bootstrap")]),t._v(" 为 true 时，必须使用组合环境存储库配置（ composite environment repository configuration）；")]),t._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" configserver\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("profiles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("active")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" composite\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("composite")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" native\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("search-locations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("HOME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/Desktop/config\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("git")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("///F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/dir/spring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cloud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config/config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("repo  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("以上配置，经过实践，没有看出来有什么效果，唯一的效果就是，只要使用了 bootstrap = true,\n那么其他的 git uri 就不起作用了，所有的配置文件都以 composite 中为准了；")]),t._v(" "),a("p",[t._v("还测试出来一个可用的信息，以上两种方式指向的仓库中只要有 application.yml 文件，该文件也会被 配置服务 自己读取共享")])])}),[],!1,null,null,null);s.default=e.exports}}]);