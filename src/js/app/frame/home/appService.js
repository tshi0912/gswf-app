/**
 * Created by shitao on 15/10/17.
 */

(function () {
    // 创建service对象
    appModule('gswf.frame')
        .factory('appService', appService);
    // 申明依赖
    appService.$inject = ['appApi', 'sessionService'];

    function appService(appApi, sessionService) {

        var mines = [];

        return {

            load: function () {
                var promise;

                if (sessionService.isSignIn()) {
                    promise = appApi.getApps(sessionService.getSignInUser().id);
                } else {
                    promise = appApi.getDefaultApps();
                }
                return promise.then(function (items) {
                    mines.length = 0;
                    _.each(items, function(item){
                        mines.push(item);
                    });
                    if(mines.length < 12){
                      var len = 12 - mines.length;
                      for(var i=0; i< len;i++){
                        mines.push({});
                      }
                    }
                });
            },

            all: function(){
                return mines;
            },

            get: function (appId) {
                for (var i = 0; i < mines.length; i++) {
                    if (mines[i].id === parseInt(appId)) {
                        return mines[i];
                    }
                }
                return null;
            }

        };
    };
})();
