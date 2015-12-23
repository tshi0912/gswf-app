/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('NsqdCtrl', NsqdCtrl);
    NsqdCtrl.$inject = ['$scope','$ionicHistory', 'nsqdService'];

    function NsqdCtrl($scope, $ionicHistory, nsqdService) {
        console.log('NsqdCtrl');
        var vm = this;
        vm.gslist = nsqdService.all();
        nsqdService.load();
    }
})();
