(this.webpackJsonpyasser=this.webpackJsonpyasser||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/profile.90d8539b.jpg"},15:function(e,a,t){e.exports=t(26)},20:function(e,a,t){},26:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),l=(t(20),t(2)),c=t(3),m=t(4),o=t(5),d=t(14),u=t.n(d),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).sidebarData=e.sidebarData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:u.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),t}(n.Component),g=t(6),b=t(9),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).landingData=e.landingData,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"}," ",this.landingData.address," \xb7 ",this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(g.a,{icon:b.c})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(g.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.facebook},r.a.createElement(g.a,{icon:b.a})))))}}]),t}(n.Component),f=(n.Component,function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).education=e.education,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map((function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("div",null,e.field),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))}))))}}]),t}(n.Component)),E=t(8),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).skills=e.skills,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-3"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map((function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(g.a,{icon:E.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))})))))}}]),t}(n.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).interests=e.interests,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),t}(n.Component),w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).awards=e.awards,n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(g.a,{icon:E.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))})))))}}]),t}(n.Component),k=t(7),D=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={landingData:k.landing,experience:k.experience,education:k.education,skills:k.skills,interests:k.interests,awards:k.awards},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(h,{landingData:this.state.landingData}),r.a.createElement(f,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(N,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{awards:this.state.awards})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"landing":{"firstName":"Yasser ","lastName":"BELHIMER","address":"City 100 Logts Dekakna-16049 DOUERA","phoneNumber":"+213791848188","bio":"Computer Science student and full stack developer","email":"yasserbelhimer@gmail.com","linkedin":"https://www.linkedin.com/in/yasser-belhimer-66735b124/","github":"https://github.com/yasserbelhimer","facebook":"https://www.facebook.com/romariz19"},"experience":[{"position":"Web Developer","organization":"Company one","aboutWork":"Details about work here","fromDate":"Date of starting","toDate":"Ending Date"},{"position":"App Developer","organization":"Company 2","aboutWork":"Details about work here","fromDate":"Date of starting","toDate":"ending date"}],"education":[{"university":"University Of Science And Technology Houari Boumediene","degree":"Licence","field":"Computer Science","gpa":"12.5","fromDate":"Sep 2016","toDate":"Jui 2020"}],"skills":[{"name":"C"},{"name":"Linux"},{"name":"Java "},{"name":"Java EE"},{"name":"Python"},{"name":"Php"},{"name":"Sql"},{"name":"MySql"},{"name":"JavaScript "},{"name":"Jquery "},{"name":"HTML "},{"name":"React "},{"name":"CSS "},{"name":"Bootstrap"},{"name":"Electron"},{"name":"LaTex"},{"name":"Git "},{"name":"Github "},{"name":"client/server administration"},{"name":"routing and switching"},{"name":"microsoft office excel"},{"name":"microsoft office word"}],"interests":{"paragraphOne":"Apart from being a full stack developer, I enjoy most of my time being outdoors. I enjoy walk in the street , and swimming.","paragraphTwo":"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, and I spend a large amount of my free time exploring the latest technology advancements in the  development world and the intelligence artificial ."},"awards":[{"awardDetail":"Git and GitHub"},{"awardDetail":"Using Python to Interact with the Operating System"},{"awardDetail":"Develop your website with PHP and MySQL"},{"awardDetail":"Develop websites with Java EE"},{"awardDetail":"JavaScript"},{"awardDetail":"HTML Fundamentals"},{"awardDetail":"WordPress"}]}')}},[[15,1,2]]]);
//# sourceMappingURL=main.70633a2f.chunk.js.map