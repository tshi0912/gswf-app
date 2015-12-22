/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .config(aboutRoute);
    aboutRoute.$inject = ['$stateProvider'];

    function aboutRoute($stateProvider) {

        $stateProvider
            .state('app.about', {
                url: '/about',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/about/about.html',
                        controller: 'AboutCtrl as vm'
                    }
                }
            });
    };
})();
