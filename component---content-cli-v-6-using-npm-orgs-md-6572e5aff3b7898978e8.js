(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),l=a("u9kb"),c=a("aOgs"),r=a("q1tI"),o=a.n(r),i=a("7ljp"),m=a("pD55"),s=a("8Aig"),b=a("ReZb"),p=a("GCVy"),u=a("+6vE");var d=function(e){var t=e.children;return o.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return o.a.createElement("strong",null,t)},g=a("gnlW"),O=a("mwnC"),j=a("/Rw0"),f=a("dVM4"),y=Object(n.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,a=e.depth;return o.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return o.a.createElement(l.e,{as:"li",key:e.url,pl:a>0?3:0},o.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(N,{items:e.items,depth:a+1}):null)})))}N.defaultProps={depth:0};var k=N,E=a("MfeC");function v(e){var t=E.a.getPath(e.location.pathname),a=E.a.getVariantAndPage(e.root,t);if(!a)return null;var n=E.a.getVariantsForPage(e.root,a.page),c=[],r=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(r=e),c.push(o.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(l.i,{overlay:e.overlay},o.a.createElement(l.i.Button,null,r.variant.title),o.a.createElement(v.Menu,{direction:e.direction,width:e.menuWidth},c)))}v.Menu=Object(n.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=v,x=Object(n.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(n.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(n.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,r=a.frontmatter,y=r.title,N=r.description,v=r.status,z=r.source,A=r.additionalContributors,G=void 0===A?[]:A,H=E.a.getVariantRoot(n.pathname);return o.a.createElement(i.a,{components:{Index:b.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:g.a}},o.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(m.a,{title:y,description:N}),o.a.createElement(s.b,{location:n,isSearchEnabled:a.isSearchEnabled}),o.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(l.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:a.themeOptions.showSidebarEditLink&&a.themeOptions.editOnGitHub,location:n})),o.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(l.e,null,o.a.createElement(l.e,null,o.a.createElement(l.m,{as:"h1"},y),N))),null!=H?o.a.createElement(S,null,o.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:n})):null),a.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(k,{items:a.tableOfContents.items})):null,o.a.createElement(T,null,v||z?o.a.createElement(l.k,{mb:3,alignItems:"center"},v?o.a.createElement(f.a,{status:v}):null,o.a.createElement(l.e,{mx:"auto"}),z?o.a.createElement(j.a,{href:z}):null):null,a.tableOfContents.items?o.a.createElement(l.e,{display:["block",null,"none"],mb:3},o.a.createElement(l.h,null,(function(e){var t=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?o.a.createElement(l.r,{icon:c.b,mr:2}):o.a.createElement(l.r,{icon:c.c,mr:2}),"Table of contents"),o.a.createElement(l.e,{pt:1},o.a.createElement(k,{items:a.tableOfContents.items})))}))):null,t,o.a.createElement(u.a,{editOnGitHub:a.themeOptions.editOnGitHub,editUrl:a.editUrl,contributors:a.contributors.concat(G.map((function(e){return{login:e}})))}))))))}},OBxo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("O6H6"),r={},o={_frontmatter:r},i=c.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(i,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"There are three levels of org users:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Super admin, controls billing & adding people to the org."),Object(l.b)("li",{parentName:"ol"},"Team admin, manages team membership & package access."),Object(l.b)("li",{parentName:"ol"},"Developer, works on packages they are given access to.  ")),Object(l.b)("p",null,"The super admin is the only person who can add users to the org because it impacts the monthly bill. The super admin will use the website to manage membership. Every org has a ",Object(l.b)("inlineCode",{parentName:"p"},"developers")," team that all users are automatically added to."),Object(l.b)("p",null,"The team admin is the person who manages team creation, team membership, and package access for teams. The team admin grants package access to teams, not individuals."),Object(l.b)("p",null,"The developer will be able to access packages based on the teams they are on. Access is either read-write or read-only."),Object(l.b)("p",null,"There are two main commands:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"npm team")," see ",Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-team"},"npm team")," for more details"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"npm access")," see ",Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-access"},"npm access")," for more details")),Object(l.b)("h3",null,"Team Admins create teams"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Check who you’ve added to your org:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm team ls <org>:developers\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Each org is automatically given a ",Object(l.b)("inlineCode",{parentName:"p"},"developers")," team, so you can see the whole list of team members in your org. This team automatically gets read-write access to all packages, but you can change that with the ",Object(l.b)("inlineCode",{parentName:"p"},"access")," command.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Create a new team:"))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm team create <org:team>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Add members to that team:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm team add <org:team> <user>\n")),Object(l.b)("h3",null,"Publish a package and adjust package access"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"In package directory, run")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm init --scope=<org>\n")),Object(l.b)("p",null,"to scope it for your org & publish as usual"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Grant access:  ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access grant <read-only|read-write> <org:team> [<package>]\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Revoke access:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access revoke <org:team> [<package>]\n")),Object(l.b)("h3",null,"Monitor your package access"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"See what org packages a team member can access:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access ls-packages <org> <user>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"See packages available to a specific team:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access ls-packages <org:team>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Check which teams are collaborating on a package:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm access ls-collaborators <pkg>\n")),Object(l.b)("h3",null,"See also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-team"},"npm team")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-access"},"npm access")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v6/using-npm/scope"},"npm scope"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-cli-v-6-using-npm-orgs-md-6572e5aff3b7898978e8.js.map