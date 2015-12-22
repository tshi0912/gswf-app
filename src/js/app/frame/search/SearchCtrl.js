/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('SearchCtrl', SearchCtrl);
    SearchCtrl.$inject = ['$scope','$ionicHistory'];

    function SearchCtrl($scope, $ionicHistory) {
        console.log('SearchCtrl');
        var vm = this;
        vm.cancelSearch = function(){
          $ionicHistory.goBack();
        };
    }
})();
