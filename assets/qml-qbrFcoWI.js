import{g as c}from"./index-BXi4nQo3.js";function l(r,o){for(var t=0;t<o.length;t++){const n=o[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in r)){const e=Object.getOwnPropertyDescriptor(n,a);e&&Object.defineProperty(r,a,e.get?e:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s,p;function g(){if(p)return s;p=1,s=r,r.displayName="qml",r.aliases=[];function r(o){(function(t){for(var n=/"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source,a=/\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source,e=/(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/.source.replace(/<string>/g,function(){return n}).replace(/<comment>/g,function(){return a}),u=0;u<2;u++)e=e.replace(/<expr>/g,function(){return e});e=e.replace(/<expr>/g,"[^\\s\\S]"),t.languages.qml={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\//,greedy:!0},"javascript-function":{pattern:RegExp(/((?:^|;)[ \t]*)function\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:t.languages.javascript},"class-name":{pattern:/((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,lookbehind:!0},property:[{pattern:/((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0},{pattern:/((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,lookbehind:!0,inside:{keyword:/^property/,property:/\w+(?:\.\w+)*/}}],"javascript-expression":{pattern:RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g,function(){return e}),"m"),lookbehind:!0,greedy:!0,alias:"language-javascript",inside:t.languages.javascript},string:{pattern:/"(?:\\.|[^\\"\r\n])*"/,greedy:!0},keyword:/\b(?:as|import|on)\b/,punctuation:/[{}[\]:;,]/}})(o)}return s}var i=g();const m=c(i),f=l({__proto__:null,default:m},[i]);export{f as q};
