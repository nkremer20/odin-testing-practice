const { capitalize } = require('./index.js')

test('Test capitalize function', () => {
  expect(capitalize('this is a test!')).toBe('This is a test!');
});

test('Test empty capitalize function', () => {
  expect(capitalize('')).toBe('');
});

test('Test undefined capitalize function', () => {
  expect(capitalize('')).toBe('');
});