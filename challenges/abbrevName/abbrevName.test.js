const abbrevName = require('./abbrevName');

it.each`
    value    | expected
    ${'Sam Harris'}  | ${'S.H'}
    ${'patric feeny'} | ${'P.F'}
    ${'JOhn SnOW'} | ${'J.S'}

  `('should return $expected when given the name  is $value', ({ expected, value }) => {
    const result = abbrevName(value);
    expect(result).toBe(expected);
  });


//   ${'@adam smith'} | ${'error'}
//   ${null} | ${'error'}

 
  
