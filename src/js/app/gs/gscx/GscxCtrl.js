/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('GscxCtrl', GscxCtrl);
    GscxCtrl.$inject = ['$scope','$ionicHistory', 'gsService', '_'];

    function GscxCtrl($scope, $ionicHistory, gsService, _) {
        console.log('GscxCtrl');
        var vm = this;
        vm.gslist = gsService.all();
        vm.totalAmount = 0;
        $scope.$watchCollection('vm.gslist', function(news, olds){
            _.each(news, function(item){
                vm.totalAmount += item.amount;
            });
        });
        gsService.load();
    }
})();
