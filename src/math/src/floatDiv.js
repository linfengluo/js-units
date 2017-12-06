/**
 * @desc   浮点数除法
 * @param  {String | Number} divisor 
 * @param  {String | Number} dividend 
 * @param  {Number} length 
 * @return {Float} 
 */


function floatDiv(divisor, dividend, length = -1) {
    divisor = isNaN(divisor) ? 0 : Number(divisor)
    dividend = isNaN(dividend) ? 1 : Number(dividend)

    let r1
    let r2
    let t1
    let t2
    try {
        t1 = divisor.toString().split('.')[1].length
    } catch (e) {

    }

    try {
        t2 = dividend.toString().split('.')[1].length
    } catch (e) {

    }

    r1 = Number(divisor.toString().replace('.', ''))
    r2 = Number(dividend.toString().replace('.', ''))

    /*
     避免被除数为0
     */
    r2 = r2 === 0 ? 1 : r2

    let result = (r1 / r2) * Math.pow(10, t2 - t1)

    return length === -1 ? result : result.toFixed(length)
}

export default floatDiv