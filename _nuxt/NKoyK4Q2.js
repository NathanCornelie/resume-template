import{_ as z}from"./BclSIhao.js";import{p as P,m as U,n as E,q as R,b as o,M as $,P as I,N as j,u as Q,D as p,B as i,O as W,Q as B,r as H,al as Y,g as k,aj as G,h as J,am as K,$ as X,an as Z,ao as ee,a5 as te,e as ae,s as le,ap as oe,y as ne,w as S,aq as se,o as C,a as N,d as L,t as D,c as F,v as re,F as ue,ar as ie,_ as ce}from"./pUwBaY4z.js";import{V as de}from"./Bdz7hJWM.js";import{a as q,n as ve,d as me,e as fe,b as ge,r as he,f as be,g as ye,l as _e,V as w}from"./CJY-PfCb.js";import{V as pe,c as xe}from"./OEAXMdxu.js";const Se=P({text:String,...U(),...q()},"VToolbarTitle"),Te=E()({name:"VToolbarTitle",props:Se(),setup(e,f){let{slots:t}=f;return R(()=>{const d=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[d&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Ve=[null,"prominent","default","comfortable","compact"],O=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Ve.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ve(),...U(),...me(),...fe(),...q({tag:"header"}),...$()},"VToolbar"),M=E()({name:"VToolbar",props:O(),setup(e,f){var g;let{slots:t}=f;const{backgroundColorClasses:d,backgroundColorStyles:s}=ge(I(e,"color")),{borderClasses:a}=he(e),{elevationClasses:u}=be(e),{roundedClasses:r}=ye(e),{themeClasses:h}=j(e),{rtlClasses:x}=Q(),c=p(!!(e.extended||(g=t.extension)!=null&&g.call(t))),v=i(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),y=i(()=>c.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return W({VBtn:{variant:"text"}}),R(()=>{var V;const n=!!(e.title||t.title),m=!!(t.image||e.image),_=(V=t.extension)==null?void 0:V.call(t);return c.value=!!(e.extended||_),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,a.value,u.value,r.value,h.value,x.value,e.class],style:[s.value,e.style]},{default:()=>[m&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(w,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(_e,{key:"image-img",cover:!0,src:e.image},null)]),o(w,{defaults:{VTabs:{height:B(v.value)}}},{default:()=>{var l,b,T;return[o("div",{class:"v-toolbar__content",style:{height:B(v.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(l=t.prepend)==null?void 0:l.call(t)]),n&&o(Te,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(T=t.append)==null?void 0:T.call(t)])])]}}),o(w,{defaults:{VTabs:{height:B(y.value)}}},{default:()=>[o(pe,null,{default:()=>[c.value&&o("div",{class:"v-toolbar__extension",style:{height:B(y.value)}},[_])]})]})]})}),{contentHeight:v,extensionHeight:y}}}),Be=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function ke(e){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=f;let d=0,s=0;const a=H(null),u=p(0),r=p(0),h=p(0),x=p(!1),c=p(!1),v=i(()=>Number(e.scrollThreshold)),y=i(()=>Y((v.value-u.value)/v.value||0)),g=()=>{const n=a.value;if(!n||t&&!t.value)return;d=u.value,u.value="window"in n?n.pageYOffset:n.scrollTop;const m=n instanceof Window?document.documentElement.scrollHeight:n.scrollHeight;if(s!==m){s=m;return}c.value=u.value<d,h.value=Math.abs(u.value-v.value)};return k(c,()=>{r.value=r.value||u.value}),k(x,()=>{r.value=0}),G(()=>{k(()=>e.scrollTarget,n=>{var _;const m=n?document.querySelector(n):window;m&&m!==a.value&&((_=a.value)==null||_.removeEventListener("scroll",g),a.value=m,a.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),J(()=>{var n;(n=a.value)==null||n.removeEventListener("scroll",g)}),t&&k(t,g,{immediate:!0}),{scrollThreshold:v,currentScroll:u,currentThreshold:h,isScrollActive:x,scrollRatio:y,isScrollingUp:c,savedScroll:r}}const He=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...O(),...K(),...Be(),height:{type:[Number,String],default:64}},"VAppBar"),Pe=E()({name:"VAppBar",props:He(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:t}=f;const d=H(),s=X(e,"modelValue"),a=i(()=>{var b;const l=new Set(((b=e.scrollBehavior)==null?void 0:b.split(" "))??[]);return{hide:l.has("hide"),fullyHide:l.has("fully-hide"),inverted:l.has("inverted"),collapse:l.has("collapse"),elevate:l.has("elevate"),fadeImage:l.has("fade-image")}}),u=i(()=>{const l=a.value;return l.hide||l.fullyHide||l.inverted||l.collapse||l.elevate||l.fadeImage||!s.value}),{currentScroll:r,scrollThreshold:h,isScrollingUp:x,scrollRatio:c}=ke(e,{canScroll:u}),v=i(()=>a.value.hide||a.value.fullyHide),y=i(()=>e.collapse||a.value.collapse&&(a.value.inverted?c.value>0:c.value===0)),g=i(()=>e.flat||a.value.fullyHide&&!s.value||a.value.elevate&&(a.value.inverted?r.value>0:r.value===0)),n=i(()=>a.value.fadeImage?a.value.inverted?1-c.value:c.value:void 0),m=i(()=>{var T,A;if(a.value.hide&&a.value.inverted)return 0;const l=((T=d.value)==null?void 0:T.contentHeight)??0,b=((A=d.value)==null?void 0:A.extensionHeight)??0;return v.value?r.value<h.value||a.value.fullyHide?l+b:l:l+b});Z(i(()=>!!e.scrollBehavior),()=>{ae(()=>{v.value?a.value.inverted?s.value=r.value>h.value:s.value=x.value||r.value<h.value:s.value=!0})});const{ssrBootStyles:_}=xe(),{layoutItemStyles:V}=ee({id:e.name,order:i(()=>parseInt(e.order,10)),position:I(e,"location"),layoutSize:m,elementSize:p(void 0),active:s,absolute:I(e,"absolute")});return R(()=>{const l=M.filterProps(e);return o(M,te({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...V.value,"--v-toolbar-image-opacity":n.value,height:void 0,..._.value},e.style]},l,{collapse:y.value,flat:g.value}),t)}),{}}}),Ce={class:"nav-name text-start"},Ne={class:"menu"},we={id:"app"},Ie=le({__name:"default",setup(e){const f=H("Diletta CHIARO"),t=H(["Experiences","Articles","Conferences"]);return oe(),(d,s)=>{const a=z,u=ie;return C(),ne(se,{class:"app"},{default:S(()=>[o(Pe,{elevation:2,class:"nav-bar",height:"72"},{prepend:S(()=>[N("p",Ce,[o(a,{to:"/"},{default:S(()=>[L(D(f.value),1)]),_:1})])]),default:S(()=>[(C(!0),F(ue,null,re(t.value,r=>(C(),F("div",Ne,[N("p",null,[o(a,{to:"/"+r.toLowerCase()},{default:S(()=>[L(D(r.toString()),1)]),_:2},1032,["to"])])]))),256))]),append:S(()=>[o(de,{color:"primary"})]),_:1}),N("div",we,[o(u)])]),_:1})}}}),Fe=ce(Ie,[["__scopeId","data-v-413082ff"]]);export{Fe as default};