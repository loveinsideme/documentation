(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),r=n("aOgs"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),u=n("ReZb"),p=n("GCVy"),d=n("+6vE");var b=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return o.a.createElement("strong",null,t)},h=n("gnlW"),g=n("mwnC"),y=n("/Rw0"),E=n("dVM4"),O=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return o.a.createElement(O,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var j=v,x=n("MfeC");function k(e){var t=x.a.getPath(e.location.pathname),n=x.a.getVariantAndPage(e.root,t);if(!n)return null;var a=x.a.getVariantsForPage(e.root,n.page),r=[],i=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(i=e),r.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,i.variant.title),o.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},r)))}k.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,_=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),N=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,i=n.frontmatter,O=i.title,v=i.description,k=i.status,H=i.source,G=i.additionalContributors,M=void 0===G?[]:G,W=x.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:b,PromptReply:f,Screenshot:h.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(m.a,{title:O,description:v}),o.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(N,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},O),v))),null!=W?o.a.createElement(S,null,o.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(j,{items:n.tableOfContents.items})):null,o.a.createElement(z,null,k||H?o.a.createElement(l.k,{mb:3,alignItems:"center"},k?o.a.createElement(E.a,{status:k}):null,o.a.createElement(l.e,{mx:"auto"}),H?o.a.createElement(y.a,{href:H}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:r.b,mr:2}):o.a.createElement(l.r,{icon:r.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(j,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},kvY8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),r=n("O6H6"),i={},o={_frontmatter:i},c=r.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm test [-- <args>]\n\naliases: t, tst\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,'This runs a package\'s "test" script, if one was provided.'),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-run-script"},"npm run-script")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/using-npm/scripts"},"npm scripts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-start"},"npm start")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-restart"},"npm restart")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-stop"},"npm stop"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-test-md-f1f18bf3ac1da312e358.js.map