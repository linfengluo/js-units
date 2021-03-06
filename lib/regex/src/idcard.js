"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _const = require("./const");

function isIdCard(id) {
  return _const.ID_CARD_REGEXP.test(id);
}

var _default = isIdCard;
exports.default = _default;