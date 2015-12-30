/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.gs')
        .config(zxjyRoute);
    zxjyRoute.$inject = ['$stateProvider'];

    function zxjyRoute($stateProvider) {

        $stateProvider
            .state('app.zxjy', {
                url: '/zxjy',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/zxjy/zxjy.html',
                        controller: 'ZxjyCtrl as vm'
                    }
                }
            })
            .state('app.sgjy', {
                url: '/sgjy',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/zxjy/sgjy.html',
                        controller: 'SgjyCtrl as vm'
                    }
                }
            });
    };
})();
