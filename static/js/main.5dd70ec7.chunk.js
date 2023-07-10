(this.webpackJsonphero_admin_panel=this.webpackJsonphero_admin_panel||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(4),s=n.n(a),i=n(2),l=n(11),o=n(14),d=n(10),u=n.n(d),b=n(12),h=function(){return{request:function(){var e=Object(b.a)(u.a.mark((function e(t){var n,r,c,a,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:{"Content-Type":"application/json"},e.prev=3,e.next=6,fetch(t,{method:n,body:r,headers:c});case 6:if((a=e.sent).ok){e.next=9;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 9:return e.next=11,a.json();case 11:return s=e.sent,e.abrupt("return",s);case 15:throw e.prev=15,e.t0=e.catch(3),e.t0;case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}()}},j=n(3),f=n(5),m=Object(j.c)(),g=m.getInitialState({heroesLoadingStatus:"idle"}),O=Object(j.b)("heroes/fetchHeroes",(function(){return(0,h().request)("http://localhost:3001/heroes")})),p=Object(j.d)({name:"heroes",initialState:g,reducers:{heroCreated:function(e,t){m.addOne(e,t.payload)},heroDeleted:function(e,t){m.removeOne(e,t.payload)}},extraReducers:function(e){e.addCase(O.pending,(function(e){e.heroesLoadingStatus="loading"})).addCase(O.fulfilled,(function(e,t){e.heroesLoadingStatus="idle",m.setAll(e,t.payload)})).addCase(O.rejected,(function(e){e.heroesLoadingStatus="error"})).addDefaultCase((function(){}))}}),x=p.actions,v=p.reducer,N=m.getSelectors((function(e){return e.heroesReducer})).selectAll,S=Object(f.a)((function(e){return e.filtersReducer.activeFilter}),N,(function(e,t){return"all"===e?t:t.filter((function(t){return t.element===e}))})),w=(x.heroesFetching,x.heroesFetched,x.heroesFetchingError,x.heroCreated),y=x.heroDeleted,C=n(1),F=function(e){var t,n=e.name,r=e.description,c=e.element,a=e.onDelete;switch(c){case"fire":t="bg-danger bg-gradient";break;case"water":t="bg-primary bg-gradient";break;case"wind":t="bg-success bg-gradient";break;case"earth":t="bg-secondary bg-gradient";break;default:t="bg-warning bg-gradient"}return Object(C.jsxs)("li",{className:"card flex-row mb-4 shadow-lg text-white ".concat(t),children:[Object(C.jsx)("img",{src:"http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg",className:"img-fluid w-25 d-inline",alt:"unknown hero",style:{objectFit:"cover"}}),Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("h3",{className:"card-title",children:n}),Object(C.jsx)("p",{className:"card-text",children:r})]}),Object(C.jsx)("span",{className:"position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light",onClick:a,children:Object(C.jsx)("button",{type:"button",className:"btn-close btn-close","aria-label":"Close"})})]})},k=function(){return Object(C.jsx)("div",{className:"spinner-border mx-auto mt-5",role:"status",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},L=function(){var e=Object(i.c)(S),t=Object(i.c)((function(e){return e.heroesReducer.heroesLoadingStatus})),n=Object(i.b)(),c=h().request;Object(r.useEffect)((function(){n(O())}),[]);var a=Object(r.useCallback)((function(e){c("http://localhost:3001/heroes/".concat(e),"DELETE").then((function(e){return console.log(e,"Deleted")})).then(n(y(e))).catch((function(e){return console.log(e)}))}),[c]);if("loading"===t)return Object(C.jsx)(k,{});if("error"===t)return Object(C.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var s,d=0===(s=e).length?Object(C.jsx)("h5",{className:"text-center mt-5",children:"\u0413\u0435\u0440\u043e\u0435\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442"}):s.map((function(e){var t=e.id,n=Object(o.a)(e,["id"]);return Object(C.jsx)(F,Object(l.a)(Object(l.a)({},n),{},{onDelete:function(){return a(t)}}),t)}));return Object(C.jsx)("ul",{children:d})},E=n(6),R=n(29),q=Object(j.c)(),D=q.getInitialState({filtersLoadingStatus:"idle",activeFilter:"all"}),_=Object(j.b)("filters/fetchFilters",(function(){return(0,h().request)("http://localhost:3001/filters")})),T=Object(j.d)({name:"filters",initialState:D,reducers:{filtersChanged:function(e,t){e.activeFilter=t.payload}},extraReducers:function(e){e.addCase(_.pending,(function(e){e.filtersLoadingStatus="loading"})).addCase(_.fulfilled,(function(e,t){e.filtersLoadingStatus="idle",q.setAll(e,t.payload)})).addCase(_.rejected,(function(e){e.filtersLoadingStatus="error"})).addDefaultCase((function(){}))}}),A=T.actions,I=T.reducer,J=q.getSelectors((function(e){return e.filtersReducer})).selectAll,B=(A.filtersFetching,A.filtersFetched,A.filtersFetchingError,A.filtersChanged),G=function(e){e.dispatch,e.getState;return function(e){return function(t){return e("string"===typeof t?{type:t}:t)}}},H=Object(j.a)({reducer:{heroesReducer:v,filtersReducer:I},middleware:function(e){return e().concat(G)},devTools:!1}),M=function(){var e=Object(r.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(E.a)(a,2),l=s[0],o=s[1],d=Object(r.useState)(""),u=Object(E.a)(d,2),b=u[0],j=u[1],f=Object(i.c)((function(e){return e.filtersReducer})).filtersLoadingStatus,m=J(H.getState()),g=Object(i.b)(),O=h().request;return Object(C.jsxs)("form",{className:"border p-4 shadow-lg rounded",onSubmit:function(e){e.preventDefault();var t={id:Object(R.a)(),name:n,description:l,element:b};O("http://localhost:3001/heroes","POST",JSON.stringify(t)).then((function(e){return console.log(e,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430")})).then(g(w(t))).catch((function(e){return console.log(e)})),c(""),o(""),j("")},children:[Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsx)("label",{htmlFor:"name",className:"form-label fs-4",children:"\u0418\u043c\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0433\u0435\u0440\u043e\u044f"}),Object(C.jsx)("input",{required:!0,type:"text",name:"name",className:"form-control",id:"name",placeholder:"\u041a\u0430\u043a \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442?",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsx)("label",{htmlFor:"text",className:"form-label fs-4",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),Object(C.jsx)("textarea",{required:!0,name:"text",className:"form-control",id:"text",placeholder:"\u0427\u0442\u043e \u044f \u0443\u043c\u0435\u044e?",style:{height:"130px"},value:l,onChange:function(e){return o(e.target.value)}})]}),Object(C.jsxs)("div",{className:"mb-3",children:[Object(C.jsx)("label",{htmlFor:"element",className:"form-label",children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0433\u0435\u0440\u043e\u044f"}),Object(C.jsxs)("select",{required:!0,className:"form-select",id:"element",name:"element",value:b,onChange:function(e){return j(e.target.value)},children:[Object(C.jsx)("option",{value:"",children:"\u042f \u0432\u043b\u0430\u0434\u0435\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c..."}),function(e,t){return"loading"===t?Object(C.jsx)("option",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432"}):"error"===t?Object(C.jsx)("option",{children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}):e&&e.length>0?e.map((function(e){var t=e.name,n=e.label;if("all"!==t)return Object(C.jsx)("option",{value:t,children:n},t)})):void 0}(m,f)]})]}),Object(C.jsx)("button",{type:"submit",className:"btn btn-primary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})},P=n(13),z=n.n(P),K=function(){var e=Object(i.c)((function(e){return e.filtersReducer})),t=e.filtersLoadingStatus,n=e.activeFilter,c=J(H.getState());console.log(c);var a=Object(i.b)(),s=h().request;if(Object(r.useEffect)((function(){a(_(s))}),[]),"loading"===t)return Object(C.jsx)(k,{});if("error"===t)return Object(C.jsx)("h5",{className:"text-center mt-5",children:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"});var l,o=0===(l=c).length?Object(C.jsx)("h5",{className:"text-center mt-5",children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b"}):l.map((function(e){var t=e.name,r=e.className,c=e.label,s=z()("btn",r,{active:t===n});return Object(C.jsx)("button",{id:t,className:s,onClick:function(){return a(B(t))},children:c},t)}));return Object(C.jsx)("div",{className:"card shadow-lg mt-4",children:Object(C.jsxs)("div",{className:"card-body",children:[Object(C.jsx)("p",{className:"card-text",children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0439\u0442\u0435 \u0433\u0435\u0440\u043e\u0435\u0432 \u043f\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c"}),Object(C.jsx)("div",{className:"btn-group",children:o})]})})},Q=(n(25),function(){return Object(C.jsx)("main",{className:"app",children:Object(C.jsxs)("div",{className:"content",children:[Object(C.jsx)(L,{}),Object(C.jsxs)("div",{className:"content__interactive",children:[Object(C.jsx)(M,{}),Object(C.jsx)(K,{})]})]})})});n(26);s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(i.a,{store:H,children:Object(C.jsx)(Q,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5dd70ec7.chunk.js.map