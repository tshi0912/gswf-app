/**
 * Created by shitao on 15/10/17.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.gs')
        .factory('gsUri', gsUri);

    /**
     * 数据接口路径对象。
     *
     * @returns 对象, 接口路径对象
     */
    function gsUri() {
        // 模拟开关
        var mock = true;
        gsUri.ROOT_URL = "http://localhost:8080/mobile"; //测试环境


        // 模拟数据URL
        if (mock) {
            return {
                /****************
                 *  个税接口 URLs *
                 ****************/
                QUERY_USER_GS:         'mock/user-gs.json',
                QUERY_USER_NSQD:       'mock/user-nsqd.json',
                VALIDATE_QR:           'mock/user-validate-qr.json',
                GET_USER_KJYWRS:       'mock/user-kjywrs.json'
            };
        }
        // 真实数据URL
        else {
            return {

            };
        }
    };
})();
