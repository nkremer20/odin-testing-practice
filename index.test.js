const { capitalize, reverseString } = require('./index.js')

// Capitalize Tests

test('Test capitalize function', () => {
  expect(capitalize('this is a test!')).toBe('This is a test!');
});

test('Test empty capitalize function', () => {
  expect(capitalize('')).toBe('');
});

test('Test undefined capitalize function', () => {
  expect(capitalize()).toBe('');
});

// Reverse String Tests

test('Test reverseString function', () => {
    expect(reverseString('this is a test!')).toBe('!tset a si siht');
});

test('Test undefined reverseString function', () => {
    expect(reverseString()).toBe('');
});

test('Test empty reverseString function', () => {
    expect(reverseString('')).toBe('');
});