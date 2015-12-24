/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('GscxCtrl', GscxCtrl);
    GscxCtrl.$inject = ['$scope','$ionicHistory', 'gsService', '_', '$ionicPopover', '$ionicModal'];

    function GscxCtrl($scope, $ionicHistory, gsService, _, $ionicPopover, $ionicModal) {
        console.log('GscxCtrl');

        var vm = this;
        vm.gslist = gsService.all();
        vm.totalAmount = 0;
        vm.filterShown = false;
        vm.query = {
            startMonth: moment().subtract(10,'months').startOf('month').format('YYYY-MM'),
            endMonth: moment().startOf('month').format('YYYY-MM'),
            kjywr: '上海税友软件有限公司'
        };
        vm.queryEdit = _.clone(vm.query);
        vm.queryEdit.startMonth = moment(vm.query.startMonth).toDate();
        vm.queryEdit.endMonth = moment(vm.query.endMonth).toDate();

        $scope.$watchCollection('vm.gslist', function(news, olds){
            _.each(news, function(item){
                vm.totalAmount += item.amount;
            });
        });
        $ionicPopover.fromTemplateUrl('js/app/gs/gscx/query-filter.html', {
            scope: $scope
        }).then(function(popover) {
            vm.filter = popover;
        });

        vm.toggleFilter = function($event) {
            if(vm.filter.isShown()){
                vm.filterShown = false;
                vm.filter.hide($event);
            }else{
                vm.filterShown = true;
                vm.filter.show($event);
            }
        };
        $scope.$on('popover.hidden', function() {
            vm.filterShown = false;
            console.log('popover.hidden');
        });
        $scope.$on('popover.shown', function() {
            vm.filterShown = true;
            console.log('popover.shown');
        });
        $scope.$on('popover.removed', function() {
        });


        $ionicModal.fromTemplateUrl('js/app/gs/gscx/kjywr.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.kjywr = modal;
        });

        $scope.$on('$destroy', function() {
            vm.filter.remove();
            vm.kjywr.remove();
        });

        vm.openKjywr = function () {
            vm.kjywr.show();
        };
        vm.closeKjywr = function () {
            vm.kjywr.hide();
        };

        gsService.load();
    }
})();
