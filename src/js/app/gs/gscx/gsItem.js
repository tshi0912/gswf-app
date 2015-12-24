/**
 * Created by jimshi0912 on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .directive('gsItem', gsItem);

    function gsItem() {
        return {
            restrict: 'C',
            templateUrl: 'js/app/gs/gscx/gs-item.html',
            controller: ['$scope', '$state', function ($scope, $state) {
                //$scope.openApp = function () {
                //    if($scope.app.route) {
                //        $state.go($scope.app.route);
                //    }
                //};
            }],
            link: function (scope, element, attrs) {

            }
        }
    }
})();
