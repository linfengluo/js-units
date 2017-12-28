'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';

  var targetDate = null;

  if (date instanceof Date) {
    targetDate = date;
  } else {
    try {
      targetDate = new Date(date);
    } catch (e) {
      console.error(e);
    }
  }

  var result = format.replace(/YYYY/g, targetDate.getFullYear()).replace(/MM/g, targetDate.getMonth() + 1).replace(/DD/g, targetDate.getDate()).replace(/HH/g, targetDate.getHours()).replace(/mm/g, targetDate.getMinutes()).replace(/ss/g, targetDate.getSeconds()).replace(/\b(\w)\b/g, '0$1');

  return result;
}

exports.default = formatDate;