(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={galleryItem:"ImageGalleryItem_galleryItem__1_a-z",galleryItemImage:"ImageGalleryItem_galleryItemImage__2KlOC"}},11:function(e,t,a){e.exports={overlay:"Modal_overlay__1HVQc",modal:"Modal_modal__3gxlV",button:"Modal_button__-zn2F"}},14:function(e,t,a){e.exports={Button:"Button_Button__bWm5F"}},20:function(e,t,a){},21:function(e,t,a){},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__H4LnD",form:"Searchbar_form__3sP3c",button:"Searchbar_button__1vJIy",buttonLabel:"Searchbar_buttonLabel__FaTAS",input:"Searchbar_input__3K2Hv"}},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(12),r=a.n(c),l=(a(20),a(3)),s=(a(21),a(4)),i=a.n(s),u=a(15),b=a(1);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),o=Object(l.a)(a,2),c=o[0],r=o[1];return Object(b.jsx)("header",{className:i.a.searchbar,children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),r("")):alert("Please enter search query")},className:i.a.form,children:[Object(b.jsxs)("button",{type:"submit",className:i.a.button,children:[Object(b.jsx)(u.a,{}),Object(b.jsx)("span",{className:i.a.buttonLabel,children:"Search"})]}),Object(b.jsx)("input",{className:i.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})}var m=a(7),d=a(9),g=a.n(d),h=a(10),f=a.n(h),O=function(e){var t=e.id,a=e.webformatURL,n=e.toggleModal,o=e.largeImageURL;return Object(b.jsx)("li",{className:f.a.galleryItem,children:Object(b.jsx)("img",{onClick:function(){return n(o)},className:f.a.galleryItemImage,src:a,alt:t})})},_=a(13),p=a.n(_),y=(a(43),a(14)),x=a.n(y),v=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:x.a.Button,onClick:t,children:"Load more"})};function I(e){var t=e.toggleModal,a=e.searchQuery,o=Object(n.useState)([]),c=Object(l.a)(o,2),r=c[0],s=c[1],i=Object(n.useState)("idle"),u=Object(l.a)(i,2),j=u[0],d=u[1],h=Object(n.useState)(1),f=Object(l.a)(h,2),_=f[0],y=f[1],x="https://pixabay.com/api",I="23560247-693fa480425212983640fe465";Object(n.useEffect)((function(){console.log("Render"),""!==a&&(d("pending"),y(1),fetch("".concat(x,"/?image_type=photo&orientation=horizontal&q=").concat(a,"&page=").concat(_,"&per_page=12&key=").concat(I)).then((function(e){return e.json()})).then((function(e){s(Object(m.a)(e.hits)),d("resolved")})))}),[a]);return Object(n.useEffect)((function(){1!==_&&(d("pending"),fetch("".concat(x,"/?image_type=photo&orientation=horizontal&q=").concat(a,"&page=").concat(_,"&per_page=12&key=").concat(I)).then((function(e){return e.json()})).then((function(e){s((function(t){return[].concat(Object(m.a)(t),Object(m.a)(e.hits))})),d("resolved")})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[_]),"idle"===j?Object(b.jsx)("div",{children:"Please enter your search query"}):"pending"===j?Object(b.jsx)(p.a,{className:g.a.loader,type:"TailSpin",color:"#00BFFF",height:100,width:100,timeout:3e3}):"resolved"===j?Object(b.jsxs)("ul",{className:g.a.gallery,children:[r.map((function(e){return Object(b.jsx)(O,{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,toggleModal:t},e.id)})),Object(b.jsx)(v,{onClick:function(){y((function(e){return e+1}))}})]}):void 0}var S=a(11),w=a.n(S);function L(e){var t=e.toggleModal,a=e.largeImageURL;Object(n.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[t]);var o=function(e){"Escape"===e.code&&t()};return Object(b.jsx)("div",{className:w.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:w.a.modal,children:Object(b.jsx)("img",{src:a,alt:""})})})}function k(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),r=Object(l.a)(c,2),s=r[0],i=r[1],u=Object(n.useState)(""),m=Object(l.a)(u,2),d=m[0],g=m[1],h=function(e){o(!a),g(e)};return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{onSubmit:i}),Object(b.jsx)(I,{toggleModal:h,searchQuery:s}),a&&Object(b.jsx)(L,{toggleModal:h,largeImageURL:d})]})}r.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__21uTr",loader:"ImageGallery_loader__1cTRn"}}},[[44,1,2]]]);
//# sourceMappingURL=main.32648d8d.chunk.js.map