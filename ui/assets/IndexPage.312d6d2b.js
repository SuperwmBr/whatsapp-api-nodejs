import{c as B,a as f,h as m,d as j,aa as O,ab as Y,ac as W,ad as Z,r as q,g as F,i as J,C as ee,I as te,w as ae,f as se,T as ne,ae as ie,F as V,G as _,H as re,K as le,_ as oe,R as ce,af as g,U as y,V as b,W as d,a2 as N,X as c,a3 as z,$ as k,a1 as H,a0 as x,ag as ue,ah as de,Z as C,a6 as G,ai as he,a5 as ge,aj as me,Y as w}from"./index.374e2772.js";import{u as fe}from"./session-store.c299ee32.js";import"./axios.7331a07d.js";var P=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const s=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:s.value},j(t.default))}}),ve=B({name:"QItem",props:{...O,...Y,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:s}){const{proxy:{$q:a}}=F(),h=W(e,a),{hasLink:i,linkAttrs:o,linkClass:l,linkTag:u,navigateOnClick:S}=Z(),v=q(null),$=q(null),D=f(()=>e.clickable===!0||i.value===!0||e.tag==="label"),p=f(()=>e.disable!==!0&&D.value===!0),R=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(h.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?l.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),I=f(()=>{if(e.insetLevel===void 0)return null;const r=a.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function Q(r){p.value===!0&&($.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===v.value?$.value.focus():document.activeElement===$.value&&v.value.focus()),S(r))}function A(r){if(p.value===!0&&J(r,13)===!0){ee(r),r.qKeyEvent=!0;const L=new MouseEvent("click",r);L.qKeyEvent=!0,v.value.dispatchEvent(L)}s("keyup",r)}function K(){const r=te(t.default,[]);return p.value===!0&&r.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:$})),r}return()=>{const r={ref:v,class:R.value,style:I.value,role:"listitem",onClick:Q,onKeyup:A};return p.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,o.value)):D.value===!0&&(r["aria-disabled"]="true"),m(u.value,r,K())}}}),ye=B({name:"QList",props:{...O,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const s=F(),a=W(e,s.proxy.$q),h=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(a.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>m(e.tag,{class:h.value},j(t.default))}});const be={ratio:[String,Number]};function ke(e,t){return f(()=>{const s=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(s)!==!0&&s>0?{paddingBottom:`${100/s}%`}:null})}const qe=16/9;var Ce=B({name:"QImg",props:{...be,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:qe},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:s}){const a=q(e.initialRatio),h=ke(e,a);let i=null,o=!1;const l=[q(null),q(Q())],u=q(0),S=q(!1),v=q(!1),$=f(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),D=f(()=>({width:e.width,height:e.height})),p=f(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),R=f(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));ae(()=>I(),A);function I(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function Q(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function A(n){i!==null&&(clearTimeout(i),i=null),v.value=!1,n===null?(S.value=!1,l[u.value^1].value=Q()):S.value=!0,l[u.value].value=n}function K({target:n}){o!==!0&&(i!==null&&(clearTimeout(i),i=null),a.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,r(n,1))}function r(n,E){o===!0||E===1e3||(n.complete===!0?L(n):i=setTimeout(()=>{i=null,r(n,E+1)},50))}function L(n){o!==!0&&(u.value=u.value^1,l[u.value].value=null,S.value=!1,v.value=!1,s("load",n.currentSrc||n.src))}function M(n){i!==null&&(clearTimeout(i),i=null),S.value=!1,v.value=!0,l[u.value].value=null,l[u.value^1].value=Q(),s("error",n)}function U(n){const E=l[n].value,T={key:"img_"+n,class:p.value,style:R.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...E};return u.value===n?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:K,onError:M})):T.class+=" q-img__image--loaded",m("div",{class:"q-img__container absolute-full",key:"img"+n},m("img",T))}function X(){return S.value!==!0?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},j(t[v.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[m(ie,{color:e.spinnerColor,size:e.spinnerSize})])}return A(I()),se(()=>{o=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const n=[];return h.value!==null&&n.push(m("div",{key:"filler",style:h.value})),v.value!==!0&&(l[0].value!==null&&n.push(U(0)),l[1].value!==null&&n.push(U(1))),n.push(m(ne,{name:"q-transition--fade"},X)),m("div",{class:$.value,style:D.value,role:"img","aria-label":e.alt},n)}}}),Se=B({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:s}}=F(),a=V(re,_);if(a===_)return console.error("QPage needs to be a deep child of QLayout"),_;if(V(le,_)===_)return console.error("QPage needs to be child of QPageContainer"),_;const i=f(()=>{const l=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const u=a.isContainer.value===!0?a.containerHeight.value:s.screen.height;return e.styleFn(l,u)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-l+"px":s.screen.height===0?l!==0?`calc(100vh - ${l}px)`:"100vh":s.screen.height-l+"px"}}),o=f(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:o.value,style:i.value},j(t.default))}});const pe=ce({name:"IndexPage",setup(){const e=fe();return{store:e,setDevices:a=>e.setDevices(a),isLoggedin:()=>e.isLoggedin()}},mounted(){this.instances=this.store.devices},data(){return{instances:[],qrcode:null,messageQrcode:"",currentKey:null,counter:15,limitInterval:1500,interval:null}},methods:{closeQrcode(){this.messageQrcode="",this.currentKey=null,this.$refs.scanQr.hide(),this.stopCounter()},openQrDialog(e){this.$refs.scanQr.show(),this.fetchQr(e),this.startCounter()},addDeviceDialog(){this.$q.dialog({title:"Add custom key?",message:"biarkan kosong jika ingin menggunakan random key (recomended)",prompt:{model:""},cancel:!0,persistent:!0}).onOk(e=>{this.createInstance(e)}).onCancel(()=>{}).onDismiss(()=>{})},async startCounter(){this.interval=await setInterval(()=>{this.counter===0&&(this.counter=21,this.fetchQr(this.currentKey),this.fetchDetail(this.currentKey)),--this.counter},this.limitInterval)},stopCounter(){clearInterval(this.interval),this.counter=16},async restoreInstance(){try{let e={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},t=await fetch(`${this.store.baseUrlApi}/instance/restore`,{method:"GET",headers:e});const{data:s,message:a,error:h}=await t.json();h&&g.create({message:a,color:"red"}),s.length>0?setTimeout(()=>{this.fetchInstance()},2e3):g.create({message:"Tidak ada device yang bisa di restore, silahkan ADD DEVICE",color:"red"})}catch{g.create({message:"Gagal load restore device, silahkan coba lagi",color:"red"})}},async fetchInstance(){try{let e={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},t=await fetch(`${this.store.baseUrlApi}/instance/list`,{method:"GET",headers:e});const{data:s,error:a,message:h}=await t.json();a&&g.create({message:h,color:"red"}),this.instances=s,this.setDevices(s)}catch{g.create({message:"Gagal mamuat data, silahkan coba beberapa saat lagi",color:"red"})}},async createInstance(e=null){try{let t={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},s=await fetch(`${this.store.baseUrlApi}/instance/init?key=${e}`,{method:"GET",headers:t});const{error:a,data:h,message:i}=await s.json();a?g.create({message:i,color:"red"}):(this.fetchInstance(),g.create({message:"Berhasil menambahkan device, silahkan scan qrcode"}))}catch{g.create({message:"Gagal menambahkan device, silahkan scan qrcode",color:"red"})}},async fetchDetail(e){var t,s;try{let a={Accept:"*/*",Authorization:`Bearer ${this.store.token}`};(s=(t=(await(await fetch(`${this.store.baseUrlApi}/instance/info?key=${e}`,{method:"GET",headers:a})).json()).instance_data)==null?void 0:t.user)!=null&&s.id&&(this.closeQrcode(),this.fetchInstance())}catch{g.create({message:"Gagal memuat data, silahkan coba setelah beberapa saat",color:"red"})}},async fetchQr(e){try{this.messageQrcode="Sedang memuat qrcode",this.qrcode=null;let t={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},s=await fetch(`${this.store.baseUrlApi}/instance/qrbase64?key=${e}`,{method:"GET",headers:t});const{qrcode:a}=await s.json();return a===" "?this.messageQrcode="instance is expired. silahkan delete dan create ulang instance":(this.messageQrcode="silahkan scan qr code menggunakan aplikasi Whatsapp",this.qrcode=a),this.currentKey=e,a}catch{g.create({message:"Gagal memuat data, silahkan coba setelah beberapa saat",color:"red"})}},async fetchDelete(e){try{let t={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},a=await(await fetch(`${this.store.baseUrlApi}/instance/delete?key=${e}`,{method:"DELETE",headers:t})).json();this.fetchInstance(),g.create({message:"Berhasil menghapus devices.",color:"red"})}catch{g.create({message:"Gagal memuat data, silahkan coba setelah beberapa saat",color:"red"})}},async logoutInstance(e){try{let t={Accept:"*/*",Authorization:`Bearer ${this.store.token}`},a=await(await fetch(`${this.store.baseUrlApi}/instance/logout?key=${e}`,{method:"DELETE",headers:t})).json();this.fetchInstance(),g.create({message:"Device berhasil logout."})}catch{g.create({message:"Gagal memuat data, silahkan coba setelah beberapa saat",color:"red"})}}}}),$e=C("div",{class:"text-h5"},[w(" Silahkan setup "),C("span",{class:"text-bold"}," API URL "),w(" dan "),C("span",{class:"text-bold"}," TOKEN "),w(" terlebih dahulu... ")],-1),_e={key:0,class:"bg-red text-white q-pa-md"},Qe=C("span",{class:"text-h6"},[w(" Belum ada device terdaftar. Silahkan "),C("span",{class:"text-bold"},"ADD DEVICE")],-1),we=[Qe],Be={class:"text-bold"};function De(e,t,s,a,h,i){return y(),b(Se,{class:""},{default:d(()=>[e.isLoggedin()?(y(),b(N,{key:1},{default:d(()=>[c(z,null,{default:d(()=>[c(k,{class:"q-mr-sm",onClick:e.restoreInstance,icon:"refresh",color:"warning",label:"Restore Devices",size:"sm"},null,8,["onClick"]),c(k,{class:"q-mr-sm",onClick:e.fetchInstance,icon:"list",color:"secondary",label:"List Devices",size:"sm"},null,8,["onClick"]),c(k,{class:"q-mr-sm",onClick:e.addDeviceDialog,icon:"add",color:"primary",label:"Add Devices",size:"sm"},null,8,["onClick"])]),_:1}),c(z,null,{default:d(()=>[e.instances.length===0?(y(),H("div",_e,we)):x("",!0),e.instances.length>0?(y(),b(ye,{key:1,bordered:""},{default:d(()=>[(y(!0),H(de,null,ue(e.instances,(o,l)=>(y(),b(ve,{key:l},{default:d(()=>[c(P,null,{default:d(()=>[C("span",Be,G(o.instance_key),1)]),_:2},1024),c(P,null,{default:d(()=>[w(G(o.user),1)]),_:2},1024),c(P,{side:""},{default:d(()=>[C("div",null,[c(k,{label:"delete",onClick:u=>e.fetchDelete(o.instance_key)},null,8,["onClick"]),o.user&&o.user.id?(y(),b(k,{key:0,label:"logout",onClick:u=>e.logoutInstance(o.instance_key)},null,8,["onClick"])):(y(),b(k,{key:1,label:"Scan QRCode",onClick:u=>e.openQrDialog(o.instance_key)},null,8,["onClick"]))])]),_:2},1024)]),_:2},1024))),128))]),_:1})):x("",!0)]),_:1})]),_:1})):(y(),b(N,{key:0,class:"bg-red text-white"},{default:d(()=>[c(z,null,{default:d(()=>[$e]),_:1})]),_:1})),c(me,{ref:"scanQr",persistent:"","transition-show":"scale","transition-hide":"scale"},{default:d(()=>[c(N,{style:{width:"300px"}},{default:d(()=>[c(z,{class:"text-center"},{default:d(()=>[C("div",{class:he(e.qrcode?"bg-primary text-white text-bold q-pa-md":"bg-red text-white text-bold q-pa-md")},G(e.messageQrcode),3),c(Ce,{src:e.qrcode},null,8,["src"]),e.qrcode?(y(),b(k,{key:0,icon:"refresh",label:`refresh qrcode in: ${e.counter}`,onClick:t[0]||(t[0]=o=>e.fetchQr(e.currentKey))},null,8,["label"])):x("",!0)]),_:1}),c(ge,{align:"center",class:""},{default:d(()=>[c(k,{icon:"close",flat:"",label:"close",onClick:e.closeQrcode},null,8,["onClick"])]),_:1})]),_:1})]),_:1},512)]),_:1})}var Ee=oe(pe,[["render",De]]);export{Ee as default};