"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  var targetDate = new Date();

  if (date instanceof Date) {
    targetDate = date;
  } else {
    try {
      targetDate = new Date(date);
    } catch (e) {
      console.error(e);
      throw new Error('请传入Date 或 Date 字符串');
    }
  }

  var result = format.replace(/YYYY/g, targetDate.getFullYear()).replace(/MM/g, targetDate.getMonth() + 1).replace(/DD/g, targetDate.getDate()).replace(/HH/g, targetDate.getHours()).replace(/mm/g, targetDate.getMinutes()).replace(/ss/g, targetDate.getSeconds()).replace(/\b(\w)\b/g, '0$1');
  return result;
}

var _default = formatDate;
exports.default = _default;