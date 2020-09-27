(this["webpackJsonpgithub-user-search"]=this["webpackJsonpgithub-user-search"]||[]).push([[0],{17:function(e,t,a){},26:function(e,t,a){e.exports=a(49)},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),s=a.n(c),l=(a(17),a(10)),u=a(2),i=a(3),o=a.n(i),m=a(6),E=a(1),f=a(8),b=function(e){var t=new f.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),a=e.account,c=Object(r.useState)(null),s=Object(E.a)(c,2),u=s[0],i=s[1],b=Object(r.useState)(null),d=Object(E.a)(b,2),h=d[0],p=d[1],O=Object(r.useState)([]),g=Object(E.a)(O,2),v=(g[0],g[1]);return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("GET /rate_limit");case 2:0===e.sent.data.rate.remaining?("Error: Github API Rate-limit exceeded, please try back in 30 minutes.",v("Error: Github API Rate-limit exceeded, please try back in 30 minutes.")):(t.users.listFollowersForUser({username:a.login}).then((function(e){i(e.data.length)})),t.request("GET /users/".concat(a.login,"/starred")).then((function(e){p(e.data.length)})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),n.a.createElement(l.b,{to:"/github-user-search/profile/"+a.login},n.a.createElement("div",{className:"usercard-main"},n.a.createElement("img",{src:a.avatar_url,alt:"user's icon",className:"userimg",width:"100px"}),n.a.createElement("div",{id:"userlink"},a.login),n.a.createElement("div",{className:"statistics"},n.a.createElement("div",{className:"followers",title:"Followers",alt:"followers"},n.a.createElement("i",{className:"fas fa-user-friends"}),u),n.a.createElement("div",{className:"stars",title:"stars",alt:"stars"},n.a.createElement("i",{className:"fas fa-star"}),h))))};function d(e){var t=e.gotoNextPage,a=e.gotoPrevPage;return n.a.createElement("div",null,a&&n.a.createElement("button",{onClick:a,className:"pagination-button-back"},n.a.createElement("i",{className:"fas fa-arrow-left"})),t&&n.a.createElement("button",{onClick:t,className:"pagination-button"},n.a.createElement("i",{className:"fas fa-arrow-right"})))}var h=function(e){var t,a=e.errors;return a.length>0&&(t=n.a.createElement("div",{className:"errors"},a)),n.a.createElement(r.Fragment,null,t)},p=function(){var e=new f.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),t=a(41),c=Object(r.useState)([]),s=Object(E.a)(c,2),l=s[0],u=s[1],i=Object(r.useState)(""),p=Object(E.a)(i,2),O=p[0],g=p[1],v=Object(r.useState)(!0),S=Object(E.a)(v,2),j=S[0],N=S[1],_=Object(r.useState)(""),T=Object(E.a)(_,2),P=T[0],w=T[1],x=Object(r.useState)(""),k=Object(E.a)(x,2),C=k[0],R=k[1],A=Object(r.useState)([]),D=Object(E.a)(A,2),I=D[0],K=D[1],U=Object(r.useState)(1),y=Object(E.a)(U,2),G=y[0],W=y[1],F=Object(r.useState)(""),L=Object(E.a)(F,2),q=L[0],B=L[1],H=Object(r.useState)(""),V=Object(E.a)(H,2),Y=V[0],J=V[1],M=Object(r.useRef)(!0);Object(r.useEffect)((function(){M.current?M.current=!1:z()}),[G]);var z=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("GET /rate_limit");case 2:0===t.sent.data.rate.remaining?("Error: Github API Rate-limit exceeded, please try back in 30 minutes.",K("Error: Github API Rate-limit exceeded, please try back in 30 minutes.")):Q();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){if(""===O){K("Error: Please input a username.")}else K("");e.search.users({q:"".concat(O),page:"".concat(G),per_page:5}).then((function(e){var a=t(e.headers.link);N(!1),w(e.data.total_count),null!==a&&(null!==a.next&&(B((function(e){return a.next.page})),R(a.last.page)),a.prev&&null!==a.prev&&J(a.prev.page)),u(e.data.items.map((function(e){return n.a.createElement(b,{key:e.id,account:e})})))})).catch((function(e){return console.log(e)}))};if(j>3)return"Loading..";var X,Z;return""!==P&&(X=n.a.createElement("div",{className:"count-total"},P," users in total.")),q&&(Z=n.a.createElement("span",{className:"total_pages"},"Page ",G," of ",C)),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"search-header"},n.a.createElement("div",{className:"github-logo"},n.a.createElement("i",{className:"fab fa-github fa-10x"})),n.a.createElement("h1",null,"Search Github Users"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),z()}},n.a.createElement("label",null,n.a.createElement("input",{type:"text",value:O,onChange:function(e){var t=e.target.value;g(t)},className:"search",placeholder:"Search Users..",required:!0})),n.a.createElement("button",{type:"submit",className:"fas fa-search",id:"submit-button"})),n.a.createElement("br",null),void 0!==I?n.a.createElement(h,{errors:I}):null),n.a.createElement("div",{className:"returned-info"},X,l,Z,n.a.createElement(d,{gotoNextPage:q?function(){W((function(e){return q}))}:null,gotoPrevPage:Y?function(){W((function(e){return Y}))}:null})))},O=function(e){var t=new f.a({auth:Object({NODE_ENV:"production",PUBLIC_URL:"/github-user-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PRIVATE_KEY,userAgent:"userSearch v0"}),a=Object(r.useState)([]),c=Object(E.a)(a,2),s=c[0],l=c[1],i=Object(u.e)(),o=Object(r.useState)(0),m=Object(E.a)(o,2),b=m[0],d=m[1];return Object(r.useEffect)((function(){t.request("GET /users/".concat(e.match.params.username),{username:e.match.params.username}).then((function(e){l(e.data)})),t.repos.listForUser({username:e.match.params.username}).then((function(e){d(e.data.length)}))}),[]),n.a.createElement("div",{className:"profileContainer"},n.a.createElement("button",{onClick:function(){return i.goBack()},className:"pagination-button-return"},"Back"),n.a.createElement("img",{src:s.avatar_url,width:"100px;",alt:"User Icon"}),n.a.createElement("h2",null,s.login),n.a.createElement("div",{className:"profileInfo"},n.a.createElement("h3",null,n.a.createElement("i",{className:"fas fa-code"})," ",b," Repos ",n.a.createElement("i",{className:"fas fa-users"})," ",s.followers," Followers ",n.a.createElement("i",{className:"fas fa-people-arrows"})," ",s.following," Followed"),n.a.createElement("div",{className:"user-bio"},n.a.createElement("p",null," ",s.bio))))},g=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null,n.a.createElement(u.a,{exact:!0,path:"/github-user-search",component:p}),n.a.createElement(u.a,{exact:!0,path:"/github-user-search/profile/:username",component:O})))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.542af132.chunk.js.map