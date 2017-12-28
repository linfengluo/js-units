'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function loadScript(url, callback) {
    if (!url) return;

    var scriptEle = document.createElement('script');
    scriptEle.type = "text/javascript";
    scriptEle.onloadDone = false;

    try {
        scriptEle.src = url;
        scriptEle.onreadystatechange = function () {
            if (!scriptEle.onloadDone && (scriptEle.readyState == 'loaded' || scriptEle.readyState == 'complete')) {
                typeof callback == 'function' && callback();
            }
        };

        scriptEle.onload = function () {
            typeof callback == 'function' && callback();
            scriptEle.onloadDone = true;
        };
    } catch (e) {}

    document.getElementsByTagName('head')[0].appendChild(scriptEle);
}

exports.default = loadScript;