const minMax = require ('./minMax')

it.each`
    value               |   expected
    ${[1, 2, 3, 4, 5]}  |   ${[1, 5]}
    ${[2334454, 5]}     |   ${[5, 2334454]}
    ${[5]}              |   ${[5, 5]}



`('should return $expected when given the array of $value', ({ expected, value }) => {
    const result = minMax(value);
    expect(result).toBe(expected);
  });

