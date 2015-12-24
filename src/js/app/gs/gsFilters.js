/**
 * Created by jimshi0912 on 15/12/24.
 */
(function () {

    // 创建angular工厂对象
    appModule('gswf.gs')
        .filter('kjywr', kjywrFilter);

    /**
     * 个税查询接口。
     *
     * @param api 对象，数据接口URL
     * @returns 对象，用户接口
     */
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
})();