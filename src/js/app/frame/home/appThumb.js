/**
 * Created by jimshi0912 on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .directive('appThumb', appThumb);

    function appThumb() {
        return {
            restrict: 'E',
            scope: {
                app: '='
            },
            templateUrl: 'js/app/frame/home/app-thumb.html',
            controller: ['$scope', '$state', function ($scope, $state) {
                $scope.openApp = function () {
                    $state.go('app.app', {appId: $scope.app.id})
                };
            }],
            link: function (scope, element, attrs) {

            }
        }
    }
})();
