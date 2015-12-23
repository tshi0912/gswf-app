/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('SettingsCtrl', SettingsCtrl);
    SettingsCtrl.$inject = ['$scope', 'sessionService'];

    function SettingsCtrl($scope, sessionService) {
        console.log('SettingsCtrl');
        var vm = this;
        vm.me = sessionService.getSignInUser();
    }
})();
