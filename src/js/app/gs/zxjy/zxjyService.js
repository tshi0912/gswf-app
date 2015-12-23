/**
 * Created by shitao on 15/10/17.
 */

(function () {
    // 创建service对象
    appModule('gswf.gs')
        .factory('zxjyService', zxjyService);
    // 申明依赖
    zxjyService.$inject = ['gsApi', 'sessionService','_'];

    function zxjyService(gsApi, sessionService, _) {


        return {

            validateQr: function () {
                return gsApi.validateQr(sessionService.getSignInUser().id);
            }

        };
    };
})();
