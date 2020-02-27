(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{401:function(t,a,s){"use strict";s.r(a);var n=s(9),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"获取输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取输入","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取输入")]),t._v(" "),s("p",[t._v("Python中并不存在利用 %d、%c 进行格式化输入，无论用户的输入如何，都会读取一行转化成字符串，然后返回给程序。所以，我们没有办法直接获取用户输入的数字。")]),t._v(" "),s("h4",{attrs:{id:"获取单个数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取单个数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取单个数据")]),t._v(" "),s("p",[t._v("获取用户输入的字符串应该没有任何问题，主要是数字方面无法直接获取，所以，我们可以间接的获取用户输入的数据，比如获取用户输入的数字：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("num_test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这样就可以把 input() 返回的字符串转化为数字，然后赋值给 num_test。")]),t._v(" "),s("h4",{attrs:{id:"获取多个数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取多个数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 获取多个数据")]),t._v(" "),s("p",[t._v("插播一下，python 中的等号（赋值符号）还能这样用：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 2")]),t._v("\n")])])]),s("p",[t._v("所以，在这个基础上面，我们就可以实现交换，而无需定义新的变量。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a\n")])])]),s("p",[t._v("上面是一种比较常用的一个赋值操作，可以让代码变得更加的简洁。")]),t._v(" "),s("h5",{attrs:{id:"使用逗号分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用逗号分割","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用逗号分割")]),t._v(" "),s("p",[t._v("好，回到正题，我们可以利用这个性质实现多个数据的输入。首先要做的是需要对用户的输入进行处理。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("split() 是上一部分所介绍到的一个方法，可以把字符串按照空格分割成多个元素放到列表中。然后对应赋值给 a，b。但是，要注意，只有当你明确知道用户的输入是两个元素的时候才这么用。")]),t._v(" "),s("p",[t._v("而且，如果想要获取用户所输入的数字的话，还要分别进行类型转换")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h5",{attrs:{id:"使用列表保存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用列表保存","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用列表保存")]),t._v(" "),s("p",[t._v("原理跟上面一样，但是，这次是直接保存到列表里面，然后再对数据进行处理。这样就会避开数据的数量问题了。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("user_input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# in  1 2 3 4 5 6 7 8")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# out [1, 2, 3, 4, 5, 6, 7, 8]")]),t._v("\n")])])]),s("p",[t._v("但是，有一个地方要注意！下面这个代码是无法实现这个功能的，具体原因可以参考 for 循环的原理尝试一下。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("user_input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h5",{attrs:{id:"使用-map-格式化输入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-map-格式化输入","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 map 格式化输入")]),t._v(" "),s("p",[t._v("map() 会根据提供的函数对指定序列做映射。第一个参数 function 以参数序列中的每一个元素调用 function 函数，返回包含每次 function 函数返回值的迭代器（python2 会返回一个列表）。说起来挺复杂，举个例子。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# map(fun, seq)")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 2 3")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这里的 int 是指一个函数，会把后面的序列的每一个当作参数进行处理，然后返回给前面的变量。map 还有很多高级的用法，但是呢，在获取输入上面我们可以只掌握用法就好，不必太过深究。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取浮点型数据")]),t._v("\na"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("end！上面所涉及到的所有多数据输入都是默认以空格隔开的，如果不是以空格隔开的，就要在 split() 的括号里面加上相应的字符。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("','")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以逗号隔开的情况")]),t._v("\n")])])]),s("h3",{attrs:{id:"格式化输出"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化输出","aria-hidden":"true"}},[t._v("#")]),t._v(" 格式化输出")]),t._v(" "),s("p",[t._v("C语言里面的 printf 的功能很强大，可以以不同的形式输出数据，主要利用的是 %d, %c, %s等，但是 python 的 print 和 input 一样单纯，就是单纯的输入和输出。python 的格式化输出准确来说是对字符串的格式化，因为 所以接下来所涉及到的格式化输出，实际上操作对象是字符串。")]),t._v(" "),s("h4",{attrs:{id:"format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#format","aria-hidden":"true"}},[t._v("#")]),t._v(" format")]),t._v(" "),s("p",[t._v("format 是字符串的一个方法，先看示例吧，讲起来比较费劲。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JNWA"')]),t._v("\nformatted_str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{} is my name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted_str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# JNWA is my name")]),t._v("\n")])])]),s("p",[t._v("示例中 "),s("code",[t._v("{}")]),t._v(" 是占位符，后面的 format 方法会自动利用括号里面的参数替换掉原本字符串里面的括号。当然也支持多个参数进行格式化。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JNWA"')]),t._v("\nage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\nformatted_str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{} is my name, my age is {}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("formatted_str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# JNWA is my name, my age is 18")]),t._v("\n")])])]),s("p",[t._v("这样虽然能够进行格式化输出了，但是似乎还是没有 C 语言一样强大，可以制定类型，包括输出小数点之后多少位之类的。别担心，这个 python 也会。")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("<stdio.h>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JNWA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" money "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("187.8888")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s is my name, and I have %.2f CNY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JNWA is my name, and I have 187.89 CNY")]),t._v("\n")])])]),s("p",[t._v("python")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JNWA"')]),t._v("\nmoney "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("187.88")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{} is my name, {:.2f}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# JNWA is my name, and I have 187.89 CNY")]),t._v("\n")])])]),s("p",[t._v("python 的那个花括号可不是摆设，是可以进行数据填充的，使用冒号表示进行数字格式化，最常用的就是保留两位小数，如上面的例子。用法还有很多，下面就直接看表格吧（抄来的）")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("数字")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("格式")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("输出")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("3.1415926")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: .2f}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3.14")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("保留小数点后两位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("3.1415926")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: +.2f}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("+ 3.14")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("带符号保留小数点后两位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-1")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: +.2f}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("- 1.00")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("带符号保留小数点后两位")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("2.71828")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: .0f}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("不带小数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: 0 > 2d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("05")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数字补零(填充左边, 宽度为2)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: x < 4d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("5xxx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数字补x(填充右边, 宽度为4)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: x < 4d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("10xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("数字补x(填充右边, 宽度为4)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("1000000")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{:, }")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1, 000, 000")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("以逗号分隔的数字格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("0.25")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: .2 %}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("25.00 %")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("百分比格式")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("1000000000")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: .2e}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1.00e+09")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("指数记法")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: 10d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("右对齐(默认, 宽度为10)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: < 10d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("左对齐(宽度为10)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("{: ^ 10d}")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("中间对齐(宽度为10)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{:b}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("1011")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("二进制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{:d}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("十进制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{😮}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("13")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("八进制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{:x}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("b")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("十六进制")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{:#x}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0xb")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("十六进制（含 0x，小写）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("11")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("'{:#X}'.format(11)")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("0XB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("十六进制（含 0x，大写）")])])])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("^")]),t._v("、"),s("code",[t._v("<")]),t._v("、"),s("code",[t._v(">")]),t._v("分别代表，居中对齐、左对齐、右对齐")])]),t._v(" "),s("p",[t._v("说明一下，当我们只是想要单纯的使用花括号的时候，就需要使用花括号进行转义。 "),s("code",[t._v("{{}}.format(...)")]),t._v("会被转义成 "),s("code",[t._v("{}")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("自定义顺序")])]),t._v(" "),s("p",[t._v("上面的输出方法都是固定了的输出顺序的，我们也可以通过指定参数的顺序。看例子！")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("temp_1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("\ntemp_2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("67")]),t._v("\ntemp_3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("78")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{2}, {0}, {1}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp_1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 78, 90, 67")]),t._v("\n")])])]),s("p",[t._v("或者")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("89")]),t._v("\nmoney "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("187.8888")]),t._v("\nname "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JNWA"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'money:{money:.2f}, name:{name}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" money"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("money"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# money:187.89, name:JNWA")]),t._v("\n")])])]),s("p",[t._v("还有一种输出方法是 % 输出，比较少用了。可以了解下")])])}),[],!1,null,null,null);a.default=e.exports}}]);