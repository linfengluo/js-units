'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


function stringfyQuerys(query) {
    if (!query) return '';
    var queryArray = [];

    for (var key in query) {
        var value = query[key];

        if (value instanceof Array) {
            for (var index in value) {
                var ketTemp = key + '[' + index + ']';
                queryArray.push(encodeURIComponent(ketTemp) + '=' + encodeURIComponent(value[i]));
            }
            continue;
        } else {
            queryArray.push(encodeURIComponent(key) + '=' + encodeURIComponent(query[key]));
        }
    }

    return queryArray.join('&');
}

exports.default = stringfyQuerys;