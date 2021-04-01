(function(t){function e(e){for(var s,o,u=e[0],l=e[1],i=e[2],f=0,p=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],s=!0,u=1;u<r.length;u++){var l=r[u];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=s,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(r,s,function(e){return t[e]}.bind(null,s));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lh-search-by-country/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var i=0;i<u.length;i++)e(u[i]);var c=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t.countries.length?r("b-container",[r("h1",{staticClass:"display-5 text-capitalize mb-4"},[t._v("country information search tool "),r("b-icon",{staticClass:"ml-2",attrs:{variant:"success",icon:"flag","font-scale":"1"}})],1),r("search-box",{attrs:{countries:t.countries}})],1):r("div",{staticClass:"d-flex justify-content-center mb-3"},[r("b-spinner",{attrs:{variant:"primary",label:"Loading..."}})],1)],1)},a=[],o=r("1da1"),u=(r("96cf"),r("bc3a")),l=r.n(u),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticClass:"mb-5 d-flex flex-column"},[r("b-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[r("b-form-input",{attrs:{placeholder:"Start typing country name..."},on:{input:t.handleInput,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onArrowDown(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onArrowUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)}]},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}})],1),r("b-col",{staticClass:"mx-auto",attrs:{cols:"10"}},[r("b-list-group",{directives:[{name:"show",rawName:"v-show",value:t.flags.resultsList&&""!==t.searchInput,expression:"flags.resultsList && searchInput !== ''"}]},t._l(t.searchFilteredResults,(function(e,s){return r("b-list-group-item",{key:e.name,staticClass:"d-flex justify-content-start",attrs:{variant:s===t.arrowCounter?"primary":"",button:""},on:{click:function(r){return t.setResult(e.name)}}},[r("b-card-img",{staticClass:"mr-5",attrs:{left:"",width:"24",src:e.flag,alt:"Country flag"}}),t._v(" "+t._s(e.name))],1)})),1)],1)],1),t.flags.resultSummary?r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{staticClass:"d-flex justify-content-center"},[r("b-card",{staticClass:"overflow-hidden",attrs:{"no-body":"","border-variant":"info"}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{cols:"12",md:"4"}},[r("b-card-img",{staticClass:"rounded-0",attrs:{src:t.tableResults.flag,alt:"Country flag"}})],1),r("b-col",{attrs:{cols:"12",md:"8"}},[r("b-card-body",{attrs:{"title-tag":"h2",title:t.tableResults.name}},[r("table",{staticClass:"table"},[r("thead",[r("tr",[r("th",{staticClass:"table-primary",attrs:{scope:"col"}},[t._v("Code")]),r("th",{staticClass:"table-success",attrs:{scope:"col"}},[t._v("Capital")]),r("th",{staticClass:"table-primary",attrs:{scope:"col"}},[t._v("Region")]),r("th",{staticClass:"table-success",attrs:{scope:"col"}},[t._v("Area")])])]),r("tbody",[r("tr",[r("td",[t._v(t._s(t.tableResults.alpha3Code))]),r("td",[t._v(t._s(t.tableResults.capital))]),r("td",[t._v(t._s(t.tableResults.region))]),r("td",[t._v(t._s(t.tableResults.subregion))])])])])])],1)],1)],1)],1)],1):t._e()],1)},c=[],f=(r("4de4"),r("2ca0"),r("b0c0"),r("5377"),r("7db0"),{name:"SearchBox",props:{countries:{type:Array,required:!0}},data:function(){return{searchInput:"",searchFilteredResults:[],tableResults:[],flags:{resultsList:!1,resultSummary:!1},arrowCounter:-1}},methods:{filterInputByName:function(){var t=this;this.searchFilteredResults=this.countries.filter((function(e){return e.name.toLowerCase().startsWith(t.searchInput.toLowerCase())}))},handleInput:function(){this.filterInputByName(),this.flags.resultSummary=!1,this.flags.resultsList=!0},setResult:function(t){this.searchInput=t,this.flags.resultsList=!1,this.flags.resultSummary=!0,this.getSelectedCountry(t)},onArrowDown:function(){this.arrowCounter<this.searchFilteredResults.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.searchInput=this.searchFilteredResults[this.arrowCounter].name,this.arrowarrowCounter=-1,this.flags.resultsList=!1,this.flags.resultSummary=!0,this.getSelectedCountry(this.searchInput)},getSelectedCountry:function(t){this.tableResults=this.searchFilteredResults.find((function(e){if(e.name===t)return e}))}}}),p=f,d=r("2877"),h=Object(d["a"])(p,i,c,!1,null,null,null),b=h.exports,y={name:"App",components:{SearchBox:b},data:function(){return{countries:[]}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;subregion;");case 3:if(r=e.sent,200!==r.status){e.next=8;break}return e.abrupt("return",t.countries=r.data);case 8:return e.abrupt("return",null);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},m=y,g=(r("034f"),Object(d["a"])(m,n,a,!1,null,null,null)),v=g.exports,w=r("5f5b"),C=r("b1e0");r("f9e3"),r("2dd8");s["default"].use(w["a"]),s["default"].use(C["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.f323a226.js.map