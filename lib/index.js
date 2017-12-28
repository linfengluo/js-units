'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadStyle = exports.loadScript = exports.formatTimestamp = exports.formatDate = exports.isWechat = exports.isMobile = exports.getOs = exports.getBrowser = exports.stringfyQuerys = exports.getUrlQuerys = exports.getSingleQuery = exports.floatMul = exports.floatSub = exports.floatDiv = exports.floatAdd = exports.sessionStorage = exports.localstorage = exports.cookie = exports.isTel = exports.isUrl = exports.isIdCard = exports.isEmail = undefined;

var _regex = require('./regex');

var _storage = require('./storage');

var _math = require('./math');

var _url = require('./url');

var _browser = require('./browser');

var _moment = require('./moment');

var _loader = require('./loader');

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

exports.default = myUnits;
exports.isEmail = _regex.isEmail;
exports.isIdCard = _regex.isIdCard;
exports.isUrl = _regex.isUrl;
exports.isTel = _regex.isTel;
exports.cookie = _storage.cookie;
exports.localstorage = _storage.localstorage;
exports.sessionStorage = _storage.sessionStorage;
exports.floatAdd = _math.floatAdd;
exports.floatDiv = _math.floatDiv;
exports.floatSub = _math.floatSub;
exports.floatMul = _math.floatMul;
exports.getSingleQuery = _url.getSingleQuery;
exports.getUrlQuerys = _url.getUrlQuerys;
exports.stringfyQuerys = _url.stringfyQuerys;
exports.getBrowser = _browser.getBrowser;
exports.getOs = _browser.getOs;
exports.isMobile = _browser.isMobile;
exports.isWechat = _browser.isWechat;
exports.formatDate = _moment.formatDate;
exports.formatTimestamp = _moment.formatTimestamp;
exports.loadScript = _loader.loadScript;
exports.loadStyle = _loader.loadStyle;