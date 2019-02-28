/**
 * @desc   浮点数乘法
 * @param  {String | Number} multiplier
 * @param  {String | Number} multiplicand
 * @param  {Number} length
 * @return {Float}
 */


function floatMul(multiplier, multiplicand, length = -1) {
  multiplier = isNaN(multiplier) ? 0 : Number(multiplier)
  multiplicand = isNaN(multiplicand) ? 0 : Number(multiplicand)
  
  let m = 0
  let s1 = multiplier.toString()
  let s2 = multiplicand.toString()
  
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  
  let result = Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  
  return length === -1 ? result : parseFloat(result.toFixed(length))
}

export default floatMul