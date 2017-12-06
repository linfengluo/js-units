/**
 * 
 * @desc   是否有效身份证号码
 * @param  {String} id 
 * @return {Boolean} 
 */


import {ID_CARD_REGEXP} from './const'

function isIdCard(id){
	return ID_CARD_REGEXP.test(id);
}

export default isIdCard