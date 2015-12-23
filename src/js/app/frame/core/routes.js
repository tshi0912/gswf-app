/**
 * Created by shitao on 15/10/13.
 */
(function () {
  appModule('gswf.frame')
    .config(routesConfig);
  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routesConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      // 抽象父状态，用来设置左右抽屉菜单
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/app/frame/home/menu.html',
        controller: 'AppCtrl as vm'
      });

    // 默认进入“首页”标签页面
    $urlRouterProvider.otherwise('/app/home');

  };
})();
