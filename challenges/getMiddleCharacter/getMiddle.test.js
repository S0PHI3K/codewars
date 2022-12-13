const getMiddle = require('./getMiddle');

it.each`
    value    | expected
    ${'test'}  | ${'es'}
    ${'Sky'} | ${'k'}
    ${'tree'} | ${'re'}
    ${'Christmas'} | ${'s'}
  


  `('should return $expected when given the name  is $value', ({ expected, value }) => {
    const result = getMiddle(value);
    expect(result).toBe(expected);
  });