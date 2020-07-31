(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(e,t,n){e.exports=n(52)},27:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),o=(n(27),n(6)),u=n.n(o),i=n(18),d=n(1),s=function(e){return{type:"CHANGE_CURRENCY",payload:e}},m=function(e){return{type:"CHANGE_TRIGGER",payload:e}},E=function(e){return{type:"CHANGE_AMOUNT",payload:e}},p=function(){var e=Object(d.b)();return r.a.createElement("div",{className:"windowContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"This Web app has been made to help you set mail alerts to know when the value of your favorite Crypto reach a certain point or move suddenly."),r.a.createElement("br",null),r.a.createElement("p",null,"We will chech every minutes if the conditions that you entered has been validated to send you the mail alert."),r.a.createElement("button",{onClick:function(){return e({type:"INTRO_SECOND_WINDOW"})}},"Next")))},v=function(){var e=Object(d.b)();return r.a.createElement("div",null,r.a.createElement("input",{type:"email",placeholder:"Email",onChange:function(t){return e({type:"SET_MAIL",payload:t.target.value})}}))},h=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.mail}));return r.a.createElement("div",{className:"windowContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Enter your email!"),r.a.createElement("p",null,"We need your email to send you the crypto alerts!"),r.a.createElement(v,null),t.valid?null:r.a.createElement("p",null,"Enter a valid email!"),r.a.createElement("button",{type:"submit",onClick:function(){t.valid&&e({type:"NO_WINDOW"})}},"Start!")))},f=function(){var e=Object(d.c)((function(e){return e.currentAlert})),t=Object(d.c)((function(e){return e.crypto})),n=Object(d.b)();return r.a.createElement("div",{className:"windowContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Create a new Alert"),r.a.createElement("div",null,r.a.createElement("p",null,"Choose your Cryptocurrency:"),r.a.createElement("select",{onChange:function(e){return n(s(e.target.value))}},t.map((function(e,t){return r.a.createElement("option",{key:t,value:e.asset_id},e.asset_id)}))),"Current Price:",Math.round(1e3*t.find((function(t){return t.asset_id===e.currency})).price_usd)/1e3," $"),r.a.createElement("p",null,"Alert me when"),r.a.createElement("div",{className:"conditionContainer"},e.currency,r.a.createElement("select",{onChange:function(e){return n(m(e.target.value))}},r.a.createElement("option",{value:"<"},"Falls Under"),r.a.createElement("option",{value:">"},"Is Above")),r.a.createElement("input",{value:e.amount,onChange:function(e){return n(E(e.target.value))},type:"number"})," $"),r.a.createElement("button",{onClick:function(){n(function(e){return{type:"ADD_ALERT",payload:e}}(e)),n({type:"RESET"}),n({type:"NO_WINDOW"})}},"Create!")))},y=function(){var e=Object(d.c)((function(e){return e.currentAlert})),t=Object(d.c)((function(e){return e.crypto})),n=Object(d.b)();return r.a.createElement("div",{className:"windowContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Edit your Alert n ",e.id),r.a.createElement("div",null,r.a.createElement("p",null,"Choose your Cryptocurrency:"),r.a.createElement("select",{value:e.currency,onChange:function(e){return n(s(e.target.value))}},t.map((function(e,t){return r.a.createElement("option",{key:t,value:e.asset_id},e.asset_id)}))),"Current Price: ",Math.round(1e3*t.find((function(t){return t.asset_id===e.currency})).price_usd)/1e3),r.a.createElement("p",null,"Alert me when"),r.a.createElement("div",{className:"conditionContainer"},e.currency,r.a.createElement("select",{value:e.trigger,onChange:function(e){return n(m(e.target.value))}},r.a.createElement("option",{value:"<"},"Falls Under"),r.a.createElement("option",{value:">"},"Is Above")),r.a.createElement("input",{value:e.amount,onChange:function(e){return n(E(e.target.value))},type:"number"})," $"),r.a.createElement("button",{onClick:function(){n(function(e){return{type:"EDIT_ALERT",payload:e}}(e)),n({type:"RESET"}),n({type:"NO_WINDOW"})}},"Create!")))},b=function(){var e=Object(d.c)((function(e){return e.window})),t=Object(d.c)((function(e){return e.alert})),n=Object(d.b)(),a=null;return e.introFirst?a=r.a.createElement(p,null):e.introSecond?a=r.a.createElement(h,null):e.create?a=r.a.createElement(f,null):e.edit?(n({type:"SET",payload:t.find((function(t){return t.id===e.id}))}),a=r.a.createElement(y,{id:e.id})):a=null,a},g=function(){return r.a.createElement("svg",{width:"2em",height:"2em",viewBox:"0 0 16 16",className:"bi bi-wallet2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M2.5 4l10-3A1.5 1.5 0 0 1 14 2.5v2h-1v-2a.5.5 0 0 0-.5-.5L5.833 4H2.5z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M1 5.5A1.5 1.5 0 0 1 2.5 4h11A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5v-8zM2.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-11z"}))},C=function(){return r.a.createElement("header",null,r.a.createElement(g,null),r.a.createElement("h3",null,"Seelk hackaton project"))},O=function(e){var t=e.onClick;return r.a.createElement("svg",{onClick:function(){return t()},width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))},w=function(e){var t=e.onClick;return r.a.createElement("svg",{onClick:function(){return t()},width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"}))},_=function(){var e=Object(d.c)((function(e){return e.alert})),t=Object(d.c)((function(e){return e.crypto})),n=Object(d.b)();return r.a.createElement("table",{className:"alertTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Cryptocurrency"),r.a.createElement("th",null,"Current value"),r.a.createElement("th",null,"Alert When"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,0===e.length?r.a.createElement("tr",null,r.a.createElement("td",null,"No alerts for the moment")):null,e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.currency),r.a.createElement("td",null,Math.round(1e3*t.find((function(t){return t.asset_id===e.currency})).price_usd)/1e3+" $"),r.a.createElement("td",null,"".concat(e.trigger," ").concat(e.amount," $")),r.a.createElement("td",null,r.a.createElement(O,{onClick:function(){return n({type:"DELETE_ALERT",payload:e.id})}}),r.a.createElement(w,{onClick:function(){return n({type:"EDIT_WINDOW",payload:e.id})}})))}))))},A=function(){var e=Object(d.c)((function(e){return e.window})),t=Object(d.b)();return Object.values(e).some((function(e){return!1!==e}))?null:r.a.createElement("div",null,r.a.createElement("h2",null,"My crypto alerts: "),r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement("button",{onClick:function(){return t({type:"CREATE_WINDOW"})}},"Create new alert")))},N=n(20),j=n.n(N).a.create({baseURL:"https://rest.coinapi.io/v1/assets",headers:{Authorization:"X-CoinAPI-Key: FB8608F1-B2E6-48F0-900C-E1AC308C11B2"}}),T=function(){var e=Object(d.b)(),t=function(){var t=Object(i.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("API Call!"),t.next=3,j.get();case 3:n=t.sent,(a=n.data.filter((function(e){return 1===e.type_is_crypto&&void 0!==e.price_usd}))).sort((function(e,t){return e.asset_id<t.asset_id?-1:e.asset_id>t.asset_id?1:0})),console.log(a),e({type:"UPDATE_INFOS",payload:a});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t().catch((function(e){return console.log("Error: ",e)}))}),[]),r.a.createElement("div",{className:"mainContainer"},r.a.createElement(C,null),r.a.createElement(A,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(3),W=n(21),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ALERT":return t.payload.id=e.length+1,[].concat(Object(W.a)(e),[Object.assign({},t.payload)]);case"DELETE_ALERT":return e.filter((function(e){return e.id!==t.payload})).map((function(e,t){return Object.assign({},e,{id:t+1})}));case"EDIT_ALERT":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));default:return e}},D=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mail:"",valid:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MAIL":return{mail:t.payload,valid:D(t.payload)};default:return e}},S={introFirst:!0,introSecond:!1,create:!1,edit:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INTRO_FIRST_WINDOW":return S;case"INTRO_SECOND_WINDOW":return{introFirst:!1,introSecond:!0,create:!1,edit:!1};case"CREATE_WINDOW":return{introFirst:!1,introSecond:!1,create:!0,edit:!1};case"EDIT_WINDOW":return{introFirst:!1,introSecond:!1,create:!1,edit:!0,id:t.payload};case"NO_WINDOW":return{introFirst:!1,introSecond:!1,create:!1,edit:!1};default:return e}},z={currency:"$BITC",trigger:"<",amount:0},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.assign({},z),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CURRENCY":return Object.assign({},e,{currency:t.payload});case"CHANGE_TRIGGER":return Object.assign({},e,{trigger:t.payload});case"CHANGE_AMOUNT":return Object.assign({},e,{amount:t.payload});case"SET":return Object.assign({},t.payload);case"RESET":return Object.assign({},z);default:return e}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_INFOS":return t.payload;default:return e}},L=Object(I.b)({currentAlert:H,alert:R,mail:k,window:M,crypto:F}),x=Object(I.c)(L);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:x},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.40716a34.chunk.js.map