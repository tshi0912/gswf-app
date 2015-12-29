/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('NsqdDetailCtrl', NsqdDetailCtrl);
    NsqdDetailCtrl.$inject = ['$scope', 'gsService', '$stateParams'];

    function NsqdDetailCtrl($scope, gsService, $stateParams) {
        console.log('NsqdDetailCtrl');

        var vm = this;
        vm.nsqd = gsService.getNsqd($stateParams.nsqdId);

    }
})();
