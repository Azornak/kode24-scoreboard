(this["webpackJsonpkode24-kodeskole"]=this["webpackJsonpkode24-kodeskole"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('["s3OUe0eVsk7wCT0DOMVn","neNlDzfnKeqYG4XrG1Yp","9Ksw6402kEwElxwVt5NH","614ioP8i4mOTpTDsHmfU","yDjOUjbJieP6l4Ybp1Z2","iAit9lqYx0geqr9EF1yl","ynSXrqB3va1QU753gwZ5","ZiqIa4D12lBdKm7yzZOG","FASmQroDUIRxp2jCHszw","PZczrL2iv2zfjUAnD9v7","aUgHPSkiH4jsWnue2qih","1TW920XHody2tSJumAbe","34vbLlXYks0grkNj8y9D","hCXJlFCfnuJYplBCFiGC","uRy6FUcpNM2lg68KrjX2","XjEwkjVy3WBHOpPNXxhi","Wvi7H4ONjUshS37Pv1jn","OzLUfFmFALV01PNme7cc","v7FPCKZ6RYrcLVgyhrod","8ZkKuS3aRuzL4QmI4Xaw"]')},28:function(e,n,t){},29:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t(1),s=t.n(c),r=t(16),i=t.n(r),l=(t(28),t(17)),o=t(11),j=t(21),h=t(20),d=(t(29),t(55)),b=t(58),m=t(59),u=t(53),O=t(56),k=t(57),x=t(54),f=t(18),p=function(e){Object(j.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).state={teamRankings:[],userRankings:[],teamMembers:[]},a}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://azor-proxy.herokuapp.com/https://kodeskole-beta.kode24.no/api/highscore").then((function(n){n.json().then((function(n){var t=n.userScores.filter((function(e){return f.includes(e.id)})).sort((function(e,n){return e.points<n.points?1:-1}));e.setState({teamRankings:n.teamScores,userRankings:n.userScores,teamMembers:t})}))}))}},{key:"aventoInTheLead",value:function(){var e=this.state.teamRankings.filter((function(e){return 1===e.rank}));return 0===this.state.teamRankings.length?"Henter data...":1===e.length&&"AVENTO"===e[0].name?"Vi leder! \ud83c\udf89\ud83c\udf89\ud83c\udf89":e.length>1&&e.filter((function(e){return"AVENTO"===e.name})).length>0?"Uavgjort \ud83d\ude10":"Vi leder ikke lengre \ud83d\ude22"}},{key:"render",value:function(){var e=this.state.teamRankings.slice(0,10),n=this.state.teamMembers.filter((function(e){return e.points>0}));return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h3",{children:"Kode24 kodeskole - "+this.aventoInTheLead()})}),Object(a.jsx)(u.a,{className:"tablecontainer",component:x.a,children:Object(a.jsxs)(d.a,{className:"ranking-table","aria-label":"customized table",children:[Object(a.jsx)(O.a,{children:Object(a.jsxs)(k.a,{className:"header",children:[Object(a.jsx)(m.a,{children:"Rank"}),Object(a.jsx)(m.a,{children:"Team"}),Object(a.jsx)(m.a,{children:"Score"}),Object(a.jsx)(m.a,{children:"Members"})]})}),Object(a.jsx)(b.a,{children:e.map((function(e){return Object(a.jsxs)(k.a,{className:"tablerow",children:[Object(a.jsx)(m.a,{children:e.rank}),Object(a.jsx)(m.a,{children:"AVENTO"===e.name?Object(a.jsx)("b",{children:e.name}):e.name}),Object(a.jsx)(m.a,{children:e.points}),Object(a.jsx)(m.a,{children:e.memberCount})]},e.name)}))})]})}),Object(a.jsx)(u.a,{className:"tablecontainer",component:x.a,children:Object(a.jsxs)(d.a,{className:"ranking-table","aria-label":"customized table",children:[Object(a.jsx)(O.a,{children:Object(a.jsxs)(k.a,{className:"header",children:[Object(a.jsx)(m.a,{children:"Rank"}),Object(a.jsx)(m.a,{children:"Name"}),Object(a.jsx)(m.a,{children:"Score"})]})}),Object(a.jsx)(b.a,{children:n.map((function(e){return Object(a.jsxs)(k.a,{className:"tablerow",children:[Object(a.jsx)(m.a,{children:e.rank}),Object(a.jsx)(m.a,{children:e.name}),Object(a.jsx)(m.a,{children:e.points})]},e.name)}))})]})})]})}}]),t}(s.a.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),g()}},[[34,1,2]]]);
//# sourceMappingURL=main.33b7dbbc.chunk.js.map