import{g as y}from"./index-C5AxrHuF.js";function h(i,p){for(var a=0;a<p.length;a++){const t=p[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in i)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(i,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var d,f;function b(){if(f)return d;f=1,d=i,i.displayName="naniscript",i.aliases=[];function i(p){(function(a){var t=/\{[^\r\n\[\]{}]*\}/,n={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:t,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};a.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:t,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:n}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:t,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:n},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},a.languages.nani=a.languages.naniscript,a.hooks.add("after-tokenize",function(e){var u=e.tokens;u.forEach(function(r){if(typeof r!="string"&&r.type==="generic-text"){var o=c(r);s(o)||(r.type="bad-line",r.content=o)}})});function s(e){for(var u="[]{}",r=[],o=0;o<e.length;o++){var g=e[o],l=u.indexOf(g);if(l!==-1){if(l%2===0)r.push(l+1);else if(r.pop()!==l)return!1}}return r.length===0}function c(e){return typeof e=="string"?e:Array.isArray(e)?e.map(c).join(""):c(e.content)}})(p)}return d}var m=b();const v=y(m),k=h({__proto__:null,default:v},[m]);export{k as n};
