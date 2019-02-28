"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isEmail", {
  enumerable: true,
  get: function get() {
    return _regex.isEmail;
  }
});
Object.defineProperty(exports, "isIdCard", {
  enumerable: true,
  get: function get() {
    return _regex.isIdCard;
  }
});
Object.defineProperty(exports, "isUrl", {
  enumerable: true,
  get: function get() {
    return _regex.isUrl;
  }
});
Object.defineProperty(exports, "isTel", {
  enumerable: true,
  get: function get() {
    return _regex.isTel;
  }
});
Object.defineProperty(exports, "cookie", {
  enumerable: true,
  get: function get() {
    return _storage.cookie;
  }
});
Object.defineProperty(exports, "localstorage", {
  enumerable: true,
  get: function get() {
    return _storage.localstorage;
  }
});
Object.defineProperty(exports, "sessionStorage", {
  enumerable: true,
  get: function get() {
    return _storage.sessionStorage;
  }
});
Object.defineProperty(exports, "floatAdd", {
  enumerable: true,
  get: function get() {
    return _math.floatAdd;
  }
});
Object.defineProperty(exports, "floatDiv", {
  enumerable: true,
  get: function get() {
    return _math.floatDiv;
  }
});
Object.defineProperty(exports, "floatSub", {
  enumerable: true,
  get: function get() {
    return _math.floatSub;
  }
});
Object.defineProperty(exports, "floatMul", {
  enumerable: true,
  get: function get() {
    return _math.floatMul;
  }
});
Object.defineProperty(exports, "getSingleQuery", {
  enumerable: true,
  get: function get() {
    return _url.getSingleQuery;
  }
});
Object.defineProperty(exports, "getUrlQuerys", {
  enumerable: true,
  get: function get() {
    return _url.getUrlQuerys;
  }
});
Object.defineProperty(exports, "stringfyQuerys", {
  enumerable: true,
  get: function get() {
    return _url.stringfyQuerys;
  }
});
Object.defineProperty(exports, "getBrowser", {
  enumerable: true,
  get: function get() {
    return _browser.getBrowser;
  }
});
Object.defineProperty(exports, "getOs", {
  enumerable: true,
  get: function get() {
    return _browser.getOs;
  }
});
Object.defineProperty(exports, "isMobile", {
  enumerable: true,
  get: function get() {
    return _browser.isMobile;
  }
});
Object.defineProperty(exports, "isWechat", {
  enumerable: true,
  get: function get() {
    return _browser.isWechat;
  }
});
Object.defineProperty(exports, "formatDate", {
  enumerable: true,
  get: function get() {
    return _moment.formatDate;
  }
});
Object.defineProperty(exports, "formatTimestamp", {
  enumerable: true,
  get: function get() {
    return _moment.formatTimestamp;
  }
});
Object.defineProperty(exports, "loadScript", {
  enumerable: true,
  get: function get() {
    return _loader.loadScript;
  }
});
Object.defineProperty(exports, "loadStyle", {
  enumerable: true,
  get: function get() {
    return _loader.loadStyle;
  }
});
exports.default = void 0;

var _regex = require("./regex");

var _storage = require("./storage");

var _math = require("./math");

var _url = require("./url");

var _browser = require("./browser");

var _moment = require("./moment");

var _loader = require("./loader");

var myUnits = {
  isEmail: _regex.isEmail,
  isIdCard: _regex.isIdCard,
  isUrl: _regex.isUrl,
  isTel: _regex.isTel,
  cookie: _storage.cookie,
  localstorage: _storage.localstorage,
  sessionStorage: _storage.sessionStorage,
  floatAdd: _math.floatAdd,
  floatDiv: _math.floatDiv,
  floatSub: _math.floatSub,
  floatMul: _math.floatMul,
  getSingleQuery: _url.getSingleQuery,
  getUrlQuerys: _url.getUrlQuerys,
  stringfyQuerys: _url.stringfyQuerys,
  getBrowser: _browser.getBrowser,
  getOs: _browser.getOs,
  isMobile: _browser.isMobile,
  isWechat: _browser.isWechat,
  formatDate: _moment.formatDate,
  formatTimestamp: _moment.formatTimestamp,
  loadScript: _loader.loadScript,
  loadStyle: _loader.loadStyle
};
var _default = myUnits;
exports.default = _default;