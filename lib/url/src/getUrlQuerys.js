'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function getUrlQuerys() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;


    var query = url.substring(url.lastIndexOf('?') + 1);
    var result = {};
    if (query) {
        result = JSON.parse('{"' + decodeURIComponent(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    }
    return result;
}

exports.default = getUrlQuerys;