const findNeedle = require('./findNeedle')

it.each`
    value                                                                            |   expected
    ${['3', '123124234', 'needle', 'world', 'hay', '2', '3', true, false]}  |   ${'found the needle at position 2'}


`('should return $expected when given the array of $value', ({ expected, value }) => {
    const result = findNeedle(value);
    expect(result).toBe(expected);
  });

//   ${['3', '123124234', 'needle', 'world', 'hay', 2, '3', true, false]}  |   ${'found the needle at position 3'}
//   ${['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']}     |   ${'found the needle at position 5'}
// ${[1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]}              |   ${'found the needle at position 30'}