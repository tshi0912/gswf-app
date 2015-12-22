/**
 * Created by jimshi0912 on 15/11/2.
 */
/**
 * Created by shitao on 15/10/17.
 */
(function () {
    angular.module('gswf.util')
        .factory('sessionService', sessionService);

    sessionService.$injector = ['_'];

    function sessionService(_) {

        var signInUser = {
            id: 88,
            name: '史涛',
            email: 'jimshi0912@163.com',
            avatar: 'mock/avatar/me.png'
        };

        var sessionService = {
            doSignIn: doSignIn,
            getSignInUser: getSignInUser,
            isSignIn: isSignIn
        };

        function doSignIn() {

        };

        function getSignInUser() {
            return signInUser;
        };

        function isSignIn() {
            return _.isEmpty(signInUser) ? false : true;
        };

        return sessionService;

    }
})();
