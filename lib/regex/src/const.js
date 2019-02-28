"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URL_REGEXP = exports.EMAIL_REGEXP = exports.ID_CARD_REGEXP = exports.TEL_REGEXP = void 0;
var TEL_REGEXP = /^[1][3-8]\d{9}$|^([6|8|9])\d{7}$|^[6]([8|6])\d{5}$/;
exports.TEL_REGEXP = TEL_REGEXP;
var ID_CARD_REGEXP = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$|^[A-Z][0-9]{6}\([0-9A]\)$/;
exports.ID_CARD_REGEXP = ID_CARD_REGEXP;
var EMAIL_REGEXP = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
exports.EMAIL_REGEXP = EMAIL_REGEXP;
var URL_REGEXP = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i;
exports.URL_REGEXP = URL_REGEXP;