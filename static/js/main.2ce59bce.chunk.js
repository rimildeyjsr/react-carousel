(this["webpackJsonpreact-carousel"]=this["webpackJsonpreact-carousel"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),i=a.n(r),n=a(6),o=a.n(n),s=(a(13),a(2)),A=(a(14),a(15),function(e){var t=e.name;return Object(c.jsx)("div",{className:"chip-wrapper",children:Object(c.jsx)("p",{className:"chip-text",children:t})})}),l=(a(16),function(e){var t=e.bookInfo,a=t.name,r=t.imageLink,i=t.imageAlt,n=t.price,o=t.category,s=e.middleElement,l=void 0!==s&&s,g=l?1.2:1,d=l?50:20,m=l?"0px 6px 6px rgba(0, 0, 0, 0.25)":"0px 4px 4px rgba(0, 0, 0, 0.25)";return Object(c.jsxs)("div",{className:"carousel-item",style:{transform:"scale("+g+")",padding:d+"px"},children:[Object(c.jsx)("div",{className:"carousel-image-wrapper",style:{boxShadow:m},children:Object(c.jsx)("img",{className:"carousel-image",src:r,alt:i})}),Object(c.jsxs)("div",{className:"carousel-information",style:{boxShadow:m},children:[Object(c.jsx)("h4",{className:"carousel-name",children:a}),Object(c.jsx)("div",{className:"carousel-categories",children:o.map((function(e,t){return Object(c.jsx)(A,{name:e},t)}))}),Object(c.jsxs)("p",{className:"carousel-price",children:["Rs ",n,"/-"]})]})]})}),g=(a(17),function(e){var t=e.list,a=Object(r.useState)(1),i=Object(s.a)(a,2),n=i[0],o=i[1],A=Object(r.useState)(0),g=Object(s.a)(A,2),d=g[0],m=g[1],u=Object(r.useState)(t),b=Object(s.a)(u,2),h=b[0],j=b[1];Object(r.useEffect)((function(){j(t)}),[t]);return Object(c.jsxs)("section",{children:[Object(c.jsx)("button",{onClick:function(){var e=n-1;e-1>=0&&(o(e),m(d+392))},className:n-2>=0?"arrow-button":"restricted-cursor arrow-button",disabled:n-2<0,children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB3SURBVHgB7ZXBCYAwEARX87EcS7AkO/BKSzu+LCGecKKgnxC4e2QH1o+PGUIgQBubLYRLXGzuEW/5vRVO/MkP3QwHKKeccsr7knstVF5G/QwIJOmyRSwIRhB4CRnBCEYwot+IhHoyvm/HpNvtnxuC5wQEQQga5SekfMmoyckdPgAAAABJRU5ErkJggg==",alt:"left arrow"})}),Object(c.jsx)("div",{className:"carousel",children:h.length>0?Object(c.jsx)("div",{className:"carousel-wrapper",style:{transform:"translateX("+d+"px"},children:h.map((function(e,t){return Object(c.jsx)(l,{bookInfo:e,middleElement:t===n},e.key)}))}):Object(c.jsx)("h1",{className:"no-item-text",children:"No items to show here!"})}),Object(c.jsx)("button",{onClick:function(){var e=n+1;e+1<h.length&&(o(e),m(d-392))},className:n+2<h.length?"arrow-button":"restricted-cursor  arrow-button",disabled:n+2>=h.length,children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7ZKxDYAwEAMNYiBGYwO8MSMEHiVSmlSJ3o1P8rd3UgLMcddJCHGpS4/o5ZKI89vjCEc4whGOWBVRRPsjDuhgnB1atjiqJyASGH1CIgHLLbecSMByiTy4lPIGlfI+gpjgBTl0ynAdSsMRAAAAAElFTkSuQmCC",alt:"right arrow"})})]})}),d=a(7),m={WAR:"war",FANTASY:"fantasy",ADVENTURE:"adventure",EPIC:"epic",HUMOUR:"humour",SUPERNATURAL:"supernatural",ROMANCE:"romance",CHILDREN:"children",NON_FICTION:"non-fiction"},u=(a(18),a.p+"static/media/book-thief.a3674878.jpg"),b=a.p+"static/media/books-of-earthsea.3f810d24.jpg",h=a.p+"static/media/game-of-thrones.867be59a.jpg",j=a.p+"static/media/good-omens.8026c0dd.jpg",p=a.p+"static/media/great-gatsby.7fb1e6f8.jpg",f=a.p+"static/media/harry-potter.dd79516a.jpg",k=a.p+"static/media/hitchikers-guide-to-galaxy.c302dcb0.jpeg",O=a.p+"static/media/lord-of-the-rings.bd0c75f5.jpg",y=a.p+"static/media/pride-and-prejudice.bbca10ec.jpg",x=a.p+"static/media/sapiens.351114c1.jpg",N=a.p+"static/media/wuthering-heights.d2751fdd.jpg",v=[{imageLink:u,imageAlt:"book thief book cover",name:"The book thief",price:388,category:[m.WAR],key:1},{imageLink:b,imageAlt:"books of earthsea book cover",name:"Books of Earthsea",price:2599,category:[m.FANTASY],key:2},{imageLink:h,imageAlt:"Game of thrones book cover",name:"Game of thrones - book set",price:2493,category:[m.FANTASY],key:3},{imageLink:j,imageAlt:"Good omens book cover",name:"Good Omens",price:303,category:[m.FANTASY],key:4},{imageLink:p,imageAlt:"Great Gatsby book cover",name:"The Great Gatsby",price:99,category:[m.ROMANCE],key:5},{imageLink:f,imageAlt:"harry potter book cover",name:"Harry Potter - book set",price:2505,category:[m.FANTASY],key:6},{imageLink:k,imageAlt:"Hitchhikers guide to the galaxy book cover",name:"Hitchikers Guide to the galaxy",price:574,category:[m.HUMOUR],key:7},{imageLink:O,imageAlt:"Lord of the rings book cover",name:"Lord of the rings",price:969,category:[m.FANTASY],key:8},{imageLink:y,imageAlt:"Pride and prejudice book cover",name:"Pride and prejudice",price:112,category:[m.ROMANCE],key:9},{imageLink:x,imageAlt:"sapiens book cover",name:"Sapiens",price:399,category:[m.NON_FICTION],key:10},{imageLink:N,imageAlt:"wuthering heights book cover",name:"Wuthering heights",price:113,category:[m.ROMANCE],key:11}],w=function(e){var t=e.setBookList,a=Object(r.useState)([]),i=Object(s.a)(a,2),n=i[0],o=i[1],A=Object(r.useRef)(),l=function(e,t){var a=n.indexOf(e);n.splice(a,1),o(n),A.current.children[t].style.backgroundColor="white",A.current.children[t].style.color="#b9c95a"},g=function(e,t){n.push(e),o(n),A.current.children[t].style.backgroundColor="#b9c95a",A.current.children[t].style.color="white"},u=function(e){return n.includes(e)},b=function(){var e=[];n.length?(n.forEach((function(t){v.forEach((function(a){a.category.includes(m[t])&&e.push(a)}))})),e=Object(d.a)(new Map(e.map((function(e){return[e.key,e]}))).values()),t(e)):t(v)};return Object(c.jsx)("div",{className:"category-filters-wrapper",ref:A,children:Object.keys(m).map((function(e,t){return Object(c.jsx)("button",{className:"filter-category-wrapper",onClick:function(){return function(e,t){u(e)?l(e,t):g(e,t),b()}(e,t)},children:Object(c.jsx)("p",{className:"filter-text",children:m[e]})},t)}))})};var C=function(){var e=Object(r.useState)(v),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(g,{list:a}),Object(c.jsxs)("div",{className:"category-filter-container",children:[Object(c.jsx)("h2",{className:"filter-heading",children:"Filter"}),Object(c.jsx)(w,{setBookList:i})]})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),i(e),n(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.2ce59bce.chunk.js.map