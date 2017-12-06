/**
 * 
 * @desc   是否Email
 * @param  {String} email 
 * @return {Boolean} 
 */


import {EMAIL_REGEXP} from './const'

function isEmail(email){
	return EMAIL_REGEXP.test(email);
}

export default isEmail