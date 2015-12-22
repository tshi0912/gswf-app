/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('AppFrameCtrl', AppFrameCtrl);
    AppFrameCtrl.$inject = ['$scope', 'appService', '$stateParams'];

    function AppFrameCtrl($scope, appService, $stateParams) {

        console.log('AppFrameCtrl');

        var vm = this;
        var appId = $stateParams.appId;
        vm.app = appService.get(appId);
    }
})();
