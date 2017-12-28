'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


function getBrowser() {
	var browser = {
		name: '',
		version: ''
	};
	var matchResult = null;
	var ua = navigator.userAgent.toLowerCase();

	if (matchResult = ua.match(/rv:([\d.]+)\) like gecko/)) {
		browser = {
			name: 'ie',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/msie ([\d\.]+)/)) {
		browser = {
			name: 'ie',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/edge\/([\d\.]+)/)) {
		browser = {
			name: 'edge',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/firefox\/([\d\.]+)/)) {
		browser = {
			name: 'firefox',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/(?:opera|opr).([\d\.]+)/)) {
		browser = {
			name: 'opera',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/chrome\/([\d\.]+)/)) {
		browser = {
			name: 'chrome',
			version: matchResult[1]
		};
	} else if (matchResult = ua.match(/version\/([\d\.]+).*safari/)) {
		browser = {
			name: 'safari',
			version: matchResult[1]
		};
	}

	return browser;
}

exports.default = getBrowser;