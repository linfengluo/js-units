import inBrowser from './inBrowser'

/**
 * @desc 获取浏览器类型和版本
 * @return {Object} 
 * reference: https://github.com/proYang/outils/blob/master/src/device/getExplore.js
 */
function getBrowser() {
	if (!inBrowser) {
		return {
      name: 'undefined',
      version: null
    }
	}
  
  let browser = {
    name: '',
    version: ''
  }
  
  let matchResult
	const ua = navigator.userAgent.toLowerCase()

	if (matchResult = ua.match(/rv:([\d.]+)\) like gecko/)) {
		browser = {
			name: 'ie',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/msie ([\d\.]+)/)) {
		browser = {
			name: 'ie',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/edge\/([\d\.]+)/)) {
		browser = {
			name: 'edge',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/firefox\/([\d\.]+)/)) {
		browser = {
			name: 'firefox',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/(?:opera|opr).([\d\.]+)/)) {
		browser = {
			name: 'opera',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/chrome\/([\d\.]+)/)) {
		browser = {
			name: 'chrome',
			version: matchResult[1]
		}
	} else if (matchResult = ua.match(/version\/([\d\.]+).*safari/)) {
		browser = {
			name: 'safari',
			version: matchResult[1]
		}
	}

	return browser
}

export default getBrowser