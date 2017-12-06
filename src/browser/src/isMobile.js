/**
 * @desc 是否移动终端
 * @return {Boolean} 
 */


function isMobile() {
	const ua = navigator.userAgent.toLowerCase()
	return !!ua.match(/applewebkit.*mobile.*/) || !!ua.match(/applewebkit/)
}

export default isMobile