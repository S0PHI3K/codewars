const smash= require('./smash');

  it.each`
    value                                                   |   expected
    ${["hello", "amazing", "world"]}                        |   ${"hello amazing world"}
    ${["hello", "world"]}                                   |   ${"hello world"}
    ${["this", "is", "a", "really", "long", "sentence"]}    |   ${"this is a really long sentence"}

`('should return $expected when given the array $value', ({ expected, value }) => {
    const result = smash(value);
    expect(result).toBe(expected);
  });