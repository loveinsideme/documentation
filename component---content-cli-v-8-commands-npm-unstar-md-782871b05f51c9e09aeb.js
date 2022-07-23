(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{"3iNi":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),r={},o={_frontmatter:r},c=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm unstar [<package-spec>...]\n")),Object(l.b)("p",null,"Note: This command is unaware of workspaces."),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,'"Unstarring" a package is the opposite of ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-star"},Object(l.b)("inlineCode",{parentName:"a"},"npm star")),",\nit removes an item from your list of favorite packages."),Object(l.b)("h3",null,"More"),Object(l.b)("p",null,"There's also these extra commands to help you manage your favorite packages:"),Object(l.b)("h4",null,"Star"),Object(l.b)("p",null,'You can "star" a package using ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-star"},Object(l.b)("inlineCode",{parentName:"a"},"npm star"))),Object(l.b)("h4",null,"Listing stars"),Object(l.b)("p",null,"You can see all your starred packages using ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-stars"},Object(l.b)("inlineCode",{parentName:"a"},"npm stars"))),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"registry")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "',Object(l.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(l.b)("li",{parentName:"ul"},"Type: URL")),Object(l.b)("p",null,"The base URL of the npm registry."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"unicode")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false on windows, true on mac/unix systems with a unicode locale,\nas defined by the ",Object(l.b)("inlineCode",{parentName:"li"},"LC_ALL"),", ",Object(l.b)("inlineCode",{parentName:"li"},"LC_CTYPE"),", or ",Object(l.b)("inlineCode",{parentName:"li"},"LANG")," environment variables."),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When set to true, npm uses unicode characters in the tree output. When\nfalse, it uses ascii characters instead of unicode glyphs."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"otp")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-star"},"npm star")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-stars"},"npm stars")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-view"},"npm view")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-whoami"},"npm whoami")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-adduser"},"npm adduser"))))}m.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),m=n("pD55"),s=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},f=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),j=n("dVM4"),y=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var v=E,N=n("MfeC");function w(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),i=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),i.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,r.variant.title),o.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=w,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,y=r.title,E=r.description,w=r.status,L=r.source,D=r.additionalContributors,W=void 0===D?[]:D,z=N.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:f.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(m.a,{title:y,description:E}),o.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},y),E))),null!=z?o.a.createElement(S,null,o.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(v,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,w||L?o.a.createElement(l.k,{mb:3,alignItems:"center"},w?o.a.createElement(j.a,{status:w}):null,o.a.createElement(l.e,{mx:"auto"}),L?o.a.createElement(g.a,{href:L}):null):null,n.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:i.b,mr:2}):o.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-unstar-md-782871b05f51c9e09aeb.js.map