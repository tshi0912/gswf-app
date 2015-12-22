/**
 * Created by shitao on 15/10/17.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.frame')
        .factory('appApi', appApi);
    // 申明依赖
    appApi.$inject = ['api', '$http'];

    /**
     * 用户接口。
     *
     * @param api 对象，数据接口URL
     * @returns 对象，用户接口
     */
    function appApi(api, $http) {

        var appApi = {
            getApps: getApps,
            getDefaultApps: getDefaultApps,
            getAds: getAds,
        }

        /**
         * 根据用户Id获取该用户应用列表。
         *
         * @param userId 字符串，用户Id
         */
        function getApps(userId) {
            return $http.get(api.APPS.replace('{userId}', userId));
        };

        /**
         * 获取默认的应用列表
         *
         * @returns {*} 应用列表
         */
        function getDefaultApps() {
            return $http.get(api.APPS_DEFAULT);
        };

        /**
         * 获取广告列表。
         *
         * @returns {*} 广告列表
         */
        function getAds() {
            return $http.get(api.ADS);
        };

        return appApi;
    };
})();
