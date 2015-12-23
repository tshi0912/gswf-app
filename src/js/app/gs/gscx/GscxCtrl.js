/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('GscxCtrl', GscxCtrl);
    GscxCtrl.$inject = ['$scope','$ionicHistory', 'gsService'];

    function GscxCtrl($scope, $ionicHistory, gsService) {
        console.log('GscxCtrl');
        var vm = this;
        vm.gslist = gsService.all();
        gsService.load();
    }
})();
