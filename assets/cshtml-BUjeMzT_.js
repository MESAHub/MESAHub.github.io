import{g as x}from"./index-B3r3VeT_.js";import{r as j}from"./csharp-Cd5Udg29.js";function S(c,o){for(var a=0;a<o.length;a++){const e=o[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in c)){const u=Object.getOwnPropertyDescriptor(e,t);u&&Object.defineProperty(c,t,u.get?u:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var f,m;function C(){if(m)return f;m=1;var c=j();f=o,o.displayName="cshtml",o.aliases=["razor"];function o(a){a.register(c),function(e){var t=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,u=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function n(l,k){for(var d=0;d<k;d++)l=l.replace(/<self>/g,function(){return"(?:"+l+")"});return l.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+u+")").replace(/<comment>/g,"(?:"+t+")")}var s=n(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),v=n(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),r=n(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),y=n(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),i=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,g=/(?!\d)[^\s>\/=$<%]+/.source+i+/\s*\/?>/.source,b=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+i+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+g+"|"+n(/<\1/.source+i+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+g+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+g+")";e.languages.cshtml=e.languages.extend("markup",{});var w=e.languages.insertBefore("csharp","string",{html:{pattern:RegExp(b),greedy:!0,inside:e.languages.cshtml}},{csharp:e.languages.extend("csharp",{})}),p={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:w};e.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[r,/(?:code|functions)\s*/.source+r,/(?:for|foreach|lock|switch|using|while)\s*/.source+s+/\s*/.source+r,/do\s*/.source+r+/\s*while\s*/.source+s+/(?:\s*;)?/.source,/try\s*/.source+r+/\s*catch\s*/.source+s+/\s*/.source+r+/\s*finally\s*/.source+r,/if\s*/.source+s+/\s*/.source+r+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+s+")?"+/\s*/.source+r+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:p}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:p}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+s+")(?:"+/[?!]?\.\w+\b/.source+"|"+s+"|"+v+"|"+y+s+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:p}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),e.languages.razor=e.languages.cshtml}(a)}return f}var h=C();const _=x(h),E=S({__proto__:null,default:_},[h]);export{E as c};
