!function(){var e=document.createElement("style");e.innerHTML=".zfile-login-logo[data-v-35977126]{background-image:url(/assets/admin-login.db1d73c1.svg)}.zfile-login-form[data-v-35977126]{--zfile-login-input-height: 45px}.zfile-login-form[data-v-35977126] .el-form-item--large{margin-bottom:30px}.zfile-login-form[data-v-35977126] .el-form-item--large:last-child{margin-bottom:0}.zfile-login-form[data-v-35977126] .el-input__inner{height:var(--zfile-login-input-height)}.zfile-login-form[data-v-35977126] .el-button--large{--el-button-size: var(--zfile-login-input-height);height:var(--el-button-size)}.zfile-login-form[data-v-35977126] input:-internal-autofill-selected{-webkit-text-fill-color:var(--el-input-text-color, var(--el-text-color-regular));-webkit-transition:background-color 1000s ease-out .5s;transition:background-color 1000s ease-out .5s}\n",document.head.appendChild(e),System.register(["./index-legacy.5c2a5b9a.js","./base-legacy.300d11a2.js","./form-item-legacy.4d5bc83f.js","./button-legacy.de6f77a5.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.0e5cbcae.js","./link-legacy.f848b1ea.js","./image-viewer-legacy.8e0ed638.js","./input-legacy.1469b40d.js","./zfile-basic-legacy.f0481b2c.js","./login-legacy.14b44a5e.js","./install-legacy.c7b889b4.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./BadgeCheckIcon-legacy.787e3c9a.js","./request-legacy.d578b778.js","./index-legacy.bff7f3c4.js","./index-legacy.61ab75a6.js","./isEqual-legacy.746fcf44.js","./focus-trap-legacy.6b3273d9.js","./event-legacy.0bfbd831.js","./index-legacy.4e6c4971.js","./debounce-legacy.63638c2f.js","./scroll-legacy.37269264.js","./event-legacy.39ad8904.js"],(function(e){"use strict";var n,t,a,i,l,o,r,u,c,s,f,d,m,g,p,v,b,x,h,y,_,w,j,z,k,C,U,V,I,E,M,q,L,B,D,S;return{setters:[function(e){n=e.a,t=e.b,a=e.h,i=e.P,l=e.r,o=e.o,r=e.f,u=e.p,c=e.e,s=e.u,f=e.k,d=e.j,m=e.U,g=e.V,p=e.az,v=e.J},function(e){b=e.aL,x=e.aM,h=e.h,y=e.aN,_=e.r},function(e){w=e.E,j=e.a},function(){},function(){},function(e){z=e.E},function(e){k=e.E},function(e){C=e.E},function(){},function(e){U=e._},function(e){V=e.l,I=e.c,E=e.a,M=e.b},function(e){q=e.i},function(e){L=e._},function(e){B=e.r},function(e){D=e.E},function(e){S=e.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function H(e,i){return n(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})])}var F=function(e){return m("data-v-35977126"),e=e(),g(),e},J={class:"h-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},N={class:"h-full lg:h-auto max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},P=F((function(){return u("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[u("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-login-logo"})],-1)})),R={class:"w-full lg:w-1/2 xl:w-1/2 mt-10 p-6 sm:p-12"},T={class:"mt-0 flex flex-col items-center"},A={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},G={class:"w-full flex-1"},K=p('<div class="my-12 relative" data-v-35977126><div class="absolute inset-0 flex items-center" aria-hidden="true" data-v-35977126><div class="w-full border-t text-gray-600" data-v-35977126></div></div><div class="relative flex justify-center text-sm" data-v-35977126><span class="px-2 bg-white text-sm leading-none text-gray-600 tracking-wide font-medium" data-v-35977126>管理员登录</span></div></div>',1),O={class:"flex space-x-5 w-full"},Q=v(" 将配置文件 application.properties 中 zfile.debug 修改为 true, 重启后访问首页即可重置密码 "),W=F((function(){return u("br",null,null,-1)})),X=F((function(){return u("a",{target:"_blank",class:"text-blue-400",href:"https://docs.zfile.vip/question#reset-pwd"},"点击可前往文档查看操作方式",-1)})),Y=v("忘记密码"),Z=v("登录");e("default",L({__name:"login",setup:function(e){var m=i(),g=l(!1),p=l(),v=l({username:"",password:"",verifyCode:"",verifyCodeUUID:""}),L=l({username:[{required:!0,message:"账号不能为空",trigger:["change","blur"]}],password:[{required:!0,message:"密码不能为空",trigger:["change","blur"]}]}),F=function(){p.value.validate((function(e){e?(g.value=!0,E(v.value).then((function(e){window.localStorage.setItem("zfile-token",e.data),D({message:"登录成功",type:"success",duration:1e3,onClose:function(){m.push("/admin")}})})).catch((function(){g.value=!1,ne()}))):D.warning("请输入账号密码!")}))},$=l("");V().then((function(e){$.value=e.data}));var ee=l({}),ne=function(){M().then((function(e){ee.value=e.data,v.value.verifyCodeUUID=e.data.uuid}))};return ne(),o((function(){q().then((function(e){e.data||m.push("/install")})),I().then((function(e){e.data&&m.push("/admin")}))})),function(e,i){var l=S,o=w,m=C,V=k,I=z,E=_,M=j;return n(),r("div",J,[u("div",N,[P,u("div",R,[u("div",T,[u("h1",A,[u("img",{class:"w-16 cursor-pointer",onClick:i[0]||(i[0]=function(e){return n="https://github.com/zhaojun1998/zfile",void window.open(n);var n}),src:U})]),u("div",G,[K,a(M,{onSubmit:i[6]||(i[6]=d((function(){}),["prevent"])),ref_key:"loginFormRef",ref:p,rules:s(L),model:s(v),class:"zfile-login-form",size:"large"},{default:c((function(){return[a(o,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:c((function(){return[a(l,{placeholder:"管理员账号","prefix-icon":s(b),modelValue:s(v).username,"onUpdate:modelValue":i[1]||(i[1]=function(e){return s(v).username=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),a(o,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:c((function(){return[a(l,{placeholder:"管理员密码",type:"password","show-password":"","prefix-icon":s(x),modelValue:s(v).password,"onUpdate:modelValue":i[2]||(i[2]=function(e){return s(v).password=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),"2fa"===$.value?(n(),t(o,{key:0,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:c((function(){return[a(l,{placeholder:"双因素认证验证码","prefix-icon":s(h),modelValue:s(v).verifyCode,"onUpdate:modelValue":i[3]||(i[3]=function(e){return s(v).verifyCode=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1})):"image"===$.value?(n(),t(o,{key:1,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:c((function(){var e;return[u("div",O,[a(l,{class:"flex-1",placeholder:"请输入验证码","prefix-icon":s(H),modelValue:s(v).verifyCode,"onUpdate:modelValue":i[4]||(i[4]=function(e){return s(v).verifyCode=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"]),a(m,{src:null===(e=ee.value)||void 0===e?void 0:e.imgBase64,onClick:i[5]||(i[5]=function(e){return ne()})},null,8,["src"])])]})),_:1})):f("",!0),a(o,{class:"box animate__animated animate__fadeInUp float-right"},{default:c((function(){return[a(I,{class:"item",effect:"dark",placement:"left"},{content:c((function(){return[Q,W,X]})),default:c((function(){return[a(V,{icon:s(y),underline:!1,class:"zfile-float-right"},{default:c((function(){return[Y]})),_:1},8,["icon"])]})),_:1})]})),_:1}),a(o,{class:"clear-right"},{default:c((function(){return[a(E,{loading:s(g),class:"w-full mb-0","native-type":"submit",type:"primary",icon:s(B),onClick:F},{default:c((function(){return[Z]})),_:1},8,["loading","icon"])]})),_:1})]})),_:1},8,["rules","model"])])])])])])}}},[["__scopeId","data-v-35977126"]]))}}}))}();
