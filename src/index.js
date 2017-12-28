import { isEmail, isIdCard, isUrl, isTel } from './regex'

import { cookie, localstorage, sessionStorage } from './storage'

import { floatAdd, floatDiv, floatSub, floatMul } from './math'

import { getSingleQuery, getUrlQuerys, stringfyQuerys } from './url'

import { getBrowser, getOs, isMobile, isWechat } from './browser'

import { formatDate, formatTimestamp } from './moment'

import { loadScript, loadStyle } from './loader'

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