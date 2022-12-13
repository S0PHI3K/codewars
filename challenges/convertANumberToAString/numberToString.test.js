const numberToString = require('./numberToString');

test('converts a single digit to a string', () => {
    const result = numberToString(3)
    expect(result).toBe('3');
  });

  test('converts a double digit to a string', () => {
    const result = numberToString(13)
    expect(result).toBe('13');
  });