/**
 * 
 * @desc   获取Url参数
 * @param  {String} url
 * @return {Object} 
 */
function getUrlQuerys(url = window.location.href) {

    var query = url.substring(url.lastIndexOf('?') + 1)
    let result = {}
    if (query) {
        result = JSON.parse(`{"${decodeURIComponent(query).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`)
    }
    return result
}

export default getUrlQuerys