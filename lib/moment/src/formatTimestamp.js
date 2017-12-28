'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _formatDate = require('./formatDate');

var _formatDate2 = _interopRequireDefault(_formatDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatTimestamp(timeStamp) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

    if (!timeStamp) return;
    timeStamp = Number(timeStamp);
    if (timeStamp > 1e9 && timeStamp < 1e13) {
        var targetTimeStamp = timeStamp >= 1e10 ? timeStamp : timeStamp * 1000;
        try {
            var targetDate = new Date(targetTimeStamp);
            return (0, _formatDate2.default)(targetDate, format);
        } catch (e) {
            console.error(e);
        }
    } else {
        console.error('时间戳格式不正确');
        return '未知时间';
    }
}

exports.default = formatTimestamp;