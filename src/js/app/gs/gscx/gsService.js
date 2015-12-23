/**
 * Created by shitao on 15/10/17.
 */

(function () {
    // 创建service对象
    appModule('gswf.gs')
        .factory('gsService', gsService);
    // 申明依赖
    gsService.$inject = ['gsApi', 'sessionService','_'];

    function gsService(gsApi, sessionService, _) {

        var gslist = [];

        return {

            load: function(){
                if(_.isEmpty(gslist)){
                    this.query();
                }
            },

            query: function () {

                return gsApi.queryGs(sessionService.getSignInUser().id)
                    .success(function (items) {
                        gslist.length = 0;
                        _.each(items, function (item) {
                            gslist.push(item);
                        });
                    });
            },

            all: function () {
                return gslist;
            },

            get: function (gsId) {
                for (var i = 0; i < gslist.length; i++) {
                    if (gslist[i].id === parseInt(gsId)) {
                        return gslist[i];
                    }
                }
                return null;
            }

        };
    };
})();
