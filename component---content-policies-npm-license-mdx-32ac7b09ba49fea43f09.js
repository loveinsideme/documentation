(window.webpackJsonp=window.webpackJsonp||[]).push([[364],{O6H6:function(e,t,n){"use strict";var o=n("vOnD"),i=n("u9kb"),a=n("aOgs"),r=n("q1tI"),s=n.n(r),l=n("7ljp"),c=n("pD55"),d=n("8Aig"),u=n("ReZb"),h=n("GCVy"),m=n("+6vE");var p=function(e){var t=e.children;return s.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},s.a.createElement(i.s,{fontFamily:"mono",fontSize:1},t))};var b=function(e){var t=e.children;return s.a.createElement("strong",null,t)},f=n("gnlW"),y=n("mwnC"),g=n("/Rw0"),O=n("dVM4"),E=Object(o.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return s.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return s.a.createElement(i.e,{as:"li",key:e.url,pl:n>0?3:0},s.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?s.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var k=w,v=n("MfeC");function j(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var o=v.a.getVariantsForPage(e.root,n.page),a=[],r=o[0];return 0===o.length?null:(o.forEach((function(e){e.page.url===t&&(r=e),a.push(s.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),s.a.createElement(i.i,{overlay:e.overlay},s.a.createElement(i.i.Button,null,r.variant.title),s.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},a)))}j.Menu=Object(o.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var I=j,S=Object(o.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),P=Object(o.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(o.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),A=Object(o.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(o.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),V=Object(o.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,o=e.location,r=n.frontmatter,E=r.title,w=r.description,j=r.status,D=r.source,N=r.additionalContributors,M=void 0===N?[]:N,R=v.a.getVariantRoot(o.pathname);return s.a.createElement(l.a,{components:{Index:u.a,Note:h.a,Prompt:p,PromptReply:b,Screenshot:f.a}},s.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},s.a.createElement(c.a,{title:E,description:w}),s.a.createElement(d.b,{location:o,isSearchEnabled:n.isSearchEnabled}),s.a.createElement(S,{flex:"1 1 auto",flexDirection:"row"},s.a.createElement(i.e,{display:["none",null,null,"block"]},s.a.createElement(y.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:o})),s.a.createElement(P,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},s.a.createElement(C,null,s.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},s.a.createElement(i.e,null,s.a.createElement(i.e,null,s.a.createElement(i.m,{as:"h1"},E),w))),null!=R?s.a.createElement(A,null,s.a.createElement(I,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:R,location:o})):null),n.tableOfContents.items?s.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:d.a+24,mt:"6px",maxHeight:"calc(100vh - "+d.a+"px - 24px)"},s.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),s.a.createElement(k,{items:n.tableOfContents.items})):null,s.a.createElement(V,null,j||D?s.a.createElement(i.k,{mb:3,alignItems:"center"},j?s.a.createElement(O.a,{status:j}):null,s.a.createElement(i.e,{mx:"auto"}),D?s.a.createElement(g.a,{href:D}):null):null,n.tableOfContents.items?s.a.createElement(i.e,{display:["block",null,"none"],mb:3},s.a.createElement(i.h,null,(function(e){var t=e.open;return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.s,{as:"summary",fontWeight:"bold"},t?s.a.createElement(i.r,{icon:a.b,mr:2}):s.a.createElement(i.r,{icon:a.c,mr:2}),"Table of contents"),s.a.createElement(i.e,{pt:1},s.a.createElement(k,{items:n.tableOfContents.items})))}))):null,t,s.a.createElement(m.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(M.map((function(e){return{login:e}})))}))))))}},V9XJ:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var o=n("zLVn"),i=(n("q1tI"),n("7ljp")),a=n("O6H6"),r={},s={_frontmatter:r},l=a.a;function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Copyright (c) npm, Inc. and Contributors\nAll rights reserved."),Object(i.b)("p",null,"npm is released under the Artistic License 2.0, subject to additional terms\nthat are listed below."),Object(i.b)("p",null,"The text of the npm License follows and the text of the additional terms\nfollows the Artistic License 2.0 terms:"),Object(i.b)("hr",null),Object(i.b)("p",null,"The Artistic License 2.0"),Object(i.b)("p",null,"Copyright (c) 2000-2006, The Perl Foundation."),Object(i.b)("p",null,"Everyone is permitted to copy and distribute verbatim copies\nof this license document, but changing it is not allowed."),Object(i.b)("p",null,"Preamble"),Object(i.b)("p",null,"This license establishes the terms under which a given free software\nPackage may be copied, modified, distributed, and/or redistributed.\nThe intent is that the Copyright Holder maintains some artistic\ncontrol over the development of that Package while still keeping the\nPackage available as open source and free software."),Object(i.b)("p",null,"You are always permitted to make arrangements wholly outside of this\nlicense directly with the Copyright Holder of a given Package.  If the\nterms of this license do not permit the full use that you propose to\nmake of the Package, you should contact the Copyright Holder and seek\na different licensing arrangement."),Object(i.b)("p",null,"Definitions"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'"Copyright Holder" means the individual(s) or organization(s)\nnamed in the copyright notice for the entire Package.\n\n"Contributor" means any party that has contributed code or other\nmaterial to the Package, in accordance with the Copyright Holder\'s\nprocedures.\n\n"You" and "your" means any person who would like to copy,\ndistribute, or modify the Package.\n\n"Package" means the collection of files distributed by the\nCopyright Holder, and derivatives of that collection and/or of\nthose files. A given Package may consist of either the Standard\nVersion, or a Modified Version.\n\n"Distribute" means providing a copy of the Package or making it\naccessible to anyone else, or in the case of a company or\norganization, to others outside of your company or organization.\n\n"Distributor Fee" means any fee that you charge for Distributing\nthis Package or providing support for this Package to another\nparty.  It does not mean licensing fees.\n\n"Standard Version" refers to the Package if it has not been\nmodified, or has been modified only in ways explicitly requested\nby the Copyright Holder.\n\n"Modified Version" means the Package, if it has been changed, and\nsuch changes were not explicitly requested by the Copyright\nHolder.\n\n"Original License" means this Artistic License as Distributed with\nthe Standard Version of the Package, in its current version or as\nit may be modified by The Perl Foundation in the future.\n\n"Source" form means the source code, documentation source, and\nconfiguration files for the Package.\n\n"Compiled" form means the compiled bytecode, object code, binary,\nor any other form resulting from mechanical transformation or\ntranslation of the Source form.\n')),Object(i.b)("p",null,"Permission for Use and Modification Without Distribution"),Object(i.b)("p",null,"(1)  You are permitted to use the Standard Version and create and use\nModified Versions for any purpose without restriction, provided that\nyou do not Distribute the Modified Version."),Object(i.b)("p",null,"Permissions for Redistribution of the Standard Version"),Object(i.b)("p",null,"(2)  You may Distribute verbatim copies of the Source form of the\nStandard Version of this Package in any medium without restriction,\neither gratis or for a Distributor Fee, provided that you duplicate\nall of the original copyright notices and associated disclaimers.  At\nyour discretion, such verbatim copies may or may not include a\nCompiled form of the Package."),Object(i.b)("p",null,"(3)  You may apply any bug fixes, portability changes, and other\nmodifications made available from the Copyright Holder.  The resulting\nPackage will still be considered the Standard Version, and as such\nwill be subject to the Original License."),Object(i.b)("p",null,"Distribution of Modified Versions of the Package as Source"),Object(i.b)("p",null,"(4)  You may Distribute your Modified Version as Source (either gratis\nor for a Distributor Fee, and with or without a Compiled form of the\nModified Version) provided that you clearly document how it differs\nfrom the Standard Version, including, but not limited to, documenting\nany non-standard features, executables, or modules, and provided that\nyou do at least ONE of the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"(a)  make the Modified Version available to the Copyright Holder\nof the Standard Version, under the Original License, so that the\nCopyright Holder may include your modifications in the Standard\nVersion.\n\n(b)  ensure that installation of your Modified Version does not\nprevent the user installing or running the Standard Version. In\naddition, the Modified Version must bear a name that is different\nfrom the name of the Standard Version.\n\n(c)  allow anyone who receives a copy of the Modified Version to\nmake the Source form of the Modified Version available to others\nunder\n\n    (i)  the Original License or\n\n    (ii)  a license that permits the licensee to freely copy,\n    modify and redistribute the Modified Version using the same\n    licensing terms that apply to the copy that the licensee\n    received, and requires that the Source form of the Modified\n    Version, and of any works derived from it, be made freely\n    available in that license fees are prohibited but Distributor\n    Fees are allowed.\n")),Object(i.b)("p",null,"Distribution of Compiled Forms of the Standard Version\nor Modified Versions without the Source"),Object(i.b)("p",null,"(5)  You may Distribute Compiled forms of the Standard Version without\nthe Source, provided that you include complete instructions on how to\nget the Source of the Standard Version.  Such instructions must be\nvalid at the time of your distribution.  If these instructions, at any\ntime while you are carrying out such distribution, become invalid, you\nmust provide new instructions on demand or cease further distribution.\nIf you provide valid instructions or cease distribution within thirty\ndays after you become aware that the instructions are invalid, then\nyou do not forfeit any of your rights under this license."),Object(i.b)("p",null,"(6)  You may Distribute a Modified Version in Compiled form without\nthe Source, provided that you comply with Section 4 with respect to\nthe Source of the Modified Version."),Object(i.b)("p",null,"Aggregating or Linking the Package"),Object(i.b)("p",null,"(7)  You may aggregate the Package (either the Standard Version or\nModified Version) with other packages and Distribute the resulting\naggregation provided that you do not charge a licensing fee for the\nPackage.  Distributor Fees are permitted, and licensing fees for other\ncomponents in the aggregation are permitted. The terms of this license\napply to the use and Distribution of the Standard or Modified Versions\nas included in the aggregation."),Object(i.b)("p",null,"(8) You are permitted to link Modified and Standard Versions with\nother works, to embed the Package in a larger work of your own, or to\nbuild stand-alone binary or bytecode versions of applications that\ninclude the Package, and Distribute the result without restriction,\nprovided the result does not expose a direct interface to the Package."),Object(i.b)("p",null,"Items That are Not Considered Part of a Modified Version"),Object(i.b)("p",null,"(9) Works (including, but not limited to, modules and scripts) that\nmerely extend or make use of the Package, do not, by themselves, cause\nthe Package to be a Modified Version.  In addition, such works are not\nconsidered parts of the Package itself, and are not subject to the\nterms of this license."),Object(i.b)("p",null,"General Provisions"),Object(i.b)("p",null,"(10)  Any use, modification, and distribution of the Standard or\nModified Versions is governed by this Artistic License. By using,\nmodifying or distributing the Package, you accept this license. Do not\nuse, modify, or distribute the Package, if you do not accept this\nlicense."),Object(i.b)("p",null,"(11)  If your Modified Version has been derived from a Modified\nVersion made by someone other than you, you are nevertheless required\nto ensure that your Modified Version complies with the requirements of\nthis license."),Object(i.b)("p",null,"(12)  This license does not grant you the right to use any trademark,\nservice mark, tradename, or logo of the Copyright Holder."),Object(i.b)("p",null,"(13)  This license includes the non-exclusive, worldwide,\nfree-of-charge patent license to make, have made, use, offer to sell,\nsell, import and otherwise transfer the Package with respect to any\npatent claims licensable by the Copyright Holder that are necessarily\ninfringed by the Package. If you institute patent litigation\n(including a cross-claim or counterclaim) against any party alleging\nthat the Package constitutes direct or contributory patent\ninfringement, then this Artistic License to you shall terminate on the\ndate that such litigation is filed."),Object(i.b)("p",null,"(14)  Disclaimer of Warranty:\nTHE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS \"AS\nIS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED\nWARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR\nNON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL\nLAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL\nBE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL\nDAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF\nADVISED OF THE POSSIBILITY OF SUCH DAMAGE."),Object(i.b)("hr",null),Object(i.b)("p",null,"The following additional terms shall apply to use of the npm software, the npm\nwebsite, the npm repository and any other services or products offered by npm,\nInc.:"),Object(i.b)("p",null,'"Node.js" trademark Joyent, Inc.  npm is not officially part of the Node.js\nproject, and is neither owned by nor affiliated with Joyent, Inc.'),Object(i.b)("p",null,'"npm" and "The npm Registry" are owned by npm, Inc. All rights reserved.'),Object(i.b)("p",null,"Modules published on the npm registry are not officially endorsed by npm, Inc.\nor the Node.js project."),Object(i.b)("p",null,"Data published to the npm registry is not part of npm itself, and is the sole\nproperty of the publisher. While every effort is made to ensure accountability,\nthere is absolutely no guarantee, warrantee, or assertion expressed or implied\nas to the quality, fitness for a specific purpose, or lack of malice in any\ngiven npm package.  Packages downloaded through the npm registry are\nindependently licensed and are not covered by this license."),Object(i.b)("p",null,"Additional policies relating to, and restrictions on use of, npm products and\nservices are available on the npm website.  All such policies and restrictions,\nas updated from time to time, are hereby incorporated into this license\nagreement.  By using npm, you acknowledge your agreement to all such policies\nand restrictions."),Object(i.b)("p",null,"If you have a complaint about a package in the public npm registry, and cannot\nresolve it with the package owner, please\n",Object(i.b)("a",{parentName:"p",href:"https://npmjs.com/support"},"contact support")," and explain the situation.\nSee the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/documentation/blob/main/content/policies/disputes.mdx"},"npm Dispute Resolution policy")," for more details."),Object(i.b)("p",null,"Any data published to The npm Registry (including user account information) may\nbe removed or modified at the sole discretion of the npm server administrators."),Object(i.b)("p",null,'"npm Logo" contributed by Mathias Pettersson and Brian Hammond,\nuse is subject to ',Object(i.b)("a",{parentName:"p",href:"https://docs.npmjs.com/trademark"},"https://docs.npmjs.com/trademark")),Object(i.b)("p",null,'"Gubblebum Blocky" font\nCopyright (c) by Tjarda Koster, ',Object(i.b)("a",{parentName:"p",href:"https://jelloween.deviantart.com"},"https://jelloween.deviantart.com"),"\nincluded for use in the npm website and documentation,\nused with permission."),Object(i.b)("p",null,"This program uses several Node modules contained in the node_modules/\nsubdirectory, according to the terms of their respective licenses."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-policies-npm-license-mdx-32ac7b09ba49fea43f09.js.map