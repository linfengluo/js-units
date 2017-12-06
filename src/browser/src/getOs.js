/**
 * @desc 获取操作系统
 * @return {String} 
 * reference: https://github.com/proYang/outils/blob/master/src/device/getOS.js
 */

import isMobile from './isMobile'

function getOs() {
	let os = 'unknow'
 	const userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || ''
    const vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || ''
    const appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || ''

    if (isMobile()) {
		if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios'
	    if (/android/i.test(userAgent)) return 'android'
	    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone'
    } else {
    	if (/mac/i.test(appVersion)) return 'MacOSX'
	    if (/win/i.test(appVersion)) return 'windows'
	    if (/linux/i.test(appVersion)) return 'linux'
    }
   	
    
}

export default getOs