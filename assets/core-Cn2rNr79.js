import{i as mn,d as yn,c as ce,g as xn}from"./index-DmgBsOwu.js";import{a as bn}from"./markup-CWu1i8xo.js";import{a as wn}from"./css-BHYmgrl_.js";import{a as Cn}from"./clike-DQfKMAJ0.js";import{a as Sn}from"./javascript-C7k-qjWc.js";function An(e,n){for(var r=0;r<n.length;r++){const t=n[r];if(typeof t!="string"&&!Array.isArray(t)){for(const f in t)if(f!=="default"&&!(f in e)){const p=Object.getOwnPropertyDescriptor(t,f);p&&Object.defineProperty(e,f,p.get?p:{enumerable:!0,get:()=>t[f]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Ge=Ve,ye=Ve.prototype;ye.space=null;ye.normal={};ye.property={};function Ve(e,n,r){this.property=e,this.normal=n,r&&(this.space=r)}var Le=mn,Pn=Ge,En=$n;function $n(e){for(var n=e.length,r=[],t=[],f=-1,p,m;++f<n;)p=e[f],r.push(p.property),t.push(p.normal),m=p.space;return new Pn(Le.apply(null,r),Le.apply(null,t),m)}var xe=Tn;function Tn(e){return e.toLowerCase()}var Ke=Ye,U=Ye.prototype;U.space=null;U.attribute=null;U.property=null;U.boolean=!1;U.booleanish=!1;U.overloadedBoolean=!1;U.number=!1;U.commaSeparated=!1;U.spaceSeparated=!1;U.commaOrSpaceSeparated=!1;U.mustUseProperty=!1;U.defined=!1;function Ye(e,n){this.property=e,this.attribute=n}var _={},kn=0;_.boolean=X();_.booleanish=X();_.overloadedBoolean=X();_.number=X();_.spaceSeparated=X();_.commaSeparated=X();_.commaOrSpaceSeparated=X();function X(){return Math.pow(2,++kn)}var Xe=Ke,Oe=_,Je=be;be.prototype=new Xe;be.prototype.defined=!0;var Qe=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],Ln=Qe.length;function be(e,n,r,t){var f=-1,p;for(Me(this,"space",t),Xe.call(this,e,n);++f<Ln;)p=Qe[f],Me(this,p,(r&Oe[p])===Oe[p])}function Me(e,n,r){r&&(e[n]=r)}var Ie=xe,On=Ge,Mn=Je,le=In;function In(e){var n=e.space,r=e.mustUseProperty||[],t=e.attributes||{},f=e.properties,p=e.transform,m={},u={},g,P;for(g in f)P=new Mn(g,p(t,g),f[g],n),r.indexOf(g)!==-1&&(P.mustUseProperty=!0),m[g]=P,u[Ie(g)]=g,u[Ie(P.attribute)]=g;return new On(m,u,n)}var Dn=le,Un=Dn({space:"xlink",transform:Nn,properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}});function Nn(e,n){return"xlink:"+n.slice(5).toLowerCase()}var Rn=le,jn=Rn({space:"xml",transform:qn,properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function qn(e,n){return"xml:"+n.slice(3).toLowerCase()}var zn=_n;function _n(e,n){return n in e?e[n]:n}var Hn=zn,Ze=Bn;function Bn(e,n){return Hn(e,n.toLowerCase())}var Wn=le,Fn=Ze,Gn=Wn({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Fn,properties:{xmlns:null,xmlnsXLink:null}}),we=_,Vn=le,O=we.booleanish,D=we.number,Y=we.spaceSeparated,Kn=Vn({transform:Yn,properties:{ariaActiveDescendant:null,ariaAtomic:O,ariaAutoComplete:null,ariaBusy:O,ariaChecked:O,ariaColCount:D,ariaColIndex:D,ariaColSpan:D,ariaControls:Y,ariaCurrent:null,ariaDescribedBy:Y,ariaDetails:null,ariaDisabled:O,ariaDropEffect:Y,ariaErrorMessage:null,ariaExpanded:O,ariaFlowTo:Y,ariaGrabbed:O,ariaHasPopup:null,ariaHidden:O,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Y,ariaLevel:D,ariaLive:null,ariaModal:O,ariaMultiLine:O,ariaMultiSelectable:O,ariaOrientation:null,ariaOwns:Y,ariaPlaceholder:null,ariaPosInSet:D,ariaPressed:O,ariaReadOnly:O,ariaRelevant:null,ariaRequired:O,ariaRoleDescription:Y,ariaRowCount:D,ariaRowIndex:D,ariaRowSpan:D,ariaSelected:O,ariaSetSize:D,ariaSort:null,ariaValueMax:D,ariaValueMin:D,ariaValueNow:D,ariaValueText:null,role:null}});function Yn(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}var ee=_,Xn=le,Jn=Ze,h=ee.boolean,Qn=ee.overloadedBoolean,re=ee.booleanish,x=ee.number,L=ee.spaceSeparated,ue=ee.commaSeparated,Zn=Xn({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Jn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ue,acceptCharset:L,accessKey:L,action:null,allow:null,allowFullScreen:h,allowPaymentRequest:h,allowUserMedia:h,alt:null,as:null,async:h,autoCapitalize:null,autoComplete:L,autoFocus:h,autoPlay:h,capture:h,charSet:null,checked:h,cite:null,className:L,cols:x,colSpan:null,content:null,contentEditable:re,controls:h,controlsList:L,coords:x|ue,crossOrigin:null,data:null,dateTime:null,decoding:null,default:h,defer:h,dir:null,dirName:null,disabled:h,download:Qn,draggable:re,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:h,formTarget:null,headers:L,height:x,hidden:h,high:x,href:null,hrefLang:null,htmlFor:L,httpEquiv:L,id:null,imageSizes:null,imageSrcSet:ue,inputMode:null,integrity:null,is:null,isMap:h,itemId:null,itemProp:L,itemRef:L,itemScope:h,itemType:L,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:h,low:x,manifest:null,max:null,maxLength:x,media:null,method:null,min:null,minLength:x,multiple:h,muted:h,name:null,nonce:null,noModule:h,noValidate:h,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:h,optimum:x,pattern:null,ping:L,placeholder:null,playsInline:h,poster:null,preload:null,readOnly:h,referrerPolicy:null,rel:L,required:h,reversed:h,rows:x,rowSpan:x,sandbox:L,scope:null,scoped:h,seamless:h,selected:h,shape:null,size:x,sizes:null,slot:null,span:x,spellCheck:re,src:null,srcDoc:null,srcLang:null,srcSet:ue,start:x,step:null,style:null,tabIndex:x,target:null,title:null,translate:null,type:null,typeMustMatch:h,useMap:null,value:re,width:x,wrap:null,align:null,aLink:null,archive:L,axis:null,background:null,bgColor:null,border:x,borderColor:null,bottomMargin:x,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:h,declare:h,event:null,face:null,frame:null,frameBorder:null,hSpace:x,leftMargin:x,link:null,longDesc:null,lowSrc:null,marginHeight:x,marginWidth:x,noResize:h,noHref:h,noShade:h,noWrap:h,object:null,profile:null,prompt:null,rev:null,rightMargin:x,rules:null,scheme:null,scrolling:re,standby:null,summary:null,text:null,topMargin:x,valueType:null,version:null,vAlign:null,vLink:null,vSpace:x,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:h,disableRemotePlayback:h,prefix:null,property:null,results:x,security:null,unselectable:null}}),er=En,nr=Un,rr=jn,ar=Gn,tr=Kn,lr=Zn,ir=er([rr,nr,ar,tr,lr]),or=xe,sr=Je,ur=Ke,Ce="data",cr=pr,fr=/^data[-\w.:]+$/i,en=/-[a-z]/g,dr=/[A-Z]/g;function pr(e,n){var r=or(n),t=n,f=ur;return r in e.normal?e.property[e.normal[r]]:(r.length>4&&r.slice(0,4)===Ce&&fr.test(n)&&(n.charAt(4)==="-"?t=vr(n):n=gr(n),f=sr),new f(t,n))}function vr(e){var n=e.slice(5).replace(en,mr);return Ce+n.charAt(0).toUpperCase()+n.slice(1)}function gr(e){var n=e.slice(4);return en.test(n)?e:(n=n.replace(dr,hr),n.charAt(0)!=="-"&&(n="-"+n),Ce+n)}function hr(e){return"-"+e.toLowerCase()}function mr(e){return e.charAt(1).toUpperCase()}var yr=xr,De=/[#.]/g;function xr(e,n){for(var r=e||"",t=n||"div",f={},p=0,m,u,g;p<r.length;)De.lastIndex=p,g=De.exec(r),m=r.slice(p,g?g.index:r.length),m&&(u?u==="#"?f.id=m:f.className?f.className.push(m):f.className=[m]:t=m,p+=m.length),g&&(u=g[0],p++);return{type:"element",tagName:t,properties:f,children:[]}}var Se={};Se.parse=Cr;Se.stringify=Sr;var Ue="",br=" ",wr=/[ \t\n\r\f]+/g;function Cr(e){var n=String(e||Ue).trim();return n===Ue?[]:n.split(wr)}function Sr(e){return e.join(br).trim()}var Ae={};Ae.parse=Ar;Ae.stringify=Pr;var he=",",Ne=" ",ae="";function Ar(e){for(var n=[],r=String(e||ae),t=r.indexOf(he),f=0,p=!1,m;!p;)t===-1&&(t=r.length,p=!0),m=r.slice(f,t).trim(),(m||!p)&&n.push(m),f=t+1,t=r.indexOf(he,f);return n}function Pr(e,n){var r=n||{},t=r.padLeft===!1?ae:Ne,f=r.padRight?Ne:ae;return e[e.length-1]===ae&&(e=e.concat(ae)),e.join(f+he+t).trim()}var Er=cr,Re=xe,$r=yr,je=Se.parse,qe=Ae.parse,Tr=Lr,kr={}.hasOwnProperty;function Lr(e,n,r){var t=r?Ur(r):null;return f;function f(m,u){var g=$r(m,n),P=Array.prototype.slice.call(arguments,2),T=g.tagName.toLowerCase(),C;if(g.tagName=t&&kr.call(t,T)?t[T]:T,u&&Or(u,g)&&(P.unshift(u),u=null),u)for(C in u)p(g.properties,C,u[C]);return nn(g.children,P),g.tagName==="template"&&(g.content={type:"root",children:g.children},g.children=[]),g}function p(m,u,g){var P,T,C;g==null||g!==g||(P=Er(e,u),T=P.property,C=g,typeof C=="string"&&(P.spaceSeparated?C=je(C):P.commaSeparated?C=qe(C):P.commaOrSpaceSeparated&&(C=je(qe(C).join(" ")))),T==="style"&&typeof g!="string"&&(C=Dr(C)),T==="className"&&m.className&&(C=m.className.concat(C)),m[T]=Ir(P,T,C))}}function Or(e,n){return typeof e=="string"||"length"in e||Mr(n.tagName,e)}function Mr(e,n){var r=n.type;return e==="input"||!r||typeof r!="string"?!1:typeof n.children=="object"&&"length"in n.children?!0:(r=r.toLowerCase(),e==="button"?r!=="menu"&&r!=="submit"&&r!=="reset"&&r!=="button":"value"in n)}function nn(e,n){var r,t;if(typeof n=="string"||typeof n=="number"){e.push({type:"text",value:String(n)});return}if(typeof n=="object"&&"length"in n){for(r=-1,t=n.length;++r<t;)nn(e,n[r]);return}if(typeof n!="object"||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}function Ir(e,n,r){var t,f,p;if(typeof r!="object"||!("length"in r))return ze(e,n,r);for(f=r.length,t=-1,p=[];++t<f;)p[t]=ze(e,n,r[t]);return p}function ze(e,n,r){var t=r;return e.number||e.positiveNumber?!isNaN(t)&&t!==""&&(t=Number(t)):(e.boolean||e.overloadedBoolean)&&typeof t=="string"&&(t===""||Re(r)===Re(n))&&(t=!0),t}function Dr(e){var n=[],r;for(r in e)n.push([r,e[r]].join(": "));return n.join("; ")}function Ur(e){for(var n=e.length,r=-1,t={},f;++r<n;)f=e[r],t[f.toLowerCase()]=f;return t}var Nr=ir,Rr=Tr,rn=Rr(Nr,"div");rn.displayName="html";var jr=rn,qr=jr;const zr="Æ",_r="&",Hr="Á",Br="Â",Wr="À",Fr="Å",Gr="Ã",Vr="Ä",Kr="©",Yr="Ç",Xr="Ð",Jr="É",Qr="Ê",Zr="È",ea="Ë",na=">",ra="Í",aa="Î",ta="Ì",la="Ï",ia="<",oa="Ñ",sa="Ó",ua="Ô",ca="Ò",fa="Ø",da="Õ",pa="Ö",va='"',ga="®",ha="Þ",ma="Ú",ya="Û",xa="Ù",ba="Ü",wa="Ý",Ca="á",Sa="â",Aa="´",Pa="æ",Ea="à",$a="&",Ta="å",ka="ã",La="ä",Oa="¦",Ma="ç",Ia="¸",Da="¢",Ua="©",Na="¤",Ra="°",ja="÷",qa="é",za="ê",_a="è",Ha="ð",Ba="ë",Wa="½",Fa="¼",Ga="¾",Va=">",Ka="í",Ya="î",Xa="¡",Ja="ì",Qa="¿",Za="ï",et="«",nt="<",rt="¯",at="µ",tt="·",lt=" ",it="¬",ot="ñ",st="ó",ut="ô",ct="ò",ft="ª",dt="º",pt="ø",vt="õ",gt="ö",ht="¶",mt="±",yt="£",xt='"',bt="»",wt="®",Ct="§",St="­",At="¹",Pt="²",Et="³",$t="ß",Tt="þ",kt="×",Lt="ú",Ot="û",Mt="ù",It="¨",Dt="ü",Ut="ý",Nt="¥",Rt="ÿ",jt={AElig:zr,AMP:_r,Aacute:Hr,Acirc:Br,Agrave:Wr,Aring:Fr,Atilde:Gr,Auml:Vr,COPY:Kr,Ccedil:Yr,ETH:Xr,Eacute:Jr,Ecirc:Qr,Egrave:Zr,Euml:ea,GT:na,Iacute:ra,Icirc:aa,Igrave:ta,Iuml:la,LT:ia,Ntilde:oa,Oacute:sa,Ocirc:ua,Ograve:ca,Oslash:fa,Otilde:da,Ouml:pa,QUOT:va,REG:ga,THORN:ha,Uacute:ma,Ucirc:ya,Ugrave:xa,Uuml:ba,Yacute:wa,aacute:Ca,acirc:Sa,acute:Aa,aelig:Pa,agrave:Ea,amp:$a,aring:Ta,atilde:ka,auml:La,brvbar:Oa,ccedil:Ma,cedil:Ia,cent:Da,copy:Ua,curren:Na,deg:Ra,divide:ja,eacute:qa,ecirc:za,egrave:_a,eth:Ha,euml:Ba,frac12:Wa,frac14:Fa,frac34:Ga,gt:Va,iacute:Ka,icirc:Ya,iexcl:Xa,igrave:Ja,iquest:Qa,iuml:Za,laquo:et,lt:nt,macr:rt,micro:at,middot:tt,nbsp:lt,not:it,ntilde:ot,oacute:st,ocirc:ut,ograve:ct,ordf:ft,ordm:dt,oslash:pt,otilde:vt,ouml:gt,para:ht,plusmn:mt,pound:yt,quot:xt,raquo:bt,reg:wt,sect:Ct,shy:St,sup1:At,sup2:Pt,sup3:Et,szlig:$t,thorn:Tt,times:kt,uacute:Lt,ucirc:Ot,ugrave:Mt,uml:It,uuml:Dt,yacute:Ut,yen:Nt,yuml:Rt},qt={0:"�",128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};var an=zt;function zt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=48&&n<=57}var _t=Ht;function Ht(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}var Bt=Wt;function Wt(e){var n=typeof e=="string"?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}var Ft=Bt,Gt=an,Vt=Kt;function Kt(e){return Ft(e)||Gt(e)}var _e=jt,He=qt,Yt=an,Xt=_t,tn=Vt,Jt=yn,Qt=fl,Zt={}.hasOwnProperty,Q=String.fromCharCode,el=Function.prototype,Be={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},nl=9,We=10,rl=12,al=32,Fe=38,tl=59,ll=60,il=61,ol=35,sl=88,ul=120,cl=65533,Z="named",Pe="hexadecimal",Ee="decimal",$e={};$e[Pe]=16;$e[Ee]=10;var fe={};fe[Z]=tn;fe[Ee]=Yt;fe[Pe]=Xt;var ln=1,on=2,sn=3,un=4,cn=5,me=6,fn=7,V={};V[ln]="Named character references must be terminated by a semicolon";V[on]="Numeric character references must be terminated by a semicolon";V[sn]="Named character references cannot be empty";V[un]="Numeric character references cannot be empty";V[cn]="Named character references must be known";V[me]="Numeric character references cannot be disallowed";V[fn]="Numeric character references cannot be outside the permissible Unicode range";function fl(e,n){var r={},t,f;n||(n={});for(f in Be)t=n[f],r[f]=t??Be[f];return(r.position.indent||r.position.start)&&(r.indent=r.position.indent||[],r.position=r.position.start),dl(e,r)}function dl(e,n){var r=n.additional,t=n.nonTerminated,f=n.text,p=n.reference,m=n.warning,u=n.textContext,g=n.referenceContext,P=n.warningContext,T=n.position,C=n.indent||[],B=e.length,j=0,oe=-1,M=T.column||1,J=T.line||1,q="",l=[],a,s,o,i,d,v,c,y,S,I,z,W,H,N,ne,w,k,E,b;for(typeof r=="string"&&(r=r.charCodeAt(0)),w=$(),y=m?de:el,j--,B++;++j<B;)if(d===We&&(M=C[oe]||1),d=e.charCodeAt(j),d===Fe){if(c=e.charCodeAt(j+1),c===nl||c===We||c===rl||c===al||c===Fe||c===ll||c!==c||r&&c===r){q+=Q(d),M++;continue}for(H=j+1,W=H,b=H,c===ol?(b=++W,c=e.charCodeAt(b),c===sl||c===ul?(N=Pe,b=++W):N=Ee):N=Z,a="",z="",i="",ne=fe[N],b--;++b<B&&(c=e.charCodeAt(b),!!ne(c));)i+=Q(c),N===Z&&Zt.call(_e,i)&&(a=i,z=_e[i]);o=e.charCodeAt(b)===tl,o&&(b++,s=N===Z?Jt(i):!1,s&&(a=i,z=s)),E=1+b-H,!o&&!t||(i?N===Z?(o&&!z?y(cn,1):(a!==i&&(b=W+a.length,E=1+b-W,o=!1),o||(S=a?ln:sn,n.attribute?(c=e.charCodeAt(b),c===il?(y(S,E),z=null):tn(c)?z=null:y(S,E)):y(S,E))),v=z):(o||y(on,E),v=parseInt(i,$e[N]),pl(v)?(y(fn,E),v=Q(cl)):v in He?(y(me,E),v=He[v]):(I="",vl(v)&&y(me,E),v>65535&&(v-=65536,I+=Q(v>>>10|55296),v=56320|v&1023),v=I+Q(v))):N!==Z&&y(un,E)),v?(R(),w=$(),j=b-1,M+=b-H+1,l.push(v),k=$(),k.offset++,p&&p.call(g,v,{start:w,end:k},e.slice(H-1,b)),w=k):(i=e.slice(H-1,b),q+=i,M+=i.length,j=b-1)}else d===10&&(J++,oe++,M=0),d===d?(q+=Q(d),M++):R();return l.join("");function $(){return{line:J,column:M,offset:j+(T.offset||0)}}function de(F,K){var G=$();G.column+=K,G.offset+=K,m.call(P,V[F],G,F)}function R(){q&&(l.push(q),f&&f.call(u,q,{start:w,end:$()}),q="")}}function pl(e){return e>=55296&&e<=57343||e>1114111}function vl(e){return e>=1&&e<=8||e===11||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534}var dn={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var r=function(t){var f=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,p=0,m={},u={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function l(a){return a instanceof g?new g(a.type,l(a.content),a.alias):Array.isArray(a)?a.map(l):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(l){return Object.prototype.toString.call(l).slice(8,-1)},objId:function(l){return l.__id||Object.defineProperty(l,"__id",{value:++p}),l.__id},clone:function l(a,s){s=s||{};var o,i;switch(u.util.type(a)){case"Object":if(i=u.util.objId(a),s[i])return s[i];o={},s[i]=o;for(var d in a)a.hasOwnProperty(d)&&(o[d]=l(a[d],s));return o;case"Array":return i=u.util.objId(a),s[i]?s[i]:(o=[],s[i]=o,a.forEach(function(v,c){o[c]=l(v,s)}),o);default:return a}},getLanguage:function(l){for(;l;){var a=f.exec(l.className);if(a)return a[1].toLowerCase();l=l.parentElement}return"none"},setLanguage:function(l,a){l.className=l.className.replace(RegExp(f,"gi"),""),l.classList.add("language-"+a)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(o){var l=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(l){var a=document.getElementsByTagName("script");for(var s in a)if(a[s].src==l)return a[s]}return null}},isActive:function(l,a,s){for(var o="no-"+a;l;){var i=l.classList;if(i.contains(a))return!0;if(i.contains(o))return!1;l=l.parentElement}return!!s}},languages:{plain:m,plaintext:m,text:m,txt:m,extend:function(l,a){var s=u.util.clone(u.languages[l]);for(var o in a)s[o]=a[o];return s},insertBefore:function(l,a,s,o){o=o||u.languages;var i=o[l],d={};for(var v in i)if(i.hasOwnProperty(v)){if(v==a)for(var c in s)s.hasOwnProperty(c)&&(d[c]=s[c]);s.hasOwnProperty(v)||(d[v]=i[v])}var y=o[l];return o[l]=d,u.languages.DFS(u.languages,function(S,I){I===y&&S!=l&&(this[S]=d)}),d},DFS:function l(a,s,o,i){i=i||{};var d=u.util.objId;for(var v in a)if(a.hasOwnProperty(v)){s.call(a,v,a[v],o||v);var c=a[v],y=u.util.type(c);y==="Object"&&!i[d(c)]?(i[d(c)]=!0,l(c,s,null,i)):y==="Array"&&!i[d(c)]&&(i[d(c)]=!0,l(c,s,v,i))}}},plugins:{},highlightAll:function(l,a){u.highlightAllUnder(document,l,a)},highlightAllUnder:function(l,a,s){var o={callback:s,container:l,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};u.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),u.hooks.run("before-all-elements-highlight",o);for(var i=0,d;d=o.elements[i++];)u.highlightElement(d,a===!0,o.callback)},highlightElement:function(l,a,s){var o=u.util.getLanguage(l),i=u.languages[o];u.util.setLanguage(l,o);var d=l.parentElement;d&&d.nodeName.toLowerCase()==="pre"&&u.util.setLanguage(d,o);var v=l.textContent,c={element:l,language:o,grammar:i,code:v};function y(I){c.highlightedCode=I,u.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,u.hooks.run("after-highlight",c),u.hooks.run("complete",c),s&&s.call(c.element)}if(u.hooks.run("before-sanity-check",c),d=c.element.parentElement,d&&d.nodeName.toLowerCase()==="pre"&&!d.hasAttribute("tabindex")&&d.setAttribute("tabindex","0"),!c.code){u.hooks.run("complete",c),s&&s.call(c.element);return}if(u.hooks.run("before-highlight",c),!c.grammar){y(u.util.encode(c.code));return}if(a&&t.Worker){var S=new Worker(u.filename);S.onmessage=function(I){y(I.data)},S.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else y(u.highlight(c.code,c.grammar,c.language))},highlight:function(l,a,s){var o={code:l,grammar:a,language:s};if(u.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=u.tokenize(o.code,o.grammar),u.hooks.run("after-tokenize",o),g.stringify(u.util.encode(o.tokens),o.language)},tokenize:function(l,a){var s=a.rest;if(s){for(var o in s)a[o]=s[o];delete a.rest}var i=new C;return B(i,i.head,l),T(l,i,a,i.head,0),oe(i)},hooks:{all:{},add:function(l,a){var s=u.hooks.all;s[l]=s[l]||[],s[l].push(a)},run:function(l,a){var s=u.hooks.all[l];if(!(!s||!s.length))for(var o=0,i;i=s[o++];)i(a)}},Token:g};t.Prism=u;function g(l,a,s,o){this.type=l,this.content=a,this.alias=s,this.length=(o||"").length|0}g.stringify=function l(a,s){if(typeof a=="string")return a;if(Array.isArray(a)){var o="";return a.forEach(function(y){o+=l(y,s)}),o}var i={type:a.type,content:l(a.content,s),tag:"span",classes:["token",a.type],attributes:{},language:s},d=a.alias;d&&(Array.isArray(d)?Array.prototype.push.apply(i.classes,d):i.classes.push(d)),u.hooks.run("wrap",i);var v="";for(var c in i.attributes)v+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+v+">"+i.content+"</"+i.tag+">"};function P(l,a,s,o){l.lastIndex=a;var i=l.exec(s);if(i&&o&&i[1]){var d=i[1].length;i.index+=d,i[0]=i[0].slice(d)}return i}function T(l,a,s,o,i,d){for(var v in s)if(!(!s.hasOwnProperty(v)||!s[v])){var c=s[v];c=Array.isArray(c)?c:[c];for(var y=0;y<c.length;++y){if(d&&d.cause==v+","+y)return;var S=c[y],I=S.inside,z=!!S.lookbehind,W=!!S.greedy,H=S.alias;if(W&&!S.pattern.global){var N=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,N+"g")}for(var ne=S.pattern||S,w=o.next,k=i;w!==a.tail&&!(d&&k>=d.reach);k+=w.value.length,w=w.next){var E=w.value;if(a.length>l.length)return;if(!(E instanceof g)){var b=1,$;if(W){if($=P(ne,k,l,z),!$||$.index>=l.length)break;var K=$.index,de=$.index+$[0].length,R=k;for(R+=w.value.length;K>=R;)w=w.next,R+=w.value.length;if(R-=w.value.length,k=R,w.value instanceof g)continue;for(var F=w;F!==a.tail&&(R<de||typeof F.value=="string");F=F.next)b++,R+=F.value.length;b--,E=l.slice(k,R),$.index-=k}else if($=P(ne,0,E,z),!$)continue;var K=$.index,G=$[0],pe=E.slice(0,K),ke=E.slice(K+G.length),ve=k+E.length;d&&ve>d.reach&&(d.reach=ve);var se=w.prev;pe&&(se=B(a,se,pe),k+=pe.length),j(a,se,b);var hn=new g(v,I?u.tokenize(G,I):G,H,G);if(w=B(a,se,hn),ke&&B(a,w,ke),b>1){var ge={cause:v+","+y,reach:ve};T(l,a,s,w.prev,k,ge),d&&ge.reach>d.reach&&(d.reach=ge.reach)}}}}}}function C(){var l={value:null,prev:null,next:null},a={value:null,prev:l,next:null};l.next=a,this.head=l,this.tail=a,this.length=0}function B(l,a,s){var o=a.next,i={value:s,prev:a,next:o};return a.next=i,o.prev=i,l.length++,i}function j(l,a,s){for(var o=a.next,i=0;i<s&&o!==l.tail;i++)o=o.next;a.next=o,o.prev=a,l.length-=i}function oe(l){for(var a=[],s=l.head.next;s!==l.tail;)a.push(s.value),s=s.next;return a}if(!t.document)return t.addEventListener&&(u.disableWorkerMessageHandler||t.addEventListener("message",function(l){var a=JSON.parse(l.data),s=a.language,o=a.code,i=a.immediateClose;t.postMessage(u.highlight(o,u.languages[s],s)),i&&t.close()},!1)),u;var M=u.util.currentScript();M&&(u.filename=M.src,M.hasAttribute("data-manual")&&(u.manual=!0));function J(){u.manual||u.highlightAll()}if(!u.manual){var q=document.readyState;q==="loading"||q==="interactive"&&M&&M.defer?document.addEventListener("DOMContentLoaded",J):window.requestAnimationFrame?window.requestAnimationFrame(J):window.setTimeout(J,16)}return u}(n);e.exports&&(e.exports=r),typeof ce<"u"&&(ce.Prism=r)})(dn);var gl=dn.exports,te=typeof globalThis=="object"?globalThis:typeof self=="object"?self:typeof window=="object"?window:typeof ce=="object"?ce:{},hl=Ol();te.Prism={manual:!0,disableWorkerMessageHandler:!0};var ml=qr,yl=Qt,pn=gl,xl=bn,bl=wn,wl=Cn,Cl=Sn;hl();var Te={}.hasOwnProperty;function vn(){}vn.prototype=pn;var A=new vn,gn=A;A.highlight=Al;A.register=ie;A.alias=Sl;A.registered=Pl;A.listLanguages=El;ie(xl);ie(bl);ie(wl);ie(Cl);A.util.encode=kl;A.Token.stringify=$l;function ie(e){if(typeof e!="function"||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");A.languages[e.displayName]===void 0&&e(A)}function Sl(e,n){var r=A.languages,t=e,f,p,m,u;n&&(t={},t[e]=n);for(f in t)for(p=t[f],p=typeof p=="string"?[p]:p,m=p.length,u=-1;++u<m;)r[p[u]]=r[f]}function Al(e,n){var r=pn.highlight,t;if(typeof e!="string")throw new Error("Expected `string` for `value`, got `"+e+"`");if(A.util.type(n)==="Object")t=n,n=null;else{if(typeof n!="string")throw new Error("Expected `string` for `name`, got `"+n+"`");if(Te.call(A.languages,n))t=A.languages[n];else throw new Error("Unknown language: `"+n+"` is not registered")}return r.call(this,e,t,n)}function Pl(e){if(typeof e!="string")throw new Error("Expected `string` for `language`, got `"+e+"`");return Te.call(A.languages,e)}function El(){var e=A.languages,n=[],r;for(r in e)Te.call(e,r)&&typeof e[r]=="object"&&n.push(r);return n}function $l(e,n,r){var t;return typeof e=="string"?{type:"text",value:e}:A.util.type(e)==="Array"?Tl(e,n):(t={type:e.type,content:A.Token.stringify(e.content,n,r),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:r},e.alias&&(t.classes=t.classes.concat(e.alias)),A.hooks.run("wrap",t),ml(t.tag+"."+t.classes.join("."),Ll(t.attributes),t.content))}function Tl(e,n){for(var r=[],t=e.length,f=-1,p;++f<t;)p=e[f],p!==""&&p!==null&&p!==void 0&&r.push(p);for(f=-1,t=r.length;++f<t;)p=r[f],r[f]=A.Token.stringify(p,n,r);return r}function kl(e){return e}function Ll(e){var n;for(n in e)e[n]=yl(e[n]);return e}function Ol(){var e="Prism"in te,n=e?te.Prism:void 0;return r;function r(){e?te.Prism=n:delete te.Prism,e=void 0,n=void 0}}const Ml=xn(gn),jl=An({__proto__:null,default:Ml},[gn]);export{jl as c};
