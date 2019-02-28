/**
 * Created by linfengluo@gmail.com on 2019/2/28.
 */
import {floatAdd, floatDiv, floatMul, floatSub} from '../src/math'

const fNumber1 = 20.25
const fNumber2 = 0.25
const fNumber3 = 0.50
const fNumber4 = 2

test('floatAdd', () => {
  expect(floatAdd(0.1, 0.2)).toBe(0.3);
  expect(floatAdd(fNumber1, fNumber3)).toBe(20.75);
  expect(floatAdd(fNumber1, fNumber3, 1)).toBe(20.8);
});


test('floatDiv', () => {
  expect(floatDiv(fNumber1, fNumber2)).toBe(81);
  expect(floatDiv(fNumber1, fNumber3)).toBe(40.5);
  expect(floatDiv(fNumber1, fNumber3, 3)).toBe(40.500);
});

test('floatMul', () => {
  expect(floatMul(fNumber1, fNumber4)).toBe(40.5);
  expect(floatMul(fNumber1, fNumber4, 0)).toBe(41);
  expect(floatMul(fNumber1, fNumber4, 3)).toBe(40.500);
});

test('floatSub', () => {
  expect(floatSub(fNumber1, fNumber4)).toBe(18.25);
  expect(floatSub(fNumber1, fNumber4, 1)).toBe(18.3);
  expect(floatSub(fNumber1, fNumber2, 0)).toBe(20);
});