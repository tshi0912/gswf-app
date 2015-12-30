/**
 * Created by jimshi0912 on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .directive('kjywrInput', kjywrInput);

    function kjywrInput() {
        return {
            restrict: 'A',
            scope: {
                targets: '='
            },
            templateUrl: 'js/app/gs/gscx/kjywr-input.html',
            controller: ['$scope', 'gsService', '_', '$ionicModal',
                function ($scope, gsService, _, $ionicModal) {
                    //$scope.openApp = function () {
                    //    if($scope.app.route) {
                    //        $state.go($scope.app.route);
                    //    }
                    //};
                    gsService.getKjywrs()
                        .then(function(d){
                            $scope.orgKjywrs = gsService.kjywrs();
                            $scope.kjywrs = [];
                            _.each($scope.orgKjywrs, function (item) {
                                item.selected = false;
                                if(_.findWhere($scope.targets, {id: item.id})){
                                    item.selected = true;
                                }
                                if(item.id === -1){
                                    $scope.allKjywr = item;
                                }else{
                                    $scope.kjywrs.push(item);
                                }
                            });
                        });

                    $ionicModal.fromTemplateUrl('js/app/gs/gscx/kjywr-modal.html', {
                        scope: $scope,
                        animation: 'slide-in-up'
                    }).then(function (modal) {
                        $scope.kjywr = modal;
                    });

                    $scope.$on('$destroy', function () {
                        $scope.kjywr.remove();
                    });

                    $scope.openKjywr = function () {
                        $scope.kjywr.show();
                    };
                    $scope.closeKjywr = function () {
                        $scope.kjywr.hide();
                    };
                    $scope.toggleKjywr = function (kjywr) {
                        if (kjywr.id === -1 && !kjywr.selected) {
                            _.each($scope.kjywrs, function (item) {
                                item.selected = false;
                            });
                        } else if (kjywr.id !== -1 && !kjywr.selected) {
                            $scope.allKjywr.selected = false;
                        } else {
                            var t = _.filter($scope.orgKjywrs, function (item) {
                                return item.selected;
                            });
                            if (t.length === 1 && t[0].id === kjywr.id) {
                                return;
                            }
                        }
                        kjywr.selected = !kjywr.selected;
                    };
                    $scope.confirmKjywrs = function () {
                        if(!$scope.targets) return;
                        $scope.targets.length = 0;
                        _.each(_.union([$scope.allKjywr],$scope.kjywrs), function (item) {
                            if (item.selected) {
                                $scope.targets.push(item);
                            }
                        });
                        $scope.kjywr.hide();
                    };
                }],
            link: function (scope, element, attrs) {
                element.on('click', function(){
                    scope.$apply(scope.openKjywr);
                });
            }
        }
    }
})();
