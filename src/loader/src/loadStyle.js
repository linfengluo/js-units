
/**
 * @desc   动态加载CSS
 * @param  {String} url 
 */
function loadStyle(url) {
    try {
      document.createStyleSheet(url)
    } catch(e) {
        let linkEle = document.createElement('link');
        linkEle.rel = 'stylesheet';
        linkEle.type = 'text/css';
        linkEle.href = url;
        document.getElementsByTagName('head')[0].appendChild(linkEle)
    }
}

export default loadStyle