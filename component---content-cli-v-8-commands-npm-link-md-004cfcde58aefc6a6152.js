(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{KFEn:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t("zLVn"),l=(t("q1tI"),t("7ljp")),i=t("O6H6"),o={},r={_frontmatter:o},c=i.a;function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h3",null,"Synopsis"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link [<package-spec>]\n\nalias: ln\n")),Object(l.b)("h3",null,"Description"),Object(l.b)("p",null,"This is handy for installing your own stuff, so that you can work on it and\ntest iteratively without having to continually rebuild."),Object(l.b)("p",null,"Package linking is a two-step process."),Object(l.b)("p",null,"First, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," in a package folder with no arguments will create a\nsymlink in the global folder ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/lib/node_modules/<package>")," that\nlinks to the package where the ",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," command was executed. It will\nalso link any bins in the package to ",Object(l.b)("inlineCode",{parentName:"p"},"{prefix}/bin/{name}"),".  Note that\n",Object(l.b)("inlineCode",{parentName:"p"},"npm link")," uses the global prefix (see ",Object(l.b)("inlineCode",{parentName:"p"},"npm prefix -g")," for its value)."),Object(l.b)("p",null,"Next, in some other location, ",Object(l.b)("inlineCode",{parentName:"p"},"npm link package-name")," will create a\nsymbolic link from globally-installed ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," to ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules/")," of\nthe current folder."),Object(l.b)("p",null,"Note that ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," is taken from ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),", ",Object(l.b)("em",{parentName:"p"},"not")," from the\ndirectory name."),Object(l.b)("p",null,"The package name can be optionally prefixed with a scope. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),".  The scope must be preceded by an @-symbol and\nfollowed by a slash."),Object(l.b)("p",null,"When creating tarballs for ",Object(l.b)("inlineCode",{parentName:"p"},"npm publish"),', the linked packages are\n"snapshotted" to their current state by resolving the symbolic links, if\nthey are included in ',Object(l.b)("inlineCode",{parentName:"p"},"bundleDependencies"),"."),Object(l.b)("p",null,"For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/projects/node-redis    # go into the package directory\nnpm link                    # creates global link\ncd ~/projects/node-bloggy   # go into some other package directory.\nnpm link redis              # link-install the package\n")),Object(l.b)("p",null,"Now, any changes to ",Object(l.b)("inlineCode",{parentName:"p"},"~/projects/node-redis")," will be reflected in\n",Object(l.b)("inlineCode",{parentName:"p"},"~/projects/node-bloggy/node_modules/node-redis/"),". Note that the link\nshould be to the package name, not the directory name for that package."),Object(l.b)("p",null,"You may also shortcut the two steps in one.  For example, to do the\nabove use-case in a shorter way:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/projects/node-bloggy  # go into the dir of your main project\nnpm link ../node-redis     # link the dir of your dependency\n")),Object(l.b)("p",null,"The second line is the equivalent of doing:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"(cd ../node-redis; npm link)\nnpm link redis\n")),Object(l.b)("p",null,"That is, it first creates a global link, and then links the global\ninstallation target into your project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder."),Object(l.b)("p",null,"Note that in this case, you are referring to the directory name,\n",Object(l.b)("inlineCode",{parentName:"p"},"node-redis"),", rather than the package name ",Object(l.b)("inlineCode",{parentName:"p"},"redis"),"."),Object(l.b)("p",null,"If your linked package is scoped (see ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/using-npm/scope"},Object(l.b)("inlineCode",{parentName:"a"},"scope")),") your\nlink command must include that scope, e.g."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"npm link @myorg/privatepackage\n")),Object(l.b)("h3",null,"Caveat"),Object(l.b)("p",null,"Note that package dependencies linked in this way are ",Object(l.b)("em",{parentName:"p"},"not")," saved to\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," by default, on the assumption that the intention is to have\na link stand in for a regular non-link dependency.  Otherwise, for example,\nif you depend on ",Object(l.b)("inlineCode",{parentName:"p"},"redis@^3.0.1"),", and ran ",Object(l.b)("inlineCode",{parentName:"p"},"npm link redis"),", it would replace\nthe ",Object(l.b)("inlineCode",{parentName:"p"},"^3.0.1")," dependency with ",Object(l.b)("inlineCode",{parentName:"p"},"file:../path/to/node-redis"),", which you\nprobably don't want!  Additionally, other users or developers on your\nproject would run into issues if they do not have their folders set up\nexactly the same as yours."),Object(l.b)("p",null,"If you are adding a ",Object(l.b)("em",{parentName:"p"},"new")," dependency as a link, you should add it to the\nrelevant metadata by running ",Object(l.b)("inlineCode",{parentName:"p"},"npm install <dep> --package-lock-only"),"."),Object(l.b)("p",null,"If you ",Object(l.b)("em",{parentName:"p"},"want")," to save the ",Object(l.b)("inlineCode",{parentName:"p"},"file:")," reference in your ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," and\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files, you can use ",Object(l.b)("inlineCode",{parentName:"p"},"npm link <dep> --save")," to do so."),Object(l.b)("h3",null,"Workspace Usage"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm link <pkg> --workspace <name>")," will link the relevant package as a\ndependency of the specified workspace(s).  Note that It may actually be\nlinked into the parent project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder, if there are no\nconflicting dependencies."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"npm link --workspace <name>")," will create a global link to the specified\nworkspace(s)."),Object(l.b)("h3",null,"Configuration"),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true")," unless when using ",Object(l.b)("inlineCode",{parentName:"li"},"npm update")," where it defaults to ",Object(l.b)("inlineCode",{parentName:"li"},"false")),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Save installed packages to a ",Object(l.b)("inlineCode",{parentName:"p"},"package.json")," file as dependencies."),Object(l.b)("p",null,"When used with the ",Object(l.b)("inlineCode",{parentName:"p"},"npm rm")," command, removes the dependency from\n",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)("p",null,"Will also prevent writing to ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"save-exact")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Dependencies saved to package.json will be configured with an exact version\nrather than using npm's default semver range operator."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'Operates in "global" mode, so that packages are installed into the ',Object(l.b)("inlineCode",{parentName:"p"},"prefix"),"\nfolder instead of the current working directory. See\n",Object(l.b)("a",{parentName:"p",href:"/cli/v8/configuring-npm/folders"},"folders")," for more on the differences in behavior."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"packages are installed into the ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/lib/node_modules")," folder, instead\nof the current working directory."),Object(l.b)("li",{parentName:"ul"},"bin files are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/bin")),Object(l.b)("li",{parentName:"ul"},"man pages are linked to ",Object(l.b)("inlineCode",{parentName:"li"},"{prefix}/share/man"))),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"global-style")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package into your local ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder with\nthe same layout it uses with the global ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folder. Only your\ndirect dependencies will show in ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," and everything they depend\non will be flattened in their ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules")," folders. This obviously will\neliminate some deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),", ",Object(l.b)("inlineCode",{parentName:"p"},"legacy-bundling"),"\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"legacy-bundling")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Causes npm to install the package such that versions of npm prior to 1.4,\nsuch as the one included with node 0.8, can install the package. This\neliminates all automatic deduping. If used with ",Object(l.b)("inlineCode",{parentName:"p"},"global-style")," this option\nwill be preferred."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"strict-peer-deps")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to ",Object(l.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," is not set, then ",Object(l.b)("em",{parentName:"p"},"any"),"\nconflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," will be treated as an install failure, even\nif npm could reasonably guess the appropriate resolution based on non-peer\ndependency relationships."),Object(l.b)("p",null,"By default, conflicting ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," deep in the dependency graph will\nbe resolved using the nearest non-peer dependency specification, even if\ndoing so will result in some packages receiving a peer dependency outside\nthe range set in their package's ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," object."),Object(l.b)("p",null,"When such and override is performed, a warning is printed, explaining the\nconflict and the packages involved. If ",Object(l.b)("inlineCode",{parentName:"p"},"--strict-peer-deps")," is set, then\nthis warning is treated as a failure."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"package-lock")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If set to false, then ignore ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," files when installing. This\nwill also prevent ",Object(l.b)("em",{parentName:"p"},"writing")," ",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," if ",Object(l.b)("inlineCode",{parentName:"p"},"save")," is true."),Object(l.b)("p",null,"This configuration does not affect ",Object(l.b)("inlineCode",{parentName:"p"},"npm ci"),"."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"omit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: 'dev' if the ",Object(l.b)("inlineCode",{parentName:"li"},"NODE_ENV")," environment variable is set to\n'production', otherwise empty."),Object(l.b)("li",{parentName:"ul"},'Type: "dev", "optional", or "peer" (can be set multiple times)')),Object(l.b)("p",null,"Dependency types to omit from the installation tree on disk."),Object(l.b)("p",null,"Note that these dependencies ",Object(l.b)("em",{parentName:"p"},"are")," still resolved and added to the\n",Object(l.b)("inlineCode",{parentName:"p"},"package-lock.json")," or ",Object(l.b)("inlineCode",{parentName:"p"},"npm-shrinkwrap.json")," file. They are just not\nphysically installed on disk."),Object(l.b)("p",null,"If a package type appears in both the ",Object(l.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(l.b)("inlineCode",{parentName:"p"},"--omit")," lists, then\nit will be included."),Object(l.b)("p",null,"If the resulting omit list includes ",Object(l.b)("inlineCode",{parentName:"p"},"'dev'"),", then the ",Object(l.b)("inlineCode",{parentName:"p"},"NODE_ENV")," environment\nvariable will be set to ",Object(l.b)("inlineCode",{parentName:"p"},"'production'")," for all lifecycle scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"ignore-scripts")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"If true, npm does not run scripts specified in package.json files."),Object(l.b)("p",null,"Note that commands explicitly intended to run a particular script, such as\n",Object(l.b)("inlineCode",{parentName:"p"},"npm start"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm stop"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm restart"),", ",Object(l.b)("inlineCode",{parentName:"p"},"npm test"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"npm run-script"),"\nwill still run their intended script if ",Object(l.b)("inlineCode",{parentName:"p"},"ignore-scripts")," is set, but they\nwill ",Object(l.b)("em",{parentName:"p"},"not")," run any pre- or post-scripts."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"audit")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" submit audit reports alongside the current npm command to the\ndefault registry and all registries configured for scopes. See the\ndocumentation for ',Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-audit"},Object(l.b)("inlineCode",{parentName:"a"},"npm audit"))," for details on what is\nsubmitted."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"bin-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Tells npm to create symlinks (or ",Object(l.b)("inlineCode",{parentName:"p"},".cmd")," shims on Windows) for package\nexecutables."),Object(l.b)("p",null,"Set to false to have it not do this. This can be used to work around the\nfact that some file systems don't support symlinks, even on ostensibly Unix\nsystems."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"fund")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: true"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,'When "true" displays the message at the end of each ',Object(l.b)("inlineCode",{parentName:"p"},"npm install"),"\nacknowledging the number of dependencies looking for funding. See ",Object(l.b)("a",{parentName:"p",href:"/cli/v8/commands/npm-fund"},Object(l.b)("inlineCode",{parentName:"a"},"npm\nfund"))," for details."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"dry-run")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Indicates that you don't want npm to make any changes and that it should\nonly report what it would have done. This can be passed into any of the\ncommands that modify your local installation, eg, ",Object(l.b)("inlineCode",{parentName:"p"},"install"),", ",Object(l.b)("inlineCode",{parentName:"p"},"update"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"dedupe"),", ",Object(l.b)("inlineCode",{parentName:"p"},"uninstall"),", as well as ",Object(l.b)("inlineCode",{parentName:"p"},"pack")," and ",Object(l.b)("inlineCode",{parentName:"p"},"publish"),"."),Object(l.b)("p",null,"Note: This is NOT honored by other network related commands, eg ",Object(l.b)("inlineCode",{parentName:"p"},"dist-tags"),",\n",Object(l.b)("inlineCode",{parentName:"p"},"owner"),", etc."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspace")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default:"),Object(l.b)("li",{parentName:"ul"},"Type: String (can be set multiple times)")),Object(l.b)("p",null,"Enable running a command in the context of the configured workspaces of the\ncurrent project while filtering by running only the workspaces defined by\nthis configuration option."),Object(l.b)("p",null,"Valid values for the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config are either:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Workspace names"),Object(l.b)("li",{parentName:"ul"},"Path to a workspace directory"),Object(l.b)("li",{parentName:"ul"},"Path to a parent workspace directory (will result in selecting all\nworkspaces within that folder)")),Object(l.b)("p",null,"When set for the ",Object(l.b)("inlineCode",{parentName:"p"},"npm init")," command, this may be set to the folder of a\nworkspace which does not yet exist, to create the folder and set it up as a\nbrand new workspace within the project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"workspaces")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: null"),Object(l.b)("li",{parentName:"ul"},"Type: null or Boolean")),Object(l.b)("p",null,"Set to true to run the command in the context of ",Object(l.b)("strong",{parentName:"p"},"all")," configured\nworkspaces."),Object(l.b)("p",null,"Explicitly setting this to false will cause commands like ",Object(l.b)("inlineCode",{parentName:"p"},"install")," to\nignore workspaces altogether. When not set explicitly:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Commands that operate on the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," tree (install, update, etc.)\nwill link workspaces into the ",Object(l.b)("inlineCode",{parentName:"li"},"node_modules")," folder. - Commands that do\nother things (test, exec, publish, etc.) will operate on the root project,\n",Object(l.b)("em",{parentName:"li"},"unless")," one or more workspaces are specified in the ",Object(l.b)("inlineCode",{parentName:"li"},"workspace")," config.")),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"include-workspace-root")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"Include the workspace root when workspaces are enabled for a command."),Object(l.b)("p",null,"When false, specifying individual workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspace")," config, or\nall workspaces via the ",Object(l.b)("inlineCode",{parentName:"p"},"workspaces")," flag, will cause npm to operate only on\nthe specified workspaces, and not on the root project."),Object(l.b)("p",null,"This value is not exported to the environment for child processes."),Object(l.b)("h4",null,Object(l.b)("inlineCode",{parentName:"h4"},"install-links")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Default: false"),Object(l.b)("li",{parentName:"ul"},"Type: Boolean")),Object(l.b)("p",null,"When set file: protocol dependencies that exist outside of the project root\nwill be packed and installed as regular dependencies instead of creating a\nsymlink. This option has no effect on workspaces."),Object(l.b)("h3",null,"See Also"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/package-spec"},"package spec")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/using-npm/developers"},"npm developers")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/package-json"},"package.json")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-install"},"npm install")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/folders"},"npm folders")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/commands/npm-config"},"npm config")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"/cli/v8/configuring-npm/npmrc"},"npmrc"))))}p.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),l=t("u9kb"),i=t("aOgs"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),p=t("pD55"),b=t("8Aig"),s=t("ReZb"),d=t("GCVy"),m=t("+6vE");var u=function(e){var n=e.children;return r.a.createElement(l.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(l.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return r.a.createElement("strong",null,n)},j=t("gnlW"),O=t("mwnC"),f=t("/Rw0"),g=t("dVM4"),N=Object(a.f)(l.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var n=e.items,t=e.depth;return r.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return r.a.createElement(l.e,{as:"li",key:e.url,pl:t>0?3:0},r.a.createElement(l.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(y,{items:e.items,depth:t+1}):null)})))}y.defaultProps={depth:0};var k=y,C=t("MfeC");function w(e){var n=C.a.getPath(e.location.pathname),t=C.a.getVariantAndPage(e.root,n);if(!t)return null;var a=C.a.getVariantsForPage(e.root,t.page),i=[],o=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(o=e),i.push(r.a.createElement(l.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(l.i,{overlay:e.overlay},r.a.createElement(l.i.Button,null,o.variant.title),r.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},i)))}w.Menu=Object(a.f)(l.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var v=w,x=Object(a.f)(l.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),E=Object(a.f)(l.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),T=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),_=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),D=Object(a.f)(l.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(l.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,o=t.frontmatter,N=o.title,y=o.description,w=o.status,S=o.source,B=o.additionalContributors,W=void 0===B?[]:B,P=C.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:s.a,Note:d.a,Prompt:u,PromptReply:h,Screenshot:j.a}},r.a.createElement(l.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(p.a,{title:N,description:y}),r.a.createElement(b.b,{location:a,isSearchEnabled:t.isSearchEnabled}),r.a.createElement(x,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(l.e,{display:["none",null,null,"block"]},r.a.createElement(O.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),r.a.createElement(E,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(T,null,r.a.createElement(l.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(l.e,null,r.a.createElement(l.e,null,r.a.createElement(l.m,{as:"h1"},N),y))),null!=P?r.a.createElement(_,null,r.a.createElement(v,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),t.tableOfContents.items?r.a.createElement(D,{display:["none",null,"block"],position:"sticky",top:b.a+24,mt:"6px",maxHeight:"calc(100vh - "+b.a+"px - 24px)"},r.a.createElement(l.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(k,{items:t.tableOfContents.items})):null,r.a.createElement(I,null,w||S?r.a.createElement(l.k,{mb:3,alignItems:"center"},w?r.a.createElement(g.a,{status:w}):null,r.a.createElement(l.e,{mx:"auto"}),S?r.a.createElement(f.a,{href:S}):null):null,t.tableOfContents.items?r.a.createElement(l.e,{display:["block",null,"none"],mb:3},r.a.createElement(l.h,null,(function(e){var n=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.s,{as:"summary",fontWeight:"bold"},n?r.a.createElement(l.r,{icon:i.b,mr:2}):r.a.createElement(l.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(l.e,{pt:1},r.a.createElement(k,{items:t.tableOfContents.items})))}))):null,n,r.a.createElement(m.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(W.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-8-commands-npm-link-md-004cfcde58aefc6a6152.js.map