import{g as s}from"./index-B3r3VeT_.js";function c(r,e){for(var d=0;d<e.length;d++){const a=e[d];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in r)){const n=Object.getOwnPropertyDescriptor(a,t);n&&Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var l,i;function u(){if(i)return l;i=1,l=r,r.displayName="purebasic",r.aliases=[];function r(e){e.languages.purebasic=e.languages.extend("clike",{comment:/;.*/,keyword:/\b(?:align|and|as|break|calldebugger|case|compilercase|compilerdefault|compilerelse|compilerelseif|compilerendif|compilerendselect|compilererror|compilerif|compilerselect|continue|data|datasection|debug|debuglevel|declare|declarec|declarecdll|declaredll|declaremodule|default|define|dim|disableasm|disabledebugger|disableexplicit|else|elseif|enableasm|enabledebugger|enableexplicit|end|enddatasection|enddeclaremodule|endenumeration|endif|endimport|endinterface|endmacro|endmodule|endprocedure|endselect|endstructure|endstructureunion|endwith|enumeration|extends|fakereturn|for|foreach|forever|global|gosub|goto|if|import|importc|includebinary|includefile|includepath|interface|macro|module|newlist|newmap|next|not|or|procedure|procedurec|procedurecdll|proceduredll|procedurereturn|protected|prototype|prototypec|read|redim|repeat|restore|return|runtime|select|shared|static|step|structure|structureunion|swap|threaded|to|until|wend|while|with|xincludefile|xor)\b/i,function:/\b\w+(?:\.\w+)?\s*(?=\()/,number:/(?:\$[\da-f]+|\b-?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)\b/i,operator:/(?:@\*?|\?|\*)\w+|-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*/@]/}),e.languages.insertBefore("purebasic","keyword",{tag:/#\w+\$?/,asm:{pattern:/(^[\t ]*)!.*/m,lookbehind:!0,alias:"tag",inside:{comment:/;.*/,string:{pattern:/(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},"label-reference-anonymous":{pattern:/(!\s*j[a-z]+\s+)@[fb]/i,lookbehind:!0,alias:"fasm-label"},"label-reference-addressed":{pattern:/(!\s*j[a-z]+\s+)[A-Z._?$@][\w.?$@~#]*/i,lookbehind:!0,alias:"fasm-label"},keyword:[/\b(?:extern|global)\b[^;\r\n]*/i,/\b(?:CPU|DEFAULT|FLOAT)\b.*/],function:{pattern:/^([\t ]*!\s*)[\da-z]+(?=\s|$)/im,lookbehind:!0},"function-inline":{pattern:/(:\s*)[\da-z]+(?=\s)/i,lookbehind:!0,alias:"function"},label:{pattern:/^([\t ]*!\s*)[A-Za-z._?$@][\w.?$@~#]*(?=:)/m,lookbehind:!0,alias:"fasm-label"},register:/\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|di|si|sp)|[cdefgs]s|mm\d+)\b/i,number:/(?:\b|-|(?=\$))(?:0[hx](?:[\da-f]*\.)?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|(?:\d+(?:\.\d+)?|\.\d+)(?:\.?e[+-]?\d+)?[dt]?)\b/i,operator:/[\[\]*+\-/%<>=&|$!,.:]/}}}),delete e.languages.purebasic["class-name"],delete e.languages.purebasic.boolean,e.languages.pbfasm=e.languages.purebasic}return l}var o=u();const b=s(o),f=c({__proto__:null,default:b},[o]);export{f as p};
