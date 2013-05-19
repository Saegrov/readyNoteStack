# readyNoteStack







## [AngularJS](http://angularjs.org/)


The front end app is built using AngularJS, with a tool called [Yeoman](http://yeoman.io/).

Yeoman is more than just a tool. It's a workflow; a collection of tools and best practices working in harmony to make developing for the web even better.
Yeomans workflow is comprised of three tools for improving your productivity and satisfaction when building a web app: yo (the scaffolding tool), grunt (the build tool) and bower (for package management).


* **Yo** scaffolds out a new application, writing your Grunt configuration and pulling in relevant Grunt tasks that you might need for your build.
* **Grunt** is used to build, preview and test your project, thanks to help from tasks curated by the Yeoman team and grunt-contrib.
* **Bower** is used for dependency management, so that you no longer have to manually download and manage your scripts.

Getting started

1. Install Grunt and Bower and generators for Angular and Karma

    $ npm install -g yo grunt-cli bower generator-angular generator-karma

2. "Deploy" app to public folder

    $ grunt



### [Bower](http://bower.io/)
Bower is a package manager for the web. It offers a generic, unopinionated solution to the problem of front-end package management, while exposing the package dependency model via an API that can be consumed by a more opinionated build stack. There are no system wide dependencies, no dependencies are shared between different apps, and the dependency tree is flat.

Bower runs over Git, and is package-agnostic. A packaged component can be made up of any type of asset, and use any type of transport (e.g., AMD, CommonJS, etc.).

### [Grunt](http://gruntjs.com/)
Grunt is a task-based command line build tool for JavaScript projects.

### [Yeoman](http://yeoman.io/)
Examples of Yeoman scaffolding:

#### Add a new route:


    $ yo angular:route projects

#### Add a new view:

    $ yo angular:view myNewView


