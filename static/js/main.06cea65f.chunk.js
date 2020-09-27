(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],{17:function(e,t,a){},26:function(e,t,a){e.exports=a(49)},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),l=(a(17),a(12)),u=a(2),i=a(3),o=a.n(i),m=a(6),b=a(1),f=a(9),E=function(e){var t,a=new f.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),c=e.account,s=Object(n.useState)(""),l=Object(b.a)(s,2),u=l[0],i=l[1],E=Object(n.useState)([]),d=Object(b.a)(E,2),p=d[0],h=d[1],O=Object(n.useState)(null),v=Object(b.a)(O,2),g=(v[0],v[1],Object(n.useState)(null)),j=Object(b.a)(g,2),S=j[0],N=j[1],_=Object(n.useState)([]),P=Object(b.a)(_,2),x=(P[0],P[1]),T=Object(n.useState)(0),w=Object(b.a)(T,2);w[0],w[1];return Object(n.useEffect)((function(){(function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.request("GET /rate_limit");case 2:0===t.sent.data.rate.remaining?("Error: Github API rate-limit exceeded, please try back in 30 minutes.",x("Error: Github API rate-limit exceeded, please try back in 30 minutes.")):(a.request("GET /users/".concat(e.account.login),{username:e.account.login}).then((function(e){h(e.data),null!==e.data.bio&&e.data.bio.length>0&&i(e.data.bio)})),a.request("GET /users/".concat(c.login,"/starred")).then((function(e){N(e.data.length)})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),u.length>0&&(t=r.a.createElement("div",{className:"profileInfo"},u)),r.a.createElement("a",{href:c.html_url,target:"_blank"},r.a.createElement("div",{className:"usercard-main"},r.a.createElement("img",{src:c.avatar_url,alt:"user's icon",className:"userimg",width:"100px"}),r.a.createElement("div",{id:"userlink"},c.login),r.a.createElement("div",{className:"statistics"},r.a.createElement("div",{className:"repos"},r.a.createElement("i",{className:"fas fa-code"}),p.public_repos),r.a.createElement("div",{className:"followers",title:"Followers",alt:"followers"},r.a.createElement("i",{className:"fas fa-people-arrows"}),p.followers),r.a.createElement("div",{className:"stars",title:"stars",alt:"stars"},r.a.createElement("i",{className:"fas fa-star"}),S)),t))};function d(e){var t=e.gotoNextPage,a=e.gotoPrevPage;return r.a.createElement("div",null,a&&r.a.createElement("button",{onClick:a,className:"pagination-button-back"},r.a.createElement("i",{className:"fas fa-arrow-left"})),t&&r.a.createElement("button",{onClick:t,className:"pagination-button"},r.a.createElement("i",{className:"fas fa-arrow-right"})))}var p=function(e){var t,a=e.errors;return a.length>0&&(t=r.a.createElement("div",{className:"errors"},a)),r.a.createElement(n.Fragment,null,t)},h=function(){var e=new f.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),t=a(37),c=Object(n.useState)([]),s=Object(b.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)(""),h=Object(b.a)(i,2),O=h[0],v=h[1],g=Object(n.useState)(!0),j=Object(b.a)(g,2),S=j[0],N=j[1],_=Object(n.useState)(""),P=Object(b.a)(_,2),x=P[0],T=P[1],w=Object(n.useState)(""),k=Object(b.a)(w,2),A=k[0],C=k[1],y=Object(n.useState)([]),I=Object(b.a)(y,2),D=I[0],G=I[1],K=Object(n.useState)(1),R=Object(b.a)(K,2),q=R[0],U=R[1],W=Object(n.useState)(""),L=Object(b.a)(W,2),H=L[0],V=L[1],B=Object(n.useState)(""),F=Object(b.a)(B,2),J=F[0],Y=F[1],M=Object(n.useRef)(!0);Object(n.useEffect)((function(){M.current?M.current=!1:z()}),[q]);var z=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("GET /rate_limit");case 2:0===t.sent.data.rate.remaining?("Error: Github API rate-limit exceeded, please try back in 30 minutes.",G("Error: Github API rate-limit exceeded, please try back in 30 minutes.")):Q();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){if(""===O){G("Error: Please input a username.")}else G("");e.search.users({q:"".concat(O),page:"".concat(q),per_page:5}).then((function(e){var a=t(e.headers.link);N(!1),T(e.data.total_count),null!==a&&(null!==a.next&&void 0!==a.next&&(V((function(e){return a.next.page})),C(a.last.page)),a.prev&&null!==a.prev&&Y(a.prev.page)),u(e.data.items.map((function(e){return r.a.createElement(E,{key:e.id,account:e})})))})).catch((function(e){return console.log(e)}))};if(S>3)return"Loading..";var X,Z;return""!==x&&(X=r.a.createElement("div",{className:"count-total"},x," users in total.")),H&&(Z=r.a.createElement("span",{className:"total_pages"},"Page ",q," of ",A)),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"search-header"},r.a.createElement("div",{className:"github-logo"},r.a.createElement("i",{className:"fab fa-github fa-10x"})),r.a.createElement("h1",null,"Search Github Users"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),z()}},r.a.createElement("label",null,r.a.createElement("input",{type:"text",value:O,onChange:function(e){var t=e.target.value;v(t)},className:"search",placeholder:"Search Users..",required:!0})),r.a.createElement("button",{type:"submit",className:"fas fa-search",id:"submit-button"})),r.a.createElement("br",null),void 0!==D?r.a.createElement(p,{errors:D}):null),r.a.createElement("div",{className:"returned-info"},X,l,Z,r.a.createElement(d,{gotoNextPage:H?function(){U((function(e){return H}))}:null,gotoPrevPage:J?function(){U((function(e){return J}))}:null})))},O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(u.a,{exact:!0,path:"/github-user-search",component:h})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.06cea65f.chunk.js.map