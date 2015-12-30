/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.gs')
        .controller('SgjyCtrl', SgjyCtrl);
    SgjyCtrl.$inject = ['$scope','zxjyService', '$ionicActionSheet', '$cordovaDialogs'];

    function SgjyCtrl($scope, zxjyService, $ionicActionSheet, $cordovaDialogs) {
        console.log('SgjyCtrl');
        var vm = this;
        vm.sgjy = {};
        vm.selectZjlx = function(){
            $ionicActionSheet.show({
                buttons: [
                    { text: '身份证' },
                    { text: '军官证' }
                ],
                titleText: '请选择证件类型',
                cancelText: '取消',
                cancel: function() {},
                buttonClicked: function(index) {
                    if(index === 0){
                        vm.sgjy.zjlx = '身份证';
                    }else{
                        vm.sgjy.zjlx = '军官证';
                    }
                    return true;
                }
            });

        };

        vm.validate = function(){
            zxjyService.validateQr(vm.sgjy)
                .then(function(d){
                    $cordovaDialogs.alert('验证成功');
                });
        };
    }
})();
