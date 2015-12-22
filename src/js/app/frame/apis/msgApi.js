/**
 * Created by shitao on 15/10/17.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.frame')
        .factory('msgApi', msgApi);
    // 申明依赖
    msgApi.$inject = ['api', '$http'];

    /**
     * 用户接口。
     *
     * @param api 对象，数据接口URL
     * @returns 对象，用户接口
     */
    function msgApi(api, $http) {

        var msgApi = {
            getMsgs: getMsgs
        };

        /**
         * 根据用户Id获取该用户消息列表。
         *
         * @param userId 字符串，用户Id
         */
        function getMsgs(userId) {
            return $http.get(api.MSGS.replace('{userId}', userId));
        };

        return msgApi;
    };
})();
