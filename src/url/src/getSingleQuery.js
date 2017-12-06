/**
 * 
 * @desc   获取单个Url参数
 * @param  {String} name
 * @param  {String} url
 * @return {String} 
 */

import getQuery from './getQuery'

function getSingleQuery(name, url = window.location.href) {
	let querys = getQuery(url)

	return querys[name] ? querys[name] : null
}

export default getSingleQuery
