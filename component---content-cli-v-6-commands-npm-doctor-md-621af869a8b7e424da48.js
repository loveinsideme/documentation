(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),i=n("u9kb"),o=n("aOgs"),l=n("q1tI"),r=n.n(l),s=n("7ljp"),c=n("pD55"),m=n("8Aig"),p=n("ReZb"),u=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},y=n("gnlW"),g=n("mwnC"),f=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function v(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(v,{items:e.items,depth:n+1}):null)})))}v.defaultProps={depth:0};var w=v,N=n("MfeC");function k(e){var t=N.a.getPath(e.location.pathname),n=N.a.getVariantAndPage(e.root,t);if(!n)return null;var a=N.a.getVariantsForPage(e.root,n.page),o=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),o.push(r.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(i.i,{overlay:e.overlay},r.a.createElement(i.i.Button,null,l.variant.title),r.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=k,C=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,v=l.description,k=l.status,A=l.source,W=l.additionalContributors,G=void 0===W?[]:W,H=N.a.getVariantRoot(a.pathname);return r.a.createElement(s.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:h,Screenshot:y.a}},r.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(c.a,{title:j,description:v}),r.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(i.e,{display:["none",null,null,"block"]},r.a.createElement(g.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(i.e,null,r.a.createElement(i.e,null,r.a.createElement(i.m,{as:"h1"},j),v))),null!=H?r.a.createElement(S,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},r.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(I,null,k||A?r.a.createElement(i.k,{mb:3,alignItems:"center"},k?r.a.createElement(O.a,{status:k}):null,r.a.createElement(i.e,{mx:"auto"}),A?r.a.createElement(f.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(i.e,{display:["block",null,"none"],mb:3},r.a.createElement(i.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(i.r,{icon:o.b,mr:2}):r.a.createElement(i.r,{icon:o.c,mr:2}),"Table of contents"),r.a.createElement(i.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(G.map((function(e){return{login:e}})))}))))))}},"n7/E":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("O6H6"),l={},r={_frontmatter:l},s=o.a;function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(s,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm doctor\n")),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," runs a set of checks to ensure that your npm installation has\nwhat it needs to manage your JavaScript packages. npm is mostly a standalone tool, but it does\nhave some basic requirements that must be met:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Node.js and git must be executable by npm."),Object(i.b)("li",{parentName:"ul"},"The primary npm registry, ",Object(i.b)("inlineCode",{parentName:"li"},"registry.npmjs.com"),", or another service that uses\nthe registry API, is available."),Object(i.b)("li",{parentName:"ul"},"The directories that npm uses, ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," (both locally and globally),\nexist and can be written by the current user."),Object(i.b)("li",{parentName:"ul"},"The npm cache exists, and the package tarballs within it aren't corrupt.")),Object(i.b)("p",null,"Without all of these working properly, npm may not work properly.  Many issues\nare often attributable to things that are outside npm's code base, so ",Object(i.b)("inlineCode",{parentName:"p"},"npm\ndoctor")," confirms that the npm installation is in a good state."),Object(i.b)("p",null,"Also, in addition to this, there are also very many issue reports due to using\nold versions of npm. Since npm is constantly improving, running ",Object(i.b)("inlineCode",{parentName:"p"},"npm@latest")," is\nbetter than an old version."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," verifies the following items in your environment, and if there are\nany recommended changes, it will display them."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm ping")),Object(i.b)("p",null,"By default, npm installs from the primary npm registry, ",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),".\n",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," hits a special ping endpoint within the registry. This can also be\nchecked with ",Object(i.b)("inlineCode",{parentName:"p"},"npm ping"),". If this check fails, you may be using a proxy that\nneeds to be configured, or may need to talk to your IT staff to get access over\nHTTPS to ",Object(i.b)("inlineCode",{parentName:"p"},"registry.npmjs.org"),"."),Object(i.b)("p",null,"This check is done against whichever registry you've configured (you can see\nwhat that is by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm config get registry"),"), and if you're using a\nprivate registry that doesn't support the ",Object(i.b)("inlineCode",{parentName:"p"},"/whoami")," endpoint supported by the\nprimary registry, this check may fail."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm -v")),Object(i.b)("p",null,"While Node.js may come bundled with a particular version of npm, it's the\npolicy of the CLI team that we recommend all users run ",Object(i.b)("inlineCode",{parentName:"p"},"npm@latest")," if they\ncan. As the CLI is maintained by a small team of contributors, there are only\nresources for a single line of development, so npm's own long-term support\nreleases typically only receive critical security and regression fixes. The\nteam believes that the latest tested version of npm is almost always likely to\nbe the most functional and defect-free version of npm."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"node -v")),Object(i.b)("p",null,"For most users, in most circumstances, the best version of Node will be the\nlatest long-term support (LTS) release. Those of you who want access to new\nECMAscript features or bleeding-edge changes to Node's standard library may be\nrunning a newer version, and some of you may be required to run an older\nversion of Node because of enterprise change control policies. That's OK! But\nin general, the npm team recommends that most users run Node.js LTS."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"npm config get registry")),Object(i.b)("p",null,"Some of you may be installing from private package registries for your project\nor company. That's great! Others of you may be following tutorials or\nStackOverflow questions in an effort to troubleshoot problems you may be\nhaving. Sometimes, this may entail changing the registry you're pointing at.\nThis part of ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," just lets you, and maybe whoever's helping you with\nsupport, know that you're not using the default registry."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"which git")),Object(i.b)("p",null,"While it's documented in the README, it may not be obvious that npm needs Git\ninstalled to do many of the things that it does. Also, in some cases\n– especially on Windows – you may have Git set up in such a way that it's not\naccessible via your ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," so that npm can find it. This check ensures that Git\nis available."),Object(i.b)("h4",null,"Permissions checks"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your cache must be readable and writable by the user running npm."),Object(i.b)("li",{parentName:"ul"},"Global package binaries must be writable by the user running npm."),Object(i.b)("li",{parentName:"ul"},"Your local ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules")," path, if you're running ",Object(i.b)("inlineCode",{parentName:"li"},"npm doctor")," with a project\ndirectory, must be readable and writable by the user running npm.")),Object(i.b)("h4",null,"Validate the checksums of cached packages"),Object(i.b)("p",null,"When an npm package is published, the publishing process generates a checksum\nthat npm uses at install time to verify that the package didn't get corrupted\nin transit. ",Object(i.b)("inlineCode",{parentName:"p"},"npm doctor")," uses these checksums to validate the package tarballs\nin your local cache (you can see where that cache is located with ",Object(i.b)("inlineCode",{parentName:"p"},"npm config\nget cache"),", and see what's in that cache with ",Object(i.b)("inlineCode",{parentName:"p"},"npm cache ls")," – probably more\nthan you were expecting!). In the event that there are corrupt packages in your\ncache, you should probably run ",Object(i.b)("inlineCode",{parentName:"p"},"npm cache clean")," and reset the cache."),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-bugs"},"npm bugs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-help"},"npm help")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-ping"},"npm ping"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-doctor-md-621af869a8b7e424da48.js.map