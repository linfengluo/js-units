/**
 *
 * @desc   系列化参数
 * @param  {Object} query
 * @return {String}
 */

function stringfyQuerys(query) {
  if (!query) return '';
  var queryArray = [];
  
  for (let key in query) {
    let value = query[key]
    
    if (value instanceof Array) {
      for (let index in value) {
        let ketTemp = `${key}[${index}]`
        queryArray.push(`${encodeURIComponent(ketTemp)}=${encodeURIComponent(value[i])}`)
      }
      continue;
    } else {
      queryArray.push(`${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
    }
  }
  
  return queryArray.join('&');
}

export default stringfyQuerys