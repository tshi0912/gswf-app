/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .config(scanRoute);
    scanRoute.$inject = ['$stateProvider'];

    function scanRoute($stateProvider) {

        $stateProvider
            .state('app.scan', {
                url: '/scan',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/frame/scan/scan.html',
                        controller: 'ScanCtrl as vm'
                    }
                }
            });
    };
})();
