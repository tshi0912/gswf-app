/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('NsqdCtrl', NsqdCtrl);
    NsqdCtrl.$inject = ['$scope', 'gsService', '$ionicPopover', '$state'];

    function NsqdCtrl($scope, gsService, $ionicPopover, $state) {
        console.log('NsqdCtrl');
        var vm = this;
        vm.nsqds = gsService.nsqds();
        vm.filterShown = false;
        vm.queryChanged = false;
        vm.query = {
            startMonth: moment().subtract(10, 'months').startOf('month').toDate(),
            endMonth: moment().startOf('month').toDate()
        };
        vm.queryEdit = _.clone(vm.query);

        $ionicPopover.fromTemplateUrl('js/app/gs/nsqd/query-filter.html', {
            scope: $scope,
            backdropClickToClose: false
        }).then(function (popover) {
            vm.filter = popover;
        });

        $scope.$watch('vm.queryEdit', function (n, o) {
            vm.queryChanged = !_.isEqual(vm.query, n);
        },true);

        vm.toggleFilter = function ($event) {
            if (vm.filter.isShown()) {
                vm.filterShown = false;
                vm.filter.hide($event);
            } else {
                vm.filterShown = true;
                vm.filter.show($event);
            }
        };
        vm.hideFilter = function ($event) {
            vm.filterShown = false;
            vm.filter.hide($event)
        };
        $scope.$on('popover.hidden', function () {
            vm.filterShown = false;
            vm.tryToQuery();
        });
        $scope.$on('popover.shown', function () {
            vm.filterShown = true;
        });
        $scope.$on('popover.removed', function () {
        });

        vm.tryToQuery = function () {
            if (!_.isEqual(vm.query, vm.queryEdit)) {
                _.extend(vm.query, vm.queryEdit);
                vm.queryChanged = false;
                gsService.queryNsqd(vm.query);
            }
        };

        vm.goToAddNsqd = function(){
            $state.go('app.addNsqd');
        };

        gsService.loadNsqd({query: vm.query});
    }
})();
