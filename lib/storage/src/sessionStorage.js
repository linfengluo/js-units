"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var session = {
	mySession: window.sessionStorage,
	get: function get(name) {
		if (this.mySession) {
			var data = this.mySession.getItem(name);
			try {
				var result = JSON.parse(data);
				return result;
			} catch (e) {
				console.error(e);
				return data;
			}
		}
	},
	set: function set(name, data) {
		if (this.mySession) {
			try {
				var value = (0, _stringify2.default)(data);
				this.mySession.setItem(name, value);
				return true;
			} catch (e) {
				console.error(e);
				return false;
			}
		}
	},
	remove: function remove(name) {
		if (this.mySession) {
			try {
				this.mySession.removeItem(name);
				return true;
			} catch (e) {
				console.error(e);
				return false;
			}
		}
	},
	clear: function clear() {
		if (this.mySession) {
			try {
				this.mySession.clear();
				return true;
			} catch (e) {
				console.error(e);
				return false;
			}
		}
	}
};

exports.default = session;