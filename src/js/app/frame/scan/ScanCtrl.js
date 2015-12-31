/**
 * Created by shitao on 15/11/2.
 */
(function () {
    appModule('gswf.frame')
        .controller('ScanCtrl', ScanCtrl);
    ScanCtrl.$inject = ['$scope', '$cordovaBarcodeScanner'];

    function ScanCtrl($scope, $cordovaBarcodeScanner) {
        console.log('ScanCtrl');
        var vm = this;

        vm.scan = function () {
            $cordovaBarcodeScanner.scan()
                .then(function (data) {
                    alert(data.text);
                    console.log("Barcode Format -> " + data.format);
                    console.log("Cancelled -> " + data.cancelled);
                }, function (error) {
                    console.log("An error happened -> " + error);
                });
        };

        vm.scan();
    }
})();
