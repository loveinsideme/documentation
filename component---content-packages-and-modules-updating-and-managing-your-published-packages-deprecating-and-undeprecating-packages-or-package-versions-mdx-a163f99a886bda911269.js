(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),o=a("u9kb"),r=a("aOgs"),c=a("q1tI"),i=a.n(c),l=a("7ljp"),p=a("pD55"),m=a("8Aig"),s=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return i.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},h=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),y=a("dVM4"),j=Object(n.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(o.e,{as:"li",key:e.url,pl:a>0?3:0},i.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var w=k,v=a("MfeC");function N(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),r=[],c=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(c=e),r.push(i.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(o.i,{overlay:e.overlay},i.a.createElement(o.i.Button,null,c.variant.title),i.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},r)))}N.Menu=Object(n.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=N,C=Object(n.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),S=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,c=a.frontmatter,j=c.title,k=c.description,N=c.status,D=c.source,H=c.additionalContributors,W=void 0===H?[]:H,z=v.a.getVariantRoot(n.pathname);return i.a.createElement(l.a,{components:{Index:s.a,Note:b.a,Prompt:d,PromptReply:g,Screenshot:h.a}},i.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(p.a,{title:j,description:k}),i.a.createElement(m.b,{location:n,isSearchEnabled:a.isSearchEnabled}),i.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(o.e,{display:["none",null,null,"block"]},i.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),i.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(S,null,i.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(o.e,null,i.a.createElement(o.e,null,i.a.createElement(o.m,{as:"h1"},j),k))),null!=z?i.a.createElement(_,null,i.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:n})):null),a.tableOfContents.items?i.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:a.tableOfContents.items})):null,i.a.createElement(T,null,N||D?i.a.createElement(o.k,{mb:3,alignItems:"center"},N?i.a.createElement(y.a,{status:N}):null,i.a.createElement(o.e,{mx:"auto"}),D?i.a.createElement(O.a,{href:D}):null):null,a.tableOfContents.items?i.a.createElement(o.e,{display:["block",null,"none"],mb:3},i.a.createElement(o.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(o.r,{icon:r.b,mr:2}):i.a.createElement(o.r,{icon:r.c,mr:2}),"Table of contents"),i.a.createElement(o.e,{pt:1},i.a.createElement(w,{items:a.tableOfContents.items})))}))):null,t,i.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(W.map((function(e){return{login:e}})))}))))))}},loRU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("zLVn"),o=a("q1tI"),r=a("7ljp"),c=a("O6H6"),i=a("4LHR"),l={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},m=p("Note"),s=p("Screenshot"),b={_frontmatter:l},u=c.a;function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(u,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you no longer wish to maintain a package, or if you would like to encourage users to update to a new or different version, you can ",Object(r.b)("a",{parentName:"p",href:"/cli/deprecate"},"deprecate")," it. Deprecating a package or version will print a message to the terminal when a user installs it."),Object(r.b)("p",null,"A deprecation warning or message can say anything. You may wish to include a message encouraging users to update to a specific version, or an alternate, supported package."),Object(r.b)(m,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," We strongly recommend deprecating packages or package versions instead of ",Object(r.b)("a",{href:"/unpublishing-packages-from-the-registry"},"unpublishing")," them, because unpublishing removes a package from the registry entirely, meaning anyone who relied on it will no longer be able to use it, with no warning.")),Object(r.b)("h2",null,"Deprecating an entire package"),Object(r.b)("p",null,"Deprecating an entire package will remove it from search results on the\nnpm website and a deprecation message will also be displayed on the\npackage page."),Object(r.b)(s,{src:"/packages-and-modules/updating-and-managing-your-published-packages/deprecate-package.png",alt:"Screenshot of package deprecation",mdxType:"Screenshot"}),Object(r.b)("p",null,"Deprecating a package is an alternative to deleting a package if\nyour package does not meet the\n",Object(r.b)("a",{parentName:"p",href:"/policies/unpublish"},"unpublishing requirements"),"."),Object(r.b)("h3",null,"Using the website"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,i.a["user-login"].text),Object(r.b)(o.Fragment,null,i.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Navigate to the package page for the package you want to deprecate, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<your-package-name>")," with the name of your package:\n",Object(r.b)("inlineCode",{parentName:"p"},"https://www.npmjs.com/package/<your-package-name>"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Settings"),"."),Object(r.b)(s,{src:"/packages-and-modules/securing-your-code/2fa-package-admin.png",alt:"Screenshot showing the settings tab on a package page",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Under "deprecate package", click ',Object(r.b)("strong",null,"Deprecate package"),"."),Object(r.b)(s,{src:"/packages-and-modules/deleting-deprecating/deprecate-package-settings.png",alt:"Screenshot showing the deprecate package button",mdxType:"Screenshot"})),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you are sure that you want to continue, enter your package name and click ",Object(r.b)("strong",null,"Deprecate package"),"."),Object(r.b)(s,{src:"packages-and-modules/deleting-deprecating/deprecate-package-confirm.png",alt:"Screenshot showing the deprecate package confirmation",mdxType:"Screenshot"}))),Object(r.b)("h3",null,"Using the command line"),Object(r.b)("p",null,"To deprecate an entire package, run the following command, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(r.b)("inlineCode",{parentName:"p"},'"<message>"')," with your deprecation message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'npm deprecate <package-name> "<message>"\n')),Object(r.b)("p",null,"If you have enabled ",Object(r.b)("a",{parentName:"p",href:"about-two-factor-authentication"},"two-factor authentication"),", add a one-time password to the command, ",Object(r.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(r.b)("em",{parentName:"p"},"123456")," is the code from your authenticator app)."),Object(r.b)("h2",null,"Deprecating a single version of a package"),Object(r.b)("p",null,"When you deprecate a version of a package, a red message will be displayed on that version's package page, similar to deprecating an entire package."),Object(r.b)(s,{src:"/packages-and-modules/updating-and-managing-your-published-packages/deprecate-version.png",alt:"Screenshot of package deprecation for a particular version",mdxType:"Screenshot"}),Object(r.b)("h3",null,"Using the command line"),Object(r.b)("p",null,"To deprecate a package version, run the following command, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, ",Object(r.b)("inlineCode",{parentName:"p"},"<version>")," with your version number, and ",Object(r.b)("inlineCode",{parentName:"p"},'"<message>"')," with your deprecation message:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'npm deprecate <package-name>@<version> "<message>"\n')),Object(r.b)("p",null,"The CLI will also accept version ranges for ",Object(r.b)("inlineCode",{parentName:"p"},"<version>"),"."),Object(r.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(r.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(r.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."),Object(r.b)("h2",null,"Undeprecating a package or version"),Object(r.b)("p",null,"To undeprecate a package, replace ",Object(r.b)("inlineCode",{parentName:"p"},'"<message>"')," with ",Object(r.b)("inlineCode",{parentName:"p"},'""')," (an empty string) in one of the above commands."),Object(r.b)("p",null,"For example, to undeprecate a package version, run the following command, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<package-name>")," with the name of your package, and ",Object(r.b)("inlineCode",{parentName:"p"},"<version>")," with your version number:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'npm deprecate <package-name>@<version> ""\n')),Object(r.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(r.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(r.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."),Object(r.b)("h2",null,"Transferring a deprecated package to npm"),Object(r.b)("p",null,"If you are no longer maintaining a package, but other users depend on it, and you'd like to remove it from your user profile, you can transfer it to the ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/~npm"},Object(r.b)("inlineCode",{parentName:"a"},"@npm"))," user account, which is owned by the npm registry."),Object(r.b)(m,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Once you transfer a package to the npm account, you will no longer be able to update it.")),Object(r.b)("p",null,"To transfer a package to the npm user account, run the following two commands in order, replacing ",Object(r.b)("inlineCode",{parentName:"p"},"<user>")," with your npm user name, and ",Object(r.b)("inlineCode",{parentName:"p"},"<package-name>")," with the package you want to transfer:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"npm owner add npm <package-name>\nnpm owner rm <user> <package-name>\n")),Object(r.b)("p",null,"If you have two-factor auth, add a one-time password to the command, ",Object(r.b)("inlineCode",{parentName:"p"},"--otp=123456")," (where ",Object(r.b)("em",{parentName:"p"},"123456")," is the code from your authenticator)."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-packages-and-modules-updating-and-managing-your-published-packages-deprecating-and-undeprecating-packages-or-package-versions-mdx-a163f99a886bda911269.js.map