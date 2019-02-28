"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function loadStyle(url) {
  try {
    document.createStyleSheet(url);
  } catch (e) {
    var linkEle = document.createElement('link');
    linkEle.rel = 'stylesheet';
    linkEle.type = 'text/css';
    linkEle.href = url;
    document.getElementsByTagName('head')[0].appendChild(linkEle);
  }
}

var _default = loadStyle;
exports.default = _default;