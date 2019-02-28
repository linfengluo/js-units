/**
 * Created by linfengluo@gmail.com on 2019/2/28.
 */
import {formatDate, formatTimestamp} from '../src/moment'
import faker from 'faker'

const date = new Date('2018-02-11 00:00:00')
const timestamp = date.valueOf()

test('formatDate', () => {
  expect(formatDate(date)).toBe('2018-02-11 00:00:00');
  expect(formatDate(date, 'YYYY哈MM订单DD')).toBe('2018哈02订单11');
  expect(formatDate('2018-02-11', 'YYYY哈MM订单DD')).toBe('2018哈02订单11');
});


test('formatTimestamp', () => {
  expect(formatTimestamp(timestamp)).toBe('2018-02-11 00:00:00');
  expect(formatTimestamp(timestamp, 'YYYY哈MM订单DD')).toBe('2018哈02订单11');
});