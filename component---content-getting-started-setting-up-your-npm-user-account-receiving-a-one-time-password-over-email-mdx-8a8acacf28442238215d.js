(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),o=n("u9kb"),i=n("aOgs"),l=n("q1tI"),r=n.n(l),c=n("7ljp"),m=n("pD55"),u=n("8Aig"),s=n("ReZb"),d=n("GCVy"),p=n("+6vE");var b=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var f=function(e){var t=e.children;return r.a.createElement("strong",null,t)},g=n("gnlW"),h=n("mwnC"),y=n("/Rw0"),w=n("dVM4"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function O(e){var t=e.items,n=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(O,{items:e.items,depth:n+1}):null)})))}O.defaultProps={depth:0};var v=O,x=n("MfeC");function j(e){var t=x.a.getPath(e.location.pathname),n=x.a.getVariantAndPage(e.root,t);if(!n)return null;var a=x.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},i)))}j.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=j,_=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),S=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),N=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),H=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,E=l.title,O=l.description,j=l.status,P=l.source,T=l.additionalContributors,z=void 0===T?[]:T,M=x.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:b,PromptReply:f,Screenshot:g.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:E,description:O}),r.a.createElement(u.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(h.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(S,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},E),O))),null!=M?r.a.createElement(N,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:a})):null),n.tableOfContents.items?r.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:u.a+24,mt:"6px",maxHeight:"calc(100vh - "+u.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(v,{items:n.tableOfContents.items})):null,r.a.createElement(H,null,j||P?r.a.createElement(o.k,{mb:3,alignItems:"center"},j?r.a.createElement(w.a,{status:j}):null,r.a.createElement(o.e,{mx:"auto"}),P?r.a.createElement(y.a,{href:P}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(v,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(p.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},lk7w:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),i=n("q1tI"),l=n("7ljp"),r=n("O6H6"),c=n("4LHR"),m={},u=(a="Screenshot",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),s={_frontmatter:m},d=r.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(d,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"For your security, npm may require additional verification to allow you to log in to your account.  If you do not have ",Object(l.b)("a",{parentName:"p",href:"configuring-two-factor-authentication"},"two-factor authentication")," enabled, you may be asked to verify yourself with a one-time password sent to the email address configured for your account."),Object(l.b)("h2",null,"Logging in with a one-time password"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)(i.Fragment,null,c.a["user-login"].text),Object(l.b)(i.Fragment,null,c.a["user-login"].image)),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"You'll be prompted for a one-time password that was sent to your email."),Object(l.b)(u,{src:"/getting-started/setting-up-your-npm-user-account/one-time-password-email.png",alt:"Screenshot showing one-time password request",mdxType:"Screenshot"})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},'Check your email account for an email from npm containing your one-time password (the subject will begin "OTP for logging in to your account").'),Object(l.b)(u,{src:"/getting-started/setting-up-your-npm-user-account/email-otp-code.png",alt:"Screenshot showing OTP code in email",mdxType:"Screenshot"})),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Enter the digits from your email in your one-time password field."))),Object(l.b)("h2",null,"Enabling two-factor authentication"),Object(l.b)("p",null,"To avoid this additional login step, with a one-time password sent to you via e-mail, you can configure ",Object(l.b)("a",{parentName:"p",href:"/configuring-two-factor-authentication"},"two-factor authentication with a device")," (2FA) instead."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-receiving-a-one-time-password-over-email-mdx-8a8acacf28442238215d.js.map