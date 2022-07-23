(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{"/fE+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),l=(n("q1tI"),n("7ljp")),i=n("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm init <package-spec> (same as `npx <package-spec>)\nnpm init <@scope> (same as `npx <@scope>/create`)\n\naliases: create, innit\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm init <initializer>")," can be used to set up a new or existing npm\npackage."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"initializer")," in this case is an npm package named ",Object(l.b)("inlineCode",{parentName:"p"},"create-<initializer>"),",\nwhich will be installed by ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-exec"},Object(l.b)("inlineCode",{parentName:"a"},"npm-exec")),", and then have its\nmain bin executed -- presumably creating or updating ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," and\nrunning any other initialization-related operations."),Object(l.b)("p",null,"The init command is transformed to a corresponding ",Object(l.b)("inlineCode",{parentName:"p"},"npm exec")," operation as\nfollows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init foo")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"npm exec create-foo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init @usr/foo")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"npm exec @usr/create-foo")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init @usr")," -> ",Object(l.b)("inlineCode",{parentName:"li"},"npm exec @usr/create"))),Object(l.b)("p",null,"If the initializer is omitted (by just calling ",Object(l.b)("inlineCode",{parentName:"p"},"npm init"),"), init will fall\nback to legacy init behavior. It will ask you a bunch of questions, and\nthen write a package.json for you. It will attempt to make reasonable\nguesses based on existing fields, dependencies, and options selected. It is\nstrictly additive, so it will keep any fields and values that were already\nset. You can also use ",Object(l.b)("inlineCode",{parentName:"p"},"-y"),"/",Object(l.b)("inlineCode",{parentName:"p"},"--yes")," to skip the questionnaire altogether. If\nyou pass ",Object(l.b)("inlineCode",{parentName:"p"},"--scope"),", it will create a scoped package."),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Note:")," if a user already has the ",Object(l.b)("inlineCode",{parentName:"p"},"create-<initializer>")," package\nglobally installed, that will be what ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," uses.  If you want npm\nto use the latest version, or another specific version you must specify\nit:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init foo@latest")," # fetches and runs the latest ",Object(l.b)("inlineCode",{parentName:"li"},"create-foo")," from\nthe registry"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init foo@1.2.3")," #  runs ",Object(l.b)("inlineCode",{parentName:"li"},"create-foo@1.2.3")," specifically")),Object(l.b)("h4",null,"Forwarding additional options"),Object(l.b)("p",null,"Any additional options will be passed directly to the command, so ",Object(l.b)("inlineCode",{parentName:"p"},"npm init\nfoo -- --hello")," will map to ",Object(l.b)("inlineCode",{parentName:"p"},"npm exec -- create-foo --hello"),"."),Object(l.b)("p",null,"To better illustrate how options are forwarded, here's a more evolved\nexample showing options passed to both the ",Object(l.b)("strong",{parentName:"p"},"npm cli")," and a create package,\nboth following commands are equivalent:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm init foo -y --registry=<url> -- --hello -a")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"npm exec -y --registry=<url> -- create-foo --hello -a"))),Object(l.b)("h3",null,"Examples"),Object(l.b)("p",null,"Create a new React-based project using\n",Object(l.b)("a",{parentName:"p",href:"https://npm.im/create-react-app"},Object(l.b)("inlineCode",{parentName:"a"},"create-react-app")),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init react-app ./my-react-app\n")),Object(l.b)("p",null,"Create a new ",Object(l.b)("inlineCode",{parentName:"p"},"esm"),"-compatible package using\n",Object(l.b)("a",{parentName:"p",href:"https://npm.im/create-esm"},Object(l.b)("inlineCode",{parentName:"a"},"create-esm")),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-esm-lib && cd my-esm-lib\n$ npm init esm --yes\n")),Object(l.b)("p",null,"Generate a plain old package.json using legacy init:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ mkdir my-npm-pkg && cd my-npm-pkg\n$ git init\n$ npm init\n")),Object(l.b)("p",null,"Generate it without having it ask any questions:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init -y\n")),Object(l.b)("h3",null,"Workspaces support"),Object(l.b)("p",null,"It's possible to create a new workspace within your project by using the\n",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config option. When using ",Object(l.b)("inlineCode",{parentName:"p"},"npm init -w <dir>")," the cli will\ncreate the folders and boilerplate expected while also adding a reference\nto your project ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(l.b)("inlineCode",{parentName:"p"},'"workspaces": []')," property in order to make\nsure that new generated ",Object(l.b)("strong",{parentName:"p"},"workspace")," is properly set up as such."),Object(l.b)("p",null,"Given a project with no workspaces, e.g:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},".\n+-- package.json\n")),Object(l.b)("p",null,"You may generate a new workspace using the legacy init:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ npm init -w packages/a\n")),Object(l.b)("p",null,"That will generate a new folder and ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file, while also updating\nyour top-level ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to add the reference to this new workspace:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   `-- a\n       `-- package.json\n")),Object(l.b)("p",null,"The workspaces init also supports the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init <initializer> -w <dir>"),"\nsyntax, following the same set of rules explained earlier in the initial\n",Object(l.b)("strong",{parentName:"p"},"Description")," section of this page. Similar to the previous example of\ncreating a new React-based project using\n",Object(l.b)("a",{parentName:"p",href:"https://npm.im/create-react-app"},Object(l.b)("inlineCode",{parentName:"a"},"create-react-app")),", the following syntax\nwill make sure to create the new react app as a nested ",Object(l.b)("strong",{parentName:"p"},"workspace")," within your\nproject and configure your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," to recognize it as such:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm init -w packages/my-react-app react-app .\n")),Object(l.b)("p",null,"This will make sure to generate your react app as expected, one important\nconsideration to have in mind is that ",Object(l.b)("inlineCode",{parentName:"p"},"npm exec")," is going to be run in the\ncontext of the newly created folder for that workspace, and that's the reason\nwhy in this example the initializer uses the initializer name followed with a\ndot to represent the current directory in that context, e.g: ",Object(l.b)("inlineCode",{parentName:"p"},"react-app ."),":"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},".\n+-- package.json\n`-- packages\n   +-- a\n   |   `-- package.json\n   `-- my-react-app\n       +-- README\n       +-- package.json\n       `-- ...\n")),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"yes")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,'Automatically answer "yes" to any prompts that npm might print on the\ncommand line.'),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"force")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Removes various protections against unfortunate side effects, common\nmistakes, unnecessary performance degradation, and malicious input."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Allow clobbering non-npm files in global installs."),Object(l.b)("li",{parentName:"ul"},"Allow the ",Object(l.b)("inlineCode",{parentName:"li"},"npm version")," command to work on an unclean git repository."),Object(l.b)("li",{parentName:"ul"},"Allow deleting the cache folder with ",Object(l.b)("inlineCode",{parentName:"li"},"npm cache clean"),"."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of npm."),Object(l.b)("li",{parentName:"ul"},"Allow installing packages that have an ",Object(l.b)("inlineCode",{parentName:"li"},"engines")," declaration requiring a\ndifferent version of ",Object(l.b)("inlineCode",{parentName:"li"},"node"),", even if ",Object(l.b)("inlineCode",{parentName:"li"},"--engine-strict")," is enabled."),Object(l.b)("li",{parentName:"ul"},"Allow ",Object(l.b)("inlineCode",{parentName:"li"},"npm audit fix")," to install modules outside your stated dependency\nrange (including SemVer-major changes)."),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing all versions of a published package."),Object(l.b)("li",{parentName:"ul"},"Allow conflicting peerDependencies to be installed in the root project."),Object(l.b)("li",{parentName:"ul"},"Implicitly set ",Object(l.b)("inlineCode",{parentName:"li"},"--yes")," during ",Object(l.b)("inlineCode",{parentName:"li"},"npm init"),"."),Object(l.b)("li",{parentName:"ul"},"Allow clobbering existing values in ",Object(l.b)("inlineCode",{parentName:"li"},"npm pkg")),Object(l.b)("li",{parentName:"ul"},"Allow unpublishing of entire packages (not just a single version).")),Object(l.b)("p",null,"If you don't have a clear idea of what you want to do, it is strongly\nrecommended that you do not use this option!"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"scope")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},'Default: the scope of the current project, if any, or ""'),Object(l.b)("li",{parentName:"ul"},"Type: String")),Object(l.b)("p",null,"Associate an operation with a scope for a scoped registry."),Object(l.b)("p",null,"Useful when logging in to or out of a private registry:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# log in, linking the scope to the custom registry\nnpm login --scope=@mycorp --registry=https://registry.mycorp.com\n\n# log out, removing the link and the auth token\nnpm logout --scope=@mycorp\n")),Object(l.b)("p",null,"This will cause ",Object(l.b)("inlineCode",{parentName:"p"},"@mycorp")," to be mapped to the registry for future\ninstallation of packages specified according to the pattern\n",Object(l.b)("inlineCode",{parentName:"p"},"@mycorp/package"),"."),Object(l.b)("p",null,"This will also cause ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," to create a scoped package."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'# accept all defaults, and create a package named "@foo/whatever",\n# instead of just named "whatever"\nnpm init --scope=@foo --yes\n')),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces-update")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to true, the npm cli will run an update after operations that may\npossibly change the workspaces installed to the ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/package-spec"},"package spec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"http://npm.im/init-package-json"},"init-package-json module")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-version"},"npm version")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/scope"},"npm scope")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-exec"},"npm exec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/workspaces"},"npm workspaces"))))}p.isMDXComponent=!0},O6H6:function(e,t,n){"use strict";var a=n("vOnD"),l=n("u9kb"),i=n("aOgs"),o=n("q1tI"),r=n.n(o),c=n("7ljp"),p=n("pD55"),b=n("8Aig"),s=n("ReZb"),m=n("GCVy"),u=n("+6vE");var d=function(e){var t=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},t))};var h=function(e){var t=e.children;return r.a.createElement("strong",null,t)},j=n("gnlW"),O=n("mwnC"),g=n("/Rw0"),f=n("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return r.a.createElement(N,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var w=y,k=n("MfeC");function C(e){var t=k.a.getPath(e.location.pathname),n=k.a.getVariantAndPage(e.root,t);if(!n)return null;var a=k.a.getVariantsForPage(e.root,n.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(C.Menu,{direction:e.direction,width:e.menuWidth},i)))}C.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=C,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),T=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),A=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,o=n.frontmatter,N=o.title,y=o.description,C=o.status,S=o.source,z=o.additionalContributors,D=void 0===z?[]:z,W=k.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:n.themeOptions.showSidebarEditLink&&n.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(_,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),y))),null!=W?r.a.createElement(I,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:W,location:a})):null),n.tableOfContents.items?r.a.createElement(T,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(w,{items:n.tableOfContents.items})):null,r.a.createElement(A,null,C||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},C?r.a.createElement(f.a,{status:C}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(g.a,{href:S}):null):null,n.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(w,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(u.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(D.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-init-md-c83a97e486efc0a79037.js.map