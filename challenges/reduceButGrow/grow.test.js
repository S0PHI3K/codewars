
const grow = require('./grow');

test ( '', () => {
const result = grow ([1,2,3]);
expect(result).toBe(6)

const result2 = grow ([4, 1, 1, 1, 4]);
expect(result2).toBe(16)

const result3 = grow ([2, 2, 2, 2, 2, 2]);
expect(result3).toBe(64)

})