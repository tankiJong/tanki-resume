# tanki-resume
This is my resume. Read data from Markdown file and render to static page.

Written with Vue, Gulp, Babel, Sass.

# build & debug
1. You may have to install `gulp-cli` to run gulp in shell.
1. Run `npm install` to install all dependencies.
1. Run `gulp build` to generate static page.
1. Run `gulp serve` and debug it in `localhost:9000`.

# Editing Guide
First, let's have a look at the file tree.
```
.
├── contents
│   ├── about.html
│   ├── about.scss
│   ├── community-activity.md
│   ├── project-experience.md
│   └── work-experience.md
├── favicon.ico
├── font
│   ├── fontello.eot
│   ├── fontello.svg
│   ├── fontello.ttf
│   ├── fontello.woff
│   └── fontello.woff2
├── images
│   ├── avatar-open.jpg
│   └── avatar.jpg
├── index.html
├── robots.txt
├── scripts
│   ├── component
│   ├── content.index.js
│   └── main.js
└── styles
    ├── cover.scss
    ├── fontello.scss
    ├── global.scss
    ├── includes.scss
    ├── main.scss
    ├── md.scss
    ├── mobile.scss
    ├── style.scss
    └── variable.scss
```
## customize your content
* All paragraphs are suggested to put in this folder. The render process support static HTML or Markdown file.
* You should edit your file here, then register it in `content.index.js`.
* The program will auto parse your import name to the navigation name.
