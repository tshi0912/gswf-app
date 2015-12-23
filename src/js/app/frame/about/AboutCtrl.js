/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('AboutCtrl', AboutCtrl);
    AboutCtrl.$inject = ['$scope'];

    function AboutCtrl($scope) {
        console.log('AboutCtrl');
        var vm = this;
    }
})();
