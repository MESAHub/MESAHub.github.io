import{g as b}from"./index-CT5AdUOd.js";function i(e,t){for(var a=0;a<t.length;a++){const r=t[a];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(r,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,c;function d(){if(c)return s;c=1,s=e,e.displayName="bbcode",e.aliases=["shortcode"];function e(t){t.languages.bbcode={tag:{pattern:/\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/,inside:{tag:{pattern:/^\[\/?[^\s=\]]+/,inside:{punctuation:/^\[\/?/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\]/,"attr-name":/[^\s=\]]+/}}},t.languages.shortcode=t.languages.bbcode}return s}var u=d();const p=b(u),f=i({__proto__:null,default:p},[u]);export{f as b};
