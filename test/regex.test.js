/**
 * Created by linfengluo@gmail.com on 2019/2/28.
 */
import {isEmail, isIdCard, isTel, isUrl} from '../src/regex'
import faker from 'faker'


test('isEmail', () => {
  expect(isEmail(faker.internet.email())).toBeTruthy();
});

test('isIdCard', () => {
  expect(isIdCard('441482199111234783')).toBeTruthy();
});


test('isTel', () => {
  expect(isTel(faker.helpers.replaceSymbolWithNumber('181########'))).toBeTruthy();
  expect(isTel(faker.helpers.replaceSymbolWithNumber('281########'))).toBeFalsy();
});

test('isUrl', () => {
  expect(isUrl(faker.internet.url())).toBeTruthy();
});