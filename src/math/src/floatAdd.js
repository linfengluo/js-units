/**
 * @desc   浮点数加法
 * @param  {String | Number} addend
 * @param  {String | Number} augend
 * @param  {Number} length
 * @return {Float}
 */

function floatAdd(addend, augend, length = -1) {
  addend = isNaN(addend) ? 0 : Number(addend)
  augend = isNaN(augend) ? 0 : Number(augend)
  
  let r1
  let r2
  let m
  let c
  
  try {
    r1 = addend.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  
  try {
    r2 = augend.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  
  c = Math.abs(r1 - r2)
  m = Math.pow(10, Math.max(r1, r2))
  
  if (c > 0) {
    let cm = Math.pow(10, c)
    if (r1 > r2) {
      addend = Number(addend.toString().replace('.', ''))
      augend = Number(augend.toString().replace('.', '')) * cm
    } else {
      addend = Number(addend.toString().replace('.', '')) * cm
      augend = Number(augend.toString().replace('.', ''))
    }
  } else {
    addend = Number(addend.toString().replace('.', ''))
    augend = Number(augend.toString().replace('.', ''))
  }
  
  let result = (addend + augend) / m
  
  return length === -1 ? result : parseFloat(result.toFixed(length))
}

export default floatAdd