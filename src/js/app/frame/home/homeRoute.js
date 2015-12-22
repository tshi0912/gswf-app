/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .config(homeRoute);
    homeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];

    function homeRoute($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/home/home.html',
                        controller: 'HomeCtrl as vm'
                    }
                }
            })
            .state('app.app', {
                url: '/apps/:appId',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/home/app-frame.html',
                        controller: 'AppFrameCtrl as vm'
                    }
                }
            });

    };
})();
