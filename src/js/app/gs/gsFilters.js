/**
 * Created by jimshi0912 on 15/12/24.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.gs')
        .filter('kjywr', kjywrFilter)
        .filter('monthInput', monthInputFilter)
        .filter('monthLabel', monthLabelFilter)
        .filter('dateTimeLabel', dateTimeLabelFilter)
        .filter('statusColor', statusColorFilter)
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
                var name = input[i].name || input[i];
                for (var j = 0; j < name.length; j++) {
                    out += name.charAt(j);
                    if (maxchars && out.length > maxchars) {
                        if (input.length - i > 1) {
                            out += ' 等' + input.length + '家';
                        }
                        break;
                    } else if (!maxchars && i === 0 && j === name.length-1 && input.length - i > 1) {
                        out += ' 等' + input.length + '家';
                    }
                }
            }
            out += ''
            return out || '请选择扣缴义务人';
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

    function dateTimeLabelFilter() {
        return function (input) {
            return moment(input).format('YYYY-MM-DD hh:mm:ss');
        };
    };

    function statusColorFilter() {
        return function (input) {
            var color = '';
            switch (input){
                case '已打印':
                    color =  'balanced';
                    break;
                case '未打印':
                    color =  'energized';
                    break;
                case '已过期':
                    color =  'assertive';
                    break;
                default:
                    break;
            }
            return color;
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