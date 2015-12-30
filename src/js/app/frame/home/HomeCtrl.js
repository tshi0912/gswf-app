/**
 * Created by shitao on 15/11/2.
 */
(function () {
  appModule('gswf.frame')
    .controller('HomeCtrl', HomeCtrl);
  HomeCtrl.$inject = ['$scope', '$state', '$ionicModal', 'appService'];

  function HomeCtrl($scope, $state, $ionicModal, appService) {

    console.log('HomeCtrl');

    var vm = this;
    vm.apps = appService.all();

    $ionicModal.fromTemplateUrl('js/app/frame/search/search.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      vm.searchModal = modal;
    });

    $scope.$on('$destroy', function() {
      vm.searchModal.remove();
    });
    $scope.$on('modal.hidden', function() {

    });
    $scope.$on('modal.removed', function() {

    });

    vm.openSearch = function () {
      vm.searchModal.show();
    };
    vm.cancelSearch = function () {
      vm.searchModal.hide();
    };
    vm.openScan = function () {
      $state.go('app.scan')
    };
    vm.openAdd = function(){
      $state.go('app.addNsqd');
    };
  }
})();
