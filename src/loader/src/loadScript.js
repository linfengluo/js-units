
/**
 * @desc   动态加载js
 * @param  {String} url 
 * @param  {Function} callback 
 */
function loadScript(url, callback){
    if (!url) return

    var scriptEle = document.createElement('script');
    scriptEle.type = "text/javascript";
    scriptEle.onloadDone = false;

    try {
        scriptEle.src = url;
        scriptEle.onreadystatechange = function() {
            if (!scriptEle.onloadDone && (scriptEle.readyState == 'loaded' || scriptEle.readyState == 'complete')) {
               typeOf callback == 'function' && callback()
            }
        }

        scriptEle.onload = function() {
            typeOf callback == 'function' && callback()
            scriptEle.onloadDone = true
        }
        
    } catch(e) {}

    document.getElementsByTagName('head')[0].appendChild(scriptEle);
}


export default loadScript