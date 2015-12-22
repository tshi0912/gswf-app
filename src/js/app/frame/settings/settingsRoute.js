/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .config(settingsRoute);
    settingsRoute.$inject = ['$stateProvider'];

    function settingsRoute($stateProvider) {

        $stateProvider
            .state('app.settings', {
                url: '/settings',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/settings/settings.html',
                        controller: 'SettingsCtrl as vm'
                    }
                }
            })
            .state('app.profile', {
                url: '/profile',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/settings/profile.html'
                    }
                }
            })
            .state('app.pwd', {
                url: '/pwd',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/settings/pwd.html'
                    }
                }
            })
            .state('app.del', {
                url: '/del',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/settings/del.html'
                    }
                }
            })
    };
})();
