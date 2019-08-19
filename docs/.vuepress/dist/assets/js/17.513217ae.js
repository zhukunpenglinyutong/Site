(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{373:function(s,t,a){"use strict";a.r(t);var e=a(28),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("因为自身电脑是 Windows，使用 Docker 并不是很方便，加上自己的很多工作都是在服务器上完成，所以打算将自己在服务器上面运行的服务都用 Docker 来管理。")]),s._v(" "),a("p",[s._v("参考")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.docker.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/introduction/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 从入门到实践"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/sujing/p/11012115.html#top",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 指南"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("这篇博客的环境是 Ubuntu 16.04")]),s._v(" "),a("h3",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),a("p",[s._v("这里为了方便就采用了官方的自动脚本安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL get.docker.com -o get-docker.sh\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" get-docker.sh --mirror Aliyun\n")])])]),a("p",[s._v("建立用户组并添加 Docker 用户")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立 docker 组")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" docker \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将当前用户加入 docker 组")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v("\n")])])]),a("h3",{attrs:{id:"查看-docker-的基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-docker-的基本信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 Docker 的基本信息")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker version "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看版本信息")]),s._v("\n\n$ docker info "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Docker 的基本信息，容器数量、镜像数量、根目录等")]),s._v("\n\n$ docker --help "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看帮助信息")]),s._v("\n")])])]),a("h3",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h4",{attrs:{id:"镜像相关的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关的命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像相关的命令")]),s._v(" "),a("p",[s._v("容器相关的命令都比较简单就不分开说了，就到下面很容易看懂")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker images "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本地的镜像")]),s._v("\n\n$ docker rmi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name/id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除一个镜像")]),s._v("\n\n$ docker search "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 搜索远程镜像")]),s._v("\n\n$ docker pull "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从远程拉取一个镜像")]),s._v("\n")])])]),a("p",[s._v("实例")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker search ubuntu "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认使用 latest 标签，拉取最新版本")]),s._v("\n\n$ docker pull ubuntu\n")])])]),a("h4",{attrs:{id:"容器相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器相关命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 容器相关命令")]),s._v(" "),a("p",[a("strong",[s._v("首先是运行")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试使用的指令")]),s._v("\n$ docker run -it --rm ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("p",[s._v("docker run 是运行容器的命令，完整的指令是")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" IMAGE "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ARG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("这里简要的说明一下上面用到的参数。")]),s._v(" "),a("p",[a("code",[s._v("-it")]),s._v("：运行容器的时候启动一个交互式终端，方便我们操作容器")]),s._v(" "),a("p",[a("code",[s._v("--rm")]),s._v("：这个参数是说容器退出后随之将其删除，使用 "),a("code",[s._v("--rm")]),s._v(" 可以避免浪费空间。")]),s._v(" "),a("p",[a("code",[s._v("ubuntu")]),s._v("：这是指用 "),a("code",[s._v("ubuntu")]),s._v(" 镜像为基础来启动容器。")]),s._v(" "),a("p",[a("code",[s._v("bash")]),s._v("：放在镜像名后的是 "),a("code",[s._v("命令")]),s._v("，这里我们希望有个交互式 Shell，因此用的是 bash。")]),s._v(" "),a("p",[s._v("详细的参数如下（挺多的，摘录别人的）：")]),s._v(" "),a("div",{staticClass:"language-raw extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('-d:启动容器，并且后台运行；\n-i:以交互模式运行容器，通常与-t同时使用；\n-t:为容器重新分配一个伪输入终端，通常与-i同时使用（容器启动后进入到容器内部的命令窗口）；\n-P:随机端口映射，容器内部端口随机映射到主机的高端口；\n-p:指定端口映射，格式为：主机(宿主)端口:容器端口；\n-v:建立宿主机与容器目录的同步；\n--name="myTomcat": 为容器指定一个名称，否则有个随机的名字）；\n')])])]),a("p",[s._v("上面的内容又臭又长，我们只需要根据自己的需要记住几个命令就好")]),s._v(" "),a("ol",[a("li",[s._v("如果你需要启动一个镜像用来测试一下系统的功能，下次不会再用，可以使用这个命令，实现的功能是启动一个容器并分配一个交互式终端，当退出之后会自动销毁。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker run -it --rm ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("如果需要启动一个容器需要经常使用，同时还需要保存一些文件的。")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker run -it -v /root/ubuntu_wp:/root ubuntu "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("如果同时需要绑定端口，后台运行服务")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -v /root/ubuntu_wp:/root ubuntu "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[a("strong",[s._v("docker ps")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看正在运行的容器的信息，")]),s._v("\n\n$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看运行中的和已经停止的容器")]),s._v("\n")])])]),a("p",[a("strong",[s._v("再次进入正在运行中的容器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker attach "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入正在运行中且id 的为前缀是 67 的容器")]),s._v("\n\n$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("67")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入正在运行中且id 的为前缀是 67 的容器")]),s._v("\n")])])]),a("p",[a("code",[s._v("exec")]),s._v(" 与 "),a("code",[s._v("attach")]),s._v(" 一样都可以再次进入后台运行的容器，但是该命令可以不进入容器而在运行的容器中执行命令。")]),s._v(" "),a("p",[a("strong",[s._v("停止、终止、重启容器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker stop "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止容器")]),s._v("\n\n$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制停止容器")]),s._v("\n\n$ docker restart "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\n")])])]),a("p",[a("strong",[s._v("删除容器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除容器")]),s._v("\n")])])]),a("p",[a("strong",[s._v("启动已终止容器")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ docker container start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接将一个已经终止的容器启动运行")]),s._v("\n")])])]),a("h3",{attrs:{id:"在-docker-部署-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-docker-部署-vuepress","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 Docker 部署 Vuepress")]),s._v(" "),a("h4",{attrs:{id:"布置镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布置镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 布置镜像")]),s._v(" "),a("p",[s._v("首先拉取 node 镜像，免得自己安装，当然，也可以直接拉取别人部署好了的 vuepress 镜像，但是上面的镜像良莠不齐，还是自己搭建吧，放心一点")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\n$ docker pull node \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试运行")]),s._v("\n$ docker run -it --rm node "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看是否成功（一般都是成功滴）")]),s._v("\n$ node --version\n")])])]),a("p",[s._v("之后就可以退出这个容器，再次进入，这次我们进入的时候绑定好端口，绑定好路径映射运行")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行指令")]),s._v("\n$ docker run -it -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -v /Site/docs:/root/vuepress node "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),a("h4",{attrs:{id:"安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Vuepress")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g vuepress\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n")])])]),a("p",[s._v("现在问题来了，在Docker运行的时候，端口是随机的。这咋整呢，，不晓的，以后再说。")])])},[],!1,null,null,null);t.default=n.exports}}]);