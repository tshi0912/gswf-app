/**
 * Created by shitao on 15/10/17.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.gs')
        .factory('gsApi', gsApi);
    // 申明依赖
    gsApi.$inject = ['gsUri', '$http'];

    /**
     * 个税查询接口。
     *
     * @param api 对象，数据接口URL
     * @returns 对象，用户接口
     */
    function gsApi(gsUri, $http) {

        var gsApi = {
            queryGs: queryGs,
            queryNsqd: queryNsqd,
            validateQr: validateQr,
            getKjywrs: getKjywrs,
            saveNsqd: saveNsqd
        };

        /**
         * 根据用户Id获取该用户应用列表。
         *
         * @param userId 字符串，用户Id
         */
        function queryGs(userId, params) {
            return $http.get(gsUri.QUERY_USER_GS.replace('{userId}', userId));
        };

        function queryNsqd(userId, params) {
            return $http.get(gsUri.QUERY_USER_NSQD.replace('{userId}', userId));
        };

        function validateQr(userId){
            return $http.get(gsUri.VALIDATE_QR.replace('{userId}', userId));
        };

        function getKjywrs(userId){
            return $http.get(gsUri.GET_USER_KJYWRS.replace('{userId}', userId));
        }

        function saveNsqd(userId, nsqd){
            nsqd.createdBy = userId;
            return $http.get(gsUri.SAVE_NSQD.replace('{userId}', userId));
        }
        
        return gsApi;
    };
})();
