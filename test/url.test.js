/**
 * Created by linfengluo@gmail.com on 2019/2/28.
 */
import {getSingleQuery, getUrlQuerys, stringfyQuerys} from '../src/url'
const demain = 'https://demo.com'
const query = {
  page: '3',
  type: 'test',
  target: 'none'
}

const url = `${demain}?${stringfyQuerys(query)}`

test('stringfyQuerys', () => {
  expect(stringfyQuerys(query)).toBe('page=3&type=test&target=none');
});

test('getSingleQuery page to equal 3', () => {
  expect(getSingleQuery('page', url)).toBe(query.page);
});

test('getSingleQuery type to equal test', () => {
  expect(getSingleQuery('type', url)).toBe(query.type);
});

test('getUrlQuerys', () => {
  expect(getUrlQuerys(url)).toEqual(query);
});