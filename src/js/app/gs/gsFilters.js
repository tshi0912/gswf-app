/**
 * Created by jimshi0912 on 15/12/24.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.gs')
        .filter('kjywr', kjywrFilter)
        .filter('monthInput', monthInputFilter)
        .filter('monthLabel', monthLabelFilter)
        .filter('numberFix', numberFixFilter);

    function kjywrFilter() {
        return function (input, maxchars) {
            input = input || '';
            var out = "";
            for (var i = 0; i < input.length; i++) {
                if ((!maxchars && i > 0) || (
                    maxchars && out.length > maxchars)) {
                    break;
                }
                if (i !== 0) {
                    out += ',';
                }
                for (var j = 0; j < input[i].name.length; j++) {
                    out += input[i].name.charAt(j);
                    if (maxchars && out.length > maxchars) {
                        if (input.length - i > 1) {
                            out += ' 等' + input.length + '家';
                        }
                        break;
                    } else if (!maxchars && i === 0 && j === input[i].name.length-1 && input.length - i > 1) {
                        out += ' 等' + input.length + '家';
                    }
                }
            }
            out += ''
            return out;
        };
    };

    function monthInputFilter() {
        return function (input) {
            return moment(input).format('YYYY-MM');
        };
    };

    function monthLabelFilter() {
        return function (input) {
            return moment(input).format('YYYY年MM月');
        };
    };

    function numberFixFilter(){
        return function (input, point) {
            if(!input){
                return '0.00';
            }else{
                return parseFloat(input).toFixed(point || 2) + '';
            }
        };
    };
})();