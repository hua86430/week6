(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c1ad972"],{"1dde":function(t,e,a){var c=a("d039"),n=a("b622"),s=a("2d00"),l=n("species");t.exports=function(t){return s>=51||!c((function(){var e=[],a=e.constructor={};return a[l]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,a){"use strict";var c=a("c04e"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var l=c(e);l in t?n.f(t,l,s(0,a)):t[l]=a}},"99af":function(t,e,a){"use strict";var c=a("23e7"),n=a("d039"),s=a("e8b5"),l=a("861d"),o=a("7b0b"),r=a("50c4"),i=a("8418"),d=a("65f0"),u=a("1dde"),b=a("b622"),g=a("2d00"),m=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=g>=51||!n((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),p=u("concat"),h=function(t){if(!l(t))return!1;var e=t[m];return void 0!==e?!!e:s(t)},v=!O||!p;c({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,c,n,s,l=o(this),u=d(l,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(s=-1===e?l:arguments[e],h(s)){if(n=r(s.length),b+n>f)throw TypeError(j);for(a=0;a<n;a++,b++)a in s&&i(u,b,s[a])}else{if(b>=f)throw TypeError(j);i(u,b++,s)}return u.length=b,u}})},b0c0:function(t,e,a){var c=a("83ab"),n=a("9bf2").f,s=Function.prototype,l=s.toString,o=/^\s*function ([^ (]*)/,r="name";c&&!(r in s)&&n(s,r,{configurable:!0,get:function(){try{return l.call(this).match(o)[1]}catch(t){return""}}})},b789:function(t,e,a){"use strict";a.r(e);a("b0c0");var c=a("7a23"),n=Object(c["g"])("h1",{class:"mt-3 mb-3"},"購物車",-1),s={class:"container"},l={class:"row"},o={class:"col"},r={class:"text-end"},i={class:"table align-middle"},d=Object(c["g"])("thead",null,[Object(c["g"])("tr",null,[Object(c["g"])("th"),Object(c["g"])("th",null,"品名"),Object(c["g"])("th",{style:{width:"150px"}},"數量 / 單位"),Object(c["g"])("th",null,"單價")])],-1),u={key:0,class:"text-success"},b={class:"input-group input-group-sm"},g={class:"input-group mb-3"},m={class:"input-group-text",id:"basic-addon2"},f={class:"text-end"},j=Object(c["g"])("small",{class:"text-success"},"折扣價：",-1),O=Object(c["g"])("td",{colspan:"3",class:"text-end"},"總計",-1),p={class:"text-end"},h={key:0},v=Object(c["g"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),x={class:"text-end text-success"},y={class:"my-5 row justify-content-center"},w={class:"mb-3"},V=Object(c["g"])("label",{for:"email",class:"form-label"},"Email",-1),k={class:"mb-3"},S=Object(c["g"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),C={class:"mb-3"},$=Object(c["g"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),A={class:"mb-3"},I=Object(c["g"])("label",{for:"address",class:"form-label"},"收件人地址",-1),q={class:"mb-3"},U=Object(c["g"])("label",{for:"message",class:"form-label"},"留言",-1),_=Object(c["g"])("div",{class:"text-end"},[Object(c["g"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function E(t,e,a,E,F,B){var D=Object(c["x"])("Field"),H=Object(c["x"])("error-message"),J=Object(c["x"])("Form");return Object(c["s"])(),Object(c["d"])(c["a"],null,[n,Object(c["g"])("div",s,[Object(c["g"])("div",l,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("button",{class:"btn btn-outline-danger",type:"button",onClick:e[1]||(e[1]=function(){return B.deleteAll&&B.deleteAll.apply(B,arguments)})}," 清空購物車 ")]),Object(c["g"])("table",i,[d,Object(c["g"])("tbody",null,[F.carts?(Object(c["s"])(!0),Object(c["d"])(c["a"],{key:0},Object(c["w"])(F.carts.carts,(function(t){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id},[Object(c["g"])("td",null,[Object(c["g"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(e){return B.deleteItem(t.id)},disabled:F.loadingStatus.loadingItem===t.id}," x ",8,["onClick","disabled"])]),Object(c["g"])("td",null,[Object(c["f"])(Object(c["A"])(t.product.title)+" ",1),t.coupon?(Object(c["s"])(),Object(c["d"])("div",u," 已套用優惠券 ")):Object(c["e"])("",!0)]),Object(c["g"])("td",null,[Object(c["g"])("div",b,[Object(c["g"])("div",g,[Object(c["H"])(Object(c["g"])("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return B.updateCart(t)},disabled:F.loadingStatus.loadingItem===t.id},null,40,["onUpdate:modelValue","onBlur","disabled"]),[[c["D"],t.qty,void 0,{number:!0}]]),Object(c["g"])("span",m,Object(c["A"])(t.product.unit),1)])])]),Object(c["g"])("td",f,[j,Object(c["f"])(" "+Object(c["A"])(t.product.price*t.qty),1)])])})),128)):Object(c["e"])("",!0)]),Object(c["g"])("tfoot",null,[Object(c["g"])("tr",null,[O,Object(c["g"])("td",p,Object(c["A"])(F.carts.total),1)]),F.carts.final_total!==F.carts.total?(Object(c["s"])(),Object(c["d"])("tr",h,[v,Object(c["g"])("td",x,Object(c["A"])(F.carts.final_total),1)])):Object(c["e"])("",!0)])])]),Object(c["g"])("div",y,[Object(c["g"])(J,{ref:"form",class:"col-md-6",onSubmit:B.onSubmit},{default:Object(c["G"])((function(t){var a=t.errors;return[Object(c["g"])("div",w,[V,Object(c["g"])(D,{id:"email",name:"信箱",type:"email",rules:"email|required",class:["form-control",{"is-invalid":a["信箱"]}],placeholder:"請輸入 Email",modelValue:F.order.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return F.order.user.email=t})},null,8,["class","modelValue"]),Object(c["g"])(H,{name:"信箱",class:"invalid-feedback"})]),Object(c["g"])("div",k,[S,Object(c["g"])(D,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":a["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:F.order.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return F.order.user.name=t})},null,8,["class","modelValue"]),Object(c["g"])(H,{name:"姓名",class:"invalid-feedback"})]),Object(c["g"])("div",C,[$,Object(c["g"])(D,{id:"tel",name:"電話",type:"number",rules:B.isPhone,class:["form-control",{"is-invalid":a["電話"]}],placeholder:"請輸入電話",modelValue:F.order.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return F.order.user.tel=t})},null,8,["rules","class","modelValue"]),Object(c["g"])(H,{name:"電話",class:"invalid-feedback"})]),Object(c["g"])("div",A,[I,Object(c["g"])(D,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":a["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:F.order.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return F.order.user.address=t})},null,8,["class","modelValue"]),Object(c["g"])(H,{name:"地址",class:"invalid-feedback"})]),Object(c["g"])("div",q,[U,Object(c["H"])(Object(c["g"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[6]||(e[6]=function(t){return F.order.message=t})},null,512),[[c["D"],F.order.message]])]),_]})),_:1},8,["onSubmit"])])])])],64)}a("99af");var F={data:function(){return{carts:[],loadingStatus:{loadingItem:""},order:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{deleteItem:function(t){var e=this,a="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart");this.loadingStatus.loadingItem=t,this.$http.delete("".concat(a,"/").concat(t)).then((function(t){e.loadingStatus.loadingItem="",e.$swal(t.data.message),e.getCart()}))},deleteAll:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/carts");this.$http.delete(e).then((function(e){t.$swal(e.data.message),t.getCart()}))},getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart");this.$http.get(e).then((function(e){t.carts=e.data.data})).catch((function(t){console.log(t.data)}))},updateCart:function(t){var e=this,a={product_id:t.product_id,qty:t.qty};this.loadingStatus.loadingItem=t.id,this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart/").concat(t.id),{data:a}).then((function(t){e.loadingStatus.loadingItem="",e.getCart(),e.$swal(t.data.message)})).catch((function(t){console.log(t.data)}))},onSubmit:function(){var t=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/order"),{data:this.order}).then((function(e){e.data.success?(t.$refs.form.resetForm(),t.getCart(),t.$swal(e.data.message)):t.$swal(e.data.message)}))},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"}},created:function(){this.getCart()}};F.render=E;e["default"]=F}}]);
//# sourceMappingURL=chunk-0c1ad972.9959e306.js.map