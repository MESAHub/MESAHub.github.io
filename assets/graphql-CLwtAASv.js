import{g as Z}from"./index-B3r3VeT_.js";function $(i,s){for(var p=0;p<s.length;p++){const n=s[p];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in i)){const t=Object.getOwnPropertyDescriptor(n,a);t&&Object.defineProperty(i,a,t.get?t:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var h,k;function j(){if(k)return h;k=1,h=i,i.displayName="graphql",i.aliases=[];function i(s){s.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:s.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},s.hooks.add("after-tokenize",function(n){if(n.language!=="graphql")return;var a=n.tokens.filter(function(r){return typeof r!="string"&&r.type!=="comment"&&r.type!=="scalar"}),t=0;function l(r){return a[t+r]}function v(r,o){o=o||0;for(var e=0;e<r.length;e++){var u=l(e+o);if(!u||u.type!==r[e])return!1}return!0}function q(r,o){for(var e=1,u=t;u<a.length;u++){var A=a[u],m=A.content;if(A.type==="punctuation"&&typeof m=="string"){if(r.test(m))e++;else if(o.test(m)&&(e--,e===0))return u}}return-1}function f(r,o){var e=r.alias;e?Array.isArray(e)||(r.alias=e=[e]):r.alias=e=[],e.push(o)}for(;t<a.length;){var w=a[t++];if(w.type==="keyword"&&w.content==="mutation"){var c=[];if(v(["definition-mutation","punctuation"])&&l(1).content==="("){t+=2;var g=q(/^\($/,/^\)$/);if(g===-1)continue;for(;t<g;t++){var b=l(0);b.type==="variable"&&(f(b,"variable-input"),c.push(b.content))}t=g+1}if(v(["punctuation","property-query"])&&l(0).content==="{"&&(t++,f(l(0),"property-mutation"),c.length>0)){var _=q(/^\{$/,/^\}$/);if(_===-1)continue;for(var d=t;d<_;d++){var y=a[d];y.type==="variable"&&c.indexOf(y.content)>=0&&f(y,"variable-input")}}}}})}return h}var z=j();const x=Z(z),I=$({__proto__:null,default:x},[z]);export{I as g};
