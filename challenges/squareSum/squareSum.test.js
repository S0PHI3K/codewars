const squareSum= require('./squareSum');

test('adds 1 + 2 to equal 3 = true', () => {
    const result = squareSum([2, 2])
    expect(result).toBe(8);
  });
  
//   test('adds 2+2 to equal 4 = false', () => {
//       expect(lovefunc(2, 2)).toBeFalsy();
//   })

// it.each`
//     value                                                   |   expected
//     ${["hello", "amazing", "world"]}                        |   ${"hello amazing world"}
//     ${["hello", "world"]}                                   |   ${"hello world"}
//     ${["this", "is", "a", "really", "long", "sentence"]}    |   ${"this is a really long sentence"}

// `('should return $expected when given the array $value', ({ expected, value }) => {
//     const result = smash(value);
//     expect(result).toBe(expected);
//   });