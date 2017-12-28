'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


function floatSub(reduction, minuend) {
    var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

    reduction = isNaN(reduction) ? 0 : Number(reduction);
    minuend = isNaN(minuend) ? 0 : Number(minuend);

    var r1 = void 0;
    var r2 = void 0;
    var m = void 0;
    var n = void 0;

    try {
        r1 = reduction.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }

    try {
        r2 = minuend.toString().split('.')[1].length;
    } catch (e) {
        r2 = 0;
    }

    m = Math.pow(10, Math.max(r1, r2));
    n = r1 >= r2 ? r1 : r2;

    var result = (reduction * m - minuend * m) / m;

    return length === -1 ? parseFloat(result.toFixed(n)) : parseFloat(result.toFixed(length));
}

exports.default = floatSub;