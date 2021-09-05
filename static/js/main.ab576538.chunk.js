(this.webpackJsonpshowflix=this.webpackJsonpshowflix||[]).push([[0],{70:function(n,e,t){},72:function(n,e,t){},73:function(n,e,t){},97:function(n,e){n.exports={APIKey:"a8760fcf"}},98:function(n,e,t){},99:function(n,e,t){"use strict";t.r(e);var i,a,s,o,c,r,p,d,l,x,b=t(2),j=t.n(b),m=t(26),h=t.n(m),u=(t(70),t.p+"static/media/Logo.a8aa6753.svg"),g=t.p+"static/media/Heart.17bee5aa.svg",f=t.p+"static/media/Search.f40e7eb5.svg",O=t(3),v=function(){return Object(O.jsxs)("div",{class:"sidebar",children:[Object(O.jsx)("img",{src:u,alt:""}),Object(O.jsxs)("ul",{class:"nav",children:[Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("img",{src:f,alt:"",className:"search"}),Object(O.jsx)("span",{children:"Search"})]})}),Object(O.jsx)("li",{children:Object(O.jsxs)("a",{href:"#",children:[Object(O.jsx)("img",{src:g,alt:"",className:"watch"}),Object(O.jsx)("span",{children:"Watchlist"})]})})]})]})},w=(t(72),t(31)),y=t(6),k=t(10),N=(t(73),t(8)),S=t(9),E=(S.b.div(i||(i=Object(N.a)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: "relative";\n  width: "300px";\n  height: "100%";\n  zindex: -1;\n']))),S.b.button(a||(a=Object(N.a)(["\n   \n     min-width: 120px;\n     padding: 16px 32px;\n     border-radius: 10px;\n     border-style: none;\n     border: none;\n     background: #D9DBE9;\n     color: white;\n     cursor: pointer;\n     \n\n"])))),P=t(41),D=t(62),M=(t.p,S.b.div(s||(s=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  padding-bottom:2000px;\n  display: flex;\n  background: #000;\n  justify-content: center;\n  align-items: center;\n"])))),I=S.b.div(o||(o=Object(N.a)(["\n\n@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1) {\n\n  width: 280px;\n  position:relative;\n  height: 800px;\n\n \n  margin-bottom:5000px;\n  padding-left:50px;\n  padding-bottom:50px;\n  \n  box-shadow: 0 5px 1500px #D9DBE9;\n  background: #fff;\n  color: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: -1;\n  border-radius: 20px;\n\n  }\n\n  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {\n\n    width: 280px;\n  position:relative;\n  height: 800px;\n  bottom:500px;\n  margin-bottom:1400px;\n  padding-left:50px;\n  padding-bottom:50px;\n  margin-left: 680px;\n  box-shadow: 0 5px 1500px #D9DBE9;\n  background: #fff;\n  color: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: -1;\n  border-radius: 20px;\n}\n"]))),C=S.b.img(c||(c=Object(N.a)(["\n  width: 200px;\n  height: 300px;\n  padding-right:0px;\n  border-radius: 20px;\n  background: #000;\n"]))),L=S.b.div(r||(r=Object(N.a)(["\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align:center;\n  font-family: 'Poppins', sans-serif;\n  align-items: top;\n  font-size:0.8rem;\n  line-height: 1.8;\n  color: #141414;\n  p {\n    margin-bottom: 1rem;\n  }\n  button {\n    padding: 10px 24px;\n    font-family: 'Poppins', sans-serif;\n    border-radius:20px;\n    background: #5F2EEA;\n    color: #fff;\n    border: none;\n  }\n"]))),R=Object(S.b)(D.a)(p||(p=Object(N.a)(["\n  cursor: arrow;\n  position: absolute;\n  margin-top: 70px;\n  left: 20px;\n  width: 32px;\n  height: 32px;\n  padding-top: 40px;\n  z-index: 10;\n"]))),T=function(n){var e=n.showModal,t=n.setShowModal,i=n.modalData,a=Object(b.useRef)(),s=Object(P.useSpring)({config:{duration:250},opacity:e?1:0,transform:e?"translatex(0%)":"translatex(-100%)"}),o=Object(b.useCallback)((function(n){"Escape"===n.key&&e&&(t(!1),console.log("I pressed"))}),[t,e]);return Object(b.useEffect)((function(){return document.addEventListener("keydown",o),function(){return document.removeEventListener("keydown",o)}}),[o]),Object(O.jsx)(O.Fragment,{children:e?Object(O.jsx)(M,{onClick:function(n){a.current===n.target&&t(!1)},ref:a,children:Object(O.jsx)(P.animated.div,{style:s,children:Object(O.jsxs)(I,{showModal:e,children:[Object(O.jsxs)(L,{children:[Object(O.jsx)(C,{src:null===i||void 0===i?void 0:i.Poster}),Object(O.jsx)("h3",{children:null===i||void 0===i?void 0:i.Title}),Object(O.jsx)("p",{children:"Get exclusive access to our next launch."}),Object(O.jsx)(w.b,{to:"/movie/"+i.imdbID,children:Object(O.jsx)("button",{children:"Watch"})})]}),Object(O.jsx)(R,{"aria-label":"Close modal",onClick:function(){return t((function(n){return!n}))}})]})})}):null})},z=(Object(S.a)(d||(d=Object(N.a)(["\n  * {\n    box-sizing: border-box;\n    margin:0;\n    padding: 0;\n    font-family: 'Arial', sans-serif;\n  }\n"]))),"SEARCH_MOVIE"),A="FETCH_MOVIES",B="FETCH_MOVIE",V="LOADING",F=t(44),H=t.n(F),W=(t(97),function(n){return function(e){H.a.get("http://www.omdbapi.com/?apikey=a8760fcf&s=".concat(n)).then((function(n){return e({type:A,payload:n.data})})).catch((function(n){return console.log(n)}))}}),_=t(20),G=S.b.div(l||(l=Object(N.a)(["\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nflex-wrap: wrap;\nmax-width: 1200px;\nmargin-top: 50px ;\n\n"]))),J=S.b.div(x||(x=Object(N.a)(["\n\n@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1){\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n\nposition: relative;\nwidth: 300px;\nheight: 370px;\nbox-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),\n  inset -5px -5px 15px rgba(255, 255, 255, 0.1),\n  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);\nborder-radius: 15px;\nmargin:25px;\ntransition: 0.5s;\n\n.image{\n  position: relative;\n  width: 300px;\n  height: 370px;\nborder-radius: 15px;\n}\n\n.but{\n  position: relative;\n  bottom:80px;\n  color: black;\n  font-family: 'Poppins', sans-serif;\n  border-radius:25px;\n}\n\n}\n\n@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {\n\n\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n  left:50px;\n  position: relative;\n  width: 220px;\n  height: 300px;\n  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),\n    inset -5px -5px 15px rgba(255, 255, 255, 0.1),\n    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);\n  border-radius: 15px;\n  margin: 10px;\n  transition: 0.5s;\n  \n  .image{\n    position: relative;\n    width: 220px;\n  height: 300px;\n  border-radius: 15px;\n  }\n  \n  .but{\n    position: relative;\n    bottom:80px;\n    color: black;\n    font-family: 'Poppins', sans-serif;\n    border-radius:25px;\n  }\n\n}\n"]))),K=t.p+"static/media/Logo.a8aa6753.svg";var q,Q,U=function(){var n,e,t=Object(b.useState)("mortal"),i=Object(k.a)(t,2),a=i[0],s=i[1],o=Object(b.useState)({}),c=Object(k.a)(o,2),r=c[0],p=c[1],d=Object(_.b)(),l=Object(_.c)((function(n){return n.movies}));Object(b.useEffect)((function(){d(W(a)),console.log(l)}),[]);var x=Object(b.useState)(!1),j=Object(k.a)(x,2),m=j[0],h=j[1];return Object(O.jsxs)("main",{className:"main",children:[Object(O.jsx)("div",{className:"Logo",children:Object(O.jsx)("img",{src:K,alt:""})}),Object(O.jsx)("h2",{children:" Explore "})," ",Object(O.jsxs)("form",{className:"example",onSubmit:function(n){n.preventDefault();var e=n.target.value;d(W(e))},children:[Object(O.jsx)("input",{className:"input-field",type:"text",placeholder:"Search",value:a||"",onInput:function(n){var e=n.target.value;s(e),d(W(e))}})," ",Object(O.jsxs)("button",{type:"submit",className:"Submit",children:[" ","Search"," "]})," "]})," ",Object(O.jsx)(G,{children:0===(null===l||void 0===l||null===(n=l.Search)||void 0===n?void 0:n.length)||null==l.Search?Object(O.jsx)("img",{src:"",alt:"",className:"image"}):null===l||void 0===l||null===(e=l.Search)||void 0===e?void 0:e.map((function(n){return Object(O.jsxs)(J,{children:[Object(O.jsx)("img",{src:null===n||void 0===n?void 0:n.Poster,alt:"",className:"image"}),Object(O.jsx)(E,{onClick:function(){return p(n),void h((function(n){return!n}))},className:"but",children:"View"})]})}))}),Object(O.jsx)(T,{showModal:m,setShowModal:h,modalData:r})]})},X=(t(98),t(34)),Y=S.b.div(q||(q=Object(N.a)(["\n\ndisplay: flex;\nposition:relative;\njustify-content: center;\nalign-items: center;\n\nflex-wrap:wrap;\nwidth: 100%;\nmargin-top: 10px ;\n\nh2{\n    position:absolute;\n    padding-top:25px;\n  font-family: 'Poppins', sans-serif;\n  width:100%\n \n  \n \n}\n\n\n"]))),Z=S.b.div(Q||(Q=Object(N.a)(["\n\n@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 1){\n\n@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n\nposition: relative;\nwidth: 330px;\nheight: 400px;\nbox-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),\n  inset -5px -5px 15px rgba(255, 255, 255, 0.1),\n  5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);\nborder-radius: 15px;\nmargin:25px;\ntransition: 0.5s;\n\n.image{\n  position: relative;\n  width: 330px;\n  height: 400px;\nborder-radius: 15px;\n}\n\n.but{\n  position: relative;\n  bottom:80px;\n  color: black;\n  font-family: 'Poppins', sans-serif;\n  border-radius:25px;\n}\n\n}\n\n@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {\n\n\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n  left:50px;\n  position: relative;\n  width: 220px;\n  height: 300px;\n  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),\n    inset -5px -5px 15px rgba(255, 255, 255, 0.1),\n    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);\n  border-radius: 15px;\n  margin: 10px;\n  transition: 0.5s;\n  \n  .image{\n    position: relative;\n    width: 220px;\n  height: 300px;\n  border-radius: 15px;\n  }\n  \n  .but{\n    position: relative;\n    bottom:80px;\n    color: black;\n    font-family: 'Poppins', sans-serif;\n    border-radius:25px;\n  }\n\n}\n"])));var $=function(){var n,e,t=Object(y.f)(),i=Object(_.b)(),a=Object(_.c)((function(n){return n.movie})),s=Object(_.c)((function(n){return n.movies}));return Object(b.useEffect)((function(){console.log(t.id);var n=t.id;i(function(n){return function(e){H.a.get("https://www.omdbapi.com/?apikey=a8760fcf&i=".concat(n)).then((function(n){return e({type:B,payload:n.data})})).catch((function(n){return console.log(n)}))}}(n));var e=a.Title;i(W(e))}),[]),Object(O.jsxs)("main",{className:"main",children:[Object(O.jsx)("div",{className:"Logo",children:Object(O.jsx)("img",{src:K,alt:""})}),Object(O.jsx)(Z,{children:Object(O.jsx)("img",{src:a.Poster,alt:"",className:"image"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("h2",{className:"title",style:{fontSize:"1.8rem"},children:a.Title}),Object(O.jsx)("p",{children:a.Plot}),Object(O.jsxs)("ul",{className:"un",children:[Object(O.jsxs)("li",{className:"list",children:[Object(O.jsx)(X.a,{})," ",a.Released]}),Object(O.jsxs)("li",{className:"list",children:[Object(O.jsx)(X.d,{})," ",a.imdbRating]}),Object(O.jsxs)("li",{className:"list",children:[Object(O.jsx)(X.c,{})," ",a.Runtime]})]}),Object(O.jsx)("button",{className:"butt",children:"Watch Now"}),Object(O.jsx)(X.b,{style:{background:" #D9DBE9",height:"15px",width:"15px",paddingTop:"10px",paddingRight:"10px",paddingLeft:"10px",paddingBottom:"10px",borderRadius:"10px",marginRight:"10px",marginTop:"30px"}})]}),Object(O.jsx)(Y,{children:0===(null===s||void 0===s||null===(n=s.Search)||void 0===n?void 0:n.length)||null==s.Search?Object(O.jsx)("img",{src:"",alt:"",className:"image"}):null===s||void 0===s||null===(e=s.Search)||void 0===e?void 0:e.map((function(n){return Object(O.jsxs)(Z,{children:[Object(O.jsx)("img",{src:null===n||void 0===n?void 0:n.Poster,alt:"",className:"image"}),Object(O.jsx)(E,{className:"but",children:"View"})]})}))})]})};var nn=function(){return Object(O.jsxs)(w.a,{children:[Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{}),Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{exact:!0,path:"/",component:U})," ",Object(O.jsx)(y.a,{path:"/movie/:id",component:$})," "]})," "]})," "]})},en=t(64),tn=t(38),an=t(23),sn={text:"",movies:[],loading:!1,movie:[]},on=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:sn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case z:return Object(an.a)(Object(an.a)({},n),{},{text:e.payload,loading:!1});case A:return Object(an.a)(Object(an.a)({},n),{},{movies:e.payload,loading:!1});case B:return Object(an.a)(Object(an.a)({},n),{},{movie:e.payload,loading:!1});case V:return Object(an.a)(Object(an.a)({},n),{},{loading:!0});default:return n}},cn=t(65),rn=Object(tn.createStore)(on,Object(cn.composeWithDevTools)(Object(tn.applyMiddleware)(en.a)));h.a.render(Object(O.jsxs)(j.a.StrictMode,{children:[Object(O.jsx)(_.a,{store:rn,children:Object(O.jsx)(nn,{})})," "]}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ab576538.chunk.js.map