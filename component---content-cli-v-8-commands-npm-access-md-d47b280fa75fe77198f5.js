(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),i=a("aOgs"),o=a("q1tI"),r=a.n(o),c=a("7ljp"),s=a("pD55"),p=a("8Aig"),m=a("ReZb"),b=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=a("gnlW"),f=a("mwnC"),O=a("/Rw0"),j=a("dVM4"),y=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function k(e){var t=e.items,a=e.depth;return r.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(k,{items:e.items,depth:a+1}):null)})))}k.defaultProps={depth:0};var N=k,w=a("MfeC");function v(e){var t=w.a.getPath(e.location.pathname),a=w.a.getVariantAndPage(e.root,t);if(!a)return null;var n=w.a.getVariantsForPage(e.root,a.page),i=[],o=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},i)))}v.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=v,C=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,o=a.frontmatter,y=o.title,k=o.description,v=o.status,D=o.source,H=o.additionalContributors,z=void 0===H?[]:H,M=w.a.getVariantRoot(n.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:b.a,Prompt:d,PromptReply:h,Screenshot:g.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:y,description:k}),r.a.createElement(p.b,{location:n,isSearchEnabled:a.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(f.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),r.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},y),k))),null!=M?r.a.createElement(S,null,r.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:n})):null),a.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:p.a+24,mt:"6px",maxHeight:"calc(100vh - "+p.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(N,{items:a.tableOfContents.items})):null,r.a.createElement(T,null,v||D?r.a.createElement(l.k,{mb:3,alignItems:"center"},v?r.a.createElement(j.a,{status:v}):null,r.a.createElement(l.e,{mx:"auto"}),D?r.a.createElement(O.a,{href:D}):null):null,a.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(N,{items:a.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},ih1H:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("O6H6"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access public [<package>]\nnpm access restricted [<package>]\nnpm access grant <read-only|read-write> <scope:team> [<package>]\nnpm access revoke <scope:team> [<package>]\nnpm access 2fa-required [<package>]\nnpm access 2fa-not-required [<package>]\nnpm access ls-packages [<user>|<scope>|<scope:team>]\nnpm access ls-collaborators [<package> [<user>]]\nnpm access edit [<package>]\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"Used to set access controls on private packages."),Object(l.b)("p",null,"For all of the subcommands, ",Object(l.b)("inlineCode",{parentName:"p"},"npm access")," will perform actions on the packages\nin the current working directory if no package name is passed to the\nsubcommand."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"public / restricted:\nSet a package to be either publicly accessible or restricted.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"grant / revoke:\nAdd or remove the ability of users and teams to have read-only or read-write\naccess to a package.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"2fa-required / 2fa-not-required:\nConfigure whether a package requires that anyone publishing it have two-factor\nauthentication enabled on their account.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls-packages:\nShow all of the packages a user or a team is able to access, along with the\naccess level, except for read-only public packages (it won't print the whole\nregistry listing)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"ls-collaborators:\nShow all of the access privileges for a package. Will only show permissions\nfor packages to which you have at least read access. If ",Object(l.b)("inlineCode",{parentName:"p"},"<user>")," is passed in,\nthe list is filtered only to teams ",Object(l.b)("em",{parentName:"p"},"that")," user happens to belong to.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"edit:\nSet the access privileges for a package at once using ",Object(l.b)("inlineCode",{parentName:"p"},"$EDITOR"),"."))),Object(l.b)("h3",null,"Details"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm access")," always operates directly on the current registry, configurable\nfrom the command line using ",Object(l.b)("inlineCode",{parentName:"p"},"--registry=<registry url>"),"."),Object(l.b)("p",null,"Unscoped packages are ",Object(l.b)("em",{parentName:"p"},"always public"),"."),Object(l.b)("p",null,"Scoped packages ",Object(l.b)("em",{parentName:"p"},"default to restricted"),", but you can either publish them as\npublic using ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish --access=public"),", or set their access as public using\n",Object(l.b)("inlineCode",{parentName:"p"},"npm access public")," after the initial publish."),Object(l.b)("p",null,"You must have privileges to set the access of a package:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You are an owner of an unscoped or scoped package."),Object(l.b)("li",{parentName:"ul"},"You are a member of the team that owns a scope."),Object(l.b)("li",{parentName:"ul"},"You have been given read-write privileges for a package, either as a member\nof a team or directly as an owner.")),Object(l.b)("p",null,"If you have two-factor authentication enabled then you'll be prompted to\nprovide an otp token, or may use the ",Object(l.b)("inlineCode",{parentName:"p"},"--otp=...")," option to specify it on\nthe command line."),Object(l.b)("p",null,"If your account is not paid, then attempts to publish scoped packages will\nfail with an HTTP 402 status code (logically enough), unless you use\n",Object(l.b)("inlineCode",{parentName:"p"},"--access=public"),"."),Object(l.b)("p",null,"Management of teams and team memberships is done with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm team")," command."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"registry")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: "',Object(l.b)("a",{parentName:"li",href:"https://registry.npmjs.org/%22"},'https://registry.npmjs.org/"')),Object(l.b)("li",{parentName:"ul"},"Type: URL")),Object(l.b)("p",null,"The base URL of the npm registry."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"otp")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or String")),Object(l.b)("p",null,"This is a one-time password from a two-factor authenticator. It's needed\nwhen publishing or changing package permissions with ",Object(l.b)("inlineCode",{parentName:"p"},"npm access"),"."),Object(l.b)("p",null,"If not set, and a registry response fails with a challenge for a one-time\npassword, npm will prompt on the command line for one."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://npm.im/libnpmaccess"},Object(l.b)("inlineCode",{parentName:"a"},"libnpmaccess"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-team"},"npm team")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-publish"},"npm publish")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/registry"},"npm registry"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-access-md-d47b280fa75fe77198f5.js.map