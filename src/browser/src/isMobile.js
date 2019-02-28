/**
 * @desc 是否移动终端
 * @return {Boolean} 
 */

import inBrowser from './inBrowser'
function isMobile() {
  if (!inBrowser) {
    return 'undefined'
  }
	const ua = navigator.userAgent.toLowerCase()
	return !!ua.match(/applewebkit.*mobile.*/) || !!ua.match(/applewebkit/)
}

export default isMobile