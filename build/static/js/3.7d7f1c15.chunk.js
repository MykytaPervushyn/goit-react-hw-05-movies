(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[3,5],{18:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return s}));var c="https://api.themoviedb.org/3",o="52d240069c1d754f89fa7da7b1692ef8";function r(){return fetch("".concat(c,"/trending/movie/day?api_key=").concat(o)).then((function(t){return t.ok?t.json():Promise.reject(new Error("no movies today"))}))}function i(t){return fetch("".concat(c,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("no movies today"))}))}function a(t){return fetch("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("no movies today"))}))}function u(t){return fetch("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US")).then((function(t){return t.ok?t.json():Promise.reject(new Error("no movies today"))}))}function s(t){return fetch("".concat(c,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&include_adult=false")).then((function(t){if(t.ok)return t.json()}))}},19:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));var c=n(20),o=n.n(c),r=n(2);function i(t){var e=t.text;return Object(r.jsx)("h1",{className:o.a.title,children:e})}},20:function(t,e,n){t.exports={title:"PageHeading_title__S34YD"}},21:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return s}));var c=n(5),o=n(0),r=n(4),i=n(18),a=n(19),u=n(2);function s(){var t=Object(o.useState)(null),e=Object(c.a)(t,2),n=e[0],s=e[1],f=Object(o.useState)("idle"),d=Object(c.a)(f,2);d[0],d[1];return Object(o.useEffect)((function(){i.c().then(s)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(a.default,{text:"Movies"}),n&&Object(u.jsx)("ul",{children:n.results.map((function(t){return Object(u.jsxs)("li",{children:[t.original_title,Object(u.jsx)(r.b,{to:"/movies/".concat(t.id),children:t.original_title})]},t.id)}))})]})}}}]);
//# sourceMappingURL=3.7d7f1c15.chunk.js.map