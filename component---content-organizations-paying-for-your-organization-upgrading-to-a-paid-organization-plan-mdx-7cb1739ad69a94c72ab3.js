(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),o=n("aOgs"),r=n("q1tI"),i=n.n(r),c=n("7ljp"),m=n("pD55"),b=n("8Aig"),p=n("ReZb"),u=n("GCVy"),s=n("+6vE");var d=function(e){var t=e.children;return i.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},f=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return i.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var w=E,v=n("MfeC");function x(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),o=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(r=e),o.push(i.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(l.i,{overlay:e.overlay},i.a.createElement(l.i.Button,null,r.variant.title),i.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},o)))}x.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var N=x,k=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),_=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),z=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),F=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,r=n.frontmatter,j=r.title,E=r.description,x=r.status,S=r.source,T=r.additionalContributors,P=void 0===T?[]:T,H=v.a.getVariantRoot(a.pathname);return i.a.createElement(c.a,{components:{Index:p.a,Note:u.a,Prompt:d,PromptReply:g,Screenshot:f.a}},i.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(m.a,{title:j,description:E}),i.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(l.e,{display:["none",null,null,"block"]},i.a.createElement(h.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),i.a.createElement(_,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(C,null,i.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(l.e,null,i.a.createElement(l.e,null,i.a.createElement(l.m,{as:"h1"},j),E))),null!=H?i.a.createElement(z,null,i.a.createElement(N,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:H,location:a})):null),n.tableOfContents.items?i.a.createElement(F,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},i.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(w,{items:n.tableOfContents.items})):null,i.a.createElement(I,null,x||S?i.a.createElement(l.k,{mb:3,alignItems:"center"},x?i.a.createElement(O.a,{status:x}):null,i.a.createElement(l.e,{mx:"auto"}),S?i.a.createElement(y.a,{href:S}):null):null,n.tableOfContents.items?i.a.createElement(l.e,{display:["block",null,"none"],mb:3},i.a.createElement(l.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(l.r,{icon:o.b,mr:2}):i.a.createElement(l.r,{icon:o.c,mr:2}),"Table of contents"),i.a.createElement(l.e,{pt:1},i.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(P.map((function(e){return{login:e}})))}))))))}},"V+6x":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return s}));var a,l=n("zLVn"),o=n("q1tI"),r=n("7ljp"),i=n("O6H6"),c=n("4LHR"),m={},b=(a="Note",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),p={_frontmatter:m},u=i.a;function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)(u,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(b,{mdxType:"Note"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," This article only applies to users of the public npm registry.")),Object(r.b)("p",null,'As an organization owner, you can upgrade your free organization plan to the npm Teams product.  npm Teams is a paid plan to give organization members the ability to install and publish private packages.  For more information about npm Teams and our organization pricing plans, see the "npm Teams" section of ',Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/pricing"},"our pricing page"),"."),Object(r.b)("p",null,"If you have an organization with a private packages plan, your organization will cost you seven (7) dollars a month per user. ",Object(r.b)("strong",{parentName:"p"},"The $7 charge is a flat fee for any member of the organization even if the teams the member belongs do not have access to private packages")),Object(r.b)("p",null,'Newly added members to an organization are always billed during the next billing cycle. For more information, see "',Object(r.b)("a",{parentName:"p",href:"adding-members-to-your-org"},"Adding members to your organization"),'".'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," Your paid plan and billing cycle will start when you submit your credit card information, and you will be charged for the first month immediately."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["user-login"].text),Object(r.b)(o.Fragment,null,c.a["user-login"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["account-settings"].text),Object(r.b)(o.Fragment,null,c.a["account-settings"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the left sidebar, click the name of the organization you want to upgrade."),Object(r.b)(o.Fragment,null,c.a["organization-selection"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["organization-billing-tab"].text),Object(r.b)(o.Fragment,null,c.a["organization-billing-tab"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Under "change plan", click ',Object(r.b)("strong",{parentName:"p"},"Upgrade Plan ($7/User)"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'Under "Want to upgrade?", click ',Object(r.b)("strong",{parentName:"p"},"Enable Private Publishing for $7/mo"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["billing-form"].text),Object(r.b)(o.Fragment,null,c.a["billing-form"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["payment-info-button"].text),Object(r.b)(o.Fragment,null,c.a["payment-info-button"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["billing-creditcard-form"].text),Object(r.b)(o.Fragment,null,c.a["billing-creditcard-form"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)(o.Fragment,null,c.a["payment-remember-me"].text),Object(r.b)(o.Fragment,null,c.a["payment-remember-me"].image)),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Pay")," for the monthly amount.  The monthly amount will be the number of members in your organization multiplied by $7."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-organizations-paying-for-your-organization-upgrading-to-a-paid-organization-plan-mdx-7cb1739ad69a94c72ab3.js.map