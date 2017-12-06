/**
 * 
 * @desc   获取单个Url参数
 * @param  {String} name
 * @param  {String} url
 * @return {String} 
 */

import getUrlQuerys from './getUrlQuerys'

function getSingleQuery(name, url = window.location.href) {
	let querys = getUrlQuerys(url)

	return querys[name] ? querys[name] : null
}

export default getSingleQuery
