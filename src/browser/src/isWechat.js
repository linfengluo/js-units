/**
 * @desc 是否微信浏览器
 * @return {Boolean} 
 */

function isWechat() {
	const ua = window.navigator.userAgent.toLowerCase(); 
	return ua.match(/MicroMessenger/i) == 'micromessenger'
}

export default isWechat