/**
 * 
 * @desc   是否有效电话
 * @param  {String} tel 
 * @return {Boolean} 
 */


import {TEL_REGEXP} from './const'

function isTel(tel){
	return TEL_REGEXP.test(tel);
}

export default isTel