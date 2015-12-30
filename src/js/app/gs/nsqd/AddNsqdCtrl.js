/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('AddNsqdCtrl', AddNsqdCtrl);
    AddNsqdCtrl.$inject = ['$scope', 'gsService', '$state'];

    function AddNsqdCtrl($scope, gsService, $state) {
        console.log('AddNsqdCtrl');

        var vm = this;
        vm.nsqd = {
            skksq: moment().subtract(11, 'months').startOf('month').toDate(),
            skjsq: moment().startOf('month').toDate(),
            sqfw: [],
            sendMail: true
        };

        vm.addNsqd = function(){
            vm.nsqd.id = moment().unix();
            vm.nsqd.sqrq = moment().toDate();
            vm.nsqd.status = '未打印';
            gsService.saveNsqd(vm.nsqd)
                .then(function(d){
                    $state.go('app.nsqd');
                });
        };
    }
})();
