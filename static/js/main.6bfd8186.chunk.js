(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,c,n){},24:function(e,c,n){},59:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n.n(t),r=n(26),s=n.n(r),i=(n(15),n(14)),o=n(61),l=n(62),j=n(27),u=n.n(j),m=(n(24),n(60)),p=n(2);var d=function(e){return Object(p.jsx)(m.a,{lg:4,md:6,className:"coin-column",children:Object(p.jsxs)("div",{className:"coin-container",children:[Object(p.jsx)("img",{src:e.coinimg,alt:e.alt}),Object(p.jsx)("h1",{children:e.name}),Object(p.jsx)("p",{children:"Current price:"}),Object(p.jsx)("p",{children:e.symbol}),Object(p.jsxs)("p",{className:"price",children:["$",e.price]}),Object(p.jsx)("p",{children:"Market cap:"}),Object(p.jsxs)("p",{className:"coin-volume",children:["$",e.volume.toLocaleString()]})]})})};var h=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),n=c[0],a=c[1],r=Object(t.useState)(""),s=Object(i.a)(r,2),j=s[0],m=s[1];Object(t.useEffect)((function(){u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data),console.log(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=n.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(p.jsx)(o.a,{fluid:!0,className:"main-fld-cnt",children:Object(p.jsxs)(o.a,{fluid:!0,className:"inner-cnt",children:[Object(p.jsx)("h1",{className:"main-h1",children:"CryptoTracker"}),Object(p.jsx)("form",{className:"form-1",children:Object(p.jsx)("input",{className:"coin-input",type:"text",onChange:function(e){m(e.target.value)},placeholder:"Enter your coin here"})}),Object(p.jsx)(l.a,{className:"row-1",children:h.map((function(e){return Object(p.jsx)(d,{coinimg:e.image,name:e.name,price:e.current_price,volume:e.market_cap,priceChange:e.price_change_percentage_24h,marketcap:e.mar},e.id)}))})]})})};var b=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(h,{})})},O=(n(53),n(11));s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O.a,{children:Object(p.jsx)(b,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.6bfd8186.chunk.js.map