(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{3735:function(e,t,r){"use strict";r.r(t);var n=r("6c13"),i=r("48c7");for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);r("a595");var a,u=r("f0c5"),l=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"2329f8bf",null,!1,n["a"],a);t["default"]=l.exports},"3cf2":function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-2329f8bf]{padding:%?100?%}.content[data-v-2329f8bf]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-2329f8bf]{text-align:center}.logo uni-image[data-v-2329f8bf]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-2329f8bf]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-2329f8bf]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-2329f8bf]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-2329f8bf]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-2329f8bf]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-2329f8bf]{color:#b49950}.picker-select-input[data-v-2329f8bf]{line-height:%?80?%}',""]),e.exports=t},"48c7":function(e,t,r){"use strict";r.r(t);var n=r("4e2d"),i=r.n(n);for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);t["default"]=i.a},"4e2d":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("28a5"),r("96cf");var i=n(r("3b8d")),o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:[],t=uni.getStorageSync("loginTable"),this.tableName=t,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),this.styleChange();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.yonghuzhanghao||"yonghu"!=this.tableName){e.next=3;break}return this.$utils.msg("用户账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if("yonghu"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){e.next=9;break}return this.$utils.msg("两次密码输入不一致"),e.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.yonghushouji||this.$validate.isMobile(this.ruleForm.yonghushouji)){e.next=12;break}return this.$utils.msg("用户手机应输入手机格式"),e.abrupt("return");case 12:if("yonghu"!=this.tableName||!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 15:if("yonghu"!=this.tableName||!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){e.next=18;break}return this.$utils.msg("余额应输入数字"),e.abrupt("return");case 18:return e.next=20,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 20:this.$utils.msgBack("注册成功");case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}};t.default=o},6743:function(e,t,r){var n=r("3cf2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("eee9f932",n,!0,{sourceMap:!1,shadowMode:!1})},"6c13":function(e,t,r){"use strict";var n,i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(t){e.$set(e.ruleForm,"yonghuzhanghao",t)},expression:"ruleForm.yonghuzhanghao"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"密码"},model:{value:e.ruleForm.mima,callback:function(t){e.$set(e.ruleForm,"mima",t)},expression:"ruleForm.mima"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"确认密码"},model:{value:e.ruleForm.mima2,callback:function(t){e.$set(e.ruleForm,"mima2",t)},expression:"ruleForm.mima2"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(t){e.$set(e.ruleForm,"yonghuxingming",t)},expression:"ruleForm.yonghuxingming"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-picker",{attrs:{value:e.yonghuxingbieIndex,range:e.yonghuxingbieOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.yonghuxingbieChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"年龄"},model:{value:e.ruleForm.nianling,callback:function(t){e.$set(e.ruleForm,"nianling",t)},expression:"ruleForm.nianling"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"用户手机"},model:{value:e.ruleForm.yonghushouji,callback:function(t){e.$set(e.ruleForm,"yonghushouji",t)},expression:"ruleForm.yonghushouji"}})],1):e._e(),"yonghu"==e.tableName?r("v-uni-view",{staticClass:"uni-form-item uni-column"},[r("v-uni-input",{staticClass:"uni-input",style:{borderColor:"rgba(255, 170, 51, 1)",backgroundColor:"#fff",borderRadius:"8rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},attrs:{type:"text",name:"",placeholder:"邮箱"},model:{value:e.ruleForm.youxiang,callback:function(t){e.$set(e.ruleForm,"youxiang",t)},expression:"ruleForm.youxiang"}})],1):e._e(),r("v-uni-view",[r("v-uni-button",{style:{borderColor:"#ccc",backgroundColor:"rgba(255, 107, 19, 1)",borderRadius:"20rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0px",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("注册")])],1)],1)},o=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return n}))},a595:function(e,t,r){"use strict";var n=r("6743"),i=r.n(n);i.a}}]);