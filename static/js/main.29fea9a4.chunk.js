(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),n=a(4),m=a.n(n),s=(a(18),a(5)),c=a.n(s),r=a(7),o=a(2),_=(a(20),a(21),a(22),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h5",{className:"filter-type"},"Genres"),i.a.createElement("ul",{className:"filters"},i.a.createElement("li",{className:"filters__item"},"New movies"),i.a.createElement("li",{className:"filters__item"},"Action"),i.a.createElement("li",{className:"filters__item"},"Documentary"),i.a.createElement("li",{className:"filters__item"},"Comedy"),i.a.createElement("li",{className:"filters__item"},"Family"),i.a.createElement("li",{className:"filters__item"},"Horror"),i.a.createElement("li",{className:"filters__item"},"War")),i.a.createElement("h5",{className:"filter-type"},"Rated"),i.a.createElement("ul",{className:"filters"},i.a.createElement("li",{className:"filters__item"},"G"),i.a.createElement("li",{className:"filters__item"},"R"),i.a.createElement("li",{className:"filters__item"},"PG"),i.a.createElement("li",{className:"filters__item"},"PG-13")))}),v=(a(23),function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),n=a[0],m=a[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"searchbar",onSubmit:function(t){t.preventDefault(),e.handleSearch(n)},spellCheck:"false"},i.a.createElement("input",{onChange:function(e){m(e.target.value)},value:n,className:"searchbar__field",type:"text",placeholder:"Search for movie..."})))}),u=(a(24),function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",{className:"latest_movies__heading"},"Latest Movies"),i.a.createElement("ul",{className:"latest_movies__list"},i.a.createElement("li",{className:"latest_movies__item"},i.a.createElement("div",{className:"latest_movies__item-left"},i.a.createElement("img",{className:"latest_movies__item__img",src:"/img/bad-boys-forlife.jpg",alt:"movie cover"})),i.a.createElement("div",{className:"latest_movies__item-right"},i.a.createElement("h4",{className:"latest_movies__item__title"},"Bad boys for life"),i.a.createElement("p",{className:"latest_movies__item__rating"},"Rated R"),i.a.createElement("p",{className:"latest_movies__item__genre"},"Comedy/Action"))),i.a.createElement("li",{className:"latest_movies__item"},i.a.createElement("div",{className:"latest_movies__item-left"},i.a.createElement("img",{className:"latest_movies__item__img",src:"/img/harley-queen.jpg",alt:"movie cover"})),i.a.createElement("div",{className:"latest_movies__item-right"},i.a.createElement("h4",{className:"latest_movies__item__title"},"Harley Quinn: Birds of Prey"),i.a.createElement("p",{className:"latest_movies__item__rating"},"Rated R"),i.a.createElement("p",{className:"latest_movies__item__genre"},"Action/Superhero"))),i.a.createElement("li",{className:"latest_movies__item"},i.a.createElement("div",{className:"latest_movies__item-left"},i.a.createElement("img",{className:"latest_movies__item__img",src:"/img/sonic.jpg",alt:"movie cover"})),i.a.createElement("div",{className:"latest_movies__item-right"},i.a.createElement("h4",{className:"latest_movies__item__title"},"Sonic the Hedgehog"),i.a.createElement("p",{className:"latest_movies__item__rating"},"Rated R"),i.a.createElement("p",{className:"latest_movies__item__genre"},"Adventure/Family"))),i.a.createElement("li",{className:"latest_movies__item"},i.a.createElement("div",{className:"latest_movies__item-left"},i.a.createElement("img",{className:"latest_movies__item__img",src:"/img/bloodshot.jpg",alt:"movie cover"})),i.a.createElement("div",{className:"latest_movies__item-right"},i.a.createElement("h4",{className:"latest_movies__item__title"},"Bloodshot"),i.a.createElement("p",{className:"latest_movies__item__rating"},"Rated PG-13"),i.a.createElement("p",{className:"latest_movies__item__genre"},"Action/Adventure"))),i.a.createElement("li",{className:"latest_movies__item"},i.a.createElement("div",{className:"latest_movies__item-left"},i.a.createElement("img",{className:"latest_movies__item__img",src:"../img/onward.jpg",alt:"movie cover"})),i.a.createElement("div",{className:"latest_movies__item-right"},i.a.createElement("h4",{className:"latest_movies__item__title"},"Onward"),i.a.createElement("p",{className:"latest_movies__item__rating"},"Rated PG"),i.a.createElement("p",{className:"latest_movies__item__genre"},"Family/Animation")))))}),E=(a(25),function(e){var t;if(t=""===e.movie.Poster||"N/A"===e.movie.Poster?"img/no-image.jpg":e.movie.Poster,e.movie){var a;try{a=e.movie.Ratings[0].Value}catch(n){a="N/A"}var l=[];return""!==e.movie.Actors?l=e.movie.Actors.split(", "):l.push("There are no actors in our database for this movie"),i.a.createElement("div",{className:"movieView"},i.a.createElement("button",{className:"backBtn",onClick:function(){e.setView("blog")}},"< Back"),i.a.createElement("div",{className:"movie","data-itemid":e.movie.imdbID},i.a.createElement("div",{className:"movie__img"},i.a.createElement("img",{src:t,alt:e.movie.Title})),i.a.createElement("div",{className:"movie__content"},i.a.createElement("div",{className:"movie__content__title"},i.a.createElement("h2",{className:"movie__content__title--title"},e.movie.Title),i.a.createElement("h3",{className:"movie__content__title--year"},e.movie.Year)),i.a.createElement("hr",null),i.a.createElement("div",{className:"movie__content__info"},i.a.createElement("p",{className:"movie__content__info--rated"},"Rated: ",e.movie.Rated),i.a.createElement("p",{className:"movie__content__info--genres"},e.movie.Genre),i.a.createElement("p",{className:"movie__content__info--rating"},"Rating: ",a)),i.a.createElement("hr",null),i.a.createElement("div",{className:"movie__content__desc"},i.a.createElement("h4",null,"Plot:"),i.a.createElement("p",null,e.movie.Plot)),i.a.createElement("hr",null),i.a.createElement("div",{className:"movie__content__cast"},i.a.createElement("h4",null,"Main cast:"),i.a.createElement("ul",{className:"movie__content__cast-list"},l.map((function(e,t){return i.a.createElement("li",{className:"movie__content__cast--item",key:"actor_".concat(t)},e)})))))))}return i.a.createElement("div",null,i.a.createElement("h5",null,"Movie informations will show up here."))}),d=a(46),g=(a(26),function(e){var t=Math.ceil(e.movies.length/4),a=4*e.currentPage,l=a-4,n=e.movies.slice(l,a);return i.a.createElement("div",{className:"moviesList"},i.a.createElement("div",{className:"moviesList__container"},n.map((function(t){return i.a.createElement("div",{className:"movies__item","data-itemid":t.imdbID,key:"item_".concat(t.imdbID),onClick:function(){e.setId(t.imdbID),e.setView("single")}},i.a.createElement("img",{src:"N/A"!==t.Poster&&t.Poster?t.Poster:"img/no-image.jpg",alt:t.Title,className:"movies__item__image"}),i.a.createElement("h4",null,t.Title),i.a.createElement("h5",null,t.Year))}))),i.a.createElement("div",{className:"pagination"},i.a.createElement(d.a,{count:t,color:"secondary",defaultPage:1,page:e.currentPage,onChange:function(t,a){e.setCurrentPage(a)}})))}),f=function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),n=a[0],m=a[1];return Object(l.useEffect)((function(){function t(){return(t=Object(r.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://www.omdbapi.com/?i=".concat(e.id,"&plot=full").concat("&apikey=22b41965")).then((function(e){return e.json()})).then((function(e){return m(e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"single"===e.view&&function(){t.apply(this,arguments)}()}),[e.view,e.id]),"True"!==e.data.Response?"False"===e.data.Response?i.a.createElement("h5",null,"We couldn't find a movie with that name."):i.a.createElement("div",null,i.a.createElement("h5",null,"Movie informations will show up here.")):"blog"===e.view?i.a.createElement(g,{movies:e.data.Search,currentPage:e.currentPage,setCurrentPage:e.setCurrentPage,setView:e.setView,setId:e.setId}):"single"===e.view?i.a.createElement(E,{movie:n,setView:e.setView}):void 0},N=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],m=Object(l.useState)(""),s=Object(o.a)(m,2),E=s[0],d=s[1],g=Object(l.useState)(1),N=Object(o.a)(g,2),h=N[0],p=N[1],b=Object(l.useState)("blog"),w=Object(o.a)(b,2),j=w[0],y=w[1],P=Object(l.useState)(""),O=Object(o.a)(P,2),R=O[0],k=O[1],S=Object(l.useRef)(!0);return Object(l.useEffect)((function(){function e(){return(e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?s=".concat(E,"&plot=full").concat("&apikey=22b41965")).then((function(e){return e.json()})).then((function(e){return n(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}S.current?S.current=!1:(""!==E?function(){e.apply(this,arguments)}():n(""),p(1),y("blog"),k(""))}),[E]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"bgImg",style:{backgroundImage:""!==a&&a.hasOwnProperty("Poster")&&""!==a.Poster&&"N/A"!==a.Poster&&"False"!==a.Response?"url(".concat(a.Poster,")"):"url('img/cinema.jpg')"}}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"side-left"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{src:"./img/logo-movie.png",alt:"logo",className:"logo"})),i.a.createElement(_,null)),i.a.createElement("div",{className:"side-right"},i.a.createElement("div",{className:"search"},i.a.createElement(v,{handleSearch:d})),i.a.createElement("div",{className:"content"},i.a.createElement("main",{className:"main-frame"},i.a.createElement(f,{data:a,currentPage:h,setCurrentPage:p,setView:y,view:j,setId:k,id:R})),i.a.createElement("div",{className:"latest_movies"},i.a.createElement(u,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.29fea9a4.chunk.js.map