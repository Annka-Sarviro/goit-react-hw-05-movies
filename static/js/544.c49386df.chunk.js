"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544,953],{3829:function(t,e,n){n.d(e,{Z:function(){return f}});n(2791);var r=n(501),a=n(6871),c="MovieCard_item__c3tx6",i="MovieCard_img__YZsvZ",u=n(184),s=function(t){var e=t.movie,n=(0,a.TH)();return(0,u.jsx)("li",{className:c,children:(0,u.jsxs)(r.OL,{to:"/movies/".concat(e.id),state:{from:n},children:[(0,u.jsx)("img",{className:i,src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:"movie.title"}),e.title]})},e.id)},o="MovieList_list__yjDCC",f=function(t){var e=t.movies;return(0,u.jsx)("ul",{className:o,children:e.map((function(t){return(0,u.jsx)(s,{movie:t},t.id)}))})}},9544:function(t,e,n){n.r(e),n.d(e,{Home:function(){return v}});var r=n(5861),a=n(885),c=n(7757),i=n.n(c),u=n(4390),s=n(2791),o=n(5953),f=n(3829),p=n(184),v=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1];return(0,s.useEffect)((function(){function t(){return(t=(0,r.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,u.e2)();case 3:e=t.sent,n=e.results,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:o.default.tranding_movies,children:[(0,p.jsx)("h1",{className:o.default.title,children:"Tranding Movies"}),(0,p.jsx)(f.Z,{movies:n})]}),";"]})}},4390:function(t,e,n){n.d(e,{V0:function(){return f},al:function(){return p},au:function(){return v},e2:function(){return o},q5:function(){return d}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),u=n.n(i),s="cdd1c73df14b33d6290e56a1d1d58143";u().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/search/movie?query=".concat(e,"&api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},5953:function(t,e,n){n.r(e),e.default={tranding_movies:"Home_tranding_movies__cpscT",title:"Home_title__L087v"}}}]);
//# sourceMappingURL=544.c49386df.chunk.js.map