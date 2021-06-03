(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,n,r){"use strict";var o=r(87),e=r(88),m=r(1),d={light:{primary:"#1976D2",secondary:"#E3F2FD",accent:"#D81B60",onAccent:"#FAFAFA"},dark:{primary:"#1976D2",secondary:"#E3F2FD",accent:"#D1C4E9",onAccent:"#000000"}},x=function(){function t(n){Object(o.a)(this,t),this.$store=n}return Object(e.a)(t,[{key:"isDark",get:function(){return this.$store.getters.darkTheme}},{key:"currentTheme",get:function(){return this.$store.getters.darkTheme?d.dark:d.light}}]),t}();n.a=function(t){var n=t.store,r=new x(n);m.a.prototype.$themeService=r,m.a.$themeService=r}},158:function(t,n,r){var content=r(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("260effa6",content,!0,{sourceMap:!1})},163:function(t,n,r){var content=r(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("dfebbc7e",content,!0,{sourceMap:!1})},164:function(t,n,r){var content=r(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("4a40f49a",content,!0,{sourceMap:!1})},165:function(t,n,r){var content=r(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("5893d078",content,!0,{sourceMap:!1})},166:function(t,n,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("fce036f6",content,!0,{sourceMap:!1})},180:function(t,n,r){"use strict";var o={computed:{drawer:{get:function(){return this.$store.getters.drawer},set:function(t){this.$store.commit("setDrawer",t)}},darkTheme:{get:function(){return this.$store.getters.darkTheme},set:function(t){this.$store.commit("setDarkTheme",t)}}},watch:{darkTheme:{handler:"setTheme"}},mounted:function(){this.setTheme(this.darkTheme)},methods:{setTheme:function(t){var n=document.querySelector("#__nuxt");t?n.classList.add("app-dark"):n.classList.remove("app-dark")}}},e=(r(232),r(8)),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"app-header app-row app-align-center"},[r("AppButton",{staticClass:"mr-2",attrs:{large:"",icon:"",text:"",rounded:""},on:{click:function(n){t.drawer=!t.drawer}}},[r("AppIcon",[t._v("mdi-menu")])],1),t._v(" "),r("AppButton",{staticClass:"mr-2",attrs:{large:"",icon:"",text:"",rounded:""},on:{click:function(n){return t.$router.push("/")}}},[r("div",{staticClass:"avatar"},[r("img",{attrs:{alt:"logo",src:"/favicon.ico"}})])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"app-spacer"}),t._v(" "),r("div",{staticClass:"actions app-column app-align-start app-sm-align-end"},[r("div",{staticClass:"app-row app-align-center"},[r("div",{staticClass:"app-col"},[r("AppButton",{staticClass:"ma-1",attrs:{large:"",icon:"",text:"",rounded:""}},[r("AppIcon",[t._v("mdi-cart")]),t._v(" "),r("div",{staticClass:"badge text-caption",style:{"background-color":t.$themeService.currentTheme.accent,color:t.$themeService.currentTheme.onAccent},attrs:{size:"16"}},[t._v("\n            "+t._s(t.$store.getters.cartCount)+"\n          ")])],1)],1),t._v(" "),r("AppButton",{staticClass:"ma-1",attrs:{large:"",icon:"",text:"",rounded:""},on:{click:function(n){t.darkTheme=!t.darkTheme}}},[r("AppIcon",{attrs:{"icon-class":t.darkTheme?"mdi-brightness-5":"mdi-brightness-2"}})],1)],1)])],1)}),[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"title-block app-column app-align-start"},[r("h4",{staticClass:"text-title app-text-left"},[t._v("Películas Demo")])])}],!1,null,"6d26f6c9",null),m=component.exports;installComponents(component,{AppIcon:r(181).default,AppButton:r(182).default});var d={props:{value:{type:Boolean,default:!1}},computed:{navHistory:function(){return this.$store.getters.history},drawer:{get:function(){return this.$store.getters.drawer},set:function(t){this.$store.commit("setDrawer",t)}},navSideClass:function(){return{"app-nav-sidebar-inactive":!this.value}},overlay:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},mounted:function(){var t=JSON.parse(localStorage.getItem("navHistory"));t&&t.length>0&&this.$store.commit("setHistory",t)},methods:{toTop:function(){console.log("toTop")}}},x=(r(242),{components:{TheHeader:m,TheNavSidebar:Object(e.a)(d,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("aside",{staticClass:"app-nav-sidebar",class:t.navSideClass},[r("nav",{staticClass:"app-nav-content"},[r("h6",{staticClass:"text-subtitle m-3"},[t._v("Historial")]),t._v(" "),t._l(t.navHistory,(function(n){return r("NuxtLink",{key:n.id,staticClass:"text-caption my-1",attrs:{to:"/"+n.id,exact:""}},[t._v("\n      "+t._s(n.title)+"\n    ")])}))],2),t._v(" "),r("div",{staticClass:"app-nav__border"})])}),[],!1,null,"5e847318",null).exports},computed:{drawer:{get:function(){return this.$store.getters.drawer},set:function(t){this.$store.commit("setDrawer",t)}}}}),l=Object(e.a)(x,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"playground"},[r("AppOverlay",{staticClass:"hide-for-desktop",model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}}),t._v(" "),r("TheNavSidebar",{model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}}),t._v(" "),r("TheHeader"),t._v(" "),r("div",{staticClass:"app-container",class:{"app-with-sidebar-active":t.drawer}},[r("main",{staticClass:"mt-12"},[r("Nuxt")],1)])],1)}),[],!1,null,null,null);n.a=l.exports;installComponents(l,{AppOverlay:r(183).default})},181:function(t,n,r){"use strict";r.r(n);r(24),r(32),r(41),r(25),r(42);var o=r(14),e=(r(90),r(234),r(161),r(162),r(33),r(43));function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var x={small:"16px",default:"24px",medium:"24px",large:"36px"},l={name:"AppIcon",inheritAttrs:!1,props:{color:{type:String,default:""},iconClass:{type:String,default:""},backgroundColor:{type:String,default:"transparent"},size:{type:[Number,String],default:x.default},small:{type:Boolean,default:!1},medium:{type:Boolean,default:!1},large:{type:Boolean,default:!1}},computed:{customStyle:function(){var t={};this.color&&(t.color=this.color),t["background-color"]=this.backgroundColor;var n=this.resultingSize;return n&&(t=d(d({},t),{},{fontSize:n,height:n,width:n})),t},mdiIconClass:function(){var t,n,r;if(this.iconClass)return this.iconClass;var o="";return this.$slots.default&&(o=(null===(t=this.$slots)||void 0===t||null===(n=t.default[0])||void 0===n||null===(r=n.text)||void 0===r?void 0:r.trim())||""),o},resultingSize:function(){var t={small:this.small,medium:this.medium,large:this.large},n=Object.keys(t).find((function(n){return t[n]}));return n&&x[n]||Object(e.a)(this.size)},resultingColor:function(){var t={small:this.small,medium:this.medium,large:this.large},n=Object.keys(t).find((function(n){return t[n]}));return n&&x[n]||Object(e.a)(this.size)}},methods:{}},c=(r(238),r(8)),component=Object(c.a)(l,(function(){var t,n=this,r=n.$createElement;return(n._self._c||r)("i",n._g(n._b({staticClass:"app-icon mdi",class:(t={},t[n.mdiIconClass]=!0,t),style:n.customStyle,attrs:{"aria-hidden":"true"}},"i",n.$attrs,!1),n.$listeners))}),[],!1,null,"39060c70",null);n.default=component.exports},182:function(t,n,r){"use strict";r.r(n);var o=r(14),e=(r(90),r(154),r(161),r(162),r(33),r(24),r(32),r(41),r(25),r(42),r(43));function m(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(n){Object(o.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var x={small:"16px",default:"fit-content",medium:"24px",large:"36px"},l={name:"AppButton",inheritAttrs:!1,props:{height:{type:[Number,String],default:x.default},small:{type:Boolean,default:!1},large:{type:Boolean,default:!1},text:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},icon:{type:Boolean,default:!1},depressed:{type:Boolean,default:!1},color:{type:String,default:""},textColor:{type:String,default:""},disabled:{type:Boolean,default:!1},borderRadius:{type:[Number,String],default:8},to:{type:String,default:""}},computed:{isLinkExactActive:function(){var t=this.to.endsWith("/")?this.to:this.to+"/";return!!this.to&&this.$route.path===t},resultingHeight:function(){var t={small:this.small,medium:this.medium,large:this.large},n=Object.keys(t).find((function(n){return t[n]}));return n&&x[n]||Object(e.a)(this.height)},regular:function(){return!(this.text||this.rounded||this.icon||this.depressed)},btnClasses:function(){var t={"app-btn-regular":this.regular,"app-btn-text":this.text,"app-btn-icon":this.icon,"app-btn-round":this.icon,"app-btn-rounded":this.rounded,"app-btn-depressed":this.depressed,"app-btn-disabled":this.disabled,"app-btn-link":this.to,"app-btn-link-exact-active":this.isLinkExactActive};return t},customStyle:function(){var t={"border-radius":Object(e.a)(this.borderRadius)};this.color&&(t["background-color"]=this.color,t.borderColor=this.color),this.textColor&&(t.color=this.textColor);var n=this.resultingHeight;return n&&(t=d(d({},t),{},{height:n}),this.icon&&(t.width=n),this.rounded&&(t["border-radius"]=n)),t}}},c=(r(240),r(8)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("button",t._g(t._b({staticClass:"app-btn",class:t.btnClasses,style:t.customStyle,attrs:{type:"button"}},"button",t.$attrs,!1),t.$listeners),[r("div",{staticClass:"app-btn__content"},[t.to?r("Nuxt-Link",{attrs:{to:t.to}},[t._t("default")],2):t._t("default")],2)])}),[],!1,null,"5ca01def",null);n.default=component.exports},183:function(t,n,r){"use strict";r.r(n);var o={props:{value:{type:Boolean,default:!1}},methods:{clickedOutside:function(){console.log("clickedOutside"),this.$emit("input",!1)}}},e=(r(244),r(8)),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"app-overlay"},[r("div",{staticClass:"app-overlay-screen",on:{click:t.clickedOutside}}),t._v(" "),r("div",{staticClass:"app-overlay-content"},[t._t("default")],2)])}),[],!1,null,"62bdefd7",null);n.default=component.exports},184:function(t,n,r){r(185),t.exports=r(186)},230:function(t,n,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("5129d8a5",content,!0,{sourceMap:!1})},231:function(t,n,r){var o=r(27)(!1);o.push([t.i,'.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.ma-0{margin:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.mx-n0{margin-right:0!important;margin-left:0!important}.my-n0{margin-top:0!important;margin-bottom:0!important}.ma-n0{margin:0!important}.mt-0,.mt-n0{margin-top:0!important}.mr-0,.mr-n0{margin-right:0!important}.mb-0,.mb-n0{margin-bottom:0!important}.ml-0,.ml-n0{margin-left:0!important}.pa-0,.pa-n0{padding:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.px-n0{padding-right:0!important;padding-left:0!important}.py-n0{padding-bottom:0!important}.pt-0,.pt-n0,.py-n0{padding-top:0!important}.pr-0,.pr-n0{padding-right:0!important}.pb-0,.pb-n0{padding-bottom:0!important}.pl-0,.pl-n0{padding-left:0!important}@media screen and (max-width:375px){.col-0{flex:0 0 0%;max-width:0}}@media screen and (max-width:800px){.col-sm-0{flex:0 0 0%;max-width:0}}.col-md-0{flex:0 0 0%;max-width:0}.ma-1{margin:4px!important}.mx-1{margin-right:4px!important;margin-left:4px!important}.my-1{margin-top:4px!important;margin-bottom:4px!important}.mx-n1{margin-right:-4px!important;margin-left:-4px!important}.my-n1{margin-top:-4px!important;margin-bottom:-4px!important}.ma-n1{margin:-4px!important}.mt-1{margin-top:4px!important}.mt-n1{margin-top:-4px!important}.mr-1{margin-right:4px!important}.mr-n1{margin-right:-4px!important}.mb-1{margin-bottom:4px!important}.mb-n1{margin-bottom:-4px!important}.ml-1{margin-left:4px!important}.ml-n1{margin-left:-4px!important}.pa-1{padding:4px!important}.pa-n1{padding:-4px!important}.px-1{padding-right:4px!important;padding-left:4px!important}.py-1{padding-top:4px!important;padding-bottom:4px!important}.px-n1{padding-right:-4px!important;padding-left:-4px!important}.py-n1{padding-top:-4px!important;padding-bottom:-4px!important}.pt-1{padding-top:4px!important}.pt-n1{padding-top:-4px!important}.pr-1{padding-right:4px!important}.pr-n1{padding-right:-4px!important}.pb-1{padding-bottom:4px!important}.pb-n1{padding-bottom:-4px!important}.pl-1{padding-left:4px!important}.pl-n1{padding-left:-4px!important}@media screen and (max-width:375px){.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}@media screen and (max-width:800px){.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.ma-2{margin:8px!important}.mx-2{margin-right:8px!important;margin-left:8px!important}.my-2{margin-top:8px!important;margin-bottom:8px!important}.mx-n2{margin-right:-8px!important;margin-left:-8px!important}.my-n2{margin-top:-8px!important;margin-bottom:-8px!important}.ma-n2{margin:-8px!important}.mt-2{margin-top:8px!important}.mt-n2{margin-top:-8px!important}.mr-2{margin-right:8px!important}.mr-n2{margin-right:-8px!important}.mb-2{margin-bottom:8px!important}.mb-n2{margin-bottom:-8px!important}.ml-2{margin-left:8px!important}.ml-n2{margin-left:-8px!important}.pa-2{padding:8px!important}.pa-n2{padding:-8px!important}.px-2{padding-right:8px!important;padding-left:8px!important}.py-2{padding-top:8px!important;padding-bottom:8px!important}.px-n2{padding-right:-8px!important;padding-left:-8px!important}.py-n2{padding-top:-8px!important;padding-bottom:-8px!important}.pt-2{padding-top:8px!important}.pt-n2{padding-top:-8px!important}.pr-2{padding-right:8px!important}.pr-n2{padding-right:-8px!important}.pb-2{padding-bottom:8px!important}.pb-n2{padding-bottom:-8px!important}.pl-2{padding-left:8px!important}.pl-n2{padding-left:-8px!important}@media screen and (max-width:375px){.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}@media screen and (max-width:800px){.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.ma-3{margin:12px!important}.mx-3{margin-right:12px!important;margin-left:12px!important}.my-3{margin-top:12px!important;margin-bottom:12px!important}.mx-n3{margin-right:-12px!important;margin-left:-12px!important}.my-n3{margin-top:-12px!important;margin-bottom:-12px!important}.ma-n3{margin:-12px!important}.mt-3{margin-top:12px!important}.mt-n3{margin-top:-12px!important}.mr-3{margin-right:12px!important}.mr-n3{margin-right:-12px!important}.mb-3{margin-bottom:12px!important}.mb-n3{margin-bottom:-12px!important}.ml-3{margin-left:12px!important}.ml-n3{margin-left:-12px!important}.pa-3{padding:12px!important}.pa-n3{padding:-12px!important}.px-3{padding-right:12px!important;padding-left:12px!important}.py-3{padding-top:12px!important;padding-bottom:12px!important}.px-n3{padding-right:-12px!important;padding-left:-12px!important}.py-n3{padding-top:-12px!important;padding-bottom:-12px!important}.pt-3{padding-top:12px!important}.pt-n3{padding-top:-12px!important}.pr-3{padding-right:12px!important}.pr-n3{padding-right:-12px!important}.pb-3{padding-bottom:12px!important}.pb-n3{padding-bottom:-12px!important}.pl-3{padding-left:12px!important}.pl-n3{padding-left:-12px!important}@media screen and (max-width:375px){.col-3{flex:0 0 25%;max-width:25%}}@media screen and (max-width:800px){.col-sm-3{flex:0 0 25%;max-width:25%}}.col-md-3{flex:0 0 25%;max-width:25%}.ma-4{margin:16px!important}.mx-4{margin-right:16px!important;margin-left:16px!important}.my-4{margin-top:16px!important;margin-bottom:16px!important}.mx-n4{margin-right:-16px!important;margin-left:-16px!important}.my-n4{margin-top:-16px!important;margin-bottom:-16px!important}.ma-n4{margin:-16px!important}.mt-4{margin-top:16px!important}.mt-n4{margin-top:-16px!important}.mr-4{margin-right:16px!important}.mr-n4{margin-right:-16px!important}.mb-4{margin-bottom:16px!important}.mb-n4{margin-bottom:-16px!important}.ml-4{margin-left:16px!important}.ml-n4{margin-left:-16px!important}.pa-4{padding:16px!important}.pa-n4{padding:-16px!important}.px-4{padding-right:16px!important;padding-left:16px!important}.py-4{padding-top:16px!important;padding-bottom:16px!important}.px-n4{padding-right:-16px!important;padding-left:-16px!important}.py-n4{padding-top:-16px!important;padding-bottom:-16px!important}.pt-4{padding-top:16px!important}.pt-n4{padding-top:-16px!important}.pr-4{padding-right:16px!important}.pr-n4{padding-right:-16px!important}.pb-4{padding-bottom:16px!important}.pb-n4{padding-bottom:-16px!important}.pl-4{padding-left:16px!important}.pl-n4{padding-left:-16px!important}@media screen and (max-width:375px){.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}@media screen and (max-width:800px){.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.ma-5{margin:20px!important}.mx-5{margin-right:20px!important;margin-left:20px!important}.my-5{margin-top:20px!important;margin-bottom:20px!important}.mx-n5{margin-right:-20px!important;margin-left:-20px!important}.my-n5{margin-top:-20px!important;margin-bottom:-20px!important}.ma-n5{margin:-20px!important}.mt-5{margin-top:20px!important}.mt-n5{margin-top:-20px!important}.mr-5{margin-right:20px!important}.mr-n5{margin-right:-20px!important}.mb-5{margin-bottom:20px!important}.mb-n5{margin-bottom:-20px!important}.ml-5{margin-left:20px!important}.ml-n5{margin-left:-20px!important}.pa-5{padding:20px!important}.pa-n5{padding:-20px!important}.px-5{padding-right:20px!important;padding-left:20px!important}.py-5{padding-top:20px!important;padding-bottom:20px!important}.px-n5{padding-right:-20px!important;padding-left:-20px!important}.py-n5{padding-top:-20px!important;padding-bottom:-20px!important}.pt-5{padding-top:20px!important}.pt-n5{padding-top:-20px!important}.pr-5{padding-right:20px!important}.pr-n5{padding-right:-20px!important}.pb-5{padding-bottom:20px!important}.pb-n5{padding-bottom:-20px!important}.pl-5{padding-left:20px!important}.pl-n5{padding-left:-20px!important}@media screen and (max-width:375px){.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}@media screen and (max-width:800px){.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.ma-6{margin:24px!important}.mx-6{margin-right:24px!important;margin-left:24px!important}.my-6{margin-top:24px!important;margin-bottom:24px!important}.mx-n6{margin-right:-24px!important;margin-left:-24px!important}.my-n6{margin-top:-24px!important;margin-bottom:-24px!important}.ma-n6{margin:-24px!important}.mt-6{margin-top:24px!important}.mt-n6{margin-top:-24px!important}.mr-6{margin-right:24px!important}.mr-n6{margin-right:-24px!important}.mb-6{margin-bottom:24px!important}.mb-n6{margin-bottom:-24px!important}.ml-6{margin-left:24px!important}.ml-n6{margin-left:-24px!important}.pa-6{padding:24px!important}.pa-n6{padding:-24px!important}.px-6{padding-right:24px!important;padding-left:24px!important}.py-6{padding-top:24px!important;padding-bottom:24px!important}.px-n6{padding-right:-24px!important;padding-left:-24px!important}.py-n6{padding-top:-24px!important;padding-bottom:-24px!important}.pt-6{padding-top:24px!important}.pt-n6{padding-top:-24px!important}.pr-6{padding-right:24px!important}.pr-n6{padding-right:-24px!important}.pb-6{padding-bottom:24px!important}.pb-n6{padding-bottom:-24px!important}.pl-6{padding-left:24px!important}.pl-n6{padding-left:-24px!important}@media screen and (max-width:375px){.col-6{flex:0 0 50%;max-width:50%}}@media screen and (max-width:800px){.col-sm-6{flex:0 0 50%;max-width:50%}}.col-md-6{flex:0 0 50%;max-width:50%}.ma-7{margin:28px!important}.mx-7{margin-right:28px!important;margin-left:28px!important}.my-7{margin-top:28px!important;margin-bottom:28px!important}.mx-n7{margin-right:-28px!important;margin-left:-28px!important}.my-n7{margin-top:-28px!important;margin-bottom:-28px!important}.ma-n7{margin:-28px!important}.mt-7{margin-top:28px!important}.mt-n7{margin-top:-28px!important}.mr-7{margin-right:28px!important}.mr-n7{margin-right:-28px!important}.mb-7{margin-bottom:28px!important}.mb-n7{margin-bottom:-28px!important}.ml-7{margin-left:28px!important}.ml-n7{margin-left:-28px!important}.pa-7{padding:28px!important}.pa-n7{padding:-28px!important}.px-7{padding-right:28px!important;padding-left:28px!important}.py-7{padding-top:28px!important;padding-bottom:28px!important}.px-n7{padding-right:-28px!important;padding-left:-28px!important}.py-n7{padding-top:-28px!important;padding-bottom:-28px!important}.pt-7{padding-top:28px!important}.pt-n7{padding-top:-28px!important}.pr-7{padding-right:28px!important}.pr-n7{padding-right:-28px!important}.pb-7{padding-bottom:28px!important}.pb-n7{padding-bottom:-28px!important}.pl-7{padding-left:28px!important}.pl-n7{padding-left:-28px!important}@media screen and (max-width:375px){.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}@media screen and (max-width:800px){.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.ma-8{margin:32px!important}.mx-8{margin-right:32px!important;margin-left:32px!important}.my-8{margin-top:32px!important;margin-bottom:32px!important}.mx-n8{margin-right:-32px!important;margin-left:-32px!important}.my-n8{margin-top:-32px!important;margin-bottom:-32px!important}.ma-n8{margin:-32px!important}.mt-8{margin-top:32px!important}.mt-n8{margin-top:-32px!important}.mr-8{margin-right:32px!important}.mr-n8{margin-right:-32px!important}.mb-8{margin-bottom:32px!important}.mb-n8{margin-bottom:-32px!important}.ml-8{margin-left:32px!important}.ml-n8{margin-left:-32px!important}.pa-8{padding:32px!important}.pa-n8{padding:-32px!important}.px-8{padding-right:32px!important;padding-left:32px!important}.py-8{padding-top:32px!important;padding-bottom:32px!important}.px-n8{padding-right:-32px!important;padding-left:-32px!important}.py-n8{padding-top:-32px!important;padding-bottom:-32px!important}.pt-8{padding-top:32px!important}.pt-n8{padding-top:-32px!important}.pr-8{padding-right:32px!important}.pr-n8{padding-right:-32px!important}.pb-8{padding-bottom:32px!important}.pb-n8{padding-bottom:-32px!important}.pl-8{padding-left:32px!important}.pl-n8{padding-left:-32px!important}@media screen and (max-width:375px){.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}@media screen and (max-width:800px){.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.ma-9{margin:36px!important}.mx-9{margin-right:36px!important;margin-left:36px!important}.my-9{margin-top:36px!important;margin-bottom:36px!important}.mx-n9{margin-right:-36px!important;margin-left:-36px!important}.my-n9{margin-top:-36px!important;margin-bottom:-36px!important}.ma-n9{margin:-36px!important}.mt-9{margin-top:36px!important}.mt-n9{margin-top:-36px!important}.mr-9{margin-right:36px!important}.mr-n9{margin-right:-36px!important}.mb-9{margin-bottom:36px!important}.mb-n9{margin-bottom:-36px!important}.ml-9{margin-left:36px!important}.ml-n9{margin-left:-36px!important}.pa-9{padding:36px!important}.pa-n9{padding:-36px!important}.px-9{padding-right:36px!important;padding-left:36px!important}.py-9{padding-top:36px!important;padding-bottom:36px!important}.px-n9{padding-right:-36px!important;padding-left:-36px!important}.py-n9{padding-top:-36px!important;padding-bottom:-36px!important}.pt-9{padding-top:36px!important}.pt-n9{padding-top:-36px!important}.pr-9{padding-right:36px!important}.pr-n9{padding-right:-36px!important}.pb-9{padding-bottom:36px!important}.pb-n9{padding-bottom:-36px!important}.pl-9{padding-left:36px!important}.pl-n9{padding-left:-36px!important}@media screen and (max-width:375px){.col-9{flex:0 0 75%;max-width:75%}}@media screen and (max-width:800px){.col-sm-9{flex:0 0 75%;max-width:75%}}.col-md-9{flex:0 0 75%;max-width:75%}.ma-10{margin:40px!important}.mx-10{margin-right:40px!important;margin-left:40px!important}.my-10{margin-top:40px!important;margin-bottom:40px!important}.mx-n10{margin-right:-40px!important;margin-left:-40px!important}.my-n10{margin-top:-40px!important;margin-bottom:-40px!important}.ma-n10{margin:-40px!important}.mt-10{margin-top:40px!important}.mt-n10{margin-top:-40px!important}.mr-10{margin-right:40px!important}.mr-n10{margin-right:-40px!important}.mb-10{margin-bottom:40px!important}.mb-n10{margin-bottom:-40px!important}.ml-10{margin-left:40px!important}.ml-n10{margin-left:-40px!important}.pa-10{padding:40px!important}.pa-n10{padding:-40px!important}.px-10{padding-right:40px!important;padding-left:40px!important}.py-10{padding-top:40px!important;padding-bottom:40px!important}.px-n10{padding-right:-40px!important;padding-left:-40px!important}.py-n10{padding-top:-40px!important;padding-bottom:-40px!important}.pt-10{padding-top:40px!important}.pt-n10{padding-top:-40px!important}.pr-10{padding-right:40px!important}.pr-n10{padding-right:-40px!important}.pb-10{padding-bottom:40px!important}.pb-n10{padding-bottom:-40px!important}.pl-10{padding-left:40px!important}.pl-n10{padding-left:-40px!important}@media screen and (max-width:375px){.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media screen and (max-width:800px){.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.ma-11{margin:44px!important}.mx-11{margin-right:44px!important;margin-left:44px!important}.my-11{margin-top:44px!important;margin-bottom:44px!important}.mx-n11{margin-right:-44px!important;margin-left:-44px!important}.my-n11{margin-top:-44px!important;margin-bottom:-44px!important}.ma-n11{margin:-44px!important}.mt-11{margin-top:44px!important}.mt-n11{margin-top:-44px!important}.mr-11{margin-right:44px!important}.mr-n11{margin-right:-44px!important}.mb-11{margin-bottom:44px!important}.mb-n11{margin-bottom:-44px!important}.ml-11{margin-left:44px!important}.ml-n11{margin-left:-44px!important}.pa-11{padding:44px!important}.pa-n11{padding:-44px!important}.px-11{padding-right:44px!important;padding-left:44px!important}.py-11{padding-top:44px!important;padding-bottom:44px!important}.px-n11{padding-right:-44px!important;padding-left:-44px!important}.py-n11{padding-top:-44px!important;padding-bottom:-44px!important}.pt-11{padding-top:44px!important}.pt-n11{padding-top:-44px!important}.pr-11{padding-right:44px!important}.pr-n11{padding-right:-44px!important}.pb-11{padding-bottom:44px!important}.pb-n11{padding-bottom:-44px!important}.pl-11{padding-left:44px!important}.pl-n11{padding-left:-44px!important}@media screen and (max-width:375px){.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}@media screen and (max-width:800px){.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.ma-12{margin:48px!important}.mx-12{margin-right:48px!important;margin-left:48px!important}.my-12{margin-top:48px!important;margin-bottom:48px!important}.mx-n12{margin-right:-48px!important;margin-left:-48px!important}.my-n12{margin-top:-48px!important;margin-bottom:-48px!important}.ma-n12{margin:-48px!important}.mt-12{margin-top:48px!important}.mt-n12{margin-top:-48px!important}.mr-12{margin-right:48px!important}.mr-n12{margin-right:-48px!important}.mb-12{margin-bottom:48px!important}.mb-n12{margin-bottom:-48px!important}.ml-12{margin-left:48px!important}.ml-n12{margin-left:-48px!important}.pa-12{padding:48px!important}.pa-n12{padding:-48px!important}.px-12{padding-right:48px!important;padding-left:48px!important}.py-12{padding-top:48px!important;padding-bottom:48px!important}.px-n12{padding-right:-48px!important;padding-left:-48px!important}.py-n12{padding-top:-48px!important;padding-bottom:-48px!important}.pt-12{padding-top:48px!important}.pt-n12{padding-top:-48px!important}.pr-12{padding-right:48px!important}.pr-n12{padding-right:-48px!important}.pb-12{padding-bottom:48px!important}.pb-n12{padding-bottom:-48px!important}.pl-12{padding-left:48px!important}.pl-n12{padding-left:-48px!important}@media screen and (max-width:375px){.col-12{flex:0 0 100%;max-width:100%}}@media screen and (max-width:800px){.col-sm-12{flex:0 0 100%;max-width:100%}}.col-md-12{flex:0 0 100%;max-width:100%}*,:after,:before{box-sizing:border-box;margin:0}body{font-family:"Quicksand",sans-serif;font-weight:400;color:#111517}body .app-dark{color:#fafafa}aside{background-color:#fff}span{text-align:left}.playground{background-color:#b3e5fc}.app-dark aside{background-color:#202c37}.app-dark .playground{background-color:#01579b}.app-dark a{color:#fafafa}.app-dark .nuxt-link-active{color:#bdbdbd}.app-container{min-height:100vh;display:flex;flex-direction:column;align-content:center;text-align:center;flex:1 0 auto;max-width:1430px;margin:0 auto;transition:.2s cubic-bezier(.4,0,.2,1);padding:64px 16px 4px}.app-column{flex-direction:column!important;max-width:100%!important}.app-column,.app-row{display:flex!important}.app-row{flex-wrap:wrap}.app-justify-start{justify-content:flex-start!important}.app-justify-end{justify-content:flex-end!important}.app-justify-center{justify-content:center!important}.app-justify-space-between{justify-content:space-between!important}.app-justify-stretch{justify-items:stretch}.app-align-start{align-items:flex-start!important}.app-align-end{align-items:flex-end!important}.app-align-center{align-items:center!important}.app-align-stretch{align-items:stretch!important}.fill-height{height:100%}.app-spacer{flex-grow:1!important}.app-text-left{text-align:left!important}.app-text-right{text-align:right!important}.app-text-center{text-align:center!important}.grey-text{color:#9e9e9e}.text-display-2{font-size:3rem!important;line-height:3.125rem;letter-spacing:normal!important}.text-display-1{font-size:2rem!important;line-height:2.5rem;letter-spacing:.0073529412em!important}.text-display-1,.text-display-2{font-weight:400;font-family:Roboto,sans-serif!important}.text-headline{font-size:1.5rem!important;font-weight:400;letter-spacing:normal!important;line-height:2rem}.text-title{font-size:1.25em!important;font-weight:500!important;letter-spacing:.0125em!important;line-height:2rem}.text-subtitle{font-size:1rem!important;letter-spacing:.009375em!important;line-height:1.75rem}.text-caption{font-size:.8rem!important}.text-caption,.text-mini-caption{letter-spacing:.0333333333em!important;line-height:1.25rem}.text-mini-caption{font-size:.6rem!important}.font-weight-thin{font-weight:300!important}.font-weight-regular{font-weight:400!important}.font-weight-medium{font-weight:500!important}.font-weight-bold{font-weight:600!important}.nuxt-link-exact-active{color:#1976d2}@media screen and (max-width:1024px){.app-container{max-width:100%}}@media screen and (min-width:1024px){.app-md-align-end{align-items:flex-end!important}.app-md-text-left{text-align:left!important}.app-md-text-right{text-align:right!important}.app-md-text-center{text-align:center!important}}@media screen and (min-width:800px){.app-container{padding:64px 24px 4px}.app-container.app-with-sidebar-active{padding-left:254px}.hide-for-desktop{display:none!important}.app-sm-text-left{text-align:left!important}.app-sm-text-right{text-align:right!important}.app-sm-text-center{text-align:center!important}.app-sm-justify-start{justify-content:flex-start!important}.app-sm-justify-end{justify-content:flex-end!important}.app-sm-justify-center{justify-content:center!important}.app-sm-justify-space-between{justify-content:space-between!important}.app-sm-justify-stretch{justify-items:stretch}.app-sm-align-start{align-items:flex-start!important}.app-sm-align-end{align-items:flex-end!important}.app-sm-align-center{align-items:center!important}.app-sm-align-stretch{align-items:stretch!important}}',""]),t.exports=o},232:function(t,n,r){"use strict";r(158)},233:function(t,n,r){var o=r(27)(!1);o.push([t.i,".app-header[data-v-6d26f6c9]{position:fixed;height:64px;width:100%;padding:4px 16px;background-color:#fff;z-index:5}.app-dark .app-header[data-v-6d26f6c9]{background-color:#202c37}.badge[data-v-6d26f6c9]{border-radius:50%;margin-left:-4px;color:#fafafa;height:18px;width:18px;display:flex;justify-content:center;align-items:center;position:absolute;top:-6px;right:-4px}",""]),t.exports=o},238:function(t,n,r){"use strict";r(163)},239:function(t,n,r){var o=r(27)(!1);o.push([t.i,".app-icon[data-v-39060c70]{color:#111517}.app-dark .app-icon[data-v-39060c70]{color:#fafafa}",""]),t.exports=o},240:function(t,n,r){"use strict";r(164)},241:function(t,n,r){var o=r(27)(!1);o.push([t.i,".app-dark .app-btn[data-v-5ca01def]{background-color:#2b3945}.app-dark .app-btn__content span[data-v-5ca01def]{color:#fafafa}.app-btn[data-v-5ca01def]{cursor:pointer;border-radius:4px;display:inline-flex;flex:0 0 auto;font-weight:500;justify-content:center;outline:0;border-style:none;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,transform,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;padding:0 16px;background-color:#fafafa}.app-btn[data-v-5ca01def],.app-btn__content[data-v-5ca01def]{align-items:center;position:relative}.app-btn__content[data-v-5ca01def]{display:flex;flex:1 0 auto;line-height:normal}.app-btn__content span[data-v-5ca01def]{color:#111517}.app-btn-disabled .app-btn__content span[data-v-5ca01def]{color:#bdbdbd}.app-btn-icon .app-btn__content[data-v-5ca01def]{justify-content:center}.app-btn.app-btn-regular[data-v-5ca01def]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.app-btn.app-btn-regular[data-v-5ca01def]:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.app-btn.app-btn-depressed[data-v-5ca01def]{box-shadow:none!important}.app-btn-flat[data-v-5ca01def],.app-btn-text[data-v-5ca01def]{background-color:transparent!important;border-radius:4px}.app-btn[data-v-5ca01def]:not(.app-btn-round){min-width:48px}.app-btn-round[data-v-5ca01def]{border-radius:50%;padding:0}.app-btn-icon[data-v-5ca01def]:hover{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.app-btn-link-exact-active[data-v-5ca01def]{background-color:#e3f2fd!important}.app-btn.app-btn-disabled[data-v-5ca01def]:not(.app-btn-flat):not(.app-btn-text){background-color:#fafafa!important}.app-btn-disabled[data-v-5ca01def]{box-shadow:none;pointer-events:none;cursor:default}.app-btn.app-btn-disabled[data-v-5ca01def],.app-btn.app-btn-disabled .app-icon[data-v-5ca01def]{color:rgba(0,0,0,.26)!important}.app-btn[data-v-5ca01def]:active{opacity:.6}.app-btn-link a[data-v-5ca01def]{text-decoration:none}",""]),t.exports=o},242:function(t,n,r){"use strict";r(165)},243:function(t,n,r){var o=r(27)(!1);o.push([t.i,"aside[data-v-5e847318]{height:calc(100vh - 96px);top:96px}.app-nav-sidebar[data-v-5e847318]{left:0;max-width:100%;width:230px;padding:4px 16px;overflow:hidden;pointer-events:auto;transform:translateX(0);transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform;transition-property:transform,visibility,width;margin-right:4px;z-index:10;position:fixed;box-shadow:0 3px 3px -2px rgba(0,0,0,.7)!important;border-top-right-radius:8px}.app-nav-content[data-v-5e847318],.app-nav-sidebar[data-v-5e847318]{display:flex;flex-direction:column}.app-nav-content[data-v-5e847318]{height:100%;overflow-y:auto;overflow-x:hidden}.app-nav__border[data-v-5e847318]{position:absolute;right:0;top:0;height:100%;width:1px;background-color:rgba(0,0,0,.12)}.app-nav-sidebar-inactive[data-v-5e847318]{transform:translateX(-230px)}.cloud-icon[data-v-5e847318]{margin-top:-12px}.cash-icon[data-v-5e847318]{border-radius:50%;transform:rotate(-45deg);margin-left:-20px}@media screen and (min-width:800px){.app-nav-sidebar[data-v-5e847318]{box-shadow:none}}.drawer-btn[data-v-5e847318]{position:fixed!important;top:96px;left:8px}",""]),t.exports=o},244:function(t,n,r){"use strict";r(166)},245:function(t,n,r){var o=r(27)(!1);o.push([t.i,".app-overlay[data-v-62bdefd7]{z-index:6;align-items:center;display:flex;justify-content:center;position:fixed;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.app-overlay[data-v-62bdefd7],.app-overlay-screen[data-v-62bdefd7]{border-radius:inherit;top:0;left:0;right:0;bottom:0}.app-overlay-screen[data-v-62bdefd7]{height:100%;position:absolute;transition:inherit;width:100%;will-change:opacity;opacity:.46;background-color:#212121;border-color:#212121}.app-overlay-content[data-v-62bdefd7]{position:relative}",""]),t.exports=o},246:function(t,n,r){"use strict";r.r(n),r.d(n,"state",(function(){return o})),r.d(n,"mutations",(function(){return e})),r.d(n,"getters",(function(){return m}));r(247),r(155);var o=function(){return{darkTheme:!1,drawer:!0,cartCount:0,history:[]}},e={increaseCartCount:function(t){return t.cartCount++},setDrawer:function(t,n){return t.drawer=n},setHistory:function(t,n){return t.history=n},setDarkTheme:function(t,n){return t.darkTheme=n},addMovieToHistory:function(t,n){var r=t.history.findIndex((function(t){return t.id===n.id}));-1!==r&&t.history.splice(r,1),t.history.unshift(n),localStorage.setItem("navHistory",JSON.stringify(t.history))}},m={cartCount:function(t){return t.cartCount},drawer:function(t){return t.drawer},darkTheme:function(t){return t.darkTheme},history:function(t){return t.history}}},43:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));r(55),r(90);function o(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==t||""===t?void 0:isNaN(+t)?String(t):"".concat(Number(t)).concat(n)}}},[[184,9,1,10]]]);