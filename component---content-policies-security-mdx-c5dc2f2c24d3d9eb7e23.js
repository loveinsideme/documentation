(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),s=n("pD55"),u=n("8Aig"),m=n("ReZb"),p=n("GCVy"),b=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),j=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function E(e){var t=e.items,n=e.depth;return r.a.createElement(j,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(E,{items:e.items,depth:n+1}):null)})))}E.defaultProps={depth:0};var w=E,v=n("MfeC");function x(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(x.Menu,{direction:e.direction,width:e.menuWidth},i)))}x.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=x,C=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),P=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,j=l.title,E=l.description,x=l.status,A=l.source,W=l.additionalContributors,T=void 0===W?[]:W,z=v.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:m.a,Note:p.a,Prompt:d,PromptReply:h,Screenshot:f.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(s.a,{title:j,description:E}),r.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(C,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},j),E))),null!=z?r.a.createElement(S,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:z,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(P,null,x||A?r.a.createElement(o.k,{mb:3,alignItems:"center"},x?r.a.createElement(O.a,{status:x}):null,r.a.createElement(o.e,{mx:"auto"}),A?r.a.createElement(g.a,{href:A}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(b.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(T.map((function(e){return{login:e}})))}))))))}},eJW7:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),i=n("O6H6"),l={},r={_frontmatter:l},c=i.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Outlined in this document are the practices and policies that npm\napplies to help ensure that we release stable/secure software, and\nreact appropriately to security threats when they arise."),Object(o.b)("h2",null,"Table of Contents"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#reporting-security-problems-to-npm"},"Reporting Security Problems to npm")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#security-point-of-contact"},"Security Point of Contact")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"#critical-updates-and-security-notices"},"Critical Updates And Security Notices"))),Object(o.b)("h2",null,"Reporting Security Problems to npm"),Object(o.b)("p",null,"If you need to report a security vulnerability.  Please visit ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"https://npmjs.com/support"),".\nIf your issue is specific to your account, such as lost credentials or problems with two-factor authentication, contacting ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"our support team")," is more appropriate."),Object(o.b)("p",null,"We review all security reports on the next business day.  Note that\nthe npm staff is generally offline for most US holidays, but please do\nnot delay your report!  Our off-hours support staff can fix many\nissues, and will alert our security point of contact if needed."),Object(o.b)("h2",null,"Security Point of Contact"),Object(o.b)("p",null,"Any security tickets opened using ",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"https://npmjs.com/support"),"\nwill be escalated to the security point of contact, who will delegate incident response\nactivities as appropriate. This is the best and fastest way to contact npm about any security-related matter."),Object(o.b)("h2",null,"Critical Updates And Security Notices"),Object(o.b)("p",null,"We learn about critical software updates and security threats from a\nvariety of sources:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ubuntu's security notices page: ",Object(o.b)("a",{parentName:"li",href:"https://usn.ubuntu.com/"},"https://usn.ubuntu.com/")),Object(o.b)("li",{parentName:"ul"},"The Node.js mailing list."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://npmjs.com/support"},"Security tickets")," sent to us."),Object(o.b)("li",{parentName:"ul"},"and other media sources.")),Object(o.b)("h2",null,"Changes"),Object(o.b)("p",null,"This is a living document and may be updated from time to time.\nPlease refer to the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/documentation/blob/main/content/policies/security.mdx"},"git history for this\ndocument"),"\nto view the changes."),Object(o.b)("h2",null,"License"),Object(o.b)("p",null,"This document may be reused under a ",Object(o.b)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons\nAttribution-ShareAlike\nLicense"),"."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-security-mdx-c5dc2f2c24d3d9eb7e23.js.map