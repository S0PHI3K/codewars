const descendingOrder = require ('./descendingOrder')

    it.each`
      value           |   expected
      ${40728}        |   ${87420}
      ${15}           |   ${51}
      ${123456789}    |   ${987654321}
  
  `('should return $expected when given the integers $value', ({ expected, value }) => {
      const result = descendingOrder(value);
      expect(result).toBe(expected);
    });