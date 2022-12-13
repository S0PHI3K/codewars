const { isExportDeclaration } = require('typescript');
const addBinary = require ('./addBinary')

test ('adds two single digit numbers together and returns their sum in binary', () => {
    const result = addBinary(1,1)
    expect(result).toBe('10')

    const result1 = addBinary(5,9)
    expect(result1).toBe('1110')

});