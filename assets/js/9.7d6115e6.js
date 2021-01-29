(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{365:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript-获取列表元素深度-以及对应匹配索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-获取列表元素深度-以及对应匹配索引"}},[t._v("#")]),t._v(" JavaScript 获取列表元素深度，以及对应匹配索引")]),t._v(" "),s("p",[t._v("曾在一个"),s("a",{attrs:{href:"https://github.com/veaba/pyhtmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pyhtmd"),s("OutboundLink")],1),t._v("中处理 HTML List 标签的解析问题。")]),t._v(" "),s("h2",{attrs:{id:"问题-如何解析嵌套多层-html-list-标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题-如何解析嵌套多层-html-list-标签"}},[t._v("#")]),t._v(" 问题：如何解析嵌套多层 HTML list 标签")]),t._v(" "),s("p",[t._v("假设: "),s("code",[t._v("<ul>")]),t._v("= "),s("code",[t._v("[")]),t._v("，"),s("code",[t._v("</ul>")]),t._v(" = "),s("code",[t._v("]")]),t._v("， "),s("code",[t._v("<ol>")]),t._v(" 的问题就不展开了。")]),t._v(" "),s("h2",{attrs:{id:"分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析：")]),t._v(" "),s("p",[t._v("简化后，通过移除非数组的元素，我们得到下面的结构比较：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[1,2,3,[5,6]]  => [[]]\n\n[1,[2,[3,[]]]] => [[[[]]]]\n\n...\n\n")])])]),s("p",[t._v("我们通过这个结构 "),s("code",[t._v("[[[[]]]]")]),t._v("，认为是一个字符串 "),s("code",[t._v("'[[[[]]]]'")]),t._v("。")]),t._v(" "),s("p",[t._v("为了更形象的描述 "),s("code",[t._v("[")]),t._v(" 始终对应 "),s("code",[t._v("]")]),t._v(" 构成一个 "),s("strong",[t._v("组合")]),t._v("。")]),t._v(" "),s("p",[t._v("如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('形象化：\t\t"a,b,c,d      d1,c1,b1,a1"\n对应的 \t\t| | | |       |  |  |  |\n原始字符 \t\t[,[,[,[\t\t\t  ], ], ], ]\n序号：      0 1 2 3      4  5  6  7\n')])])]),s("p",[t._v("于是得到:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a  index = 0\nb  index = 1\nc  index = 2\nd  index = 3\nd1 index = 4\nc1 index = 5\nb1 index = 6\na1 index = 7\n")])])]),s("p",[t._v("得出并收集它们的索引值关系：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("0  1,  2,  3\n↓  ↓   ↓   ↓\n4  5   6   7\n\n")])])]),s("p",[t._v("经过一个 "),s("a",{attrs:{href:"https://github.com/veaba/pyhtmd/blob/master/pyhtmd/html_parser.py#L216",target:"_blank",rel:"noopener noreferrer"}},[t._v(" level 提取算法"),s("OutboundLink")],1),t._v(" 的实现。")]),t._v(" "),s("p",[t._v("这个公式是经过长时间的观察、反复推测后，得到了一个有趣的现象：")]),t._v(" "),s("p",[t._v("公式：当前 "),s("code",[t._v("index")]),t._v(" x 2 - "),s("code",[t._v("value")]),t._v(" = 对应的 "),s("code",[t._v("level")]),t._v("，这个公式非常的关键。")]),t._v(" "),s("p",[t._v("我们对 "),s("code",[t._v("[0,1,2,3]")]),t._v("，通过算法转换如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("index")]),t._v(" "),s("th",[t._v("0")]),t._v(" "),s("th",[t._v("1")]),t._v(" "),s("th",[t._v("2")]),t._v(" "),s("th",[t._v("3")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("index")]),t._v("*2 - "),s("code",[t._v("value")])]),t._v(" "),s("td",[t._v("0*2-0=0")]),t._v(" "),s("td",[t._v("1*2-1=1")]),t._v(" "),s("td",[t._v("2*2-2=2")]),t._v(" "),s("td",[t._v("3*2-3=3")])])])]),t._v(" "),s("p",[t._v("或许有人说，这个公式可能是个巧合，不妨看一下下面的：")]),t._v(" "),s("p",[t._v("已知，我们的结构是 "),s("code",[t._v("[[[][]]]")]),t._v("，此时，左包围是对应索引与右括号的关系是 ,")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("0  1,  2,  4\n↓  ↓   ↓   ↓\n7  2   6   5\n")])])]),s("p",[t._v("根据公式转换如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("index")]),t._v(" "),s("th",[t._v("0")]),t._v(" "),s("th",[t._v("1")]),t._v(" "),s("th",[t._v("2")]),t._v(" "),s("th",[t._v("4")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("value")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("3")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("index")]),t._v("*2 - "),s("code",[t._v("value")])]),t._v(" "),s("td",[t._v("0*2-0=0")]),t._v(" "),s("td",[t._v("1*2-1=1")]),t._v(" "),s("td",[t._v("2*2-2=2")]),t._v(" "),s("td",[t._v("3*2-4=2")])])])]),t._v(" "),s("p",[t._v("直到这里，我们得出一个结论，只要知道左边的索引值，就可以对应的找到它合并为一个"),s("strong",[t._v("组合")]),t._v("所在的索引值（即左边 "),s("code",[t._v("[")]),t._v("，找到匹配右边结束的 "),s("code",[t._v("]")]),t._v("），以及它对应的 level。")]),t._v(" "),s("p",[t._v("这个算法被我应用于一款 HTML 转 Markdown 工具 "),s("a",{attrs:{href:"https://github.com/veaba/pyhtmd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pyhtmd"),s("OutboundLink")],1),t._v("，作为解析 HTML 列表元素 为 markdown 代码的核心支撑。")]),t._v(" "),s("p",[t._v("现在，如果得到最大 level 的深度，只需 "),s("code",[t._v("Math.max.apply(this,[0,1,2,2])")]),t._v(" 即可。")]),t._v(" "),s("p",[t._v("下面是完整的代码实现（仅返回 "),s("code",[t._v("level")]),t._v(" 最大级）：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("arrayDeepLevel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrayStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" clearArrayStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里的正则没有写好")]),t._v("\n  arrayStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(?:(\\[|\\]))")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clearArrayStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" leftStrItems "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const rightStrItems = [];")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" clearArrayStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// start tag")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clearArrayStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"["')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      leftStrItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ellipsis right Items ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" leftMaps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" leftStrItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" leftStrItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    leftMaps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" levelArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("leftMaps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" levelArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arrayDeepLevel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("it")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4. ==> level:2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实际上这里最高二级，是针对外包围计算，而非元素")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("arrayDeepLevel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("尽量简化复杂的问题")])]),t._v(" "),s("li",[s("p",[t._v("有时可能需要一双慧眼，以及反复的观测和总结")])])]),t._v(" "),s("h2",{attrs:{id:"测试用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试用例"}},[t._v("#")]),t._v(" 测试用例")]),t._v(" "),s("p",[t._v("-"),s("a",{attrs:{href:"/__tests__/get-list-tag-parent-deep-level-test.js"}},[t._v("get-list-tag-parent-deep-level")])])])}),[],!1,null,null,null);a.default=e.exports}}]);