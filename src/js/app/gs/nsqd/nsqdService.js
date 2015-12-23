/**
 * Created by shitao on 15/10/17.
 */

(function () {
    // 创建service对象
    appModule('gswf.gs')
        .factory('nsqdService', nsqdService);
    // 申明依赖
    nsqdService.$inject = ['gsApi', 'sessionService','_'];

    function nsqdService(gsApi, sessionService, _) {

        var nsqdlist = [];

        return {

            load: function(){
                if(_.isEmpty(nsqdlist)){
                    this.query();
                }
            },

            query: function () {

                return gsApi.queryNsqd(sessionService.getSignInUser().id)
                    .success(function (items) {
                        nsqdlist.length = 0;
                        _.each(items, function (item) {
                            nsqdlist.push(item);
                        });
                    });
            },

            all: function () {
                return nsqdlist;
            },

            get: function (gsId) {
                for (var i = 0; i < nsqdlist.length; i++) {
                    if (nsqdlist[i].id === parseInt(gsId)) {
                        return nsqdlist[i];
                    }
                }
                return null;
            }

        };
    };
})();
