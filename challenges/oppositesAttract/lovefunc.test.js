const lovefunc = require('./lovefunc');

test('adds 1 + 2 to equal 3 = true', () => {
  const result = lovefunc(1, 2)
  expect(result).toBeTruthy();
});

test('adds 2+2 to equal 4 = false', () => {
    expect(lovefunc(2, 2)).toBeFalsy();
})