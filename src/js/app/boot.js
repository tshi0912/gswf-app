(function () {

    angular.module('gswf')
        .run(['$ionicPlatform', 'amMoment', '$cordovaStatusbar',
            function ($ionicPlatform, amMoment) {

            amMoment.changeLocale('zh-cn');

            $ionicPlatform.ready(function(){
                console.log('device ready --------------');

                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                    console.log('keyboard ----------');
                };
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    window.StatusBar.styleLightContent();
                    // $cordovaStatusbar.style(3);
                }
            });
        }]);

})();
