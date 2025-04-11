/*! For license information please see 183.5fc3b36a.js.LICENSE.txt */
"use strict";(self.webpackChunkdhs_docs=self.webpackChunkdhs_docs||[]).push([[183],{3756:(t,n,e)=>{e.d(n,{eHT:()=>v,dyV:()=>g,H9b:()=>m,Jqy:()=>y});var i=e(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=i.createContext&&i.createContext(r),s=["attr","size","title"];function u(t,n){if(null==t)return{};var e,i,r=function(t,n){if(null==t)return{};var e={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(n.indexOf(i)>=0)continue;e[i]=t[i]}return e}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}function a(){return a=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},a.apply(this,arguments)}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){var i;return(n="symbol"==typeof(i=function(t,n){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(n,"string"))?i:i+"")in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t){return t&&t.map(((t,n)=>i.createElement(t.tag,l({key:n},t.attr),d(t.child))))}function p(t){return n=>i.createElement(h,a({attr:l({},t.attr)},n),d(t.child))}function h(t){var n=n=>{var e,{attr:r,size:o,title:c}=t,f=u(t,s),d=o||n.size||"1em";return n.className&&(e=n.className),t.className&&(e=(e?e+" ":"")+t.className),i.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,f,{className:e,style:l(l({color:t.color||n.color},n.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),t.children)};return void 0!==o?i.createElement(o.Consumer,null,(t=>n(t))):n(r)}function v(t){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(t)}function g(t){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 5 19 12 12 19"},child:[]}]})(t)}function m(t){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"},child:[]},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"},child:[]}]})(t)}function y(t){return p({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(t)}},4570:(t,n,e)=>{e.d(n,{Nn:()=>be,eB:()=>ye});var i=e(6540);function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o="(prefers-reduced-motion: reduce)",s={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function u(t){t.length=0}function a(t,n,e){return Array.prototype.slice.call(t,n,e)}function c(t){return t.bind.apply(t,[null].concat(a(arguments,1)))}var l=setTimeout,f=function(){};function d(t){return requestAnimationFrame(t)}function p(t,n){return typeof n===t}function h(t){return!b(t)&&p("object",t)}var v=Array.isArray,g=c(p,"function"),m=c(p,"string"),y=c(p,"undefined");function b(t){return null===t}function w(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function E(t){return v(t)?t:[t]}function x(t,n){E(t).forEach(n)}function S(t,n){return t.indexOf(n)>-1}function k(t,n){return t.push.apply(t,E(n)),t}function P(t,n,e){t&&x(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function C(t,n){P(t,m(n)?n.split(" "):n,!0)}function O(t,n){x(n,t.appendChild.bind(t))}function L(t,n){x(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function _(t,n){return w(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function A(t,n){var e=t?a(t.children):[];return n?e.filter((function(t){return _(t,n)})):e}function j(t,n){return n?A(t,n)[0]:t.firstElementChild}var M=Object.keys;function D(t,n,e){return t&&(e?M(t).reverse():M(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function N(t){return a(arguments,1).forEach((function(n){D(n,(function(e,i){t[i]=n[i]}))})),t}function z(t){return a(arguments,1).forEach((function(n){D(n,(function(n,e){v(n)?t[e]=n.slice():h(n)?t[e]=z({},h(t[e])?t[e]:{},n):t[e]=n}))})),t}function T(t,n){x(n||M(t),(function(n){delete t[n]}))}function I(t,n){x(t,(function(t){x(n,(function(n){t&&t.removeAttribute(n)}))}))}function R(t,n,e){h(n)?D(n,(function(n,e){R(t,e,n)})):x(t,(function(t){b(e)||""===e?I(t,n):t.setAttribute(n,String(e))}))}function F(t,n,e){var i=document.createElement(t);return n&&(m(n)?C(i,n):R(i,n)),e&&O(e,i),i}function W(t,n,e){if(y(e))return getComputedStyle(t)[n];b(e)||(t.style[n]=""+e)}function B(t,n){W(t,"display",n)}function H(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function X(t,n){return t.getAttribute(n)}function G(t,n){return t&&t.classList.contains(n)}function U(t){return t.getBoundingClientRect()}function q(t){x(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function Y(t){return j((new DOMParser).parseFromString(t,"text/html").body)}function V(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function J(t,n){return t&&t.querySelector(n)}function K(t,n){return n?a(t.querySelectorAll(n)):[]}function Q(t,n){P(t,n,!1)}function Z(t){return t.timeStamp}function $(t){return m(t)?t:t?t+"px":""}var tt="splide",nt="data-"+tt;function et(t,n){if(!t)throw new Error("["+tt+"] "+(n||""))}var it=Math.min,rt=Math.max,ot=Math.floor,st=Math.ceil,ut=Math.abs;function at(t,n,e){return ut(t-n)<e}function ct(t,n,e,i){var r=it(n,e),o=rt(n,e);return i?r<t&&t<o:r<=t&&t<=o}function lt(t,n,e){var i=it(n,e),r=rt(n,e);return it(rt(i,t),r)}function ft(t){return+(t>0)-+(t<0)}function dt(t,n){return x(n,(function(n){t=t.replace("%s",""+n)})),t}function pt(t){return t<10?"0"+t:""+t}var ht={};function vt(){var t=[];function n(t,n,e){x(t,(function(t){t&&x(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,r,o){n(e,i,(function(n,e,i){var s="addEventListener"in n,u=s?n.removeEventListener.bind(n,e,r,o):n.removeListener.bind(n,r);s?n.addEventListener(e,r,o):n.addListener(r),t.push([n,e,i,r,u])}))},unbind:function(e,i,r){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||r&&t[3]!==r)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i,r=!0;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:r,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,r,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),u(t)}}}var gt="mounted",mt="ready",yt="move",bt="moved",wt="click",Et="active",xt="inactive",St="visible",kt="hidden",Pt="refresh",Ct="updated",Ot="resize",Lt="resized",_t="drag",At="dragging",jt="dragged",Mt="scroll",Dt="scrolled",Nt="destroy",zt="arrows:mounted",Tt="arrows:updated",It="pagination:mounted",Rt="pagination:updated",Ft="navigation:mounted",Wt="autoplay:play",Bt="autoplay:playing",Ht="autoplay:pause",Xt="lazyload:loaded",Gt="sk",Ut="sh",qt="ei";function Yt(t){var n=t?t.event.bus:document.createDocumentFragment(),e=vt();return t&&t.event.on(Nt,e.destroy),N(e,{bus:n,on:function(t,i){e.bind(n,E(t).join(" "),(function(t){i.apply(i,v(t.detail)?t.detail:[])}))},off:c(e.unbind,n),emit:function(t){e.dispatch(n,t,a(arguments,1))}})}function Vt(t,n,e,i){var r,o,s=Date.now,u=0,a=!0,c=0;function l(){if(!a){if(u=t?it((s()-r)/t,1):1,e&&e(u),u>=1&&(n(),r=s(),i&&++c>=i))return f();o=d(l)}}function f(){a=!0}function p(){o&&cancelAnimationFrame(o),u=0,o=0,a=!0}return{start:function(n){n||p(),r=s()-(n?u*t:0),a=!1,o=d(l)},rewind:function(){r=s(),u=0,e&&e(u)},pause:f,cancel:p,set:function(n){t=n},isPaused:function(){return a}}}var Jt="Arrow",Kt=Jt+"Left",Qt=Jt+"Right",Zt=Jt+"Up",$t=Jt+"Down",tn="ttb",nn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Zt,Qt],ArrowRight:[$t,Kt]};var en="role",rn="tabindex",on="aria-",sn=on+"controls",un=on+"current",an=on+"selected",cn=on+"label",ln=on+"labelledby",fn=on+"hidden",dn=on+"orientation",pn=on+"roledescription",hn=on+"live",vn=on+"busy",gn=on+"atomic",mn=[en,rn,"disabled",sn,un,cn,ln,fn,dn,pn],yn=tt+"__",bn="is-",wn=tt,En=yn+"track",xn=yn+"list",Sn=yn+"slide",kn=Sn+"--clone",Pn=Sn+"__container",Cn=yn+"arrows",On=yn+"arrow",Ln=On+"--prev",_n=On+"--next",An=yn+"pagination",jn=An+"__page",Mn=yn+"progress"+"__bar",Dn=yn+"toggle",Nn=yn+"sr",zn=bn+"initialized",Tn=bn+"active",In=bn+"prev",Rn=bn+"next",Fn=bn+"visible",Wn=bn+"loading",Bn=bn+"focus-in",Hn=bn+"overflow",Xn=[Tn,Fn,In,Rn,Wn,Bn,Hn],Gn={slide:Sn,clone:kn,arrows:Cn,arrow:On,prev:Ln,next:_n,pagination:An,page:jn,spinner:yn+"spinner"};var Un="touchstart mousedown",qn="touchmove mousemove",Yn="touchend touchcancel mouseup click";var Vn="slide",Jn="loop",Kn="fade";function Qn(t,n,e,i){var r,o=Yt(t),s=o.on,u=o.emit,a=o.bind,l=t.Components,f=t.root,d=t.options,p=d.isNavigation,h=d.updateOnMove,v=d.i18n,g=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=X(i,"style"),w=X(i,cn),E=e>-1,x=j(i,"."+Pn);function S(){var r=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");R(i,cn,dt(v.slideX,(E?e:n)+1)),R(i,sn,r),R(i,en,m?"button":""),m&&I(i,pn)}function k(){r||C()}function C(){if(!r){var e=t.index;(o=O())!==G(i,Tn)&&(P(i,Tn,o),R(i,un,p&&o||""),u(o?Et:xt,L)),function(){var n=function(){if(t.is(Kn))return O();var n=U(l.Elements.track),e=U(i),r=y("left",!0),o=y("right",!0);return ot(n[r])<=st(e[r])&&ot(e[o])<=st(n[o])}(),e=!n&&(!O()||E);t.state.is([4,5])||R(i,fn,e||"");R(K(i,d.focusableNodes||""),rn,e?-1:""),m&&R(i,rn,e?-1:0);n!==G(i,Fn)&&(P(i,Fn,n),u(n?St:kt,L));if(!n&&document.activeElement===i){var r=l.Slides.getAt(t.index);r&&H(r.slide)}}(),P(i,In,n===e-1),P(i,Rn,n===e+1)}var o}function O(){var i=t.index;return i===n||d.cloneStatus&&i===e}var L={index:n,slideIndex:e,slide:i,container:x,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+pt(n+1),R(i,en,g?"tabpanel":"group"),R(i,pn,v.slide),R(i,cn,w||dt(v.slideLabel,[n+1,t.length]))),a(i,"click",c(u,wt,L)),a(i,"keydown",c(u,Gt,L)),s([bt,Ut,Dt],C),s(Ft,S),h&&s(yt,k)},destroy:function(){r=!0,o.destroy(),Q(i,Xn),I(i,mn),R(i,"style",b),R(i,cn,w||"")},update:C,style:function(t,n,e){W(e&&x||i,t,n)},isWithin:function(e,i){var r=ut(e-n);return E||!d.rewind&&!t.is(Jn)||(r=it(r,t.length-r)),r<=i}};return L}var Zn=nt+"-interval";var $n={passive:!1,capture:!0};var te={Spacebar:" ",Right:Qt,Left:Kt,Up:Zt,Down:$t};function ne(t){return t=m(t)?t:t.key,te[t]||t}var ee="keydown";var ie=nt+"-lazy",re=ie+"-srcset",oe="["+ie+"], ["+re+"]";var se=[" ","Enter"];var ue=Object.freeze({__proto__:null,Media:function(t,n,e){var i=t.state,r=e.breakpoints||{},s=e.reducedMotion||{},u=vt(),a=[];function c(t){t&&u.destroy()}function l(t,n){var e=matchMedia(n);u.bind(e,"change",f),a.push([t,e])}function f(){var n=i.is(7),r=e.direction,o=a.reduce((function(t,n){return z(t,n[1].matches?n[0]:{})}),{});T(e),d(o),e.destroy?t.destroy("completely"===e.destroy):n?(c(!0),t.mount()):r!==e.direction&&t.refresh()}function d(n,r,o){z(e,n),r&&z(Object.getPrototypeOf(e),n),!o&&i.is(1)||t.emit(Ct,e)}return{setup:function(){var t="min"===e.mediaQuery;M(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(s,o),f()},destroy:c,reduce:function(t){matchMedia(o).matches&&(t?z(e,s):T(e,M(s)))},set:d}},Direction:function(t,n,e){return{resolve:function(t,n,i){var r="rtl"!==(i=i||e.direction)||n?i===tn?0:-1:1;return nn[t]&&nn[t][r]||t.replace(/width|left|right/i,(function(t,n){var e=nn[t.toLowerCase()][r]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var i,r,o,s=Yt(t),a=s.on,c=s.bind,l=t.root,f=e.i18n,d={},p=[],h=[],v=[];function m(){i=w("."+En),r=j(i,"."+xn),et(i&&r,"A track/list element is missing."),k(p,A(r,"."+Sn+":not(."+kn+")")),D({arrows:Cn,pagination:An,prev:Ln,next:_n,bar:Mn,toggle:Dn},(function(t,n){d[n]=w("."+t)})),N(d,{root:l,track:i,list:r,slides:p}),function(){var t=l.id||(o=tt,""+o+pt(ht[o]=(ht[o]||0)+1)),n=e.role;var o;l.id=t,i.id=i.id||t+"-track",r.id=r.id||t+"-list",!X(l,en)&&"SECTION"!==l.tagName&&n&&R(l,en,n);R(l,pn,f.carousel),R(r,en,"presentation")}(),b()}function y(t){var n=mn.concat("style");u(p),Q(l,h),Q(i,v),I([i,r],n),I(l,t?n:["style",pn])}function b(){Q(l,h),Q(i,v),h=E(wn),v=E(En),C(l,h),C(i,v),R(l,cn,e.label),R(l,ln,e.labelledby)}function w(t){var n=J(l,t);return n&&function(t,n){if(g(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!_(e,n);)e=e.parentElement;return e}(n,"."+wn)===l?n:void 0}function E(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===wn&&Tn]}return N(d,{setup:m,mount:function(){a(Pt,y),a(Pt,m),a(Ct,b),c(document,Un+" keydown",(function(t){o="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){P(l,Bn,!!o)}))},destroy:y})},Slides:function(t,n,e){var i=Yt(t),r=i.on,o=i.emit,s=i.bind,a=n.Elements,l=a.slides,f=a.list,d=[];function p(){l.forEach((function(t,n){v(t,n,-1)}))}function h(){b((function(t){t.destroy()})),u(d)}function v(n,e,i){var r=Qn(t,e,i,n);r.mount(),d.push(r),d.sort((function(t,n){return t.index-n.index}))}function y(t){return t?k((function(t){return!t.isClone})):d}function b(t,n){y(n).forEach(t)}function k(t){return d.filter(g(t)?t:function(n){return m(t)?_(n.slide,t):S(E(t),n.index)})}return{mount:function(){p(),r(Pt,h),r(Pt,p)},destroy:h,update:function(){b((function(t){t.update()}))},register:v,get:y,getIn:function(t){var i=n.Controller,r=i.toIndex(t),o=i.hasFocus()?1:e.perPage;return k((function(t){return ct(t.index,r,r+o-1)}))},getAt:function(t){return k(t)[0]},add:function(t,n){x(t,(function(t){if(m(t)&&(t=Y(t)),w(t)){var i=l[n];i?L(t,i):O(f,t),C(t,e.classes.slide),r=t,u=c(o,Ot),a=K(r,"img"),(d=a.length)?a.forEach((function(t){s(t,"load error",(function(){--d||u()}))})):u()}var r,u,a,d})),o(Pt)},remove:function(t){q(k(t).map((function(t){return t.slide}))),o(Pt)},forEach:b,filter:k,style:function(t,n,e){b((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(t,n,e){var i,r,o,s=Yt(t),u=s.on,a=s.bind,l=s.emit,f=n.Slides,d=n.Direction.resolve,p=n.Elements,v=p.root,g=p.track,m=p.list,y=f.getAt,b=f.style;function w(){i=e.direction===tn,W(v,"maxWidth",$(e.width)),W(g,d("paddingLeft"),x(!1)),W(g,d("paddingRight"),x(!0)),E(!0)}function E(t){var n=U(v);(t||r.width!==n.width||r.height!==n.height)&&(W(g,"height",function(){var t="";i&&(et(t=S(),"height or heightRatio is missing."),t="calc("+t+" - "+x(!1)+" - "+x(!0)+")");return t}()),b(d("marginRight"),$(e.gap)),b("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":k())),b("height",$(e.fixedHeight)||(i?e.autoHeight?null:k():S()),!0),r=n,l(Lt),o!==(o=j())&&(P(v,Hn,o),l("overflow",o)))}function x(t){var n=e.padding,i=d(t?"right":"left");return n&&$(n[i]||(h(n)?0:n))||"0px"}function S(){return $(e.height||U(m).width*e.heightRatio)}function k(){var t=$(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function C(){return U(m)[d("width")]}function O(t,n){var e=y(t||0);return e?U(e.slide)[d("width")]+(n?0:A()):0}function L(t,n){var e=y(t);if(e){var i=U(e.slide)[d("right")],r=U(m)[d("left")];return ut(i-r)+(n?0:A())}return 0}function _(n){return L(t.length-1)-L(0)+O(0,n)}function A(){var t=y(0);return t&&parseFloat(W(t.slide,d("marginRight")))||0}function j(){return t.is(Kn)||_(!0)>C()}return{mount:function(){var t,n,e;w(),a(window,"resize load",(t=c(l,Ot),e=Vt(n||0,t,null,1),function(){e.isPaused()&&e.start()})),u([Ct,Pt],w),u(Ot,E)},resize:E,listSize:C,slideSize:O,sliderSize:_,totalSize:L,getPadding:function(t){return parseFloat(W(g,d("padding"+(t?"Right":"Left"))))||0},isOverflow:j}},Clones:function(t,n,e){var i,r=Yt(t),o=r.on,s=n.Elements,a=n.Slides,c=n.Direction.resolve,l=[];function f(){o(Pt,d),o([Ct,Ot],h),(i=v())&&(!function(n){var i=a.get().slice(),r=i.length;if(r){for(;i.length<n;)k(i,i);k(i.slice(-n),i.slice(0,n)).forEach((function(o,u){var c=u<n,f=function(n,i){var r=n.cloneNode(!0);return C(r,e.classes.clone),r.id=t.root.id+"-clone"+pt(i+1),r}(o.slide,u);c?L(f,i[0].slide):O(s.list,f),k(l,f),a.register(f,u-n+(c?0:r),o.index)}))}}(i),n.Layout.resize(!0))}function d(){p(),f()}function p(){q(l),u(l),r.destroy()}function h(){var t=v();i!==t&&(i<t||!t)&&r.emit(Pt)}function v(){var i=e.clones;if(t.is(Jn)){if(y(i)){var r=e[c("fixedWidth")]&&n.Layout.slideSize(0);i=r&&st(U(s.track)[c("width")]/r)||e[c("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(t,n,e){var i,r=Yt(t),o=r.on,s=r.emit,u=t.state.set,a=n.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,p=a.sliderSize,h=n.Direction,v=h.resolve,g=h.orient,m=n.Elements,b=m.list,w=m.track;function E(){n.Controller.isBusy()||(n.Scroll.cancel(),x(t.index),n.Slides.update())}function x(t){S(O(t,!0))}function S(e,i){if(!t.is(Kn)){var r=i?e:function(e){if(t.is(Jn)){var i=C(e),r=i>n.Controller.getEnd();(i<0||r)&&(e=k(e,r))}return e}(e);W(b,"transform","translate"+v("X")+"("+r+"px)"),e!==r&&s(Ut)}}function k(t,n){var e=t-_(n),i=p();return t-=g(i*(st(ut(e)/i)||1))*(n?1:-1)}function P(){S(L(),!0),i.cancel()}function C(t){for(var e=n.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var s=e[o].index,u=ut(O(s,!0)-t);if(!(u<=r))break;r=u,i=s}return i}function O(n,i){var r=g(f(n-1)-function(t){var n=e.focus;return"center"===n?(d()-c(t,!0))/2:+n*c(t)||0}(n));return i?function(n){e.trimSpace&&t.is(Vn)&&(n=lt(n,0,g(p(!0)-d())));return n}(r):r}function L(){var t=v("left");return U(b)[t]-U(w)[t]+g(l(!1))}function _(t){return O(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,o([gt,Lt,Ct,Pt],E)},move:function(t,n,e,r){var o,a;t!==n&&(o=t>e,a=g(k(L(),o)),o?a>=0:a<=b[v("scrollWidth")]-U(w)[v("width")])&&(P(),S(k(L(),t>e),!0)),u(4),s(yt,n,e,t),i.start(n,(function(){u(3),s(bt,n,e,t),r&&r()}))},jump:x,translate:S,shift:k,cancel:P,toIndex:C,toPosition:O,getPosition:L,getLimit:_,exceededLimit:function(t,n){n=y(n)?L():n;var e=!0!==t&&g(n)<g(_(!1)),i=!1!==t&&g(n)>g(_(!0));return e||i},reposition:E}},Controller:function(t,n,e){var i,r,o,s,u=Yt(t),a=u.on,l=u.emit,f=n.Move,d=f.getPosition,p=f.getLimit,h=f.toPosition,v=n.Slides,g=v.isEnough,b=v.getLength,w=e.omitEnd,E=t.is(Jn),x=t.is(Vn),S=c(_,!1),k=c(_,!0),P=e.start||0,C=P;function O(){r=b(!0),o=e.perMove,s=e.perPage,i=M();var t=lt(P,0,w?i:r-1);t!==P&&(P=t,f.reposition())}function L(){i!==M()&&l(qt)}function _(t,n){var e=o||(T()?1:s),r=A(P+e*(t?-1:1),P,!(o||T()));return-1===r&&x&&!at(d(),p(!t),1)?t?0:i:n?r:j(r)}function A(n,u,a){if(g()||T()){var c=function(n){if(x&&"move"===e.trimSpace&&n!==P)for(var i=d();i===h(n,!0)&&ct(n,0,t.length-1,!e.rewind);)n<P?--n:++n;return n}(n);c!==n&&(u=n,n=c,a=!1),n<0||n>i?n=o||!ct(0,n,u,!0)&&!ct(i,u,n,!0)?E?a?n<0?-(r%s||s):r:n:e.rewind?n<0?i:0:-1:D(N(n)):a&&n!==u&&(n=D(N(u)+(n<u?-1:1)))}else n=-1;return n}function j(t){return E?(t+r)%r||0:t}function M(){for(var t=r-(T()||E&&o?1:s);w&&t-- >0;)if(h(r-1,!0)!==h(t,!0)){t++;break}return lt(t,0,r-1)}function D(t){return lt(T()?t:s*t,0,i)}function N(t){return T()?it(t,i):ot((t>=i?r-1:t)/s)}function z(t){t!==P&&(C=P,P=t)}function T(){return!y(e.focus)||e.isNavigation}function I(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){O(),a([Ct,Pt,qt],O),a(Lt,L)},go:function(t,n,e){if(!I()){var r=function(t){var n=P;if(m(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],r=e[1],o=e[2];"+"===r||"-"===r?n=A(P+ +(""+r+(+o||1)),P):">"===r?n=o?D(+o):S(!0):"<"===r&&(n=k(!0))}else n=E?t:lt(t,0,i);return n}(t),o=j(r);o>-1&&(n||o!==P)&&(z(o),f.move(r,o,C,e))}},scroll:function(t,e,r,o){n.Scroll.scroll(t,e,r,(function(){var t=j(f.toIndex(d()));z(w?it(t,i):t),o&&o()}))},getNext:S,getPrev:k,getAdjacent:_,getEnd:M,setIndex:z,getIndex:function(t){return t?C:P},toIndex:D,toPage:N,toDest:function(t){var n=f.toIndex(t);return x?lt(n,0,i):n},hasFocus:T,isBusy:I}},Arrows:function(t,n,e){var i,r,o=Yt(t),s=o.on,u=o.bind,a=o.emit,l=e.classes,f=e.i18n,d=n.Elements,p=n.Controller,h=d.arrows,v=d.track,g=h,m=d.prev,y=d.next,b={};function w(){!function(){var t=e.arrows;!t||m&&y||(g=h||F("div",l.arrows),m=k(!0),y=k(!1),i=!0,O(g,[m,y]),!h&&L(g,v));m&&y&&(N(b,{prev:m,next:y}),B(g,t?"":"none"),C(g,r=Cn+"--"+e.direction),t&&(s([gt,bt,Pt,Dt,qt],P),u(y,"click",c(S,">")),u(m,"click",c(S,"<")),P(),R([m,y],sn,v.id),a(zt,m,y)))}(),s(Ct,E)}function E(){x(),w()}function x(){o.destroy(),Q(g,r),i?(q(h?[m,y]:g),m=y=null):I([m,y],mn)}function S(t){p.go(t,!0)}function k(t){return Y('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function P(){if(m&&y){var n=t.index,e=p.getPrev(),i=p.getNext(),r=e>-1&&n<e?f.last:f.prev,o=i>-1&&n>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,R(m,cn,r),R(y,cn,o),a(Tt,m,y,e,i)}}return{arrows:b,mount:w,destroy:x,update:P}},Autoplay:function(t,n,e){var i,r,o=Yt(t),s=o.on,u=o.bind,a=o.emit,c=Vt(e.interval,t.go.bind(t,">"),(function(t){var n=f.bar;n&&W(n,"width",100*t+"%"),a(Bt,t)})),l=c.isPaused,f=n.Elements,d=n.Elements,p=d.root,h=d.toggle,v=e.autoplay,g="pause"===v;function m(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,w(),a(Wt))}function y(t){void 0===t&&(t=!0),g=!!t,w(),l()||(c.pause(),a(Ht))}function b(){g||(i||r?y(!1):m())}function w(){h&&(P(h,Tn,!g),R(h,cn,e.i18n[g?"play":"pause"]))}function E(t){var i=n.Slides.getAt(t);c.set(i&&+X(i.slide,Zn)||e.interval)}return{mount:function(){v&&(!function(){e.pauseOnHover&&u(p,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()}));e.pauseOnFocus&&u(p,"focusin focusout",(function(t){r="focusin"===t.type,b()}));h&&u(h,"click",(function(){g?m():y(!0)}));s([yt,Mt,Pt],c.rewind),s(yt,E)}(),h&&R(h,sn,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(t,n,e){var i=Yt(t).on;function r(t){n.Slides.forEach((function(n){var e=j(n.container||n.slide,"img");e&&e.src&&o(t,e,n)}))}function o(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),B(n,t?"none":"")}return{mount:function(){e.cover&&(i(Xt,c(o,!0)),i([gt,Ct,Pt],c(r,!0)))},destroy:c(r,!1)}},Scroll:function(t,n,e){var i,r,o=Yt(t),s=o.on,u=o.emit,a=t.state.set,l=n.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,h=l.translate,v=t.is(Vn),g=1;function m(t,e,o,s,d){var h=f();if(w(),o&&(!v||!p())){var m=n.Layout.sliderSize(),E=ft(t)*m*ot(ut(t)/m)||0;t=l.toPosition(n.Controller.toDest(t%m))+E}var x=at(h,t,1);g=1,e=x?0:e||rt(ut(t-h)/1.5,800),r=s,i=Vt(e,y,c(b,h,t,d),1),a(5),u(Mt),i.start()}function y(){a(3),r&&r(),u(Dt)}function b(t,n,i,o){var s,u,a=f(),c=(t+(n-t)*(s=o,(u=e.easingFunc)?u(s):1-Math.pow(1-s,4))-a)*g;h(a+c),v&&!i&&p()&&(g*=.6,ut(c)<10&&m(d(p(!0)),600,!1,r,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){s(yt,w),s([Ct,Pt],E)},destroy:w,scroll:m,cancel:E}},Drag:function(t,n,e){var i,r,o,s,u,a,c,l,d=Yt(t),p=d.on,v=d.emit,g=d.bind,m=d.unbind,y=t.state,b=n.Move,w=n.Scroll,E=n.Controller,x=n.Elements.track,S=n.Media.reduce,k=n.Direction,P=k.resolve,C=k.orient,O=b.getPosition,L=b.exceededLimit,A=!1;function j(){var t=e.drag;H(!t),s="free"===t}function M(t){if(a=!1,!c){var n=B(t);i=t.target,r=e.noDrag,_(i,"."+jn+", ."+On)||r&&_(i,r)||!n&&t.button||(E.isBusy()?V(t,!0):(l=n?x:window,u=y.is([4,5]),o=null,g(l,qn,D,$n),g(l,Yn,N,$n),b.cancel(),w.cancel(),T(t)))}var i,r}function D(n){if(y.is(6)||(y.set(6),v(_t)),n.cancelable)if(u){b.translate(i+I(n)/(A&&t.is(Vn)?5:1));var r=R(n)>200,o=A!==(A=L());(r||o)&&T(n),a=!0,v(At),V(n)}else(function(t){return ut(I(t))>ut(I(t,!0))})(n)&&(u=function(t){var n=e.dragMinThreshold,i=h(n),r=i&&n.mouse||0,o=(i?n.touch:+n)||10;return ut(I(t))>(B(t)?o:r)}(n),V(n))}function N(i){y.is(6)&&(y.set(3),v(jt)),u&&(!function(i){var r=function(n){if(t.is(Jn)||!A){var e=R(n);if(e&&e<200)return I(n)/e}return 0}(i),o=function(t){return O()+ft(t)*it(ut(t)*(e.flickPower||600),s?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(r),u=e.rewind&&e.rewindByDrag;S(!1),s?E.scroll(o,0,e.snap):t.is(Kn)?E.go(C(ft(r))<0?u?"<":"-":u?">":"+"):t.is(Vn)&&A&&u?E.go(L(!0)?">":"<"):E.go(E.toDest(o),!0);S(!0)}(i),V(i)),m(l,qn,D),m(l,Yn,N),u=!1}function z(t){!c&&a&&V(t,!0)}function T(t){o=r,r=t,i=O()}function I(t,n){return W(t,n)-W(F(t),n)}function R(t){return Z(t)-Z(F(t))}function F(t){return r===t&&o||r}function W(t,n){return(B(t)?t.changedTouches[0]:t)["page"+P(n?"Y":"X")]}function B(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function H(t){c=t}return{mount:function(){g(x,qn,f,$n),g(x,Yn,f,$n),g(x,Un,M,$n),g(x,"click",z,{capture:!0}),g(x,"dragstart",V),p([gt,Ct],j)},disable:H,isDragging:function(){return u}}},Keyboard:function(t,n,e){var i,r,o=Yt(t),s=o.on,u=o.bind,a=o.unbind,c=t.root,f=n.Direction.resolve;function d(){var t=e.keyboard;t&&(i="global"===t?window:c,u(i,ee,v))}function p(){a(i,ee)}function h(){var t=r;r=!0,l((function(){r=t}))}function v(n){if(!r){var e=ne(n);e===f(Kt)?t.go("<"):e===f(Qt)&&t.go(">")}}return{mount:function(){d(),s(Ct,p),s(Ct,d),s(yt,h)},destroy:p,disable:function(t){r=t}}},LazyLoad:function(t,n,e){var i=Yt(t),r=i.on,o=i.off,s=i.bind,a=i.emit,l="sequential"===e.lazyLoad,f=[bt,Dt],d=[];function p(){u(d),n.Slides.forEach((function(t){K(t.slide,oe).forEach((function(n){var i=X(n,ie),r=X(n,re);if(i!==n.src||r!==n.srcset){var o=e.classes.spinner,s=n.parentElement,u=j(s,"."+o)||F("span",o,s);d.push([n,t,u]),n.src||B(n,"none")}}))})),l?m():(o(f),r(f,h),h())}function h(){(d=d.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||v(n)}))).length||o(f)}function v(t){var n=t[0];C(t[1].slide,Wn),s(n,"load error",c(g,t)),R(n,"src",X(n,ie)),R(n,"srcset",X(n,re)),I(n,ie),I(n,re)}function g(t,n){var e=t[0],i=t[1];Q(i.slide,Wn),"error"!==n.type&&(q(t[2]),B(e,""),a(Xt,e,i),a(Ot)),l&&m()}function m(){d.length&&v(d.shift())}return{mount:function(){e.lazyLoad&&(p(),r(Pt,p))},destroy:c(u,d),check:h}},Pagination:function(t,n,e){var i,r,o=Yt(t),s=o.on,l=o.emit,f=o.bind,d=n.Slides,p=n.Elements,h=n.Controller,v=h.hasFocus,g=h.getIndex,m=h.go,y=n.Direction.resolve,b=p.pagination,w=[];function E(){i&&(q(b?a(i.children):i),Q(i,r),u(w),i=null),o.destroy()}function x(t){m(">"+t,!0)}function S(t,n){var e=w.length,i=ne(n),r=k(),o=-1;i===y(Qt,!1,r)?o=++t%e:i===y(Kt,!1,r)?o=(--t+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var s=w[o];s&&(H(s.button),m(">"+o),V(n,!0))}function k(){return e.paginationDirection||e.direction}function P(t){return w[h.toPage(t)]}function O(){var t=P(g(!0)),n=P(g());if(t){var e=t.button;Q(e,Tn),I(e,an),R(e,rn,-1)}if(n){var r=n.button;C(r,Tn),R(r,an,!0),R(r,rn,"")}l(Rt,{list:i,items:w},t,n)}return{items:w,mount:function n(){E(),s([Ct,Pt,qt],n);var o=e.pagination;b&&B(b,o?"":"none"),o&&(s([yt,Mt,Dt],O),function(){var n=t.length,o=e.classes,s=e.i18n,u=e.perPage,a=v()?h.getEnd()+1:st(n/u);C(i=b||F("ul",o.pagination,p.track.parentElement),r=An+"--"+k()),R(i,en,"tablist"),R(i,cn,s.select),R(i,dn,k()===tn?"vertical":"");for(var l=0;l<a;l++){var g=F("li",null,i),m=F("button",{class:o.page,type:"button"},g),y=d.getIn(l).map((function(t){return t.slide.id})),E=!v()&&u>1?s.pageX:s.slideX;f(m,"click",c(x,l)),e.paginationKeyboard&&f(m,"keydown",c(S,l)),R(g,en,"presentation"),R(m,en,"tab"),R(m,sn,y.join(" ")),R(m,cn,dt(E,l+1)),R(m,rn,-1),w.push({li:g,button:m,page:l})}}(),O(),l(It,{list:i,items:w},P(t.index)))},destroy:E,getAt:P,update:O}},Sync:function(t,n,e){var i=e.isNavigation,r=e.slideFocus,o=[];function s(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&(n=Yt(t),(e=n.on)(wt,d),e(Gt,p),e([gt,Ct],f),o.push(n),n.emit(Ft,t.splides))}function a(){o.forEach((function(t){t.destroy()})),u(o)}function l(t,n){var e=Yt(t);e.on(yt,(function(t,e,i){n.go(n.is(Jn)?i:t)})),o.push(e)}function f(){R(n.Elements.list,dn,e.direction===tn?"vertical":"")}function d(n){t.go(n.index)}function p(t,n){S(se,ne(n))&&(d(t),V(n))}return{setup:c(n.Media.set,{slideFocus:y(r)?i:r},!0),mount:s,destroy:a,remount:function(){a(),s()}}},Wheel:function(t,n,e){var i=Yt(t).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,s=o<0,u=Z(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;ut(o)>a&&u-r>c&&(t.go(s?"<":">"),r=u),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&V(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",o,$n)}}},Live:function(t,n,e){var i=Yt(t).on,r=n.Elements.track,o=e.live&&!e.isNavigation,s=F("span",Nn),u=Vt(90,c(a,!1));function a(t){R(r,vn,t),t?(O(r,s),u.start()):(q(s),u.cancel())}function l(t){o&&R(r,hn,t?"off":"polite")}return{mount:function(){o&&(l(!n.Autoplay.isPaused()),R(r,gn,!0),s.textContent="\u2026",i(Wt,c(l,!0)),i(Ht,c(l,!1)),i([bt,Dt],c(a,!0)))},disable:l,destroy:function(){I(r,[hn,gn,vn]),q(s)}}}}),ae={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Gn,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ce(t,n,e){var i=n.Slides;function r(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){Yt(t).on([gt,Pt],r)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),l(n)},cancel:f}}function le(t,n,e){var i,r=n.Move,o=n.Controller,s=n.Scroll,u=n.Elements.list,a=c(W,u,"transition");function l(){a(""),s.cancel()}return{mount:function(){Yt(t).bind(u,"transitionend",(function(t){t.target===u&&i&&(l(),i())}))},start:function(n,u){var c=r.toPosition(n,!0),l=r.getPosition(),f=function(n){var i=e.rewindSpeed;if(t.is(Vn)&&i){var r=o.getIndex(!0),s=o.getEnd();if(0===r&&n>=s||r>=s&&0===n)return i}return e.speed}(n);ut(c-l)>=1&&f>=1?e.useScroll?s.scroll(c,f,!1,u):(a("transform "+f+"ms "+e.easing),r.translate(c,!0),i=u):(r.jump(n),u())},cancel:l}}var fe=function(){function t(n,e){var i;this.event=Yt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return S(E(t),i)}}),this.splides=[],this._o={},this._E={};var r=m(n)?J(document,n):n;et(r,r+" is invalid."),this.root=r,e=z({label:X(r,cn)||"",labelledby:X(r,ln)||""},ae,t.defaults,e||{});try{z(e,JSON.parse(X(r,nt)))}catch(o){et(!1,"Invalid JSON")}this._o=Object.create(z({},e))}var n,e,i,o=t.prototype;return o.mount=function(t,n){var e=this,i=this.state,r=this.Components;return et(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=n||this._T||(this.is(Kn)?ce:le),this._E=t||this._E,D(N({},ue,this._E,{Transition:this._T}),(function(t,n){var i=t(e,r,e._o);r[n]=i,i.setup&&i.setup()})),D(r,(function(t){t.mount&&t.mount()})),this.emit(gt),C(this.root,zn),i.set(3),this.emit(mt),this},o.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},o.go=function(t){return this._C.Controller.go(t),this},o.on=function(t,n){return this.event.on(t,n),this},o.off=function(t){return this.event.off(t),this},o.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(a(arguments,1))),this},o.add=function(t,n){return this._C.Slides.add(t,n),this},o.remove=function(t){return this._C.Slides.remove(t),this},o.is=function(t){return this._o.type===t},o.refresh=function(){return this.emit(Pt),this},o.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?Yt(this).on(mt,this.destroy.bind(this,t)):(D(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(Nt),n.destroy(),t&&u(this.splides),e.set(7)),this},n=t,(e=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&r(n.prototype,e),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();fe.defaults={},fe.STATES=s;var de=[[gt,"onMounted"],[mt,"onReady"],[yt,"onMove"],[bt,"onMoved"],[wt,"onClick"],[Et,"onActive"],[xt,"onInactive"],[St,"onVisible"],[kt,"onHidden"],[Pt,"onRefresh"],[Ct,"onUpdated"],[Ot,"onResize"],[Lt,"onResized"],[_t,"onDrag"],[At,"onDragging"],[jt,"onDragged"],[Mt,"onScroll"],[Dt,"onScrolled"],[Nt,"onDestroy"],[zt,"onArrowsMounted"],[Tt,"onArrowsUpdated"],[It,"onPaginationMounted"],[Rt,"onPaginationUpdated"],[Ft,"onNavigationMounted"],[Wt,"onAutoplayPlay"],[Bt,"onAutoplayPlaying"],[Ht,"onAutoplayPause"],[Xt,"onLazyLoadLoaded"]];function pe(...t){return t.filter(Boolean).join(" ")}function he(t){return null!==t&&"object"==typeof t}function ve(t,n){if(Array.isArray(t)&&Array.isArray(n))return t.length===n.length&&!t.some(((t,e)=>!ve(t,n[e])));if(he(t)&&he(n)){const e=Object.keys(t),i=Object.keys(n);return e.length===i.length&&!e.some((e=>!Object.prototype.hasOwnProperty.call(n,e)||!ve(t[e],n[e])))}return t===n}function ge(t,n){const e=t;return function(t,n){if(t){const e=Object.keys(t);for(let i=0;i<e.length;i++){const r=e[i];if("__proto__"!==r&&!1===n(t[r],r))break}}}(n,((t,n)=>{Array.isArray(t)?e[n]=t.slice():he(t)?e[n]=ge(he(e[n])?e[n]:{},t):e[n]=t})),e}var me=({children:t,className:n,...e})=>i.createElement("div",{className:pe("splide__track",n),...e},i.createElement("ul",{className:"splide__list"},t)),ye=class extends i.Component{constructor(){super(...arguments),this.splideRef=i.createRef(),this.slides=[]}componentDidMount(){const{options:t,extensions:n,transition:e}=this.props,{current:i}=this.splideRef;i&&(this.splide=new fe(i,t),this.bind(this.splide),this.splide.mount(n,e),this.options=ge({},t||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){if(!this.splide)return;const{options:t}=this.props;t&&!ve(this.options,t)&&(this.splide.options=t,this.options=ge({},t));const n=this.getSlides();var e,i;e=this.slides,i=n,(e.length!==i.length||e.some(((t,n)=>t!==i[n])))&&(this.splide.refresh(),this.slides=n)}sync(t){var n;null==(n=this.splide)||n.sync(t)}go(t){var n;null==(n=this.splide)||n.go(t)}getSlides(){var t;if(this.splide){const n=null==(t=this.splide.Components.Elements)?void 0:t.list.children;return n&&Array.prototype.slice.call(n)||[]}return[]}bind(t){de.forEach((([n,e])=>{const i=this.props[e];"function"==typeof i&&t.on(n,((...n)=>{i(t,...n)}))}))}omit(t,n){return n.forEach((n=>{Object.prototype.hasOwnProperty.call(t,n)&&delete t[n]})),t}render(){const{className:t,tag:n="div",hasTrack:e=!0,children:r,...o}=this.props;return i.createElement(n,{className:pe("splide",t),ref:this.splideRef,...this.omit(o,["options",...de.map((t=>t[1]))])},e?i.createElement(me,null,r):r)}},be=({children:t,className:n,...e})=>i.createElement("li",{className:pe("splide__slide",n),...e},t)}}]);