/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('GscxCtrl', GscxCtrl);
    GscxCtrl.$inject = ['$scope', '$ionicHistory', 'gsService', '_', '$ionicPopover', '$ionicModal'];

    function GscxCtrl($scope, $ionicHistory, gsService, _, $ionicPopover, $ionicModal) {
        console.log('GscxCtrl');

        var vm = this;
        vm.gslist = gsService.all();
        vm.orgKjywrs = gsService.kjywrs();
        vm.kjywrs = [];
        vm.totalAmount = 0;
        vm.filterShown = false;
        vm.queryChanged = false;
        vm.query = {
            startMonth: moment().subtract(10, 'months').startOf('month').toDate(),
            endMonth: moment().startOf('month').toDate(),
            kjywrs: []
        };
        vm.queryEdit = _.clone(vm.query);
        vm.queryEdit.kjywrs = _.toArray(vm.query.kjywrs);

        $scope.$watchCollection('vm.gslist', function (news, olds) {
            vm.totalAmount = 0;
            _.each(news, function (item) {
                vm.totalAmount += parseFloat(item.amount);
            });
        });
        $scope.$watchCollection('vm.orgKjywrs', function (news, olds) {
            _.each(news, function (item) {
                if (item.id === -1) {
                    vm.allKjywr = item;
                    vm.allKjywr.selected = true;
                    vm.queryEdit.kjywrs.length = 0;
                    vm.queryEdit.kjywrs.push(item);
                    vm.query.kjywrs.length = 0;
                    vm.query.kjywrs.push(item);
                } else {
                    vm.kjywrs.push(item);
                }
            });
        });
        $scope.$watch('vm.queryEdit', function (n, o) {
            vm.queryChanged = !_.isEqual(vm.query, n);
        },true);

        $ionicPopover.fromTemplateUrl('js/app/gs/gscx/query-filter.html', {
            scope: $scope,
            backdropClickToClose: false
        }).then(function (popover) {
            vm.filter = popover;
        });

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


        $ionicModal.fromTemplateUrl('js/app/gs/gscx/kjywr.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            vm.kjywr = modal;
        });

        $scope.$on('$destroy', function () {
            vm.filter.remove();
            vm.kjywr.remove();
        });

        vm.openKjywr = function () {
            vm.kjywr.show();
        };
        vm.closeKjywr = function () {
            vm.kjywr.hide();
        };
        vm.toggleKjywr = function (kjywr) {
            if (kjywr.id === -1 && !kjywr.selected) {
                _.each(vm.kjywrs, function (item) {
                    item.selected = false;
                });
            } else if (kjywr.id !== -1 && !kjywr.selected) {
                vm.allKjywr.selected = false;
            } else {
                var t = _.filter(vm.orgKjywrs, function (item) {
                    return item.selected;
                })
                if (t.length === 1 && t[0].id === kjywr.id) {
                    return;
                }
            }
            kjywr.selected = !kjywr.selected;
        };
        vm.confirmKjywrs = function () {
            vm.queryEdit.kjywrs.length = 0;
            _.each(vm.orgKjywrs, function (item) {
                if (item.selected) {
                    vm.queryEdit.kjywrs.push(item);
                }
            })
            vm.kjywr.hide();
        };

        vm.tryToQuery = function () {
            if (!_.isEqual(vm.query, vm.queryEdit)) {
                _.extend(vm.query, _.omit(vm.queryEdit, 'kjywrs'));
                vm.query.kjywrs = _.union(vm.queryEdit.kjywrs);
                vm.queryChanged = false;
                gsService.query(vm.query);
            }
        };

        vm.toggleDetail = function(gs){
            gs.opened = !gs.opened;
        };

        gsService.load({query: vm.query});
    }
})();
