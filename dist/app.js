"use strict";var index_1=require("./app-linter/index");console.log("\nWelcome to        __     __\n  _________  ____/ /__  / /_  ______  ___  _____\n / ___/ __ \\/ __  / _ \\/ / / / /_  / / _ \\/ ___/\n/ /__/ /_/ / /_/ /  __/ / /_/ / / /_/  __/ /\n\\___/\\____/\\__,_/\\___/_/\\__, / /___/\\___/_/\n                       /____/\n"),console.log("Your code is being processed in a Web Worker.\nYou can see the errors in the web user interface\nas well as in the console of your browser.\n\n");var sampleCode=localStorage.getItem("code")||"// Welcome to Codelyzer!\n//\n// Codelyzer is a tool great for teams and individuals, which helps you\n// write consistent code, and discover potential errors.\n//\n// It processes your TypeScript, templates, template expressions and\n// even inline styles! Most rules are inspired by the Angular style guide.\n// They have a URL associated with them that is going to link to the exact\n// section in angular.io/styleguide.\n//\n// Give it a try!\n\n@Component({\n  selector: 'hero-cmp',\n  template: `\n    <h1>Hello <span>{{ her.name }}</span></h1>\n  `,\n  styles: [\n    `\n    h1 spam {\n      color: red;\n    }\n    `\n  ]\n})\nclass Hero {\n  private hero: Hero;\n\n  ngOnInit() {\n    console.log('Initialized');\n  }\n}\n",editor=new index_1.ErrorReportingEditor("CodeMirror-lint-markers",window.CodeMirror(document.getElementById("editor"),{value:sampleCode,gutters:["CodeMirror-lint-markers"],mode:"javascript",theme:"material",lineNumbers:!0})),unlocked=!0;editor.on("change",function(){unlocked&&(setTimeout(function(){localStorage.setItem("code",editor.getValue()),unlocked=!0},1e3),unlocked=!1)}),new index_1.Linter({workerBundle:"./dist/worker.bundle.js",textEditor:editor,reporter:new index_1.PlainReporter(new index_1.HtmlFormatter,document.getElementById("warnings-header"),document.getElementById("warnings")),onError:function(e){checkbox.checked&&window.Raven.captureMessage(e,editor.getValue())}}).init();var checkbox=document.getElementById("reporting");checkbox.checked&&window.Raven.config("https://7e471773c9324277a73eaef6eb874b0f@sentry.io/109396").install(),checkbox.onchange=function(e){checkbox.checked?window.Raven.config("https://7e471773c9324277a73eaef6eb874b0f@sentry.io/109396").install():window.Raven.uninstall(),console.log(checkbox.checked)};