"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var local = {
	myStorage: window.localStorage,
	get: function get(name) {
		if (this.myStorage) {
			var data = this.myStorage.getItem(name);
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
		if (this.myStorage) {
			try {
				var value = (0, _stringify2.default)(data);
				this.myStorage.setItem(name, value);
			} catch (e) {
				console.error(e);
			}
		}
	},
	remove: function remove(name) {
		if (this.myStorage) {
			try {
				this.myStorage.removeItem(name);
			} catch (e) {
				console.error(e);
			}
		}
	},
	clear: function clear() {
		if (this.myStorage) {
			try {
				this.myStorage.clear();
			} catch (e) {
				console.error(e);
			}
		}
	}
};

exports.default = local;