"use strict";(self.webpackChunkgoit_react_hw_5_movies=self.webpackChunkgoit_react_hw_5_movies||[]).push([[879],{6488:function(t,n,e){e.d(n,{_L:function(){return i},on:function(){return o},tT:function(){return p},tx:function(){return h},zv:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"eda1cd62ac56f17bba5191ebaf4fad10"}}),i=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/week");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:n}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},2879:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(9439),a=e(2791),c=e(7689),u=e(6488),s=e(2301),i=e(184);function o(t){var n=t.cast;return(0,i.jsx)("ul",{className:s.Z.list,children:n&&n.map((function(t,n){var e=t.id,r=t.name,a=t.profile_path,c=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{className:s.Z.img,src:a?"https://image.tmdb.org/t/p/original".concat(a):"https://www.peakpx.com/en/hd-wallpaper-desktop-arzfv",alt:r,width:"400px"}),(0,i.jsx)("h3",{className:s.Z.name,children:r}),(0,i.jsxs)("p",{className:s.Z.desc,children:["Character: ",c]})]},"".concat(e,"-").concat(n))}))})}function p(){var t=(0,c.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),s=e[0],p=e[1];return(0,a.useEffect)((function(){(0,u.zv)(t).then((function(t){p(t.cast)})).catch((function(t){return console.log(t)}))}),[t]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o,{cast:s})})}},2301:function(t,n){n.Z={list:"List_list__AK7hC",img:"List_img__2KN-b",title:"List_title__ZjuBo",name:"List_name__AFBHu",desc:"List_desc__ap3L+"}}}]);
//# sourceMappingURL=879.183452dc.chunk.js.map