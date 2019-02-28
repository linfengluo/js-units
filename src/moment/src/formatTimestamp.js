/**
 * @desc   格式化时间戳
 * @param  {String | Number} timeStamp
 * @param  {String} format 默认: 'YYYY-MM-DD HH:mm:ss'
 * @return {String}
 */

import formatDate from './formatDate'

function formatTimestamp(timeStamp, format = 'YYYY-MM-DD HH:mm:ss') {
  if (!timeStamp) return
  timeStamp = Number(timeStamp)
  if (timeStamp > 1e9 && timeStamp < 1e13) {
    let targetTimeStamp = timeStamp >= 1e10 ? timeStamp : timeStamp * 1000
    try {
      let targetDate = new Date(targetTimeStamp)
      return formatDate(targetDate, format)
    } catch (e) {
      console.error(e)
    }
    
  } else {
    console.error('时间戳格式不正确')
    return '未知时间'
  }
}

export default formatTimestamp