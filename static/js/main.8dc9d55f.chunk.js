(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],{17:function(e,t,a){},26:function(e,t,a){e.exports=a(49)},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),u=(a(17),a(10)),l=a(2),i=a(3),o=a.n(i),m=a(6),E=a(1),b=a(8),f=function(e){new b.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"});var t=e.account,a=Object(n.useState)(null),c=Object(E.a)(a,2),s=c[0],l=(c[1],Object(n.useState)(null)),i=Object(E.a)(l,2),o=i[0],m=(i[1],Object(n.useState)([])),f=Object(E.a)(m,2);f[0],f[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(u.b,{to:"/github-user-search/profile/"+t.login},r.a.createElement("div",{className:"usercard-main"},r.a.createElement("img",{src:t.avatar_url,alt:"user's icon",className:"userimg",width:"100px"}),r.a.createElement("div",{id:"userlink"},t.login),r.a.createElement("div",{className:"statistics"},r.a.createElement("div",{className:"followers",title:"Followers",alt:"followers"},r.a.createElement("i",{className:"fas fa-user-friends"}),s),r.a.createElement("div",{className:"stars",title:"stars",alt:"stars"},r.a.createElement("i",{className:"fas fa-star"}),o))))};function h(e){var t=e.gotoNextPage,a=e.gotoPrevPage;return r.a.createElement("div",null,a&&r.a.createElement("button",{onClick:a,className:"pagination-button-back"},r.a.createElement("i",{className:"fas fa-arrow-left"})),t&&r.a.createElement("button",{onClick:t,className:"pagination-button"},r.a.createElement("i",{className:"fas fa-arrow-right"})))}var d=function(e){var t,a=e.errors;return a.length>0&&(t=r.a.createElement("div",{className:"errors"},a)),r.a.createElement(n.Fragment,null,t)},O=function(){var e=new b.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),t=a(41),c=Object(n.useState)([]),s=Object(E.a)(c,2),u=s[0],l=s[1],i=Object(n.useState)(""),O=Object(E.a)(i,2),p=O[0],g=O[1],v=Object(n.useState)(!0),S=Object(E.a)(v,2),j=S[0],_=S[1],N=Object(n.useState)(""),T=Object(E.a)(N,2),P=T[0],w=T[1],C=Object(n.useState)(""),x=Object(E.a)(C,2),k=x[0],D=x[1],R=Object(n.useState)([]),A=Object(E.a)(R,2),K=A[0],I=A[1],U=Object(n.useState)(1),W=Object(E.a)(U,2),y=W[0],L=W[1],B=Object(n.useState)(""),H=Object(E.a)(B,2),V=H[0],F=H[1],G=Object(n.useState)(""),q=Object(E.a)(G,2),Y=q[0],J=q[1],M=Object(n.useRef)(!0);Object(n.useEffect)((function(){M.current?M.current=!1:z()}),[y]);var z=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("GET /rate_limit");case 2:0===t.sent.data.rate.remaining?("Error: Github API Rate-limit exceeded, please try back in 30 minutes.",I("Error: Github API Rate-limit exceeded, please try back in 30 minutes.")):Q();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){if(""===p){I("Error: Please input a username.")}else I("");e.search.users({q:"".concat(p),page:"".concat(y),per_page:5}).then((function(e){var a=t(e.headers.link);_(!1),w(e.data.total_count),null!==a&&(null!==a.next&&(F((function(e){return a.next.page})),D(a.last.page)),a.prev&&null!==a.prev&&J(a.prev.page)),l(e.data.items.map((function(e){return r.a.createElement(f,{key:e.id,account:e})})))})).catch((function(e){return console.log(e)}))};if(j>3)return"Loading..";var X,Z;return""!==P&&(X=r.a.createElement("div",{className:"count-total"},P," users in total.")),V&&(Z=r.a.createElement("span",{className:"total_pages"},"Page ",y," of ",k)),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"search-header"},r.a.createElement("div",{className:"github-logo"},r.a.createElement("i",{className:"fab fa-github fa-10x"})),r.a.createElement("h1",null,"Search Github Users"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),z()}},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:p,onChange:function(e){var t=e.target.value;g(t)},className:"search",placeholder:"Search Users..",required:!0})),r.a.createElement("button",{type:"submit",className:"fas fa-search",id:"submit-button"})),r.a.createElement("br",null),void 0!==K?r.a.createElement(d,{errors:K}):null),r.a.createElement("div",{className:"returned-info"},X,u,Z,r.a.createElement(h,{gotoNextPage:V?function(){L((function(e){return V}))}:null,gotoPrevPage:Y?function(){L((function(e){return Y}))}:null})))},p=function(e){var t=new b.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),a=Object(n.useState)([]),c=Object(E.a)(a,2),s=c[0],u=c[1],i=Object(l.e)(),o=Object(n.useState)(0),m=Object(E.a)(o,2),f=m[0],h=m[1];return Object(n.useEffect)((function(){t.request("GET /users/".concat(e.match.params.username),{username:e.match.params.username}).then((function(e){u(e.data)})),t.repos.listForUser({username:e.match.params.username}).then((function(e){h(e.data.length)}))}),[]),r.a.createElement("div",{className:"profileContainer"},r.a.createElement("img",{src:s.avatar_url,width:"100px;",alt:"User Icon"}),r.a.createElement("h2",null,s.login),r.a.createElement("h3",null,f," Repos \u2022 ",s.followers," Followers \u2022 ",s.following," Followed"),r.a.createElement("button",{onClick:function(){return i.goBack()},className:"pagination-button-return"},"Back"))},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(l.a,{exact:!0,path:"/github-user-search",component:O}),r.a.createElement(l.a,{exact:!0,path:"/github-user-search/profile/:username",component:p})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8dc9d55f.chunk.js.map