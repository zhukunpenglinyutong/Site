(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{379:function(n,t,e){"use strict";e.r(t);var r=e(9),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("之前咱们所设计的语法分析器是使用C++自己编写的，尽管我们只是实现了一个简单的功能，但是还是费了九牛二虎之力，那么这一节，我们就开始使用Bison工具快速为我们创建一个功能强啊的语法分析器，话不多说，各位同学往下看吧！")]),n._v(" "),e("p",[e("strong",[n._v("软件及可参考资源")])]),n._v(" "),e("p",[e("a",{attrs:{href:"https://cs.nju.edu.cn/daixinyu/1006.pdf",target:"_blank",rel:"noopener noreferrer"}},[n._v("南京大学-词法分析和语法分析课件"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("a",{attrs:{href:"https://sourceforge.net/projects/winflexbison/",target:"_blank",rel:"noopener noreferrer"}},[n._v("windows平台下flex和Bison下载地址"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"_1-题目描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-题目描述","aria-hidden":"true"}},[n._v("#")]),n._v(" 1. 题目描述")]),n._v(" "),e("p",[n._v("基于词法分析程序自动构造工具Flex与语法分析程序自动构造工具Bison，编制简单的计算器程序。")]),n._v(" "),e("p",[n._v("参考示例程序, 用Flex和Bison实现一个功能更为强大的计算器，尽可能多的包含以下运算（支持浮点数）：")]),n._v(" "),e("ul",[e("li",[n._v("加、减、乘、除运算")]),n._v(" "),e("li",[n._v("乘方power、开方sqrt运算")]),n._v(" "),e("li",[n._v("三角函数运算 – sin、cos...")]),n._v(" "),e("li",[n._v("求阶乘")]),n._v(" "),e("li",[n._v("求log以10为底的对数")])]),n._v(" "),e("h3",{attrs:{id:"题目分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题目分析","aria-hidden":"true"}},[n._v("#")]),n._v(" 题目分析")]),n._v(" "),e("p",[n._v("题目看起来还挺复杂的，而且还用到了没接触过的Bison工具。")]),n._v(" "),e("h2",{attrs:{id:"_2-代码总览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码总览","aria-hidden":"true"}},[n._v("#")]),n._v(" 2. 代码总览")]),n._v(" "),e("blockquote",[e("p",[n._v("calc.y")])]),n._v(" "),e("div",{staticClass:"language-y extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('%{\n# include <stdio.h>\n# include <stdlib.h>\n# include <math.h>\n# define YYSTYPE float\n# define PI acos(-1)\nint yylex();\nint yyerror();\nfloat deg(int n);\n%}\n\n// %union {\n//   int type_int;\n//   float type_float;\n//   double type_double;\n// }\n\n/* declare tokens*/\n// %token <type_int> NUMBER\n// %token <type_float> FLOAT\n%token NUMBER FLOAT\n%token ADD SUB MUL DIV ABS\n%token OP CP CO EOL\n%token POW SQRT LOG SIN COS DEG\n\n// %type <type_double> calclist exp factor term\n\n%%\n \ncalclist: /*nothing */ \n | calclist exp { printf("%g", $2); return 0;}\n ;\nexp: factor\n | exp ADD exp { $$ = $1 + $3; }\n | exp SUB factor { $$ = $1 - $3; }\n ;\n \nfactor: term\n | factor MUL term { $$ = $1 * $3; }\n | factor DIV term { $$ = $1 / $3; }\n ;\n \nterm: NUMBER { $$ = $1;}\n | FLOAT { $$ = $1;}\n | term DEG { $$ = deg($1);}\n | OP exp CP { $$ = $2; }\n | SQRT OP term CP { $$ = sqrt($3); }\n | LOG OP term CP { $$ = log10($3); }\n | SIN OP term CP { $$ = sin($3 / 180 * PI); }\n | COS OP term CP { $$ = cos($3 / 180 * PI); }\n | OP exp CP OP exp CP { $$ = $2 * $5; }\n | POW OP term CO term CP { $$ = pow($3, $5); }\n ;\n%%\n\nfloat deg(int n) {\n  if (n == 1) {\n    return 1;\n  } else {\n    return n * deg(n-1);\n  }\n}\n\nint main() {\n  yyparse();\n}\n \nint yyerror(char *s) {\n  fprintf(stderr, "error: %s\\n", s);\n}\n')])])]),e("blockquote",[e("p",[n._v("calc.l")])]),n._v(" "),e("div",{staticClass:"language-l extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('%option noyywrap\n%{\n# include"calc.tab.h"\n%}\n\nDIGIT [0-9]+\nFLOAT {DIGIT}[.]{DIGIT}\n\n%%\n"+"  { return ADD; }\n"-"   { return SUB; }\n"*"  { return MUL; }\n"/"   { return DIV; }\n"("     { return OP; }\n")"     { return CP; }\n","     { return CO; }\n"!"     { return DEG; }\n\n{DIGIT} { yylval = (YYSTYPE)atoi(yytext); return NUMBER; }\n{FLOAT} { yylval = (YYSTYPE)atof(yytext); return FLOAT; }\n\n"pow" { return POW; }\n"sqrt" { return SQRT; }\n"sin" { return SIN; }\n"cos" { return COS; }\n"log" { return LOG; }\n\n"//".* \n[ \\t]   { /* ignore white space */ }\n.      { yyerror("Mystery character"); }\n%%\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);