/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.gs')
        .config(gscxRoute);
    gscxRoute.$inject = ['$stateProvider'];

    function gscxRoute($stateProvider) {

        $stateProvider
            .state('app.gscx', {
                url: '/gscx',
                views: {
                    'mainContent': {
                        templateUrl: 'js/app/gs/gscx/gscx.html',
                        controller: 'GscxCtrl as vm'
                    }
                }
            });
    };
})();
