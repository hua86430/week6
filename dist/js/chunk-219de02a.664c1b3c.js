(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-219de02a"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,o,u,s){var f=n+e.length,v=o.length,d=l;return void 0!==u&&(u=r(u),d=i),c.call(s,d,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=u[c.slice(1,-1)];break;default:var l=+c;if(0===l)return r;if(l>v){var s=a(l/10);return 0===s?r:s<=v?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):r}i=o[l-1]}return void 0===i?"":i}))}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),i=n("a691"),l=n("1d80"),o=n("8aa5"),u=n("0cb2"),s=n("14c3"),f=Math.max,v=Math.min,d=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var p=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,b=p?"$":"$0";return[function(n,r){var a=l(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!p&&g||"string"===typeof r&&-1===r.indexOf(b)){var l=n(t,e,this,r);if(l.done)return l.value}var x=a(e),h=String(this),E="function"===typeof r;E||(r=String(r));var O=x.global;if(O){var j=x.unicode;x.lastIndex=0}var R=[];while(1){var S=s(x,h);if(null===S)break;if(R.push(S),!O)break;var m=String(S[0]);""===m&&(x.lastIndex=o(h,c(x.lastIndex),j))}for(var y="",I=0,$=0;$<R.length;$++){S=R[$];for(var _=String(S[0]),k=f(v(i(S.index),h.length),0),T=[],A=1;A<S.length;A++)T.push(d(S[A]));var P=S.groups;if(E){var w=[_].concat(T,k,h);void 0!==P&&w.push(P);var U=String(r.apply(void 0,w))}else U=u(_,h,k,T,P,r);k>=I&&(y+=h.slice(I,k)+U,I=k+_.length)}return y+h.slice(I)}]}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),i=RegExp.prototype.exec,l=c("native-string-replace",String.prototype.replace),o=i,u=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],v=u||f||s;v&&(o=function(e){var t,n,a,c,o=this,v=s&&o.sticky,d=r.call(o),p=o.source,g=0,b=e;return v&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),b=String(e).slice(o.lastIndex),o.lastIndex>0&&(!o.multiline||o.multiline&&"\n"!==e[o.lastIndex-1])&&(p="(?: "+p+")",b=" "+b,g++),n=new RegExp("^(?:"+p+")",d)),f&&(n=new RegExp("^"+p+"$(?!\\s)",d)),u&&(t=o.lastIndex),a=i.call(v?n:o,b),v?a?(a.input=a.input.slice(g),a[0]=a[0].slice(g),a.index=o.lastIndex,o.lastIndex+=a[0].length):o.lastIndex=0:u&&a&&(o.lastIndex=o.global?a.index+a[0].length:t),f&&a&&a.length>1&&l.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=o},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),l=n("9112"),o=i("species"),u=RegExp.prototype,s=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),v=i("replace"),d=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),p=!c((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,v){var g=i(e),b=!c((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),x=b&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!b||!x||"replace"===e&&(!s||!f||d)||"split"===e&&!p){var h=/./[g],E=n(g,""[e],(function(e,t,n,r,c){var i=t.exec;return i===a||i===u.exec?b&&!c?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),O=E[0],j=E[1];r(String.prototype,e,O),r(u,g,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}v&&l(u[g],"sham",!0)}},de8a:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"navbar sticky-top navbar-expand-lg navbar-dark bg-dark"},c={class:"container-fluid"},i=Object(r["g"])("span",{class:"navbar-brand"},"前台頁面",-1),l={class:"collapse navbar-collapse",id:"navbarText"},o={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},s=Object(r["f"])("產品總覽"),f={class:"nav-item"},v=Object(r["f"])("購物車"),d={class:"navbar-text"},p=Object(r["f"])("後台管理系統");function g(e,t,n,g,b,x){var h=Object(r["x"])("router-link"),E=Object(r["x"])("router-view");return Object(r["s"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("nav",a,[Object(r["g"])("div",c,[i,Object(r["g"])("div",l,[Object(r["g"])("ul",o,[Object(r["g"])("li",u,[Object(r["g"])(h,{class:"nav-link active",to:"/products"},{default:Object(r["G"])((function(){return[s]})),_:1})]),Object(r["g"])("li",f,[Object(r["g"])(h,{class:"nav-link active",to:"/cart"},{default:Object(r["G"])((function(){return[v]})),_:1})])]),Object(r["g"])("span",d,[Object(r["g"])(h,{class:"nav-link active",to:"/login"},{default:Object(r["G"])((function(){return[p]})),_:1})])])])]),Object(r["g"])(E)],64)}n("ac1f"),n("5319");var b={data:function(){return{status:!1}},methods:{getToken:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e}},created:function(){}};b.render=g;t["default"]=b}}]);
//# sourceMappingURL=chunk-219de02a.664c1b3c.js.map