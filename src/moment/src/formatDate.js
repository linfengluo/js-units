/**
 * @desc   格式化时间
 * @param  {Date | String} date 
 * @param  {String} format 默认: 'YYYY-MM-DD HH:mm:ss'
 * @return {String} 
 */
 
function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
	let targetDate = new Date()

	if (date instanceof Date) {
		targetDate = date
	} else {
		try {
			targetDate = new Date(date)
		} catch(e) {
    		console.error(e)	
    	}
	}

	let result = format.replace(/YYYY/g, targetDate.getFullYear())
        .replace(/MM/g, targetDate.getMonth() + 1)
        .replace(/DD/g, targetDate.getDate())
        .replace(/HH/g, targetDate.getHours())
        .replace(/mm/g, targetDate.getMinutes())
        .replace(/ss/g, targetDate.getSeconds())
        .replace(/\b(\w)\b/g, '0$1')

    return result
}

export default formatDate