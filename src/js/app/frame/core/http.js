/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .factory('httpInterceptor', httpInterceptor);

    function httpInterceptor($q, $injector) {
        var httpInterceptor = {};

        httpInterceptor.request = function (config) {
            config.timeout = 15000;
            var $ionicLoading = $injector.get('$ionicLoading');
            $ionicLoading.show();

            if (config.headers) {
                if (localStorage.getItem("token")) {
                    config.headers.tokenId = localStorage.getItem("token");
                }
            }
            return config || $q.when(config);
        };

        httpInterceptor.response = function (response) {
            var $cordovaDialogs = $injector.get('$cordovaDialogs');
            var $ionicLoading = $injector.get('$ionicLoading');
            var data = response.data;
            $ionicLoading.hide();
            if (data.hasOwnProperty('code') &&
                data.hasOwnProperty('message') &&
                data.hasOwnProperty('data')) {
                if (data.code === "NACK") {
                    $cordovaDialogs.alert(data.message, data.message, "确认");
                }
                return $q.when(data.data);
            } else {
                return response || $q.when(response);
            }
            ;
        };
        httpInterceptor.requestError = function (config) {

        };
        httpInterceptor.responseError = function (config) {
            var $cordovaDialogs = $injector.get('$cordovaDialogs');
            var $ionicLoading = $injector.get('$ionicLoading');
            $ionicLoading.hide();
            if (config.status == 0) {
                $cordovaDialogs.alert('请求超时，请稍后再试', '请求超时，请稍后再试', '确认');
            }
            if (config.status == 403 || config.status == 400 || config.status == 405) {
                $cordovaDialogs.alert('系统繁忙，请稍后再试', '系统繁忙，请稍后再试', '确认');
            }
            return;

        };

        return httpInterceptor;
    };
})();
