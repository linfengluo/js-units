/**
 * 
 * @desc   是否有效网址
 * @param  {String} url 
 * @return {Boolean} 
 */


import {URL_REGEXP} from './const'

function isUrl(url){
	return URL_REGEXP.test(url);
}

export default isUrl