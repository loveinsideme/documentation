(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{"9tRA":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return r})),t.d(n,"default",(function(){return c}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),l=t("O6H6"),r={},o={_frontmatter:r},p=l.a;function c(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(p,Object.assign({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Description"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," property of of your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," file supports a number of built-in scripts and their preset life cycle events as well as arbitrary scripts. These all can be executed by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm run-script <stage>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"npm run <stage>")," for short. ",Object(i.b)("em",{parentName:"p"},"Pre")," and ",Object(i.b)("em",{parentName:"p"},"post")," commands with matching names will be run for those as well (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"premyscript"),", ",Object(i.b)("inlineCode",{parentName:"p"},"myscript"),", ",Object(i.b)("inlineCode",{parentName:"p"},"postmyscript"),"). Scripts from dependencies can be run with ",Object(i.b)("inlineCode",{parentName:"p"},"npm explore <pkg> -- npm run <stage>"),"."),Object(i.b)("h3",null,"Pre & Post Scripts"),Object(i.b)("p",null,'To create "pre" or "post" scripts for any scripts defined in the ',Object(i.b)("inlineCode",{parentName:"p"},'"scripts"')," section of the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", simply create another script ",Object(i.b)("em",{parentName:"p"},"with a matching name"),' and add "pre" or "post" to the beginning of them.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "precompress": "{{ executes BEFORE the `compress` script }}",\n    "compress": "{{ run command to compress files }}",\n    "postcompress": "{{ executes AFTER `compress` script }}"\n  }\n}\n')),Object(i.b)("h3",null,"Life Cycle Scripts"),Object(i.b)("p",null,'There are some special life cycle scripts that happen only in certain situations. These scripts happen in addtion to the "pre" and "post" script.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepublish"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepublishOnly"),", ",Object(i.b)("inlineCode",{parentName:"li"},"prepack"),", ",Object(i.b)("inlineCode",{parentName:"li"},"postpack"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepare")," (since ",Object(i.b)("inlineCode",{parentName:"p"},"npm@4.0.0"),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Runs BEFORE the package is packed"),Object(i.b)("li",{parentName:"ul"},"Runs BEFORE the package is published"),Object(i.b)("li",{parentName:"ul"},"Runs on local ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," without any arguments"),Object(i.b)("li",{parentName:"ul"},"Run AFTER ",Object(i.b)("inlineCode",{parentName:"li"},"prepublish"),", but BEFORE ",Object(i.b)("inlineCode",{parentName:"li"},"prepublishOnly")),Object(i.b)("li",{parentName:"ul"},"NOTE: If a package being installed through git contains a ",Object(i.b)("inlineCode",{parentName:"li"},"prepare")," script, its ",Object(i.b)("inlineCode",{parentName:"li"},"dependencies")," and ",Object(i.b)("inlineCode",{parentName:"li"},"devDependencies")," will be installed, and the prepare script will be run, before the package is packaged and installed.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepublish")," (DEPRECATED)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Same as ",Object(i.b)("inlineCode",{parentName:"li"},"prepare"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepublishOnly")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Runs BEFORE the package is prepared and packed, ONLY on ",Object(i.b)("inlineCode",{parentName:"li"},"npm publish"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"prepack")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'Runs BEFORE a tarball is packed (on "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'", "',Object(i.b)("inlineCode",{parentName:"li"},"npm publish"),'", and when installing a git dependencies).'),Object(i.b)("li",{parentName:"ul"},'NOTE: "',Object(i.b)("inlineCode",{parentName:"li"},"npm run pack"),'" is NOT the same as "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'". "',Object(i.b)("inlineCode",{parentName:"li"},"npm run pack"),'" is an arbitrary user defined script name, where as, "',Object(i.b)("inlineCode",{parentName:"li"},"npm pack"),'" is a CLI defined command.')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"postpack")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Runs AFTER the tarball has been generated and moved to its final destination.")),Object(i.b)("h4",null,"Prepare and Prepublish"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Deprecation Note: prepublish")),Object(i.b)("p",null,"Since ",Object(i.b)("inlineCode",{parentName:"p"},"npm@1.1.71"),", the npm CLI has run the ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," script for both ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," and ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),", because it's a convenient way to prepare a package for use (some common use cases are described in the section below).  It has also turned out to be, in practice, ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/10074"},"very confusing"),".  As of ",Object(i.b)("inlineCode",{parentName:"p"},"npm@4.0.0"),", a new event has been introduced, ",Object(i.b)("inlineCode",{parentName:"p"},"prepare"),", that preserves this existing behavior. A ",Object(i.b)("em",{parentName:"p"},"new")," event, ",Object(i.b)("inlineCode",{parentName:"p"},"prepublishOnly")," has been added as a transitional strategy to allow users to avoid the confusing behavior of existing npm versions and only run on ",Object(i.b)("inlineCode",{parentName:"p"},"npm publish")," (for instance, running the tests one last time to ensure they're in good shape)."),Object(i.b)("p",null,"See ",Object(i.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/10074"},"https://github.com/npm/npm/issues/10074")," for a much lengthier justification, with further reading, for this change."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Use Cases")),Object(i.b)("p",null,"If you need to perform operations on your package before it is used, in a way that is not dependent on the operating system or architecture of the target system, use a ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," script. This includes tasks such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Compiling CoffeeScript source code into JavaScript."),Object(i.b)("li",{parentName:"ul"},"Creating minified versions of JavaScript source code."),Object(i.b)("li",{parentName:"ul"},"Fetching remote resources that your package will use.")),Object(i.b)("p",null,"The advantage of doing these things at ",Object(i.b)("inlineCode",{parentName:"p"},"prepublish")," time is that they can be done once, in a single place, thus reducing complexity and variability. Additionally, this means that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can depend on ",Object(i.b)("inlineCode",{parentName:"li"},"coffee-script")," as a ",Object(i.b)("inlineCode",{parentName:"li"},"devDependency"),", and thus\nyour users don't need to have it installed."),Object(i.b)("li",{parentName:"ul"},"You don't need to include minifiers in your package, reducing\nthe size for your users."),Object(i.b)("li",{parentName:"ul"},"You don't need to rely on your users having ",Object(i.b)("inlineCode",{parentName:"li"},"curl")," or ",Object(i.b)("inlineCode",{parentName:"li"},"wget")," or\nother system tools on the target machines.")),Object(i.b)("h3",null,"Life Cycle Operation Order"),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v6/commands/npm-publish"},Object(i.b)("inlineCode",{parentName:"a"},"npm publish"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepublishOnly")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepublish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"publish")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postpublish"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v6/commands/npm-pack"},Object(i.b)("inlineCode",{parentName:"a"},"npm pack"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepack")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postpack"))),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v6/commands/npm-install"},Object(i.b)("inlineCode",{parentName:"a"},"npm install"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preinstall")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"install")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"postinstall"))),Object(i.b)("p",null,"Also triggers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepublish")," (when on local)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prepare")," (when on local)")),Object(i.b)("h4",null,Object(i.b)("a",{parentName:"h4",href:"/cli/v6/commands/npm-start"},Object(i.b)("inlineCode",{parentName:"a"},"npm start"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run start")," has an ",Object(i.b)("inlineCode",{parentName:"p"},"npm start")," shorthand."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"prestart")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"poststart"))),Object(i.b)("h3",null,"Default Values"),Object(i.b)("p",null,"npm will default some script values based on package contents."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'"start": "node server.js"'),":"),Object(i.b)("p",{parentName:"li"},"If there is a ",Object(i.b)("inlineCode",{parentName:"p"},"server.js")," file in the root of your package, then npm\nwill default the ",Object(i.b)("inlineCode",{parentName:"p"},"start")," command to ",Object(i.b)("inlineCode",{parentName:"p"},"node server.js"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},'"install": "node-gyp rebuild"'),":"),Object(i.b)("p",{parentName:"li"},"If there is a ",Object(i.b)("inlineCode",{parentName:"p"},"binding.gyp")," file in the root of your package and you\nhaven't defined your own ",Object(i.b)("inlineCode",{parentName:"p"},"install")," or ",Object(i.b)("inlineCode",{parentName:"p"},"preinstall")," scripts, npm will\ndefault the ",Object(i.b)("inlineCode",{parentName:"p"},"install")," command to compile using node-gyp."))),Object(i.b)("h3",null,"User"),Object(i.b)("p",null,"If npm was invoked with root privileges, then it will change the uid\nto the user account or uid specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"user")," config, which\ndefaults to ",Object(i.b)("inlineCode",{parentName:"p"},"nobody"),".  Set the ",Object(i.b)("inlineCode",{parentName:"p"},"unsafe-perm")," flag to run scripts with\nroot privileges."),Object(i.b)("h3",null,"Environment"),Object(i.b)("p",null,"Package scripts run in an environment where many pieces of information\nare made available regarding the setup of npm and the current state of\nthe process."),Object(i.b)("h4",null,"path"),Object(i.b)("p",null,"If you depend on modules that define executable scripts, like test\nsuites, then those executables will be added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," for\nexecuting the scripts.  So, if your package.json has this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "name" : "foo", \n  "dependencies" : { \n    "bar" : "0.1.x" \n  }, \n  "scripts": { \n    "start" : "bar ./test" \n  } \n}\n')),Object(i.b)("p",null,"then you could run ",Object(i.b)("inlineCode",{parentName:"p"},"npm start")," to execute the ",Object(i.b)("inlineCode",{parentName:"p"},"bar")," script, which is\nexported into the ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," directory on ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(i.b)("h4",null,"package.json vars"),Object(i.b)("p",null,"The package.json fields are tacked onto the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_package_")," prefix. So,\nfor instance, if you had ",Object(i.b)("inlineCode",{parentName:"p"},'{"name":"foo", "version":"1.2.5"}')," in your\npackage.json file, then your package scripts would have the\n",Object(i.b)("inlineCode",{parentName:"p"},"npm_package_name"),' environment variable set to "foo", and the\n',Object(i.b)("inlineCode",{parentName:"p"},"npm_package_version"),' set to "1.2.5".  You can access these variables\nin your code with ',Object(i.b)("inlineCode",{parentName:"p"},"process.env.npm_package_name")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"process.env.npm_package_version"),", and so on for other fields."),Object(i.b)("h4",null,"configuration"),Object(i.b)("p",null,"Configuration parameters are put in the environment with the\n",Object(i.b)("inlineCode",{parentName:"p"},"npm_config_")," prefix. For instance, you can view the effective ",Object(i.b)("inlineCode",{parentName:"p"},"root"),"\nconfig by checking the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_config_root")," environment variable."),Object(i.b)("h4",null,'Special: package.json "config" object'),Object(i.b)("p",null,'The package.json "config" keys are overwritten in the environment if\nthere is a config param of ',Object(i.b)("inlineCode",{parentName:"p"},"<name>[@<version>]:<key>"),".  For example,\nif the package.json has this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "name" : "foo", \n  "config" : { \n    "port" : "8080" \n  }, \n  "scripts" : { \n    "start" : "node server.js" \n  } \n}\n')),Object(i.b)("p",null,"and the server.js is this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"http.createServer(...).listen(process.env.npm_package_config_port)\n")),Object(i.b)("p",null,"then the user could change the behavior by doing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"  npm config set foo:port 80\n")),Object(i.b)("h4",null,"current lifecycle event"),Object(i.b)("p",null,"Lastly, the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_lifecycle_event")," environment variable is set to\nwhichever stage of the cycle is being executed. So, you could have a\nsingle script used for different parts of the process which switches\nbased on what's currently happening."),Object(i.b)("p",null,"Objects are flattened following this format, so if you had\n",Object(i.b)("inlineCode",{parentName:"p"},'{"scripts":{"install":"foo.js"}}')," in your package.json, then you'd\nsee this in the script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'process.env.npm_package_scripts_install === "foo.js"\n')),Object(i.b)("h3",null,"Examples"),Object(i.b)("p",null,"For example, if your package.json contains this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "scripts" : { \n    "install" : "scripts/install.js", \n    "postinstall" : "scripts/install.js", \n    "uninstall" : "scripts/uninstall.js"\n  }\n}\n')),Object(i.b)("p",null,"then ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/install.js")," will be called for the install\nand post-install stages of the lifecycle, and ",Object(i.b)("inlineCode",{parentName:"p"},"scripts/uninstall.js"),"\nwill be called when the package is uninstalled.  Since\n",Object(i.b)("inlineCode",{parentName:"p"},"scripts/install.js")," is running for two different phases, it would\nbe wise in this case to look at the ",Object(i.b)("inlineCode",{parentName:"p"},"npm_lifecycle_event")," environment\nvariable."),Object(i.b)("p",null,"If you want to run a make command, you can do so.  This works just\nfine:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{ \n  "scripts" : { \n    "preinstall" : "./configure", \n    "install" : "make && make install", \n    "test" : "make test"\n  }\n}\n')),Object(i.b)("h3",null,"Exiting"),Object(i.b)("p",null,"Scripts are run by passing the line as a script argument to ",Object(i.b)("inlineCode",{parentName:"p"},"sh"),"."),Object(i.b)("p",null,"If the script exits with a code other than 0, then this will abort the\nprocess."),Object(i.b)("p",null,"Note that these script files don't have to be nodejs or even\njavascript programs. They just have to be some kind of executable\nfile."),Object(i.b)("h3",null,"Hook Scripts"),Object(i.b)("p",null,"If you want to run a specific script at a specific lifecycle event for\nALL packages, then you can use a hook script."),Object(i.b)("p",null,"Place an executable file at ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.hooks/{eventname}"),", and\nit'll get run for all packages when they are going through that point\nin the package lifecycle for any packages installed in that root."),Object(i.b)("p",null,"Hook scripts are run exactly the same way as package.json scripts.\nThat is, they are in a separate child process, with the env described\nabove."),Object(i.b)("h3",null,"Best Practices"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't exit with a non-zero error code unless you ",Object(i.b)("em",{parentName:"li"},"really")," mean it.\nExcept for uninstall scripts, this will cause the npm action to\nfail, and potentially be rolled back.  If the failure is minor or\nonly will prevent some optional features, then it's better to just\nprint a warning and exit successfully."),Object(i.b)("li",{parentName:"ul"},"Try not to use scripts to do what npm can do for you.  Read through\n",Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/package-json"},Object(i.b)("inlineCode",{parentName:"a"},"package.json"))," to see all the things that you can specify and enable\nby simply describing your package appropriately.  In general, this\nwill lead to a more robust and consistent state."),Object(i.b)("li",{parentName:"ul"},"Inspect the env to determine where to put things.  For instance, if\nthe ",Object(i.b)("inlineCode",{parentName:"li"},"npm_config_binroot")," environment variable is set to ",Object(i.b)("inlineCode",{parentName:"li"},"/home/user/bin"),", then\ndon't try to install executables into ",Object(i.b)("inlineCode",{parentName:"li"},"/usr/local/bin"),".  The user\nprobably set it up that way for a reason."),Object(i.b)("li",{parentName:"ul"},"Don't prefix your script commands with \"sudo\".  If root permissions\nare required for some reason, then it'll fail with that error, and\nthe user will sudo the npm command in question."),Object(i.b)("li",{parentName:"ul"},"Don't use ",Object(i.b)("inlineCode",{parentName:"li"},"install"),". Use a ",Object(i.b)("inlineCode",{parentName:"li"},".gyp")," file for compilation, and ",Object(i.b)("inlineCode",{parentName:"li"},"prepublish"),"\nfor anything else. You should almost never have to explicitly set a\npreinstall or install script. If you are doing this, please consider if\nthere is another option. The only valid use of ",Object(i.b)("inlineCode",{parentName:"li"},"install")," or ",Object(i.b)("inlineCode",{parentName:"li"},"preinstall"),"\nscripts is for compilation which must be done on the target architecture.")),Object(i.b)("h3",null,"See Also"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-run-script"},"npm run-script")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/configuring-npm/package-json"},"package.json")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/using-npm/developers"},"npm developers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/cli/v6/commands/npm-install"},"npm install"))))}c.isMDXComponent=!0},O6H6:function(e,n,t){"use strict";var a=t("vOnD"),i=t("u9kb"),l=t("aOgs"),r=t("q1tI"),o=t.n(r),p=t("7ljp"),c=t("pD55"),s=t("8Aig"),b=t("ReZb"),m=t("GCVy"),u=t("+6vE");var d=function(e){var n=e.children;return o.a.createElement(i.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},o.a.createElement(i.s,{fontFamily:"mono",fontSize:1},n))};var h=function(e){var n=e.children;return o.a.createElement("strong",null,n)},j=t("gnlW"),O=t("mwnC"),f=t("/Rw0"),g=t("dVM4"),N=Object(a.f)(i.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var n=e.items,t=e.depth;return o.a.createElement(N,{key:n,as:"ul",m:0,p:0},n.map((function(e){return o.a.createElement(i.e,{as:"li",key:e.url,pl:t>0?3:0},o.a.createElement(i.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?o.a.createElement(y,{items:e.items,depth:t+1}):null)})))}y.defaultProps={depth:0};var C=y,v=t("MfeC");function k(e){var n=v.a.getPath(e.location.pathname),t=v.a.getVariantAndPage(e.root,n);if(!t)return null;var a=v.a.getVariantsForPage(e.root,t.page),l=[],r=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===n&&(r=e),l.push(o.a.createElement(i.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),o.a.createElement(i.i,{overlay:e.overlay},o.a.createElement(i.i.Button,null,r.variant.title),o.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},l)))}k.Menu=Object(a.f)(i.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var w=k,E=Object(a.f)(i.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(a.f)(i.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),S=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(a.f)(i.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),T=Object(a.f)(i.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});n.a=function(e){var n=e.children,t=e.pageContext,a=e.location,r=t.frontmatter,N=r.title,y=r.description,k=r.status,R=r.source,A=r.additionalContributors,F=void 0===A?[]:A,P=v.a.getVariantRoot(a.pathname);return o.a.createElement(p.a,{components:{Index:b.a,Note:m.a,Prompt:d,PromptReply:h,Screenshot:j.a}},o.a.createElement(i.k,{flexDirection:"column",minHeight:"100vh"},o.a.createElement(c.a,{title:N,description:y}),o.a.createElement(s.b,{location:a,isSearchEnabled:t.isSearchEnabled}),o.a.createElement(E,{flex:"1 1 auto",flexDirection:"row"},o.a.createElement(i.e,{display:["none",null,null,"block"]},o.a.createElement(O.a,{editOnGitHub:t.themeOptions.showSidebarEditLink&&t.themeOptions.editOnGitHub,location:a})),o.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},o.a.createElement(_,null,o.a.createElement(i.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},o.a.createElement(i.e,null,o.a.createElement(i.e,null,o.a.createElement(i.m,{as:"h1"},N),y))),null!=P?o.a.createElement(S,null,o.a.createElement(w,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:P,location:a})):null),t.tableOfContents.items?o.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},o.a.createElement(i.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),o.a.createElement(C,{items:t.tableOfContents.items})):null,o.a.createElement(T,null,k||R?o.a.createElement(i.k,{mb:3,alignItems:"center"},k?o.a.createElement(g.a,{status:k}):null,o.a.createElement(i.e,{mx:"auto"}),R?o.a.createElement(f.a,{href:R}):null):null,t.tableOfContents.items?o.a.createElement(i.e,{display:["block",null,"none"],mb:3},o.a.createElement(i.h,null,(function(e){var n=e.open;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.s,{as:"summary",fontWeight:"bold"},n?o.a.createElement(i.r,{icon:l.b,mr:2}):o.a.createElement(i.r,{icon:l.c,mr:2}),"Table of contents"),o.a.createElement(i.e,{pt:1},o.a.createElement(C,{items:t.tableOfContents.items})))}))):null,n,o.a.createElement(u.a,{editOnGitHub:t.themeOptions.editOnGitHub,editUrl:t.editUrl,contributors:t.contributors.concat(F.map((function(e){return{login:e}})))}))))))}}}]);
//# sourceMappingURL=component---content-cli-v-6-using-npm-scripts-md-b6c08a5d2e16cb340717.js.map