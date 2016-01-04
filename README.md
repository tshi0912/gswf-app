# 个税服务平台

### 使用Ionic开发模块化H5移动的样板工程以及最佳实践。

***NOTE:*** 本样板应用基于 Ionic 1.x 和 Angular 1.x.

本样板应用旨在解决(自动化build, SASS/样式编制, Ionic模块化架构)等问题.

## 内容目录

[简介](#简介)<br>
[安装和用法](#installation-and-usage)<br>
[Gulp文件](#gulp-file)<br>
[项目结构](#project-structure)<br>
[贡献者列表](#contributing)

## 简介

个税服务平台样板工程基于Ionic "menu starter"启动工程, 并提供给了以下额外的功能点:

* 优化后的gulp.js文件 (如为product发布进行了优化, 对模板进行缓存等等)
* 优化后的项目结构 (更适合大型项目的模块化结构)
* Javascript脚本文件将通过gulp的任务自动被注入进index.html文件中
* 可以根据不同的环境，定义不同的配置参数（例如，appkey），这些环境参数将被gulp.js写进config.js中
* 支持通过Karma和Jasmine进行单元测试
* 支持Typescript文件('tsd'文件),以方便在具备智能感应功能的的IDE中（如WebStorm和Visual Studio）开启词组自动补全功能
* 支持国际化 (I18N)，通过  <a href="https://github.com/angular-translate/angular-translate"
target="_blank">angular-translate</a>提供国际化功能  (目前只支持英文,添加其他语言支持也非常方便)
* 提供了对Ionic应用常见bug的修复 (如滑动关闭菜单, 硬回退按钮等)
* 提供了众多AngularJS和Ionic的'最佳实践' (例如"Controller as" 语法)
* 模块化的SASS设置，包括唾手可得的工具类样式和对字体、颜色定义的最佳实践
* 可重用的services和directives包括一些通用的工具函数
* 'appModule' 工具函数，可以使AngularJS模块化管理更简单
* 目前基于Ionic 1.2 和AngularJS 1.4; 已经在3种设备进行过测试: iPhone 4, Android smartphone, Android tablet

上述的第一、第二点 (项目结构和Gulp文件) 将在下面详细描述.

## 安装和用法

首先, 安装 ```nodejs```, ```npm```, ```gulp```, ```bower```, ```cordova```, ```ionic``` & ```sass``` (如果还没安装过的话).

***小贴士:*** 除了手动一个个安装上述工具外, 另一种方法是使用
<a href="https://github.com/driftyco/ionic-box" target="_blank">Ionic Box</a>. 这种方式更便捷,特别是针对windows用户.

***警告:*** Ionic论坛里面有很多人在吐槽'SASS'在他们的电脑上玩不转. 最典型的错误如下:
 
```libsass bindings not found. Try reinstalling node-sass?```
 
关于这个问题, 可以参考:

http://forum.ionicframework.com/t/error-running-gulp-sass/32311
http://forum.ionicframework.com/t/libsass-bindings-not-found/27881

然而, 当你首次安装本样板工程时，这个问题 **应该不会** 出现， 因为我已经将 ```gulp-sass```升级到了可以完全兼容nodejs的版本.

假设上述工具你都已经安装成功, 则打开终端，"cd"进入你的工作目录.

运行以下命令(注意: app命名为 ```gswf```, 你可以根据需要替换成你想要的名字):

<pre>
git clone https://github.com/leob/ionic-quickstarter
mv ionic-quickstarter myapp
cd myapp
</pre>

如果你想通过Git管理你的代码, 键入:

<pre>
git init
</pre>

***注意:*** 这一步 (编辑 ionic.project 和 config.xml 更改app的名字)是可选的. 如果需要，你可以先略过，回头再改. 若干确定要改，则通过文本编辑器打开:

<pre>
ionic.project
config.xml
</pre>

在这些文件中，将字符串```app```替换为任何你想要给你的应用起的名字:

* ```ionic.project```: 第二行 ("name": "app"), 替换 ```app``` 为你的应用名称
* ```config.xml```: 第二行, 替换 ```com.ionicframework.app``` 为你的应用包名 (例如 ```com.mycompany.myapp```), 并且在第三行替换 ```app``` 为你应用的名称

输入以下命令完成安装:

<pre>
npm install
bower install
ionic state restore --plugins
</pre>

最终, 如果你想要添加Android或iOS的runtime平台支持，输入如下命令:

<pre>
ionic platform add android
ionic platform add ios
</pre>

现在项目准备就绪. 如想在浏览器中运行, 输入 (我建议你始终输入 ```-c``` 选项):

<pre>
ionic serve -c
</pre>

或者这样, 例如 (使用 "labs" 的功能, 登录控制台, 默认使用chrome浏览器):

<pre>
ionic serve -l -c --browser google-chrome
</pre>

体验App吧，点击菜单, 标签等等.


***注意:*** 如果执行 ```ionic serve``` 时你看到一个空白页面，并带有
```Error: ENOENT: no such file or directory ... index.html``` 者通常表示 "gulp-inject" 进程没能从index-template.html模板创建index.html.

如果遇到这个错误，我建议你运行"ionic serve"，并带上参数 '-l' 和 '-c', 如下所示：

<pre>
ionic serve -l -c
</pre>

在某些情况下，"-l"参数本身就能提供足够的信息辅助修正该问题.

如果问题仍然解决不了，仔细查看控制台通过"-c"参数打出的消息。一般而言，你应该能看到错误消息的堆栈信息.

上述问题一种非常可能的原因是 ```libsass bindings not found``` 错误。然而该错误不应该再发生了，因为```gulp-sass```的版本已经更新至最新版。

### 使用注意事项

本样例为使用gulp设置了3中模式：

* 'development' 模式：即通过运行 "ionic serve" (在浏览器上模拟运行)进入的模式
* 'test' 模式: 当运行 'gulp test' 或 'karma start' 进入的模式
* 'production' 模式：即通过运行 "gulp build" 和 "ionic run" (在设备商运行)进入的模式

这三种模式之间还是有很大的区别的.

#### Development 模式

在development模式中, gulp编译进程非常简单: 没有合并、没有压缩.

默认情况下, 在development模式下, 各类不同的服务 (注册, 登录等等) 使用的是一个基于假数据的 "mock" 实现。(但是你可以通过配置参数很简单的覆盖这一实现).

为了定义development模式下的参数，可以去 ```src/js/config/config-dev.json```中添加。
```gulp``` 构建进程将会把这些配置参数写进 ```src/js/config/config.js```。

#### Production 模式

在production模式中 (在设备上使用), gulp 构建进程将会执行一个完整的构建，其中包括压缩，合并资源等等，并且应用是跑在真实设备上的.

(例如，用于登录/注册的 SessionsService, 你完成可以替换成一个你自己想要的类)

为了定义development模式下的参数，可以去 ```src/js/config/config-prod.json```中添加.
```gulp``` 构建进程将会把这些配置参数写进 ```src/js/config/config.js```。

#### Test 模式

Test 模式 (karma/jasmine) 使用的是'轻量级'的构建过程和'mock'服务.

该样例同时也支持端到端 (E2E)的测试, 详细请见 [这里](https://github.com/leob/ionic-quickstarter/wiki/E2E-Testing).

关于配置和使用development, test 和 production 模式的更多细节, 请参考
[Wiki](https://github.com/leob/ionic-quickstarter/wiki).

#### A note about "ionic upload" and the Ionic View app

Here is a warning for people who use the Ionic View app in conjunction with the ```ionic upload``` command to test
their app (by the way, I don't really recommend using Ionic View, see my comments about it on the Wiki).

If you do an ```ionic upload```, then by default it will take your app from the ```src``` folder, not from ```www```.
This is because ```ionic upload``` takes the setting from the ```ionic.project``` file.

So that would mean that you'd see a ***development*** build, not a ***production*** build, when viewing your app in
Ionic View.

If you don't want this (i.e. if you want a **production** build in Ionic View) then you should (temporarily) change
```src``` to ```www``` in ```ionic.project```, do a ```gulp build``` and a ```ionic upload```, and then change
ionic.project back to ```src```.

Note that the same principles apply if you want to test a **production** build under ```ionic serve``` (so not in the
Ionic View app but in a browser).

However in this case you need to take one extra step to prevent ```ionic serve``` from overwriting your production
build: you need to run ```ionic serve``` with the ```--nogulp``` argument.

So the workflow then becomes:

* temporarily change ```src``` to ```www``` in ```ionic.project```
* run the command: ```gulp build```
* run the command: ```ionic serve --nogulp```
* when you are done, change ```ionic.project``` back to ```src```

#### A note about the usage of Parse.com or Firebase for authentication

In production mode (if you run on a device with ```ionic build``` or ```ionic run```) then by default Parse.com will be
used for login/authentication. This is because in "production mode" the settings in the ```config-prod.json``` file are
used, which set ```devMode = false``` and ```testMode = false```.

These flags, in turn, cause the user service to point to the Parse.com implementation (see 
https://github.com/leob/ionic-quickstarter/blob/master/src/js/app/user/services/user.service.js to understand how this
works).

If you want to run in production mode but do NOT want to use Parse.com but another implementation (for instance the
'mock' implementation or the Firebase implementation), then you can do this in two ways:

* modify the values in  ```config-prod.json```: if you set ```devMode = true``` then the "mock" user service
implementation will be used
* modify the code of https://github.com/leob/ionic-quickstarter/blob/master/src/js/app/user/services/user.service.js to
make it use the implementation that you want (for instance the Firebase or the 'mock' implementation)

For more details on configuring Parse or Firebase, see the
[wiki](https://github.com/leob/ionic-quickstarter/wiki/Common-recipes).

#### A note about using the image functionality (Cordova Camera, image cropping)

The image functionality (taking a picture, cropping a picture, and so on) only works on a device, because it needs
Cordova, and camera hardware obviously. So, you will need to use 'production mode' (that is, ```gulp build``` and
```ionic run``` or ```ionic build```).

As explained in the previous section, in production mode authentication will use the Parse.com implementation by
default.

If you do not want this, then you can change the values in the ```config-prod.json``` file, or you can change
the code of https://github.com/leob/ionic-quickstarter/blob/master/src/js/app/user/services/user.service.js (see the
explanation above).

For more details on using the image functionality, see the
[wiki](https://github.com/leob/ionic-quickstarter/wiki/Common-recipes).

#### Adding libraries

If you want to add a Javascript library (pre-made JS component) to the app, you will need to go through the following
four steps.

(example used below: the "fus-messages" component, https://github.com/fusionalliance/fus-messages)

* Install it with bower, e.g: ```bower install fus-messages --save``` (this also updates your project's
```bower.json``` file).
* Add the library path (e.g. ```'./src/lib/fus-messages/dist/fus-messages.js'```) to your ```gulp.js``` file so that
```gulp build``` knows how to copy the library file(s) during the build. You need to add it to the ```lib``` section of
the ```paths``` variable in ```gulp.js```, and normally you would choose the minified version (ending in ```.min.js```)
of the library.
* Add the library path to your project's ```index-template.html``` file inside a ```script``` tag, for instance:
  ```<script src="lib/fus-messages/dist/fus-messages.js"></script>```
* Finally, add the library's module name (e.g. ```fusionMessages```) to the list of your app dependencies inside the
```app.module``` statement in your project's ```app.js``` file.

#### Troubleshooting modulerr errors in a production build

Sometimes, after doing a production build/run (```gulp build``` followed by ```ionic build``` or ```ionic run```) you
will see nothing but a blank page when starting the app on your device.

The most common cause is that you have the infamous AngularJS 'modulerr' error. To debug and fix this, please consult
[this](https://github.com/leob/ionic-quickstarter/wiki/Troubleshooting-modulerr-errors-in-a-production-build) Wiki
page.

## Gulp file

The gulp.js file supports the following commands:

* ```gulp default``` and ```gulp watch```
* ```gulp jshint```
* ```gulp test``` and ```gulp test-single```
* ```gulp build```

Here is how you use these commands.

### Gulp default and gulp watch

Normally you don't run these commands manually. They will be executed automatically when you run ```ionic serve```.
This is done through a configuration section in the ```ionic.project``` file:

```
 "gulpStartupTasks": [
    "default",
    "watch"
 ]
```

### Gulp jshint

You can run this to hint/lint your Javascript code. Just execute:

```
gulp jshint
```

### Gulp test and gulp test-single

Use these commands to run your tests via the Karma test runner.

```gulp test``` runs the tests and then keeps watching (and re-running) them until you abort the command, while
```gulp test-single``` runs the tests only once and then exits. 

### Gulp build

You use this command to generate a production build to run on a real device. Invoke it like this:

```
gulp build
ionic run
```

Replace ```ionic run``` by ```ionic build``` if you want to perform a build instead of a run.

## Project structure

To support bigger apps, the starter app is structured differently than the basic 'tabs starter app'.

The tabs starter app lumps all the route definitions and controllers in one Javascript file, and puts the html
templates in a separate directory.

Instead, we've chosen to organize the files on a Module basis: each Module is in its own directory containing the
Javascript (controllers etc) and the HTML (templates) for that Module. This makes it easier to keep a large app
organized and maintainable.

As an example, here is the default structure (slightly simplified) after installing the starter app:

```
/
├── scss
│   └── ionic.app.scss
│
├── src
│   ├── css
│   │      
│   ├── img
│   │      
│   ├── js
│   │   ├── app
│   │   │   │
│   │   │   ├── auth
│   │   │   │   ├── forgotPassword
│   │   │   │   │   ├── forgotPassword.html
│   │   │   │   │   └── forgotPassword.js
│   │   │   │   │
│   │   │   │   ├── login
│   │   │   │   │    ├── loggedout.html
│   │   │   │   │    ├── login.html
│   │   │   │   │    ├── login.ctrl.js
│   │   │   │   │    ├── login.router.js
│   │   │   │   │    └── logout.ctrl.js
│   │   │   │   │
│   │   │   │   └── signup
│   │   │   │        ├── signup.ctrl.js
│   │   │   │        ├── signup.html
│   │   │   │        └── signup.router.js
│   │   │   │    
│   │   │   ├── user
│   │   │   │   ├── models
│   │   │   │   │   └── user.js
│   │   │   │   │       
│   │   │   │   └── services
│   │   │   │        ├── user.service.js
│   │   │   │        ├── mock
│   │   │   │        │   └── user.service.mockImpl.js
│   │   │   │        └── parse
│   │   │   │            └── user.service.parseImpl.js
│   │   │   │      
│   │   │   app.js
│   │   │   
│   │   ├── config
│   │   │   ├── config-base.json
│   │   │   ├── config-dev.json
│   │   │   ├── config-prod.json
│   │   │   └── config.js  [GENERATED]
│   │   │   
│   │   ├── modules.js
│   │   │   
│   │   └── templates.js
│   │      
│   ├─── lib
│   │    ├── angular
│   │    ├── ionic
│   │    ├── ngCordova
│   │    └── parse
│   │      
│   ├ index-template.html
│   └ index.html  [GENERATED]
│         
└── www
```

The structure shown above is slightly simplified, but the idea is as follows.

### Separate "src" and "www" directories

The app's sources (Javascript, HTML, CSS) sit under ```src``` instead of under the default location ```www```.

This is different than a 'standard' Ionic app, the reason is because of how the build process works.

During a production build (```gulp build```), the sources (under ```src```) are minified and concatenated and so on and
the products (build artifacts, the minified/concatenated files) are then placed in the ```www``` directory, where
Cordova (through the ```ionic run``` or ```ionic build``` process) will pick them up.

This setup keeps the sources under ```src``` cleanly separated from the build artifacts under ```www```.

### Modules

General principle: ONE DIRECTORY == ONE MODULE (and one subdirectory == 1 sub module).

So you can remove a module by removing that directory (but then you still need to remove the module reference from
app.js - the script include in index.html will be removed automatically by the build process).

Example: in the structure shown above you can see two Modules: 'app.auth' and 'app.user'.

'app.auth' has 3 sub modules: 'app.auth.login', 'app.auth.signup' and 'app.auth.forgotPassword'.

'app.user' does not have sub modules.

Each (sub)module is an AngularJS module ('angular.module(...')), and each module is in its own directory containing all
of the Javascript and HTML files making up that module.

In the example of the 'forgotPassword' module, you see that the directory contains 2 files: a template file
(forgotPassword.html) and a Javascript file (forgotPassword.js). The Javascript file contains the route definition
(UI-router $stateProvider) and the controller definition.

In the example of the 'login' module you see that the directory contains 5 files: 2 template files (login.html and
loggedOut.html) and 3 Javascript files. In this case you see that we've put the route definitions into a separate file
(login.router.js) and each of the two controllers also in separate files.

Whether or not to put the route definitions and controllers in one Javascript file or in separate files is up to you
and will probably depend on the complexity of the code ('forgotPassword' is simple enough for all the Javascript code
to be put into one file).

The 'app.user' module is a module that doesn't define controllers, routes or templates; it only contains services (and
models). However, it is perfectly possible (and often logical) to have a module that contains everything: controllers,
routes, templates, services and so on. An example of this is the 'app.mainPage' module (not shown above).

Note that during the production build process all of the separate files (Javascript and HTML) will be minified and
concatenated into one Javascript file for efficiency reasons.

**Note:** apart from the directory structure (the 1 directory == 1 module principle), we've also introduced a file
naming convention.

For instance:

Scripts defining in which controllers are defined are named 'feature.ctrl.js', where 'feature' is the name of the
feature, e.g. "login".

Scripts defining services are named 'feature.service.js', and their implementations (of any) are named
'feature.service.mockImpl.js', 'feature.service.parseImpl.js'.

The naming scheme is probably quite intuitive, but you can find a full explanation in the Wiki:
[Naming conventions](https://github.com/leob/ionic-quickstarter/wiki/naming-conventions).

### Services and mocks

Services which can be reused across modules are in a separate directory ```services```.

A service (for instance the UserService) can have multiple implementations, for instance a "mock" implementation and a
"Parse" implementation. To illustrate, here is the code for userService.js:

```
angular.module('app.user')
  .factory('UserService', function ($injector, APP) {
    if (  APP.testMode) {
      return $injector.get('UserServiceMockImpl');
    } else {
      return $injector.get('UserServiceParseImpl');
    }
  });
```

Depending on "flags" set in the config.js (in this case, APP.testMode), the factory instantiates either a Mock
implementation or a Parse implementation of the user service. These implementations are in subdirectories below the
```service``` directory.

Using this approach, service implementations can easily be changed or swapped out without the client code (controllers
or other services) noticing anything.

The ability to run with 'mock' implementations makes it easy to develop quickly without having to perform a complicated
production setup, and in test mode, the mock implementations makes running your unit tests a lot faster of course.

## Contributing

Contributions are welcome. For details, see the
[Contributing](https://github.com/leob/ionic-quickstarter/wiki/Contributing) section on the Wiki.

