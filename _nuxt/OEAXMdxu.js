import{n as I,aE as w,aF as S,C as B,p as b,ak as T,aG as F,$ as k,a0 as C,aj as _,h as E,aH as q,P as A,B as p,K as G,a6 as H,a1 as O,E as U,g as z,aI as M,x as J,Z as N,D as R,aJ as W}from"./pUwBaY4z.js";const D=b({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function m(n,u,r){return I()({name:n,props:D({mode:r,origin:u}),setup(e,s){let{slots:a}=s;const t={onBeforeEnter(i){e.origin&&(i.style.transformOrigin=e.origin)},onLeave(i){if(e.leaveAbsolute){const{offsetTop:f,offsetLeft:x,offsetWidth:h,offsetHeight:v}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${f}px`,i.style.left=`${x}px`,i.style.width=`${h}px`,i.style.height=`${v}px`}e.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(e.leaveAbsolute&&(i!=null&&i._transitionInitialStyles)){const{position:f,top:x,left:h,width:v,height:o}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=f||"",i.style.top=x||"",i.style.left=h||"",i.style.width=v||"",i.style.height=o||""}}};return()=>{const i=e.group?w:S;return B(i,{name:e.disabled?"":n,css:!e.disabled,...e.group?void 0:{mode:e.mode},...e.disabled?{}:t},a.default)}}})}function L(n,u){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:n,props:{mode:{type:String,default:r},disabled:Boolean,group:Boolean},setup(e,s){let{slots:a}=s;const t=e.group?w:S;return()=>B(t,{name:e.disabled?"":n,css:!e.disabled,...e.disabled?{}:u},a.default)}})}function P(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",e=T(`offset-${r}`);return{onBeforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[r]:t.style[r]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const f=`${t[e]}px`;t.style[r]="0",t.offsetHeight,t.style.transition=i.transition,n&&t._parent&&t._parent.classList.add(n),requestAnimationFrame(()=>{t.style[r]=f})},onAfterEnter:a,onEnterCancelled:a,onLeave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[r]:t.style[r]},t.style.overflow="hidden",t.style[r]=`${t[e]}px`,t.offsetHeight,requestAnimationFrame(()=>t.style[r]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(t){n&&t._parent&&t._parent.classList.remove(n),a(t)}function a(t){const i=t._initialStyle[r];t.style.overflow=t._initialStyle.overflow,i!=null&&(t.style[r]=i),delete t._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");m("fade-transition");m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");m("slide-y-transition");m("slide-y-reverse-transition");const X=L("expand-transition",P());L("expand-x-transition",P("",!0));const Y=b({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),K=b({value:null,disabled:Boolean,selectedClass:String},"group-item");function ee(n,u){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const e=C("useGroupItem");if(!e)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=O();G(Symbol.for(`${u.description}:id`),s);const a=U(u,null);if(!a){if(!r)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${u.description}`)}const t=A(n,"value"),i=p(()=>!!(a.disabled.value||n.disabled));a.register({id:s,value:t,disabled:i},e),E(()=>{a.unregister(s)});const f=p(()=>a.isSelected(s)),x=p(()=>a.items.value[0].id===s),h=p(()=>a.items.value[a.items.value.length-1].id===s),v=p(()=>f.value&&[a.selectedClass.value,n.selectedClass]);return z(f,o=>{e.emit("group:selected",{value:o})},{flush:"sync"}),{id:s,isSelected:f,isFirst:x,isLast:h,toggle:()=>a.select(s,!f.value),select:o=>a.select(s,o),selectedClass:v,value:t,disabled:i,group:a}}function te(n,u){let r=!1;const e=F([]),s=k(n,"modelValue",[],o=>o==null?[]:$(e,N(o)),o=>{const l=j(e,o);return n.multiple?l:l[0]}),a=C("useGroup");function t(o,l){const c=o,d=Symbol.for(`${u.description}:id`),y=M(d,a==null?void 0:a.vnode).indexOf(l);J(c.value)==null&&(c.value=y,c.useIndexAsValue=!0),y>-1?e.splice(y,0,c):e.push(c)}function i(o){if(r)return;f();const l=e.findIndex(c=>c.id===o);e.splice(l,1)}function f(){const o=e.find(l=>!l.disabled);o&&n.mandatory==="force"&&!s.value.length&&(s.value=[o.id])}_(()=>{f()}),E(()=>{r=!0}),q(()=>{for(let o=0;o<e.length;o++)e[o].useIndexAsValue&&(e[o].value=o)});function x(o,l){const c=e.find(d=>d.id===o);if(!(l&&(c!=null&&c.disabled)))if(n.multiple){const d=s.value.slice(),g=d.findIndex(V=>V===o),y=~g;if(l=l??!y,y&&n.mandatory&&d.length<=1||!y&&n.max!=null&&d.length+1>n.max)return;g<0&&l?d.push(o):g>=0&&!l&&d.splice(g,1),s.value=d}else{const d=s.value.includes(o);if(n.mandatory&&d)return;s.value=l??!d?[o]:[]}}function h(o){if(n.multiple,s.value.length){const l=s.value[0],c=e.findIndex(y=>y.id===l);let d=(c+o)%e.length,g=e[d];for(;g.disabled&&d!==c;)d=(d+o)%e.length,g=e[d];if(g.disabled)return;s.value=[e[d].id]}else{const l=e.find(c=>!c.disabled);l&&(s.value=[l.id])}}const v={register:t,unregister:i,selected:s,select:x,disabled:A(n,"disabled"),prev:()=>h(e.length-1),next:()=>h(1),isSelected:o=>s.value.includes(o),selectedClass:p(()=>n.selectedClass),items:p(()=>e),getItemIndex:o=>Z(e,o)};return G(u,v),v}function Z(n,u){const r=$(n,[u]);return r.length?n.findIndex(e=>e.id===r[0]):-1}function $(n,u){const r=[];return u.forEach(e=>{const s=n.find(t=>H(e,t.value)),a=n[e];(s==null?void 0:s.value)!=null?r.push(s.id):a!=null&&r.push(a.id)}),r}function j(n,u){const r=[];return u.forEach(e=>{const s=n.findIndex(a=>a.id===e);if(~s){const a=n[s];r.push(a.value!=null?a.value:s)}}),r}function ne(){const n=R(!1);return _(()=>{window.requestAnimationFrame(()=>{n.value=!0})}),{ssrBootStyles:p(()=>n.value?void 0:{transition:"none !important"}),isBooted:W(n)}}export{X as V,Y as a,te as b,ne as c,K as m,ee as u};