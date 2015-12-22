/**
 * Created by shitao on 15/10/17.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.frame')
        .factory('api', api);

    /**
     * 数据接口路径对象。
     *
     * @returns 对象, 接口路径对象
     */
    function api() {
        // 模拟开关
        var mock = true;
        api.ROOT_URL = "http://localhost:8080/mobile"; //测试环境


        // 模拟数据URL
        if (mock) {
            return {
                /****************
                 * 用户接口 URLs *
                 ****************/
                USER_PROFILE:          'mock/my-profile.json',
                USER_LOGIN_VALIDATION: 'mock/auth-login.json',

                /****************
                 * 应用接口 URLs *
                 ****************/
                APPS: 'mock/apps.json',
                APPS_DEFAULT: 'mock/apps-default.json',
                ADS: 'mock/ads.json',

               /****************
                 * 朋友接口 URLs *
                 ****************/
                MSGS: 'mock/msgs.json',

                /****************
                 * 朋友接口 URLs *
                 ****************/
                FRIENDS: 'mock/friends.json',
                WORDS: 'mock/words.json',

                /****************
                 * 电商接口 URLs *
                 ****************/
                CATEGORIES: 'mock/categories.json',
                PROMOTIONS: 'mock/promotions.json',
                STORES: 'mock/stores.json'
            };
        }
        // 真实数据URL
        else {
            return {

            };
        }
    };
})();
