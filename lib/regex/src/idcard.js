'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _const = require('./const');

function isIdCard(id) {
  return _const.ID_CARD_REGEXP.test(id);
}

exports.default = isIdCard;