(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),r=n("aOgs"),o=n("q1tI"),l=n.n(o),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return l.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},l.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return l.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),j=n("dVM4"),O=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return l.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return l.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},l.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?l.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var v=w,k=n("MfeC");function E(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),r=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),r.push(l.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),l.a.createElement(i.i,{overlay:e.overlay},l.a.createElement(i.i.Button,null,o.variant.title),l.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},r)))}E.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=E,C=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),S=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,O=o.title,w=o.description,E=o.status,z=o.source,D=o.additionalContributors,W=void 0===D?[]:D,H=k.a.getVariantRoot(a.pathname);return l.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:g.a}},l.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},l.a.createElement(s.a,{title:O,description:w}),l.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),l.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},l.a.createElement(i.e,{display:["none",null,null,"block"]},l.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),l.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},l.a.createElement(I,null,l.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},l.a.createElement(i.e,null,l.a.createElement(i.e,null,l.a.createElement(i.m,{as:"h1"},O),w))),null!=H?l.a.createElement(_,null,l.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?l.a.createElement(S,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},l.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),l.a.createElement(v,{items:n.tableOfContents.items})):null,l.a.createElement(T,null,E||z?l.a.createElement(i.k,{mb:3,alignItems:"center"},E?l.a.createElement(j.a,{status:E}):null,l.a.createElement(i.e,{mx:"auto"}),z?l.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?l.a.createElement(i.e,{display:["block",null,"none"],mb:3},l.a.createElement(i.h,null,(function(e){var t=e.open;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?l.a.createElement(i.r,{icon:r.b,mr:2}):l.a.createElement(i.r,{icon:r.c,mr:2}),"Table of contents"),l.a.createElement(i.e,{pt:1},l.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,l.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},rvlF:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),r=n("O6H6"),o={},l={_frontmatter:o},c=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"To resolve packages by name and version, npm talks to a registry website\nthat implements the CommonJS Package Registry specification for reading\npackage info."),Object(i.b)("p",null,"npm is configured to use the ",Object(i.b)("strong",{parentName:"p"},"npm public registry")," at\n",Object(i.b)("a",{parentName:"p",href:"https://registry.npmjs.org"},"https://registry.npmjs.org")," by default. Use of the npm public registry is\nsubject to terms of use available at ",Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/policies/terms"},"https://docs.npmjs.com/policies/terms"),"."),Object(i.b)("p",null,"You can configure npm to use any compatible registry you like, and even run\nyour own registry. Use of someone else's registry may be governed by their\nterms of use."),Object(i.b)("p",null,"npm's package registry implementation supports several\nwrite APIs as well, to allow for publishing packages and managing user\naccount information."),Object(i.b)("p",null,"The npm public registry is powered by a CouchDB database,\nof which there is a public mirror at ",Object(i.b)("a",{parentName:"p",href:"https://skimdb.npmjs.com/registry"},"https://skimdb.npmjs.com/registry"),"."),Object(i.b)("p",null,"The registry URL used is determined by the scope of the package (see\n",Object(i.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},Object(i.b)("inlineCode",{parentName:"a"},"scope")),". If no scope is specified, the default registry is used, which is\nsupplied by the ",Object(i.b)("inlineCode",{parentName:"p"},"registry")," config parameter.  See ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-config"},Object(i.b)("inlineCode",{parentName:"a"},"npm config")),",\n",Object(i.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/npmrc"},Object(i.b)("inlineCode",{parentName:"a"},"npmrc")),", and ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/using-npm/config"},Object(i.b)("inlineCode",{parentName:"a"},"config"))," for more on managing npm's configuration."),Object(i.b)("p",null,'When the default registry is used in a package-lock or shrinkwrap is has the\nspecial meaning of "the currently configured registry". If you create a lock\nfile while using the default registry you can switch to another registry and\nnpm will install packages from the new registry, but if you create a lock\nfile while using a custom registry packages will be installed from that\nregistry even after you change to another registry.'),Object(i.b)("h3",null,"Does npm send any information about me back to the registry?"),Object(i.b)("p",null,"Yes."),Object(i.b)("p",null,"When making requests of the registry npm adds two headers with information\nabout your environment:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Npm-Scope")," – If your project is scoped, this header will contain its\nscope. In the future npm hopes to build registry features that use this\ninformation to allow you to customize your experience for your\norganization."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Npm-In-CI"),' – Set to "true" if npm believes this install is running in a\ncontinuous integration environment, "false" otherwise. This is detected by\nlooking for the following environment variables: ',Object(i.b)("inlineCode",{parentName:"li"},"CI"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TDDIUM"),",\n",Object(i.b)("inlineCode",{parentName:"li"},"JENKINS_URL"),", ",Object(i.b)("inlineCode",{parentName:"li"},"bamboo.buildKey"),". If you'd like to learn more you may find\nthe ",Object(i.b)("a",{parentName:"li",href:"https://github.com/npm/npm-registry-client/pull/129"},"original PR"),"\ninteresting.\nThis is used to gather better metrics on how npm is used by humans, versus\nbuild farms.")),Object(i.b)("p",null,"The npm registry does not try to correlate the information in these headers\nwith any authenticated accounts that may be used in the same requests."),Object(i.b)("h3",null,"How can I prevent my package from being published in the official registry?"),Object(i.b)("p",null,"Set ",Object(i.b)("inlineCode",{parentName:"p"},'"private": true')," in your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," to prevent it from being\npublished at all, or\n",Object(i.b)("inlineCode",{parentName:"p"},'"publishConfig":{"registry":"http://my-internal-registry.local"}'),"\nto force it to be published only to your internal/private registry."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," for more info on what goes in the package.json file."),Object(i.b)("h3",null,"Where can I find my own, & other's, published packages?"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"https://www.npmjs.com/")),Object(i.b)("h3",null,"See also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/config"},"config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v8/using-npm/developers"},"npm developers"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-using-npm-registry-md-8b9671373be2d8625b5d.js.map