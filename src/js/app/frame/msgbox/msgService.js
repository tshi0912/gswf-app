/**
 * Created by shitao on 15/10/17.
 */

(function () {
    // 创建service对象
    appModule('gswf.frame')
        .factory('msgService', msgService);
    // 申明依赖
    msgService.$inject = ['msgApi'];

    function msgService(msgApi) {

        var msgs = [];

        return {

            load: function () {
                return msgApi.getMsgs().then(function (items) {
                    msgs.length = 0;
                    _.each(items, function(item){
                        msgs.push(item);
                    })
                });
            },

            all: function(){
                return msgs;
            }

        };
    };
})();
