/**
 * @desc   浮点数减法
 * @param  {String | Number} reduction 
 * @param  {String | Number} minuend 
 * @param  {Number} length 
 * @return {Float} 
 */

function floatSub(reduction, minuend, length = -1) {
	reduction = isNaN(reduction) ? 0 : Number(reduction)
	minuend = isNaN(minuend) ? 0 : Number(minuend)

    let r1
    let r2
    let m
    let n

    try {
        r1 = reduction.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }

    try {
        r2 = minuend.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }

    m = Math.pow(10, Math.max(r1, r2))
    n = (r1 >= r2) ? r1 : r2

    let result = ((reduction * m - minuend * m) / m)

    return length === -1 ? result.toFixed(n) : result.toFixed(length)
}

export default floatSub