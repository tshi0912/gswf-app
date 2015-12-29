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

        var gslist = [],
            nsqdlist = [],
            kjywrs = [];

        return {

            load: function(params){
                var self = this;
                if(_.isEmpty(kjywrs)){
                    this.getKjywrs()
                        .success(function(d){
                            self.query(params.query);
                        });
                }else{
                    self.query(params.query);
                }
            },

            loadNsqd: function(params){
                var self = this;
                if(_.isEmpty(kjywrs)){
                    this.getKjywrs()
                        .success(function(d){
                            self.queryNsqd(params.query);
                        });
                }else{
                    self.queryNsqd(params.query);
                }
            },

            getKjywrs: function(){
                return gsApi.getKjywrs(sessionService.getSignInUser().id)
                    .success(function (items) {
                        kjywrs.length = 0;
                        _.each(items, function (item) {
                            kjywrs.push(item);
                        });
                    });
            },

            queryNsqd: function (query) {

                return gsApi.queryNsqd(sessionService.getSignInUser().id, query)
                    .success(function (items) {
                        nsqdlist.length = 0;
                        _.each(items, function (item) {
                            nsqdlist.push(item);
                        });
                    });
            },

            query: function (query) {

                return gsApi.queryGs(sessionService.getSignInUser().id, query)
                    .success(function (items) {
                        gslist.length = 0;
                        //_.each(items, function (item) {
                        //    gslist.push(item);
                        //});

                        // Mock Handle
                        var len = moment(query.endMonth).diff(moment(query.startMonth), 'months') + 1,
                            gs;
                        for(var i=0; i<len; i++){
                            gs = {};
                            gs.id = i+1;
                            gs.type = '工资';
                            if(i === 0){
                                gs.amount = 23.65;
                            }else{
                                gs.amount = 23.65 + Math.random()*100;
                                gs.amount = gs.amount.toFixed(2);
                            }
                            gs.date = moment(query.startMonth).add(i,'months').toDate();
                            gs.zsjg = '上海市地税局黄埔分局';
                            gs.kjywr = query.kjywrs[0];
                            gs.skrq = moment(gs.date).add(1, 'months').add('9','days').toDate();
                            gslist.push(gs);
                        }
                    });
            },

            all: function () {
                return gslist;
            },

            kjywrs: function(){
                return kjywrs;
            },

            nsqds: function(){
                return nsqdlist;
            },

            get: function (gsId) {
                for (var i = 0; i < gslist.length; i++) {
                    if (gslist[i].id === parseInt(gsId)) {
                        return gslist[i];
                    }
                }
                return null;
            },

            getNsqd: function (gsId) {
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
