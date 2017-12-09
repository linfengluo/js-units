import { isEmail, isIdCard, isUrl, isTel } from './src/regex'

import { cookie, localstorage, sessionStorage } from './src/storage'

import { floatAdd, floatDiv, floatSub, floatMul } from './src/math'

import { getSingleQuery, getUrlQuerys, stringfyQuerys } from './src/url'

import { getBrowser, getOs, isMobile, isWechat } from './src/browser'

import { formatDate, formatTimestamp } from './src/moment'

import { loadScript, loadStyle } from './src/loader'

const myUnits = {
    isEmail,
    isIdCard,
    isUrl,
    isTel,
    cookie,
    localstorage,
    sessionStorage,
    floatAdd,
    floatDiv,
    floatSub,
    floatMul,
    getSingleQuery,
    getUrlQuerys,
    stringfyQuerys,
    getBrowser,
    getOs,
    isMobile,
    isWechat,
    formatDate,
    formatTimestamp,
    loadScript,
    loadStyle
}

export default myUnits

export {
    isEmail,
    isIdCard,
    isUrl,
    isTel,
    cookie,
    localstorage,
    sessionStorage,
    floatAdd,
    floatDiv,
    floatSub,
    floatMul,
    getSingleQuery,
    getUrlQuerys,
    stringfyQuerys,
    getBrowser,
    getOs,
    isMobile,
    isWechat,
    formatDate,
    formatTimestamp,
    loadScript,
    loadStyle
}