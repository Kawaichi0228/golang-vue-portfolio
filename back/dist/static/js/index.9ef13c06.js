(function(){var t={1083:function(t,e,a){"use strict";var s=a(144),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},r=[],n={},i=n,l=a(1001),c=(0,l.Z)(i,o,r,!1,null,null,null),u=c.exports,d=a(9132);s.ZP.use(d.Z);const p=new d.Z({theme:{themes:{light:{primary:"#0ccfdb",secondary:"#aaaaaa",accent:"#00ACE4"}}}});var v=a(8345),m=a(629);const h={auth:t=>t.user.auth},f={auth:!1},g={SET_AUTH:(t,e)=>t.auth=e},_={setAuth:({commit:t},e)=>t("SET_AUTH",e)},b={namespaced:!0,state:f,mutations:g,actions:_};s.ZP.use(m.ZP);const w=new m.ZP.Store({modules:{user:b},getters:h});var C=a(7524),x=a(782),V=a(4946),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"top"},[s("v-app-bar",{attrs:{app:"",clipped:"",color:"white"}},[s("v-toolbar-title",{staticClass:"top__title"},[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"top__logo",attrs:{src:a(527)}})])],1),s("v-spacer"),s("div",{staticClass:"top__tabmenu"},[s("v-btn",{staticClass:"top__tabbutton white",attrs:{text:"",to:"/signin"}},[t._v(t._s(t.navItems.signin.value))]),s("v-btn",{staticClass:"top__tabbutton top__tabbutton--margin primary white--text",attrs:{text:"",to:"/signup"}},[t._v(t._s(t.navItems.signup.value))])],1),s("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.onClick_HamburgerIcon.apply(null,arguments)}}})],1)],1),s("div",{staticClass:"drawer"},[s("v-navigation-drawer",{attrs:{app:"",clipped:"","mobile-breakpoint":"99999","hide-overlay":"",right:"","max-width":"300px",color:"white"},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[s("v-list",{attrs:{nav:"",dense:""}},[s("v-list-item-group",{attrs:{"active-class":"cyan--text text--accent-4"},model:{value:t.selectedMenuNumber,callback:function(e){t.selectedMenuNumber=e},expression:"selectedMenuNumber"}},[s("div",{staticClass:"text-right my-3"},[s("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.onClick_HamburgerIcon.apply(null,arguments)}}},[s("v-icon",[t._v("mdi-window-close")])],1)],1),s("div",{staticClass:"drawer__logo--wraper ml-2 mb-3"},[s("a",{attrs:{href:"/"}},[s("img",{staticClass:"drawer__logo--img",attrs:{src:a(527),alt:""}})])]),s("v-btn",{staticClass:"primary mb-4",attrs:{dark:"",width:"100%",to:"/signup"}},[t._v(t._s(t.navItems.signup.value))]),s("v-btn",{staticClass:"drawer__btn--outline",attrs:{width:"100%",to:"/signin"}},[t._v(t._s(t.navItems.signin.value))])],1)],1)],1)],1)])},Z=[];const y={navItems:{signup:{value:"会員登録",url:"/signup"},signin:{value:"ログイン",url:"/signin"}},pageTitle:"dot.Task"};var T={data(){return{isVisible:!1,selectedMenuNumber:null,navItems:y.navItems,pageTitle:y.pageTitle}},methods:{onClick_HamburgerIcon(){this.toggleDrawer()},toggleDrawer(){this.isVisible=!this.isVisible}}},D=T,$=a(3453),A=a.n($),E=a(5206),F=a(680),I=a(6428),S=a(6816),B=a(3249),H=a(3347),P=a(9762),q=a(7921),j=(0,l.Z)(D,k,Z,!1,null,"3c2fd78e",null),L=j.exports;A()(j,{VAppBar:x.Z,VAppBarNavIcon:E.Z,VBtn:F.Z,VIcon:I.Z,VList:S.Z,VListItemGroup:B.Z,VNavigationDrawer:H.Z,VSpacer:P.Z,VToolbarTitle:q.qW});var R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-chevron-up")])],1)],1)},M=[],O={data:()=>({fab:!1}),methods:{onScroll(t){if("undefined"===typeof window)return;const e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>100},toTop(){this.$vuetify.goTo(0)}}},N=O,U=a(6392),z=a.n(U),W=a(9109),G=(0,l.Z)(N,R,M,!1,null,"7349243a",null),K=G.exports;function Y(t){return s.ZP.extend({inheritAttrs:!1,components:{PageComponent:t,VApp:C.Z,VAppBar:x.Z,VContent:V.Z,FrontHeader:L,ButtonScrollTop:K},render(){const e=arguments[0];return e("v-app",[e(L),e("v-content",[e(t,{props:{data:this.$attrs}})]),e(K)])}})}A()(G,{VBtn:F.Z,VIcon:I.Z}),z()(G,{Scroll:W.Z});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home-page",attrs:{fluid:"","fill-height":""}},[a("FrontHomeContents",{staticClass:"home-page__contents mb-16"}),a("FrontHomeFooterTop",{staticClass:"mb-16 ml-16"}),a("FrontHomeFooterBottom")],1)},Q=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"test",attrs:{fluid:""}},[a("v-row",{staticClass:"main-visual__bg"},[a("v-row",{attrs:{"align-content":"center"}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"home-contents__title"},[a("h1",{staticClass:"home-contents--padding"},[a("div",{staticClass:"home-contents__title--text"},[t._v("日々のタスクを")]),a("div",{staticClass:"home-contents__title--text"},[t._v("迅速に管理")])])]),a("div",{staticClass:"home-contents__text home-contents--padding"},[t._v(" "+t._s(t.pageTitle)+"は、日々のタスクを迅速に管理するための機能を備えた無料のツールで、 簡単で使いやすいコンセプトでデザインされています。 ")]),a("v-row",[a("v-col",{staticClass:"home-contents__btn",attrs:{cols:"12"}},[a("v-btn",{staticClass:"primary white--text",attrs:{"x-large":"",text:"",to:"/signup"}},[a("span",{staticClass:"mr-1"},[t._v("無料登録して使ってみる")]),a("v-icon",{staticClass:"mt-1",attrs:{dark:""}},[t._v("mdi-chevron-right-circle")])],1)],1)],1)],1)],1)],1)],1)},tt=[],et={data(){return{pageTitle:y.pageTitle}}},at=et,st=a(2102),ot=a(4228),rt=a(2877),nt=(0,l.Z)(at,X,tt,!1,null,"2c82dbb2",null),it=nt.exports;A()(nt,{VBtn:F.Z,VCol:st.Z,VContainer:ot.Z,VIcon:I.Z,VRow:rt.Z});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h2",{staticClass:"footer-top__column--title"},[t._v(t._s(t.pageTitle)+"とは")]),a("ul",[a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v(t._s(t.pageTitle)+"の特徴")])])]),a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v("機能一覧")])])])])]),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h2",{staticClass:"footer-top__column--title"},[t._v("お知らせ・ブログ")]),a("ul",[a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v("お知らせ・イベント")])])]),a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v("ブログ")])])])])]),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h2",{staticClass:"footer-top__column--title"},[t._v("サポート")]),a("ul",[a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v("よくあるご質問")])])]),a("li",{staticClass:"footer-top__column--text"},[a("a",{attrs:{href:"#"}},[a("span",[t._v("資料一覧")])])])])])],1)],1)},ct=[],ut={data(){return{pageTitle:y.pageTitle}}},dt=ut,pt=(0,l.Z)(dt,lt,ct,!1,null,"fda7e99e",null),vt=pt.exports;A()(pt,{VCol:st.Z,VContainer:ot.Z,VRow:rt.Z});var mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",{staticClass:"mb-8"},[s("v-divider")],1),s("v-row",{staticClass:"footer-bottom"},[s("img",{staticClass:"footer-bottom__logo",attrs:{src:a(527),alt:""}}),s("span",{staticClass:"footer-bottom__text"},[t._v("© 2022 Kawaichi. All rights reserved")])])],1)},ht=[],ft=a(9611),gt=a.n(ft),_t=gt(),bt=a(1418),wt=(0,l.Z)(_t,mt,ht,!1,null,"4285f358",null),Ct=wt.exports;A()(wt,{VContainer:ot.Z,VDivider:bt.Z,VRow:rt.Z});var xt={components:{FrontHomeContents:it,FrontHomeFooterTop:vt,FrontHomeFooterBottom:Ct}},Vt=xt,kt=(0,l.Z)(Vt,J,Q,!1,null,"009b4eea",null),Zt=kt.exports;A()(kt,{VContainer:ot.Z});var yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"text-center",attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-card",{staticClass:"fill-width",attrs:{tile:t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs,flat:"","max-width":"640"}},[a("v-card-title",{staticClass:"pa-8"},[a("h4",{staticClass:"fill-width"},[t._v("新規会員登録")])]),a("v-divider"),a("AuthContents",{attrs:{buttonValue:"会員登録",onSubmitFunction:t.registerCallBackFunction,isVisibleErrmsg:t.isVisibleErrmsg,errMsgValue:"メールアドレスおよびパスワードを正しく入力してください"},on:{"form-data":t.addFormData}}),a("v-divider",{staticClass:"mb-4"}),a("div",{staticClass:"mb-8"},[a("div",[t._v("アカウントをお持ちの方")]),a("router-link",{attrs:{to:"/signin"}},[t._v("ログインに移動")])],1)],1)],1)],1)},Tt=[],Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"auth px-6 py-8 mx-auto",staticStyle:{"max-width":"410px"}},[a("div",{staticClass:"pt-6"},[a("div",{staticClass:"mb-6"},[a("v-text-field",{attrs:{rules:[t.emailRules.required,t.emailRules.regex],autofocus:"",dense:"",height:t.localConst.formAndBtnHeight,outlined:"",placeholder:t.localConst.placeholderTextEmail},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}}),a("v-text-field",{attrs:{"append-icon":t.passwordShow?"mdi-eye":"mdi-eye-off",rules:[t.passwordRules.required,t.passwordRules.regex],type:t.passwordShow?"text":"password",dense:"",height:t.localConst.formAndBtnHeight,name:"input-password",outlined:"",placeholder:t.localConst.placeholderTextPassword},on:{"click:append":function(e){t.passwordShow=!t.passwordShow}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),a("div",{staticClass:"auth__form--pw-description"},[t._v(" ※"+t._s(t.ruleDescription_password)+" ")]),a("v-container",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleErrmsg,expression:"isVisibleErrmsg"}],attrs:{"fill-height":""}},[a("v-row",{staticClass:"auth__error-msg",attrs:{"align-content":"center"}},[a("v-col",{staticClass:"text-left",attrs:{cols:"12",align:"center"}},[a("v-alert",{staticClass:"auth__error-msg pa-2 my-1",attrs:{slot:"no-results",value:!0,color:"error",dark:"",icon:"mdi-alert-circle-outline"},slot:"no-results"},[t._v(" "+t._s(t.errMsgValue)+" ")])],1)],1)],1)],1),a("div",{staticClass:"mb-6"},[a("v-btn",{staticClass:"auth__submit-button auth__submit-button--margin fill-width primary white--text",attrs:{text:"",height:t.localConst.formAndBtnHeight},on:{click:function(e){return t.onSubmitFunction_()}}},[t._v(" "+t._s(t.buttonValue)+" ")])],1)])])},$t=[];const At="パスワードを入力してください",Et="半角英字と半角数字それぞれ1文字以上含む8文字以上",Ft="正しいパスワードを入力してください",It=/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,St="メールアドレスを入力してください",Bt="正しいメールアドレスを入力してください",Ht=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Pt={data(){return{emailRules:{required:t=>!!t||St,regex:t=>Ht.test(t)||Bt},passwordRules:{required:t=>!!t||At,regex:t=>It.test(t)||Ft}}}},qt="例) taro.yamada@example.com",jt="例) password01",Lt="48px";var Rt={mixins:[Pt],props:{buttonValue:{type:String,required:!0},onSubmitFunction:{type:Function,required:!0},isVisibleErrmsg:{type:Boolean,required:!0},errMsgValue:{type:String,required:!0}},data(){return{localConst:{placeholderTextEmail:qt,placeholderTextPassword:jt,formAndBtnHeight:Lt},formData:{email:null,password:null},passwordShow:!1,ruleDescription_password:Et,isVisibleErrmsg_:null}},methods:{onSubmitFunction_(){this.addFormData(),this.onSubmitFunction()},addFormData(){this.$emit("form-data",this.formData)}}},Mt=Rt,Ot=a(1234),Nt=a(5978),Ut=(0,l.Z)(Mt,Dt,$t,!1,null,"49a11f4a",null),zt=Ut.exports;A()(Ut,{VAlert:Ot.Z,VBtn:F.Z,VCol:st.Z,VContainer:ot.Z,VRow:rt.Z,VTextField:Nt.Z});var Wt=a(9669),Gt=a.n(Wt);const Kt="/api/v1",Yt=Gt().create({baseURL:Kt}),Jt="/task",Qt={getAll:()=>Yt.get(`${Jt}`),create:t=>Yt.post(`${Jt}`,t),get:t=>Yt.get(`${Jt}/${t}`),update:(t,e)=>Yt.put(`${Jt}/${t}`,e),delete:t=>Yt["delete"](`${Jt}/${t}`)},Xt={register:t=>Yt.post("/signup",t),login:t=>Yt.post("/signin",t),get:()=>Yt.get("/user"),logout:()=>Yt.get("/signout")},te={task:Qt,user:Xt},ee={get:t=>te[t]},ae=ee.get("user");var se={components:{AuthContents:zt},data(){return{registerCallBackFunction:this.register,isVisibleErrmsg:!1}},methods:{addFormData(t){this.formData=t},async register(){const t={email:this.formData.email,password:this.formData.password},e=await ae.register(t).catch((t=>t.response));if(200!==e.status)return console.warn("会員登録に失敗しました"),console.table(e.data),void this.showErrMsg();console.group("success"),console.info("会員登録に成功しました"),console.table(e.data),console.groupEnd(""),await this.$router.push("/signin")},showErrMsg(){this.isVisibleErrmsg=!0}}},oe=se,re=a(3237),ne=a(7118),ie=(0,l.Z)(oe,yt,Tt,!1,null,"02410e66",null),le=ie.exports;A()(ie,{VCard:re.Z,VCardTitle:ne.EB,VContainer:ot.Z,VDivider:bt.Z,VRow:rt.Z});var ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"text-center",attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center","align-content":"center"}},[a("v-card",{staticClass:"fill-width",attrs:{tile:t.$vuetify.breakpoint.sm||t.$vuetify.breakpoint.xs,flat:"","max-width":"640"}},[a("v-card-title",{staticClass:"pa-8"},[a("h4",{staticClass:"fill-width"},[t._v("ログイン")])]),a("v-divider"),a("AuthContents",{attrs:{buttonValue:"ログイン",onSubmitFunction:t.loginCallBackFunction,isVisibleErrmsg:t.isVisibleErrmsg,errMsgValue:"メールアドレスまたはパスワードが違います"},on:{"form-data":t.addFormData}}),a("v-divider",{staticClass:"mb-4"}),a("div",{staticClass:"mb-8"},[a("div",[t._v("アカウントをお持ちでない方")]),a("router-link",{attrs:{to:"/signup"}},[t._v("会員登録に移動")])],1)],1)],1)],1)},ue=[];const de=ee.get("user");var pe={components:{AuthContents:zt},data(){return{loginCallBackFunction:this.login,isVisibleErrmsg:!1,formData:{}}},methods:{addFormData(t){this.formData=t},async login(){const t={email:this.formData.email,password:this.formData.password},e=await de.login(t).catch((t=>t.response));if(200!==e.status)return console.warn("ログインに失敗しました"),console.table(e.data),this.showErrMsg(),await this.$store.dispatch("user/setAuth",!1),void console.info({isLoginState:this.$store.getters.auth});console.group("success"),console.info("ログインに成功しました"),console.table(e.data),console.groupEnd(),await this.$store.dispatch("user/setAuth",!0),console.info({isLoginState:this.$store.getters.auth}),await this.$router.push("/dashboard")},showErrMsg(){this.isVisibleErrmsg=!0}}},ve=pe,me=(0,l.Z)(ve,ce,ue,!1,null,"71302a6e",null),he=me.exports;A()(me,{VCard:re.Z,VCardTitle:ne.EB,VContainer:ot.Z,VDivider:bt.Z,VRow:rt.Z});var fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-navigation-drawer",{attrs:{app:"",clipped:"",color:"white"},scopedSlots:t._u([{key:"append",fn:function(){return[s("div",{staticClass:"pa-2"},[s("v-btn",{attrs:{color:"secondary",block:"",dark:""},on:{click:function(e){return t.logout()}}},[t._v("ログアウト")])],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-list",t._l(t.items,(function(e){return s("v-list-item",{key:e.title,attrs:{href:e.to,link:""}},[s("v-list-item-icon",[s("v-icon",[t._v(t._s(e.icon))])],1),s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),s("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary",dark:"",flat:""}},[s("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),s("v-toolbar-title",[s("router-link",{attrs:{to:"/dashboard"}},[s("img",{staticClass:"dash-top__logo",attrs:{src:a(5053)}})])],1)],1)],1)},ge=[];const _e=ee.get("user");var be={data(){return{drawer:null,items:[{title:"タスク一覧",icon:"mdi-order-bool-ascending-variant",to:"/#/dashboard/task"},{title:"アカウント",icon:"mdi-account-box",to:"/#/dashboard/acount"}]}},methods:{async logout(){const t=await _e.logout().catch((t=>t.response));200===t.status?(console.info("ログアウトに成功しました"),await this.$store.dispatch("user/setAuth",!1),console.info({isLoginState:this.$store.getters.auth}),await this.$router.push("/")):console.warn("ログアウトに失敗しました")}}},we=be,Ce=a(7620),xe=a(2710),Ve=a(459),ke=(0,l.Z)(we,fe,ge,!1,null,null,null),Ze=ke.exports;function ye(t){return s.ZP.extend({inheritAttrs:!1,components:{PageComponent:t,VApp:C.Z,VAppBar:x.Z,VContent:V.Z,DashboardHeader:Ze},render(){const e=arguments[0];return e("v-app",[e(Ze),e("v-content",[e(t,{props:{data:this.$attrs}})])])}})}A()(ke,{VAppBar:x.Z,VAppBarNavIcon:E.Z,VBtn:F.Z,VIcon:I.Z,VList:S.Z,VListItem:Ce.Z,VListItemContent:xe.km,VListItemIcon:Ve.Z,VListItemTitle:xe.V9,VNavigationDrawer:H.Z,VToolbarTitle:q.qW});var Te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-6"},[a("v-toolbar",{attrs:{color:"gray",flat:""}},[a("v-toolbar-title",[t._v("タスク一覧")]),a("v-divider",{staticClass:"mx-3",attrs:{inset:"",vertical:""}}),a("v-icon",{on:{click:function(e){return t.getAll_task()}}},[t._v("mdi-refresh")]),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"検索したいワードを入力","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-divider",{staticClass:"mx-3",attrs:{inset:"",vertical:""}}),a("v-btn",{attrs:{color:"accent",dark:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil-plus")]),a("span",[t._v("新規作成")])],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.taskList,search:t.search,"footer-props":{"items-per-page-text":"表示行数/ページ:"}},scopedSlots:t._u([{key:"item.action",fn:function(e){var s=e.item;return[a("v-icon",{staticClass:"mr-2",on:{click:function(e){return t.openCreateAndUpdateDialog(s.task_id,s.text)}}},[t._v(" mdi-square-edit-outline ")]),a("v-icon",{on:{click:function(e){return t.openDeleteDialog(s.task_id)}}},[t._v(" mdi-trash-can-outline ")])]}}],null,!0)},[a("v-alert",{attrs:{slot:"no-results",value:!0,color:"secondary",dark:"",icon:"mdi-alert-circle-outline"},slot:"no-results"},[t._v(' "'+t._s(t.search)+'" の検索結果はありませんでした ')]),a("template",{slot:"no-data"},[t._v(" データがありません ")])],2),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-form",{attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-text-field",{attrs:{label:"タスク内容",counter:100,required:""},model:{value:t.selectedTask.text,callback:function(e){t.$set(t.selectedTask,"text",e)},expression:"selectedTask.text"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary","min-width":"90px",dark:"",disabled:!t.valid},on:{click:function(e){return t.save()}}},[t._v("保存")]),a("v-btn",{attrs:{color:"secondary","min-width":"90px",dark:""},on:{click:function(e){return t.close()}}},[t._v("キャンセル")])],1)],1)],1)],1)],1),a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{color:"primary",persistent:"","max-width":"280px"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("v-card",[a("v-container",[a("v-row",{staticClass:"text-center py-2",attrs:{justify:"center"}},[a("v-card-text",[t._v(" 削除してよろしいですか？ ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"primary","min-width":"90px",dark:""},on:{click:function(e){return t.delete_task()}}},[t._v("削除")]),a("v-btn",{attrs:{color:"secondary","min-width":"90px",dark:""},on:{click:function(e){return t.close()}}},[t._v("キャンセル")])],1)],1)],1)],1)],1)],1)],1)},De=[];a(1703);const $e=ee.get("user"),Ae=async()=>{const t=await $e.get().catch((t=>t.response));if(200!==t.status)throw console.warn("ユーザー情報の取得に失敗しました"),new Error(t);return console.info("ユーザー情報の取得に成功しました"),console.table(t.data),t.data.data},Ee=ee.get("task");var Fe={name:"ListTemplate",created(){this.getAll_task()},data(){return{taskList:[],userData:{},headers:[{text:"番号",align:"left",value:"task_id",sortable:!0},{text:"タスク",align:"left",value:"text",sortable:!0},{text:"操作",align:"left",value:"action",sortable:!1}],selectedTask:{ID:-1,text:""},defaultValue:{ID:-1,text:""},search:"",dialog:!1,deleteDialog:!1,valid:!1,textRules:[t=>!!t||"入力してください",t=>t.length<=100||"タスク内容は100文字までです"]}},methods:{async getAll_task(){const t=await Ee.getAll().catch((t=>t.response));200===t.status?(console.info("タスク取得に成功しました"),console.table(t.data),this.taskList=t.data.data):console.warn("タスク取得に失敗しました")},async create_task(t){const e={text:t},a=await Ee.create(e).catch((t=>t.response));if(200!==a.status)return console.warn("タスク作成に失敗しました"),void this.close();console.info("タスク作成に成功しました"),console.table(a.data),await this.getAll_task()},async update_task(t,e){const a={ID:t,text:e},s=await Ee.update(a.ID,a).catch((t=>t.response));if(200!==s.status)return console.warn("タスク更新に失敗しました"),void this.close();console.info("タスク更新に成功しました"),console.table(s.data),await this.getAll_task()},async delete_task(){const t=this.selectedTask.ID,e=await Ee.delete(t).catch((t=>t.response));if(200!==e.status)return console.warn("タスク削除に失敗しました"),void this.close();console.info("タスク削除に成功しました"),console.table(e.data),this.getAll_task(),this.close()},async getUserInfo(){const t=await Ae().catch((t=>t.response));this.userData=t},openCreateAndUpdateDialog(t,e){this.selectedTask.ID=t,this.selectedTask.text=e,this.dialog=!0},openDeleteDialog(t){this.selectedTask.ID=t,this.deleteDialog=!0},save(){-1===this.selectedTask.ID?this.create_task(this.selectedTask.text):this.update_task(this.selectedTask.ID,this.selectedTask.text),this.close()},close(){this.dialog=!1,this.deleteDialog=!1,setTimeout((()=>{this.selectedTask=Object.assign({},this.defaultValue)}),500)}},computed:{formTitle(){return-1===this.selectedTask.ID?"新しいタスク":"タスクの編集"}}},Ie=Fe,Se=a(7643),Be=a(4497),He=a(5972),Pe=a(6232),qe=a(4470),je=a(6656),Le=(0,l.Z)(Ie,Te,De,!1,null,"5224bbee",null),Re=Le.exports;A()(Le,{VAlert:Ot.Z,VBtn:F.Z,VCard:re.Z,VCardActions:ne.h7,VCardText:ne.ZB,VCardTitle:ne.EB,VContainer:ot.Z,VDataTable:Se.Z,VDialog:Be.Z,VDivider:bt.Z,VFlex:He.Z,VForm:Pe.Z,VIcon:I.Z,VLayout:qe.Z,VRow:rt.Z,VSpacer:P.Z,VTextField:Nt.Z,VToolbar:je.Z,VToolbarTitle:q.qW});var Me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-6"},[a("v-toolbar-title",{staticClass:"mb-6"},[t._v("アカウント情報")]),a("v-divider"),a("v-simple-table",{attrs:{border:"1",height:"500px"}},[a("tbody",{staticClass:"text-left"},[a("tr",[a("th",{staticClass:"py-6",attrs:{width:"25%"}},[t._v("メールアドレス(アカウント名)")]),a("td",{staticClass:"site-name"},[t._v(t._s(t.userData.email))])]),a("tr",[a("th",{staticClass:"py-6",attrs:{width:"25%"}},[t._v("パスワード")]),a("td",[t._v(" *************** "),a("div",{staticClass:"text-caption"},[t._v(" ※セキュリティ保護のため表示していません。 ")])])])])])],1)},Oe=[],Ne={data(){return{userData:{}}},created(){this.getUserInfo()},methods:{async getUserInfo(){const t=await Ae().catch((t=>t.response));this.userData=t}}},Ue=Ne,ze=a(3568),We=(0,l.Z)(Ue,Me,Oe,!1,null,"e8f415a6",null),Ge=We.exports;A()(We,{VDivider:bt.Z,VSimpleTable:ze.Z,VToolbarTitle:q.qW});var Ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("NotFoundContents",{staticClass:"mb-14"}),a("FrontHomeFooterTop"),a("FrontHomeFooterBottom",{staticClass:"px-14"})],1)},Ye=[],Je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"text-center pa-16"},[a("v-row",{staticClass:"justify-center"},[a("h1",{staticClass:"notfound__title"},[t._v("404")])]),a("v-row",{staticClass:"justify-center mb-5"},[a("h3",[t._v("404 Not Found")])]),a("v-row",{staticClass:"justify-center mb-5"},[t._v(" お探しのページはURLが間違っているか、削除された可能性があります。 ")]),a("v-row",{staticClass:"justify-center"},[a("v-btn",{staticClass:"primary white--text",attrs:{text:"",to:"/"}},[t._v(" トップへ戻る ")])],1)],1)},Qe=[],Xe={},ta=(0,l.Z)(Xe,Je,Qe,!1,null,"c86337a4",null),ea=ta.exports;A()(ta,{VBtn:F.Z,VContainer:ot.Z,VRow:rt.Z});var aa={components:{NotFoundContents:ea,FrontHomeFooterTop:vt,FrontHomeFooterBottom:Ct}},sa=aa,oa=(0,l.Z)(sa,Ke,Ye,!1,null,"257f17a0",null),ra=oa.exports;A()(oa,{VContainer:ot.Z}),s.ZP.use(v.Z);const na=!0,ia=new v.Z({mode:"hash",routes:[{name:"front",path:"/",redirect:"/home"},{name:"front-home",path:"/home",component:Y(Zt)},{name:"front-signup",path:"/signup",component:Y(le)},{name:"front-signin",path:"/signin",component:Y(he),beforeEnter(t,e,a){la(a)}},{name:"dashboard",path:"/dashboard",redirect:"/dashboard/task",meta:{requiresAuth:na}},{name:"dashboard-task",path:"/dashboard/task",meta:{requiresAuth:na},component:ye(Re)},{name:"dashboard-acount",path:"/dashboard/acount",meta:{requiresAuth:na},component:ye(Ge)},{name:"notfound",path:"/*",component:Y(ra)}],scrollBehavior(t,e,a){return a||{x:0,y:0}}});ia.beforeEach(((t,e,a)=>{t.matched.some((t=>t.meta.requiresAuth))&&ca(t,a),a()}));const la=t=>{if(!w.getters.auth)return console.warn("認証していないためダッシュボード画面を表示します"),void t();console.info("認証済みのためダッシュボード画面へリダイレクトします"),t("/dashboard")},ca=(t,e)=>{if(!w.getters.auth)return console.warn("認証していないためログイン画面へリダイレクトします"),void e({path:"/signin",query:{redirect:t.fullPath}});console.info("認証済みのためページを表示します"),e()};s.ZP.config.productionTip=!1,new s.ZP({router:ia,vuetify:p,store:w,render:t=>t(u)}).$mount("#app")},9611:function(){},5053:function(t,e,a){"use strict";t.exports=a.p+"static/img/logo-dark.6b9819bd.png"},527:function(t,e,a){"use strict";t.exports=a.p+"static/img/logo-light.c3c85d2b.png"}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,r){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],r=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var t={826:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1083)}));s=a.O(s)})();
//# sourceMappingURL=index.9ef13c06.js.map