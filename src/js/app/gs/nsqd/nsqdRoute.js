/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.gs')
        .config(nsqdRoute);
    nsqdRoute.$inject = ['$stateProvider'];

    function nsqdRoute($stateProvider) {

        $stateProvider
            .state('app.nsqd', {
                url: '/nsqd',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/nsqd/nsqd.html',
                        controller: 'NsqdCtrl as vm'
                    }
                }
            });
    };
})();
