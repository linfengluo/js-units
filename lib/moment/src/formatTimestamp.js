"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatDate = _interopRequireDefault(require("./formatDate"));

function formatTimestamp(timeStamp) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  if (!timeStamp) return;
  timeStamp = Number(timeStamp);

  if (timeStamp > 1e9 && timeStamp < 1e13) {
    var targetTimeStamp = timeStamp >= 1e10 ? timeStamp : timeStamp * 1000;

    try {
      var targetDate = new Date(targetTimeStamp);
      return (0, _formatDate.default)(targetDate, format);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.error('时间戳格式不正确');
    return '未知时间';
  }
}

var _default = formatTimestamp;
exports.default = _default;