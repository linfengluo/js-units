/**
 * @desc 是否移动终端
 * @return {Boolean} 
 */


function isMobile() {
	const ua = navigator.userAgent.toLowerCase()
	return !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/)
}

export default isMobile