/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('AppCtrl', AppCtrl);
    AppCtrl.$inject = ['$scope','appService', 'msgService', 'sessionService'];

    function AppCtrl($scope, appService, msgService, sessionService) {
        console.log('AppCtrl');

        // 加载基础数据
        appService.load();
        msgService.load();

        var vm = this;
        vm.me = sessionService.getSignInUser();
        vm.msgs = msgService.all();
    }
})();
