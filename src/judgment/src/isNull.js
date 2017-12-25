/**
 * @desc 是否Null
 * @param  {*} value
 * @return {Boolean} 
 */

function isNull(value) {
	return !value && typeof value !== "undefined" && value !== 0
}

export default isNull