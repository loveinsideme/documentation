(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),l=n("aOgs"),r=n("q1tI"),o=n.n(r),c=n("7ljp"),s=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},g=n("gnlW"),f=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return o.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var N=w,v=n("MfeC");function E(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(E.Menu,{direction:e.direction,width:e.menuWidth},l)))}E.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var C=E,x=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),k=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,w=r.description,E=r.status,z=r.source,D=r.additionalContributors,W=void 0===D?[]:D,H=v.a.getVariantRoot(a.pathname);return o.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:g.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(s.a,{title:j,description:w}),o.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(f.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),o.a.createElement(k,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},j),w))),null!=H?o.a.createElement(S,null,o.a.createElement(C,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(N,{items:n.tableOfContents.items})):null,o.a.createElement(T,null,E||z?o.a.createElement(i.k,{mb:3,alignItems:"center"},E?o.a.createElement(O.a,{status:E}):null,o.a.createElement(i.e,{mx:"auto"}),z?o.a.createElement(y.a,{href:z}):null):null,n.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(N,{items:n.tableOfContents.items})))}))):null,t,o.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},t3Bu:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("O6H6"),r={},o={_frontmatter:r},c=l.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm adduser [--registry=url] [--scope=@orgname] [--always-auth] [--auth-type=legacy]\n\naliases: login, add-user\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"Create or verify a user named ",Object(i.b)("inlineCode",{parentName:"p"},"<username>")," in the specified registry, and\nsave the credentials to the ",Object(i.b)("inlineCode",{parentName:"p"},".npmrc")," file. If no registry is specified,\nthe default registry will be used (see ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/config"},Object(i.b)("inlineCode",{parentName:"a"},"config")),")."),Object(i.b)("p",null,"The username, password, and email are read in from prompts."),Object(i.b)("p",null,"To reset your password, go to ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/forgot"},"https://www.npmjs.com/forgot")),Object(i.b)("p",null,"To change your email address, go to ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/email-edit"},"https://www.npmjs.com/email-edit")),Object(i.b)("p",null,"You may use this command multiple times with the same user account to\nauthorize on a new machine.  When authenticating on a new machine,\nthe username, password and email address must all match with\nyour existing record."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm login")," is an alias to ",Object(i.b)("inlineCode",{parentName:"p"},"adduser")," and behaves exactly the same way."),Object(i.b)("h3",null,"Configuration"),Object(i.b)("h4",null,"registry"),Object(i.b)("p",null,"Default: ",Object(i.b)("a",{parentName:"p",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/")),Object(i.b)("p",null,"The base URL of the npm package registry. If ",Object(i.b)("inlineCode",{parentName:"p"},"scope")," is also specified,\nthis registry will only be used for packages with that scope. ",Object(i.b)("inlineCode",{parentName:"p"},"scope")," defaults\nto the scope of the project directory you're currently in, if any. See ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/scope"},Object(i.b)("inlineCode",{parentName:"a"},"scope")),"."),Object(i.b)("h4",null,"scope"),Object(i.b)("p",null,"Default: none"),Object(i.b)("p",null,"If specified, the user and login credentials given will be associated\nwith the specified scope. See ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/scope"},Object(i.b)("inlineCode",{parentName:"a"},"scope")),". You can use both at the same time,\ne.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"    npm adduser --registry=http://myregistry.example.com --scope=@myco\n")),Object(i.b)("p",null,"This will set a registry for the given scope and login or create a user for\nthat registry at the same time."),Object(i.b)("h4",null,"always-auth"),Object(i.b)("p",null,"Default: false"),Object(i.b)("p",null,"If specified, save configuration indicating that all requests to the given\nregistry should include authorization information. Useful for private\nregistries. Can be used with ",Object(i.b)("inlineCode",{parentName:"p"},"--registry")," and / or ",Object(i.b)("inlineCode",{parentName:"p"},"--scope"),", e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"    npm adduser --registry=http://private-registry.example.com --always-auth\n")),Object(i.b)("p",null,"This will ensure that all requests to that registry (including for tarballs)\ninclude an authorization header. This setting may be necessary for use with\nprivate registries where metadata and package tarballs are stored on hosts with\ndifferent hostnames. See ",Object(i.b)("inlineCode",{parentName:"p"},"always-auth")," in ",Object(i.b)("a",{parentName:"p",href:"/cli/v6/using-npm/config"},Object(i.b)("inlineCode",{parentName:"a"},"config"))," for more details on always-auth. Registry-specific configuration of ",Object(i.b)("inlineCode",{parentName:"p"},"always-auth")," takes precedence over any global configuration."),Object(i.b)("h4",null,"auth-type"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Default: ",Object(i.b)("inlineCode",{parentName:"li"},"'legacy'")),Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("inlineCode",{parentName:"li"},"'legacy'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'sso'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'saml'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'oauth'"))),Object(i.b)("p",null,"What authentication strategy to use with ",Object(i.b)("inlineCode",{parentName:"p"},"adduser"),"/",Object(i.b)("inlineCode",{parentName:"p"},"login"),". Some npm registries\n(for example, npmE) might support alternative auth strategies besides classic\nusername/password entry in legacy npm."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/using-npm/registry"},"npm registry")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-config"},"npm config")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/npmrc"},"npmrc")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-owner"},"npm owner")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-whoami"},"npm whoami"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-adduser-md-79c7b60d6e17b38bd80b.js.map