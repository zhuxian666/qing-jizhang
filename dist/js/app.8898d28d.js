(function(t){function e(e){for(var n,r,o=e[0],c=e[1],u=e[2],f=0,h=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/qing-jizhang-website/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"02e1":function(t,e,a){"use strict";a("7c9a")},"0641":function(t,e,a){},"0ff0":function(t,e,a){"use strict";a("be4d")},1619:function(t,e,a){"use strict";a("c9c8")},"162d":function(t,e,a){"use strict";a("f4c8")},2740:function(t,e,a){"use strict";a("ec9e")},"27b3":function(t,e,a){},"3a6d":function(t,e,a){},4435:function(t,e,a){},"47b0":function(t,e,a){"use strict";a("806d")},"52ad":function(t,e,a){"use strict";a("4435")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7c9a":function(t,e,a){},"806d":function(t,e,a){},"866d":function(t,e,a){"use strict";a("27b3")},"9c0c":function(t,e,a){},add2:function(t,e,a){"use strict";a("f776")},bd32:function(t,e,a){"use strict";a("dc51")},be4d:function(t,e,a){},c9c8:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],r=(a("5c0b"),a("2877")),o={},c=Object(r["a"])(o,i,s,!1,null,null,null),u=c.exports,l=a("9483");Object(l["a"])("".concat("/qing-jizhang-website/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("Type",{attrs:{value:t.record.createAt,type:t.record.type},on:{"update:value":function(e){return t.$set(t.record,"createAt",e)},"update:type":function(e){return t.$set(t.record,"type",e)}}}),a("Notes",{attrs:{value:t.record.notes,cleal:t.clear},on:{"update:value":function(e){return t.$set(t.record,"notes",e)}}}),a("number-pad",{attrs:{type:t.record.type,value:t.record.amount},on:{submit:t.submit,"update:value":function(e){return t.$set(t.record,"amount",e)}}}),t.clear?a("Toast",[t._v("已保存")]):t._e()],1)},d=[],p=a("d4ec"),v=a("bee2"),g=a("262e"),m=a("2caf"),y=a("9ab4"),b=a("1b40"),O=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"numberPad"},[n("div",{staticClass:"output"},[n("Icon",{staticClass:"money",attrs:{name:"money1"}}),n("div",{staticClass:"outputNum"},[e._v(e._s(e.output))])],1),n("Tags",{attrs:{value:e.record.tag,type:e.record.type},on:{"update:value":function(t){return e.$set(e.record,"tag",t)}}}),n("div",{staticClass:"buttons"},[n("button",{on:{click:e.inputContent}},[e._v("1")]),n("button",{on:{click:e.inputContent}},[e._v("2")]),n("button",{on:{click:e.inputContent}},[e._v("3")]),n("button",{staticClass:"delete",on:{click:e.del}},[n("b",[e._v("删除")])]),n("button",{on:{click:e.inputContent}},[e._v("4")]),n("button",{on:{click:e.inputContent}},[e._v("5")]),n("button",{on:{click:e.inputContent}},[e._v("6")]),n("button",{staticClass:"clear",on:{click:e.clear}},[n("b",[e._v("清空")])]),n("button",{on:{click:e.inputContent}},[e._v("7")]),n("button",{on:{click:e.inputContent}},[e._v("8")]),n("button",{on:{click:e.inputContent}},[e._v("9")]),n("button",{staticClass:"ok",class:(t={},t[e.hash[e.type]]=e.hash[e.type]===e.hash[e.type],t.selected=e.selected,t),on:{click:e.ok}},[n("b",[e._v("确认")])]),n("button",{staticClass:"zero",on:{click:e.inputContent}},[e._v("0")]),n("button",{on:{click:e.inputContent}},[e._v(".")])])],1)},k=[],j=(a("c975"),a("fb6a"),a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},[t.edit?[t._l(Object.keys(t.iconName),(function(e){var n;return a("div",{key:e,staticClass:"iconWrapper",class:(n={selected:t.selectedTag.name===e},n[t.hash[t.type]]=t.hash[t.type]===t.hash[t.type],n),on:{click:function(a){return t.onSelected(e,t.iconName[e])}}},[a("Icon",{attrs:{name:t.iconName[e]}}),t._v(" "+t._s(e)+" ")],1)})),a("div",{staticClass:"iconWrapper editWrapper",on:{click:t.editTags}},[t._v(" 编辑 "),a("Icon",{attrs:{name:"bianji"}})],1)]:t._l(Object.keys(t.tagLists),(function(e){var n;return a("div",{key:e,staticClass:"iconWrapper noEdit",class:(n={selected:t.addSelected.val===t.tagLists[e]},n[t.hash[t.type]]=!0,n),on:{click:function(a){return t.onAddSelected(e,t.tagLists[e])}}},[a("Icon",{attrs:{name:t.tagLists[e]}})],1)}))],2)}),L=[],_=(a("b0c0"),a("b64b"),a("07ac"),{"服饰":"fushi","餐饮":"canyin","交通":"jiaotong","住房":"zhufang","购物":"gouwu","生活服务":"shenhuofuwu","学习":"xuexi","娱乐":"yule","运动":"yundong","旅游":"lvyou","酒店":"jiudian","亲子":"qinzi","宠物":"chongwu","医疗":"yiliao","其他人情":"qitarenqing","其他":"qita","红包":"huaban","转账":"zhuanzhang","工资":"gongzi","生意":"shengyi","退款":"tuikuan","奖金":"jiangjin","商家转账":"shangjiazhuangzhang","默认":"default"}),C=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.tagLists=_,t.hash={"-":"zhi","+":"shou"},t.selectedTag=t.record.tag,t.addSelected={},t}return Object(v["a"])(a,[{key:"iconNameZ",get:function(){return this.$store.state.tagListZ}},{key:"iconNameS",get:function(){return this.$store.state.tagListS}},{key:"iconName",get:function(){return"+"===this.type?this.iconNameS:this.iconNameZ}},{key:"onIconNameChange",value:function(){this.selectedTag.name=Object.keys(this.iconName)[0]}},{key:"onTagListsChange",value:function(){this.addSelected.val=Object.values(this.tagLists)[0]}},{key:"record",get:function(){return this.$store.state.record}},{key:"onSelected",value:function(t,e){this.selectedTag={name:t,val:e},this.$emit("update:value",this.selectedTag)}},{key:"onAddSelected",value:function(t,e){this.addSelected={name:t,val:e},this.$emit("update:value",this.addSelected)}},{key:"editTags",value:function(){this.$router.push("/editTags")}}]),a}(n["a"]);Object(y["a"])([Object(b["b"])({type:Object})],C.prototype,"value",void 0),Object(y["a"])([Object(b["b"])({default:"-",type:String})],C.prototype,"type",void 0),Object(y["a"])([Object(b["b"])({default:!0,type:Boolean})],C.prototype,"edit",void 0),Object(y["a"])([Object(b["c"])("iconName",{immediate:!0})],C.prototype,"onIconNameChange",null),Object(y["a"])([Object(b["c"])("tagLists",{immediate:!0})],C.prototype,"onTagListsChange",null),C=Object(y["a"])([b["a"]],C);var S=C,w=S,T=(a("f2f9"),Object(r["a"])(w,j,L,!1,null,"3badde95",null)),$=T.exports,x=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.output="0",t.hash={"-":"zhi","+":"shou"},t.selected=!1,t}return Object(v["a"])(a,[{key:"record",get:function(){return this.$store.state.record}},{key:"updated",value:function(){this.selected=0!==parseFloat(this.output)}},{key:"inputContent",value:function(t){var e=t.target,a=e.textContent;if(!(parseFloat(this.output)>1e5))if("0"!==this.output||-1==="0123456789".indexOf(a)){var n=this.output.indexOf(".");n>=0&&"."===a||n>=0&&this.output.length-n>2||(this.output+=a)}else this.output=a}},{key:"clear",value:function(){this.output="0"}},{key:"del",value:function(){this.output=this.output.slice(0,-1),0===this.output.length&&(this.output="0")}},{key:"ok",value:function(){0===parseFloat(this.output)?alert("金额不能小于0.01元"):(this.$emit("update:value",parseFloat(this.output)),this.$emit("submit"),this.clear())}}]),a}(n["a"]);Object(y["a"])([Object(b["b"])({default:"-",type:String})],x.prototype,"type",void 0),Object(y["a"])([Object(b["b"])({default:0,type:Number})],x.prototype,"value",void 0),x=Object(y["a"])([Object(b["a"])({components:{Tags:$}})],x);var Y=x,Z=Y,M=(a("0ff0"),Object(r["a"])(Z,O,k,!1,null,"6b532299",null)),A=M.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"types"},[a("div",{staticClass:"type"},[a("div",{staticClass:"zhi",class:"-"===t.type&&"selected",on:{click:function(e){return t.select("-")}}},[t._v("支出")]),a("div",{staticClass:"shou",class:"+"===t.type&&"selected",on:{click:function(e){return t.select("+")}}},[t._v("收入")])]),t.date?[a("label",[a("input",{staticClass:"date",attrs:{type:"date"},domProps:{value:t.getT(t.value)},on:{input:function(e){return t.onTimeChange(e.target.value)}}})])]:t._e()],2)},E=[],N=a("5a0c"),z=a.n(N),D=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"select",value:function(t){this.$emit("update:type",t)}},{key:"getT",value:function(t){return z()(t).format("YYYY-MM-DD")}},{key:"onTimeChange",value:function(t){this.$emit("update:value",t)}}]),a}(n["a"]);Object(y["a"])([Object(b["b"])({default:!0,type:Boolean})],D.prototype,"date",void 0),Object(y["a"])([Object(b["b"])({default:"",type:String})],D.prototype,"value",void 0),Object(y["a"])([Object(b["b"])({default:"-",type:String})],D.prototype,"type",void 0),D=Object(y["a"])([b["a"]],D);var W=D,q=W,P=(a("bd32"),Object(r["a"])(q,I,E,!1,null,"d0cc5194",null)),B=P.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notes"},[a("label",{staticClass:"formItem"},[a("Icon",{staticClass:"name",attrs:{name:"beizhu"}}),a("input",{attrs:{type:"text",maxlength:"30",placeholder:"在这里写点备注吧!"},domProps:{value:t.msg},on:{input:function(e){return t.onValueChange(e.target.value)}}}),a("span",{staticClass:"num"},[t._v(t._s(t.msg.length+"/30"))])],1)])},V=[],R=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"onValueChange",value:function(t){this.$emit("update:value",t)}},{key:"msg",get:function(){return this.value}}]),a}(n["a"]);Object(y["a"])([Object(b["b"])({default:"",type:String})],R.prototype,"value",void 0),R=Object(y["a"])([b["a"]],R);var F=R,U=F,X=(a("1619"),Object(r["a"])(U,J,V,!1,null,"76c376e2",null)),G=X.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast"},[a("Icon",{attrs:{name:"yes"}}),t._t("default")],2)},K=[],Q=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);Q=Object(y["a"])([b["a"]],Q);var tt=Q,et=tt,at=(a("866d"),Object(r["a"])(et,H,K,!1,null,"8b2df7e4",null)),nt=at.exports,it=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.clear=!1,t}return Object(v["a"])(a,[{key:"record",get:function(){return this.$store.state.record}},{key:"created",value:function(){this.$store.commit("fetchRecordList"),this.$store.commit("fetchTagListS"),this.$store.commit("fetchTagListZ")}},{key:"submit",value:function(){var t=this;this.$store.commit("createdRecordList",this.record),this.record.notes="",this.clear=!0,setTimeout((function(){t.clear=!1}),1e3)}}]),a}(n["a"]);it=Object(y["a"])([Object(b["a"])({components:{Toast:nt,Notes:G,Type:B,NumberPad:A}})],it);var st=it,rt=st,ot=Object(r["a"])(rt,h,d,!1,null,"0242380b",null),ct=ot.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"detail"},[a("div",{staticClass:"bar"},[a("span",[a("b",[t._v("明细")])])]),a("div",{staticClass:"select"},[a("div",{staticClass:"typeButton"},[a("div",{staticClass:"zhi",on:{click:function(e){t.type="-"}}},[t._v("支出")]),a("div",{staticClass:"line"}),a("div",{staticClass:"shou",on:{click:function(e){t.type="+"}}},[t._v("收入")])]),a("ul",{staticClass:"types"},t._l(t.tagList,(function(e){return a("li",{key:e,staticClass:"type",class:{selected:t.selectedItem===e},on:{click:function(a){return t.showCard(e)}}},[t._v(t._s(e)+" ")])})),0)]),a("div",{staticClass:"cardList"},[t.timeList.length?[a("ul",{staticClass:"listItem"},t._l(t.timeList,(function(e,n){return a("li",{key:n,staticClass:"item"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"liBar"},[a("h3",[t._v(t._s(t.beautify(e.title)))]),a("span",{staticClass:"total"},[t._v("￥ "+t._s(t.type)+t._s(e.total))])]),t._l(e.items,(function(e){return a("v-touch",{key:e.id,staticClass:"touch",on:{panleft:function(a){return t.swipeleft(e)},panright:function(a){return t.swiperight(e)}}},[a("div",{ref:"touch-"+e.id,refInFor:!0,staticClass:"touchContent"},[a("div",{staticClass:"tagName"},[a("Icon",{attrs:{name:e.tag.val}}),a("span",[t._v(t._s(e.tag.name))])],1),a("div",{staticClass:"notes"},[t._v(t._s(e.notes))]),a("div",{staticClass:"amount"},[a("span",[t._v(t._s(e.type))]),a("span",[t._v(t._s(e.amount))])]),a("div",{staticClass:"remove",on:{click:function(a){return t.removeItem(e.id)}}},[a("div",[t._v("删除")])])])])}))],2)])})),0)]:[a("div",{staticClass:"nothing"},[a("Icon",{staticClass:"none",attrs:{name:"none"}}),t._v(" 没有任何记录 "),a("div",{staticClass:"jizhang",on:{click:function(e){return t.$router.push("/money")}}},[a("b",[t._v("记一笔")])])],1)]],2)])])},lt=[];a("4de4"),a("4160"),a("13d5"),a("159b");function ft(t){return JSON.parse(JSON.stringify(t))}var ht=ft,dt=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.type="-",t.selectedItem=t.tagList[0],t}return Object(v["a"])(a,[{key:"recordList",get:function(){return this.$store.state.recordList}},{key:"tagListZ",get:function(){return this.$store.state.tagListZ}},{key:"tagListS",get:function(){return this.$store.state.tagListS}},{key:"tagList",get:function(){if("+"===this.type){var t=ht(this.tagListS),e=Object.keys(t);return e.unshift("全部"),e}var a=ht(this.tagListZ),n=Object.keys(a);return n.unshift("全部"),n}},{key:"swipeleft",value:function(t){this.$refs["touch-"+t.id][0].style.transform="translateX(-20vw)"}},{key:"swiperight",value:function(t){this.$refs["touch-"+t.id][0].style.transform="none"}},{key:"removeItem",value:function(t){this.$store.commit("removeRecord",t)}},{key:"beautify",value:function(t){var e=z()(t),a=z()();return e.isSame(a,"day")?"今天":e.isSame(a.subtract(1,"day"),"day")?"昨天":e.isSame(a.subtract(2,"day"),"day")?"前天":e.isSame(a,"year")?e.format("M月D日"):e.format("YYYY年M月D日")}},{key:"created",value:function(){this.$store.commit("fetchRecordList"),this.$store.commit("fetchTagListS"),this.$store.commit("fetchTagListZ")}},{key:"add",value:function(t){this.type=t}},{key:"showCard",value:function(t){this.selectedItem=t}},{key:"group",get:function(){var t=this;return this.selectedItem===this.tagList[0]?this.recordList.filter((function(e){return e.type===t.type})):this.recordList.filter((function(e){return e.tag.name===t.selectedItem}))}},{key:"onTypeChange",value:function(){this.selectedItem=this.tagList[0]}},{key:"timeList",get:function(){var t=ht(this.group);if(t.sort((function(t,e){return z()(e.createAt).valueOf()-z()(t.createAt).valueOf()})),0===t.length)return[];for(var e=[{title:z()(t[0].createAt).format("YYYY-M-DD"),items:[t[0]]}],a=1;a<t.length;a++){var n=t[a],i=e[e.length-1];z()(i.title).isSame(z()(n.createAt),"day")?i.items.push(n):e.push({title:z()(n.createAt).format("YYYY-M-DD"),items:[n]})}return e.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),e.forEach((function(t){t.items.reverse()})),e}}]),a}(n["a"]);Object(y["a"])([Object(b["c"])("type")],dt.prototype,"onTypeChange",null),dt=Object(y["a"])([b["a"]],dt);var pt=dt,vt=pt,gt=(a("02e1"),Object(r["a"])(vt,ut,lt,!1,null,"184051f1",null)),mt=gt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"editTags"},[a("Type",{attrs:{date:!1,type:t.record.type},on:{"update:type":function(e){return t.$set(t.record,"type",e)}}}),a("div",{staticClass:"createWrapper",on:{click:t.createTag}},[t._v("追加新的标签 "),a("Icon",{staticClass:"create",attrs:{name:"bianji"}})],1),a("ul",t._l(Object.keys(t.tagList),(function(e){return a("li",{key:e},[a("div",{staticClass:"tag"},[a("Icon",{attrs:{name:t.tagList[e]}}),a("span",[t._v(t._s(e))])],1),a("div",{staticClass:"del",on:{click:function(a){return t.removeTag(e)}}},[a("Icon",{attrs:{name:"shanchu"}})],1)])})),0)],1)])},bt=[],Ot=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return Object(v["a"])(a,[{key:"record",get:function(){return this.$store.state.record}},{key:"tagListZ",get:function(){return this.$store.state.tagListZ}},{key:"tagListS",get:function(){return this.$store.state.tagListS}},{key:"tagList",get:function(){return"+"===this.record.type?this.tagListS:this.tagListZ}},{key:"created",value:function(){this.$store.commit("fetchTagListS"),this.$store.commit("fetchTagListZ")}},{key:"removeTag",value:function(t){"+"===this.record.type?(this.$store.commit("removeTagListS",t),this.$store.commit("saveTagListS")):(this.$store.commit("removeTagListZ",t),this.$store.commit("saveTagListZ")),this.$forceUpdate()}},{key:"createTag",value:function(){this.$router.push("/addTag")}}]),a}(n["a"]);Ot=Object(y["a"])([Object(b["a"])({components:{Type:B}})],Ot);var kt=Ot,jt=kt,Lt=(a("52ad"),Object(r["a"])(jt,yt,bt,!1,null,"08f56d09",null)),_t=Lt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"bar"},[a("b",[t._v("统计")])]),a("div",{staticClass:"statistics"},[a("div",{staticClass:"content"},[a("div",{staticClass:"main"},[a("div",{staticClass:"divWrapper1"},[a("div",{staticClass:"divWrapper2"},[a("span",{staticClass:"zhiText"},[a("b",[t._v("本月共支出")])]),a("span",{staticClass:"zhi"},[a("b",[t._v("￥"+t._s(t.zhiTotal))])])]),a("div",{staticClass:"divWrapper2"},[a("span",{staticClass:"shouText"},[a("b",[t._v("本月共收入")])]),a("span",{staticClass:"shou"},[a("b",[t._v("￥"+t._s(t.shouTotal))])])])])]),a("div",{ref:"chartWrapper",staticClass:"chartWrapper"},[a("div",{ref:"wrapper2",staticClass:"wrapper2"})]),a("div",{ref:"wrapper1",staticClass:"wrapper1"}),0!==this.tagMountZ.length?a("div",{ref:"rankWrapper",staticClass:"rankWrapper"}):t._e(),0!==this.tagMountS.length?a("div",{ref:"rankWrapper1",staticClass:"rankWrapper1"}):t._e()])])])},St=[],wt=(a("d81d"),a("2909")),Tt=a("313e"),$t=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.getT=z()().format("YYYY-M"),t}return Object(v["a"])(a,[{key:"recordList",get:function(){return this.$store.state.recordList}},{key:"zhiList",get:function(){return this.recordList.filter((function(t){return"-"===t.type}))}},{key:"shouList",get:function(){return this.recordList.filter((function(t){return"+"===t.type}))}},{key:"tagListZ",get:function(){return this.$store.state.tagListZ}},{key:"tagListS",get:function(){return this.$store.state.tagListS}},{key:"tagMountZ",get:function(){var t=ht(this.zhiList),e=Object.keys(ht(this.tagListZ)),a=[];e.forEach((function(e){var n=t.filter((function(t){return t.tag.name===e}));a.push({title:e,items:Object(wt["a"])(n)})})),a.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)}));var n=[];return a.forEach((function(t){if(t.total)return n.push({key:t.title,value:t.total})})),n.sort((function(t,e){return t.value-e.value})),n}},{key:"tagMountS",get:function(){var t=ht(this.shouList),e=Object.keys(ht(this.tagListS)),a=[];e.forEach((function(e){var n=t.filter((function(t){return t.tag.name===e}));a.push({title:e,items:Object(wt["a"])(n)})})),a.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)}));var n=[];return a.forEach((function(t){if(t.total)return n.push({key:t.title,value:t.total})})),n.sort((function(t,e){return t.value-e.value})),n}},{key:"zhiTotal",get:function(){var t=this,e=this.timeListMZ.filter((function(e){return e.title===t.getT}));return e.reduce((function(t,e){return e.total?t+e.total:0}),0)}},{key:"shouTotal",get:function(){var t=this,e=this.timeListMS.filter((function(e){return e.title===t.getT}));return e.reduce((function(t,e){return e.total?t+e.total:0}),0)}},{key:"mounted",value:function(){var t=this.$refs.chartWrapper;t.scrollLeft=t.scrollWidth,this.chart=Tt["a"](this.$refs.wrapper1),this.chart.setOption(this.chartOptions1,!0),this.chart2=Tt["a"](this.$refs.wrapper2),this.chart2.setOption(this.chartOptions2,!0),0!==this.tagMountZ.length&&(this.chart3=Tt["a"](this.$refs.rankWrapper),this.chart3.setOption(this.chartOptions3,!0)),0!==this.tagMountS.length&&(this.chart4=Tt["a"](this.$refs.rankWrapper1),this.chart4.setOption(this.chartOptions4,!0))}},{key:"onOptionsChange",value:function(t){this.chart.setOption(t,!0)}},{key:"timeListZ",get:function(){var t=ht(this.zhiList);if(t.sort((function(t,e){return z()(e.createAt).valueOf()-z()(t.createAt).valueOf()})),0===t.length)return[];for(var e=[{title:z()(t[0].createAt).format("YYYY-M-DD"),items:[t[0]]}],a=1;a<t.length;a++){var n=t[a],i=e[e.length-1];z()(i.title).isSame(z()(n.createAt),"day")?i.items.push(n):e.push({title:z()(n.createAt).format("YYYY-M-DD"),items:[n]})}return e.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),e}},{key:"timeListS",get:function(){var t=ht(this.shouList);if(t.sort((function(t,e){return z()(e.createAt).valueOf()-z()(t.createAt).valueOf()})),0===t.length)return[];for(var e=[{title:z()(t[0].createAt).format("YYYY-M-DD"),items:[t[0]]}],a=1;a<t.length;a++){var n=t[a],i=e[e.length-1];z()(i.title).isSame(z()(n.createAt),"day")?i.items.push(n):e.push({title:z()(n.createAt).format("YYYY-M-DD"),items:[n]})}return e.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),e}},{key:"timeListMZ",get:function(){var t=ht(this.zhiList);if(t.sort((function(t,e){return z()(e.createAt).valueOf()-z()(t.createAt).valueOf()})),0===t.length)return[];for(var e=[{title:z()(t[0].createAt).format("YYYY-M"),items:[t[0]]}],a=1;a<t.length;a++){var n=t[a],i=e[e.length-1];z()(i.title).isSame(z()(n.createAt),"month")?i.items.push(n):e.push({title:z()(n.createAt).format("YYYY-M"),items:[n]})}return e.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),e}},{key:"timeListMS",get:function(){var t=ht(this.shouList);if(t.sort((function(t,e){return z()(e.createAt).valueOf()-z()(t.createAt).valueOf()})),0===t.length)return[];for(var e=[{title:z()(t[0].createAt).format("YYYY-M"),items:[t[0]]}],a=1;a<t.length;a++){var n=t[a],i=e[e.length-1];z()(i.title).isSame(z()(n.createAt),"month")?i.items.push(n):e.push({title:z()(n.createAt).format("YYYY-M"),items:[n]})}return e.forEach((function(t){t.total=t.items.reduce((function(t,e){return t+e.amount}),0)})),e}},{key:"keyValueMZ",get:function(){for(var t=this,e=new Date,a=[],n=function(n){var i=z()(e).subtract(n,"month").format("YYYY-M"),s=t.timeListMZ.filter((function(t){return t.title===i}));a.push({key:i,value:s.reduce((function(t,e){return e.total?t+e.total:0}),0)})},i=0;i<=5;i++)n(i);return a.sort((function(t,e){return z()(t.key).valueOf()-z()(e.key).valueOf()})),a}},{key:"keyValueMS",get:function(){for(var t=this,e=new Date,a=[],n=function(n){var i=z()(e).subtract(n,"month").format("YYYY-M"),s=t.timeListMS.filter((function(t){return t.title===i}));a.push({key:i,value:s.reduce((function(t,e){return e.total?t+e.total:0}),0)})},i=0;i<=5;i++)n(i);return a.sort((function(t,e){return z()(t.key).valueOf()-z()(e.key).valueOf()})),a}},{key:"keyValueListZ",get:function(){for(var t=this,e=new Date,a=[],n=function(n){var i=z()(e).subtract(n,"day").format("YYYY-M-DD"),s=t.timeListZ.filter((function(t){return t.title===i}));a.push({key:i,value:s.reduce((function(t,e){return e.total?t+e.total:0}),0)})},i=0;i<=29;i++)n(i);return a.sort((function(t,e){return z()(t.key).valueOf()-z()(e.key).valueOf()})),a}},{key:"keyValueListS",get:function(){for(var t=this,e=new Date,a=[],n=function(n){var i=z()(e).subtract(n,"day").format("YYYY-M-DD"),s=t.timeListS.filter((function(t){return t.title===i}));a.push({key:i,value:s.reduce((function(t,e){return e.total?t+e.total:0}),0)})},i=0;i<=29;i++)n(i);return a.sort((function(t,e){return z()(t.key).valueOf()-z()(e.key).valueOf()})),a}},{key:"chartOptions1",get:function(){var t=this.keyValueMZ.map((function(t){return t.key.substring(5)+"月"})),e=this.keyValueMZ.map((function(t){return t.value})),a=this.keyValueMS.map((function(t){return t.value}));return{title:{text:"月度对比"},tooltip:{trigger:"axis"},legend:{data:["支出","收入"]},toolbox:{show:!0,feature:{magicType:{show:!0,type:["line","bar"]}}},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},data:Object(wt["a"])(t)}],yAxis:[{show:!1}],series:[{name:"支出",type:"bar",color:"#3EB575",data:Object(wt["a"])(e)},{name:"收入",type:"bar",color:"#E9B646",data:Object(wt["a"])(a)}]}}},{key:"chartOptions2",get:function(){var t=this.keyValueListZ.map((function(t){return z()(t.key).format("D")})),e=this.keyValueListZ.map((function(t){return t.value})),a=this.keyValueListS.map((function(t){return t.value}));return{grid:{left:0,right:10},title:{text:"每日对比",left:10},tooltip:{trigger:"axis"},legend:{data:["支出","收入"]},toolbox:{show:!0,right:10,feature:{magicType:{show:!0,type:["line","bar"]}}},calculable:!0,xAxis:[{type:"category",axisTick:{show:!1},axisLabel:{interval:0},data:Object(wt["a"])(t)}],yAxis:[{show:!1}],dataZoom:[{show:!1,realtime:!0,start:100,end:55},{type:"inside",realtime:!0,start:0,end:50}],series:[{name:"支出",type:"bar",color:"#3EB575",data:Object(wt["a"])(e)},{name:"收入",type:"bar",color:"#E9B646",data:Object(wt["a"])(a)}]}}},{key:"chartOptions3",get:function(){var t=this.tagMountZ.map((function(t){return t.key})),e=this.tagMountZ.map((function(t){return t.value}));return{title:{text:"支出排行榜"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{show:!1},yAxis:{type:"category",axisTick:{show:!1},data:Object(wt["a"])(t)},series:[{name:"支出",type:"bar",barMaxWidth:40,color:"#3EB575",data:Object(wt["a"])(e)}]}}},{key:"chartOptions4",get:function(){var t=this.tagMountS.map((function(t){return t.key})),e=this.tagMountS.map((function(t){return t.value}));return{title:{text:"收入排行榜"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{show:!1},yAxis:{type:"category",axisTick:{show:!1},data:Object(wt["a"])(t)},series:[{name:"收入",type:"bar",barMaxWidth:40,color:"#E9B646",data:Object(wt["a"])(e)}]}}}]),a}(n["a"]);Object(y["a"])([Object(b["c"])("options")],$t.prototype,"onOptionsChange",null),$t=Object(y["a"])([b["a"]],$t);var xt=$t,Yt=xt,Zt=(a("162d"),Object(r["a"])(Yt,Ct,St,!1,null,"5a48b18a",null)),Mt=Zt.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notFount"},[t._m(0),t._v(" 你访问的页面不存在请 "),a("router-link",{staticClass:"goaBack",attrs:{to:"/"}},[t._v("返回首页 ")])],1)},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{staticClass:"four"},[t._v("4")]),a("span",{staticClass:"zero"},[t._v("0")]),a("span",{staticClass:"four1"},[t._v("4")])])}],Et=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);Et=Object(y["a"])([b["a"]],Et);var Nt=Et,zt=Nt,Dt=(a("fda6"),Object(r["a"])(zt,At,It,!1,null,"e614e092",null)),Wt=Dt.exports,qt=function(){var t,e,a=this,n=a.$createElement,i=a._self._c||n;return i("Layout",[i("div",{staticClass:"addTag"},[i("div",{staticClass:"title",class:(t={},t[a.hash[a.record.type]]=!0,t)},[i("span",[i("b",[a._v(a._s(a.title+"新标签"))])])]),i("div",[i("label",{staticClass:"TagName"},[i("span",{staticClass:"name"},[a._v("标签名")]),i("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"value"}],staticClass:"inputName",attrs:{type:"text",placeholder:"标签名不可重复",maxlength:"4"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}}),i("span",{staticClass:"num"},[a._v(a._s(a.value.length+"/4"))])])]),i("Tags",{attrs:{type:a.record.type,edit:!1,value:a.tag},on:{"update:type":function(t){return a.$set(a.record,"type",t)},"update:value":function(t){a.tag=t}}}),i("div",{staticClass:"ok",class:(e={},e[a.hash[a.record.type]]=!0,e),on:{click:a.submit}},[i("b",[a._v("确认")])])],1)])},Pt=[],Bt=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.tag=t.record.tag,t.value="",t.title="",t.hash={"-":"zhi","+":"shou"},t}return Object(v["a"])(a,[{key:"record",get:function(){return this.$store.state.record}},{key:"tagListZ",get:function(){return this.$store.state.tagListZ}},{key:"tagListS",get:function(){return this.$store.state.tagListS}},{key:"created",value:function(){"+"===this.record.type?this.title="收入":this.title="支出"}},{key:"submit",value:function(){if("全部"!==this.value)if(0!==this.value.length){if("+"===this.record.type){if(Object.keys(this.tagListS).indexOf(this.value)>=0)return void window.alert("标签名重复了");console.log({name:this.value,val:this.tag.val}),this.$store.commit("createdTagListS",{name:this.value,val:this.tag.val}),this.$store.commit("saveTagListS"),window.alert("添加成功")}else{if(Object.keys(this.tagListZ).indexOf(this.value)>=0)return void window.alert("标签名重复了");this.$store.commit("createdTagListZ",{name:this.value,val:this.tag.val}),this.$store.commit("saveTagListZ"),window.alert("添加成功")}this.value=""}else window.alert("输入标签啊");else window.alert("输入的标签名不可用")}}]),a}(n["a"]);Bt=Object(y["a"])([Object(b["a"])({components:{Tags:$}})],Bt);var Jt=Bt,Vt=Jt,Rt=(a("d306"),Object(r["a"])(Vt,qt,Pt,!1,null,"621b92fb",null)),Ft=Rt.exports;n["a"].use(f["a"]);var Ut=[{path:"/",redirect:"/money"},{path:"/money",component:ct},{path:"/detail",component:mt},{path:"/editTags",component:_t},{path:"/addTag",component:Ft},{path:"/statistics",component:Mt},{path:"/404",component:Wt},{path:"*",redirect:"/404"}],Xt=new f["a"]({routes:Ut}),Gt=Xt,Ht=(a("a434"),a("d3b7"),a("25f0"),a("2f62"));n["a"].use(Ht["a"]);var Kt=new Ht["a"].Store({state:{recordList:[],tagListZ:{},tagListS:{},record:{type:"-",notes:"",amount:0,tag:{name:"服饰",val:"fushi"},createAt:(new Date).toISOString()}},getters:{},mutations:{saveRecordList:function(t){window.localStorage.setItem("recordList",JSON.stringify(t.recordList))},fetchRecordList:function(t){t.recordList=JSON.parse(window.localStorage.getItem("recordList")||"[]")},createdRecordList:function(t,e){var a=parseInt(window.localStorage.getItem("_idMax")||"0")||0;function n(){return a++,window.localStorage.setItem("_idMax",a.toString()),a}t.record.id=n();var i=JSON.parse(JSON.stringify(e));t.recordList.push(i),Kt.commit("saveRecordList")},removeRecord:function(t,e){for(var a,n=0;n<t.recordList.length;n++)t.recordList[n].id===e&&(a=n);void 0!==a&&(t.recordList.splice(a,1),Kt.commit("saveRecordList"))},saveTagListZ:function(t){window.localStorage.setItem("tagListZ",JSON.stringify(t.tagListZ))},createdTagListZ:function(t,e){n["a"].set(t.tagListZ,e.name,e.val)},removeTagListZ:function(t,e){var a=window.confirm("请确认是否删除这个标签：".concat(e));a&&n["a"].delete(t.tagListZ,e)},fetchTagListZ:function(t){t.tagListZ=JSON.parse(window.localStorage.getItem("tagListZ")||'{"服饰": "fushi", "餐饮": "canyin", "交通": "jiaotong", "住房": "zhufang", "购物": "gouwu", "生活服务": "shenhuofuwu","学习": "xuexi", "娱乐": "yule", "运动": "yundong", "旅游": "lvyou", "酒店": "jiudian", "亲子": "qinzi", "宠物": "chongwu","医疗": "yiliao", "其他人情": "qitarenqing", "其他": "qita", "红包": "huaban", "转账": "zhuanzhang"}')},saveTagListS:function(t){window.localStorage.setItem("tagListS",JSON.stringify(t.tagListS))},createdTagListS:function(t,e){n["a"].set(t.tagListS,e.name,e.val)},removeTagListS:function(t,e){var a=window.confirm("请确认是否删除这个标签：".concat(e));a&&n["a"].delete(t.tagListS,e)},fetchTagListS:function(t){t.tagListS=JSON.parse(window.localStorage.getItem("tagListS")||'{ "工资": "gongzi", "其他人情": "qitarenqingshouru", "生意": "shengyi", "退款": "tuikuan", "奖金": "jiangjin","其他": "qitashouru", "红包": "huabanshouru", "转账": "zhuanzhangshouru", "商家转账": "shangjiazhuangzhang"}')}},actions:{},modules:{}}),Qt=Kt,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layoutRapper"},[a("div",{staticClass:"content"},[t._t("default")],2),a("Nav")],1)},ee=[],ae=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);ae=Object(y["a"])([b["a"]],ae);var ne=ae,ie=ne,se=(a("2740"),Object(r["a"])(ie,te,ee,!1,null,"0901d5f0",null)),re=se.exports,oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("router-link",{staticClass:"item",attrs:{to:"/money","active-class":"selected"}},[a("Icon",{attrs:{name:"money"}}),a("span",[t._v("记账")])],1),a("router-link",{staticClass:"item",attrs:{to:"/detail","active-class":"selected"}},[a("Icon",{attrs:{name:"detail"}}),a("span",[t._v("明细")])],1),a("router-link",{staticClass:"item",attrs:{to:"/statistics","active-class":"selected"}},[a("Icon",{attrs:{name:"statistics"}}),a("span",[t._v("统计")])],1)],1)},ce=[],ue=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);ue=Object(y["a"])([b["a"]],ue);var le=ue,fe=le,he=(a("47b0"),Object(r["a"])(fe,oe,ce,!1,null,"6dfeabb6",null)),de=he.exports,pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-"+t.name}})])},ve=[],ge=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return a}(n["a"]);Object(y["a"])([Object(b["b"])({type:String})],ge.prototype,"name",void 0),ge=Object(y["a"])([b["a"]],ge);var me=ge,ye=me,be=(a("add2"),Object(r["a"])(ye,pe,ve,!1,null,"f1e7d336",null)),Oe=be.exports,ke=a("ca95"),je=a.n(ke);n["a"].use(je.a,{name:"v-touch"}),n["a"].component("Nav",de),n["a"].component("Layout",re),n["a"].component("Icon",Oe),n["a"].config.productionTip=!1,new n["a"]({router:Gt,store:Qt,render:function(t){return t(u)}}).$mount("#app"),document.documentElement.clientWidth>500&&window.alert("请使用手机打开本页面，以保证浏览效果")},d306:function(t,e,a){"use strict";a("e85e")},dc51:function(t,e,a){},e85e:function(t,e,a){},ec9e:function(t,e,a){},f2f9:function(t,e,a){"use strict";a("0641")},f4c8:function(t,e,a){},f776:function(t,e,a){},fda6:function(t,e,a){"use strict";a("3a6d")}});
//# sourceMappingURL=app.8898d28d.js.map