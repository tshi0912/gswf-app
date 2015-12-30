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
            })
            .state('app.addNsqd', {
                url: '/nsqd/add',
                params: {nsqd: null},
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/nsqd/nsqd-add.html',
                        controller: 'AddNsqdCtrl as vm'
                    }
                }
            })
            .state('app.nsqdDetail', {
                url: '/nsqd/:nsqdId',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/nsqd/nsqd-detail.html',
                        controller: 'NsqdDetailCtrl as vm'
                    }
                }
            });
    };
})();
