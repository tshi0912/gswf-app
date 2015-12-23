// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('gswf', ['ionic', 'ngIOS9UIWebViewPatch', 'ngCordova',
    'underscore', 'angularMoment', 'angular-md5',
    'gswf.frame', 'gswf.util', 'gswf.templates',
    'gswf.gs']);

//创建module
angular.module('gswf.config',[]);

angular.module('gswf').constant('$ionicLoadingConfig', {
    template: '<ion-spinner icon="ios"></ion-spinner><br/>加载中...',
    noBackdrop: true
});
