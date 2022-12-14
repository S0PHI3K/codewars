const isIsogram = require('./isIsogram');

it.each`
    value                |   expected
    ${"isIsogram"}       |   ${false}
    ${"moOse"}           |   ${false}
    ${"LOose"}           |   ${false}
    ${"abA"}             |   ${false}
    ${"isogram"}         |   ${true}
    ${"Dermatoglyphics"} |   ${true}
    ${""}                |   ${true}
    ${'@b@'}             |   ${'error'}
    ${121}                  |${'error'}




`('should return $expected when given the string input of $value', ({ expected, value }) => {
    const result = isIsogram(value);
    expect(result).toBe(expected);
  });