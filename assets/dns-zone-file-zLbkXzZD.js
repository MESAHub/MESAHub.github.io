import{g as S}from"./index-BgpYAXNe.js";function N(e,n){for(var o=0;o<n.length;o++){const t=n[o];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(t,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,i;function A(){if(i)return a;i=1,a=e,e.displayName="dnsZoneFile",e.aliases=[];function e(n){n.languages["dns-zone-file"]={comment:/;.*/,string:{pattern:/"(?:\\.|[^"\\\r\n])*"/,greedy:!0},variable:[{pattern:/(^\$ORIGIN[ \t]+)\S+/m,lookbehind:!0},{pattern:/(^|\s)@(?=\s|$)/,lookbehind:!0}],keyword:/^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,class:{pattern:/(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/,lookbehind:!0,alias:"keyword"},type:{pattern:/(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/,lookbehind:!0,alias:"keyword"},punctuation:/[()]/},n.languages["dns-zone"]=n.languages["dns-zone-file"]}return a}var l=A();const d=S(l),I=N({__proto__:null,default:d},[l]);export{I as d};
