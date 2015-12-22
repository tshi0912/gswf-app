/**
 * Created by jimshi0912 on 15/11/2.
 */
(function () {
    appModule('gswf.util')
        .directive('hideNavTab', hideNavTab);

    function hideNavTab() {
        return {
            restrict: 'A',
            compile: function () {
                var navTabs = angular.element(
                    document.querySelector('ion-tabs > .tab-nav'));

                return function ($scope) {
                    $scope.$on('$ionicView.beforeEnter', function () {
                        navTabs.addClass('hide');

                    });

                    $scope.$on('$stateChangeStart', function () {
                        navTabs.removeClass('hide');
                    });
                };
            }
        }
    }
})();
