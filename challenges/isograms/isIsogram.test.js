const isIsogram = require('./isIsogram');

it.each`
    value                |   expected
    ${"isIsogram"}       |   ${false}
    ${"moOse"}           |   ${false}
    ${"aba"}             |   ${false}
    ${"isogram"}         |   ${true}
    ${"Dermatoglyphics"} |   ${true}
    ${""}                |   ${true}



`('should return $expected when given the string input of $value', ({ expected, value }) => {
    const result = isIsogram(value);
    expect(result).toBe(expected);
  });