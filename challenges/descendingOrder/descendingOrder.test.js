const descendingOrder = require ('./descendingOrder')

test ( '' , () => {
    const result = descendingOrder(0)
    expect(result).toBe(0)

    const result2 = descendingOrder(1)
    expect(result2).toBe(1)

    const result3 = descendingOrder(15)
    expect(result3).toBe(51)

    const result4 = descendingOrder(123456789)
    expect(result4).toBe(987654321)


})