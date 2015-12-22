/**
 * Created by shitao on 15/10/13.
 */
(function () {
    appModule('gswf.frame')
        .config(commonConfig);

    commonConfig.$inject = ['$ionicConfigProvider', 'amTimeAgoConfig', '$httpProvider'];

    function commonConfig($ionicConfigProvider, amTimeAgoConfig, $httpProvider) {
        $httpProvider.defaults.headers.post = {'Content-Type': 'application/json;charset=utf-8'};
        $httpProvider.defaults.headers.put = {'Content-Type': 'application/json;charset=utf-8'};
        $httpProvider.defaults.headers.delete = {'Content-Type': 'application/json;charset=utf-8'};
        $httpProvider.defaults.cache = false; // 默认关闭缓存？

        amTimeAgoConfig.fullDateThreshold = 2;
        amTimeAgoConfig.fullDateFormat = 'MM月DD日';

        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.tabs.style('standard').position('bottom');
        //$ionicConfigProvider.views.forwardCache(true);
        $ionicConfigProvider.backButton.text('返回').icon('ion-ios-arrow-left').previousTitleText(false);

        $httpProvider.interceptors.push('httpInterceptor');
    }
})();
