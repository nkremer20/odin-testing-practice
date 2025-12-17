const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } = require('./index.js')

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

// Calculator Tests
test('Test to add 2 numbers', () => {
    expect(new Calculator(4, 2).add()).toBe(6)
});

test('Test to subtract 2 numbers', () => {
    expect(new Calculator(4, 2).subtract()).toBe(2)
});

test('Test to divide 2 numbers', () => {
    expect(new Calculator(4, 2).divide()).toBe(2)
});

test('Test to multiply 2 numbers', () => {
    expect(new Calculator(4, 2).multiply()).toBe(8)
});

// TODO: Ceasar Cipher Tests


// TODO: Analyze Array Tests
test('Test for array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    )
});

test('Test empty array', () => {
    expect(analyzeArray([])).toStrictEqual({})
});

test('Test undefined array', () => {
    expect(analyzeArray()).toStrictEqual({})
});