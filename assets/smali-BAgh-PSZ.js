import{g as u}from"./index-C5AxrHuF.js";function d(e,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const i=Object.getOwnPropertyDescriptor(t,r);i&&Object.defineProperty(e,r,i.get?i:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,l;function p(){if(l)return o;l=1,o=e,e.displayName="smali",e.aliases=[];function e(n){n.languages.smali={comment:/#.*/,string:{pattern:/"(?:[^\r\n\\"]|\\.)*"|'(?:[^\r\n\\']|\\(?:.|u[\da-fA-F]{4}))'/,greedy:!0},"class-name":{pattern:/(^|[^L])L(?:(?:\w+|`[^`\r\n]*`)\/)*(?:[\w$]+|`[^`\r\n]*`)(?=\s*;)/,lookbehind:!0,inside:{"class-name":{pattern:/(^L|\/)(?:[\w$]+|`[^`\r\n]*`)$/,lookbehind:!0},namespace:{pattern:/^(L)(?:(?:\w+|`[^`\r\n]*`)\/)+/,lookbehind:!0,inside:{punctuation:/\//}},builtin:/^L/}},builtin:[{pattern:/([();\[])[BCDFIJSVZ]+/,lookbehind:!0},{pattern:/([\w$>]:)[BCDFIJSVZ]/,lookbehind:!0}],keyword:[{pattern:/(\.end\s+)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])\.(?!\d)[\w-]+/,lookbehind:!0},{pattern:/(^|[^\w.-])(?:abstract|annotation|bridge|constructor|enum|final|interface|private|protected|public|runtime|static|synthetic|system|transient)(?![\w.-])/,lookbehind:!0}],function:{pattern:/(^|[^\w.-])(?:\w+|<[\w$-]+>)(?=\()/,lookbehind:!0},field:{pattern:/[\w$]+(?=:)/,alias:"variable"},register:{pattern:/(^|[^\w.-])[vp]\d(?![\w.-])/,lookbehind:!0,alias:"variable"},boolean:{pattern:/(^|[^\w.-])(?:false|true)(?![\w.-])/,lookbehind:!0},number:{pattern:/(^|[^/\w.-])-?(?:NAN|INFINITY|0x(?:[\dA-F]+(?:\.[\dA-F]*)?|\.[\dA-F]+)(?:p[+-]?[\dA-F]+)?|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)[dflst]?(?![\w.-])/i,lookbehind:!0},label:{pattern:/(:)\w+/,lookbehind:!0,alias:"property"},operator:/->|\.\.|[\[=]/,punctuation:/[{}(),;:]/}}return o}var s=p();const b=u(s),m=d({__proto__:null,default:b},[s]);export{m as s};
