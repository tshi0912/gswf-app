/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('ScanCtrl', ScanCtrl);
    ScanCtrl.$inject = ['$scope','$ionicHistory'];

    function ScanCtrl($scope, $ionicHistory) {
        console.log('ScanCtrl');
        var vm = this;
    }
})();
