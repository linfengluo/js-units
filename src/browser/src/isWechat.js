/**
 * @desc 是否微信浏览器
 * @return {Boolean} 
 */

import inBrowser from './inBrowser'
function isWechat() {
  if (!inBrowser) {
    return 'undefined'
  }
	const ua = window.navigator.userAgent.toLowerCase(); 
	return ua.match(/MicroMessenger/i) == 'micromessenger'
}

export default isWechat