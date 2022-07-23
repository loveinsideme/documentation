(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{JKXa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),c={},o={_frontmatter:c},r=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(r,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access public [<package>]\nnpm access restricted [<package>]\n\nnpm access grant <read-only|read-write> <scope:team> [<package>]\nnpm access revoke <scope:team> [<package>]\n\nnpm access 2fa-required [<package>]\nnpm access 2fa-not-required [<package>]\n\nnpm access ls-packages [<user>|<scope>|<scope:team>]\nnpm access ls-collaborators [<package> [<user>]]\nnpm access edit [<package>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Used to set access controls on private packages."),Object(l.b)("p",null,"For all of the subcommands, ",Object(l.b)("inlineCode",{parentName:"p"},"npm access")," will perform actions on the packages\nin the current working directory if no package name is passed to the\nsubcommand."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"public / restricted:\nSet a package to be either publicly accessible or restricted.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"grant / revoke:\nAdd or remove the ability of users and teams to have read-only or read-write\naccess to a package.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"2fa-required / 2fa-not-required:\nConfigure whether a package requires that anyone publishing it have two-factor\nauthentication enabled on their account.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls-packages:\nShow all of the packages a user or a team is able to access, along with the\naccess level, except for read-only public packages (it won't print the whole\nregistry listing)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls-collaborators:\nShow all of the access privileges for a package. Will only show permissions\nfor packages to which you have at least read access. If ",Object(l.b)("inlineCode",{parentName:"p"},"<user>")," is passed in,\nthe list is filtered only to teams ",Object(l.b)("em",{parentName:"p"},"that")," user happens to belong to.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"edit:\nSet the access privileges for a package at once using ",Object(l.b)("inlineCode",{parentName:"p"},"$EDITOR"),"."))),Object(l.b)("h3",null,"Details"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm access")," always operates directly on the current registry, configurable\nfrom the command line using ",Object(l.b)("inlineCode",{parentName:"p"},"--registry=<registry url>"),"."),Object(l.b)("p",null,"Unscoped packages are ",Object(l.b)("em",{parentName:"p"},"always public"),"."),Object(l.b)("p",null,"Scoped packages ",Object(l.b)("em",{parentName:"p"},"default to restricted"),", but you can either publish them as\npublic using ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish --access=public"),", or set their access as public using\n",Object(l.b)("inlineCode",{parentName:"p"},"npm access public")," after the initial publish."),Object(l.b)("p",null,"You must have privileges to set the access of a package:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You are an owner of an unscoped or scoped package."),Object(l.b)("li",{parentName:"ul"},"You are a member of the team that owns a scope."),Object(l.b)("li",{parentName:"ul"},"You have been given read-write privileges for a package, either as a member\nof a team or directly as an owner.")),Object(l.b)("p",null,"If you have two-factor authentication enabled then you'll have to pass in an\notp with ",Object(l.b)("inlineCode",{parentName:"p"},"--otp")," when making access changes."),Object(l.b)("p",null,"If your account is not paid, then attempts to publish scoped packages will fail\nwith an HTTP 402 status code (logically enough), unless you use\n",Object(l.b)("inlineCode",{parentName:"p"},"--access=public"),"."),Object(l.b)("p",null,"Management of teams and team memberships is done with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm team")," command."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/libnpmaccess"},Object(l.b)("inlineCode",{parentName:"a"},"libnpmaccess"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-team"},"npm team")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/using-npm/registry"},"npm registry"))))}s.isMDXComponent=!0},O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),c=a("q1tI"),o=a.n(c),r=a("7ljp"),s=a("pD55"),p=a("8Aig"),m=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),y=a("dVM4"),j=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return o.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var w=k,v=a("MfeC");function N(e){var t=v.a.getPath(e.location.pathname),a=v.a.getVariantAndPage(e.root,t);if(!a)return null;var n=v.a.getVariantsForPage(e.root,a.page),i=[],c=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(c=e),i.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,c.variant.title),o.a.createElement(N.Menu,{direction:e.direction,width:e.menuWidth},i)))}N.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=N,C=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),H=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,c=a.frontmatter,j=c.title,k=c.description,N=c.status,z=c.source,D=c.additionalContributors,M=void 0===D?[]:D,W=v.a.getVariantRoot(n.pathname);return o.a.createElement(r.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(s.a,{title:j,description:k}),o.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),o.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),o.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},j),k))),null!=W?o.a.createElement(S,null,o.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:n})):null),a.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(w,{items:a.tableOfContents.items})):null,o.a.createElement(H,null,N||z?o.a.createElement(l.k,{mb:3,alignItems:"center"},N?o.a.createElement(y.a,{status:N}):null,o.a.createElement(l.e,{mx:"auto"}),z?o.a.createElement(O.a,{href:z}):null):null,a.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:i.b,mr:2}):o.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(w,{items:a.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(M.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-commands-npm-access-md-9a1c85f2a0dd321b73c1.js.map