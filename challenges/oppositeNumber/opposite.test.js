const opposite = require('./opposite');

it.each`
    value   |   expected
    ${1}      |   ${-1}
    ${55}     |   ${-55}
    ${16}     |   ${-16}
    ${-1}     |   ${1}



`('should return $expected when given the name  is $value', ({ expected, value }) => {
    const result = opposite(value);
    expect(result).toBe(expected);
  });

//   ${'a'}    |   ${'error'}
//   ${'"'}    |   ${'error'}
//   ${null}    |   ${'error'}