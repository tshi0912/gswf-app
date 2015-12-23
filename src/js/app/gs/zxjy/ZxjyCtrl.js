/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('ZxjyCtrl', ZxjyCtrl);
    ZxjyCtrl.$inject = ['$scope','$ionicHistory', 'zxjyService'];

    function ZxjyCtrl($scope, $ionicHistory, zxjyService) {
        console.log('ZxjyCtrl');
        var vm = this;
    }
})();
