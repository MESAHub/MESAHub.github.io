import{g as p}from"./index-C5AxrHuF.js";function c(e,s){for(var a=0;a<s.length;a++){const t=s[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n,i;function f(){if(i)return n;i=1,n=e,e.displayName="hsts",e.aliases=[];function e(s){s.languages.hsts={directive:{pattern:/\b(?:includeSubDomains|max-age|preload)(?=[\s;=]|$)/i,alias:"property"},operator:/=/,punctuation:/;/}}return n}var u=f();const l=p(u),d=c({__proto__:null,default:l},[u]);export{d as h};
