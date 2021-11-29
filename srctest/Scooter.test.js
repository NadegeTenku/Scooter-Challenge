const Scooter = require('../src/Scooter')

test('must have a unique serial number', () => {
    const testserialNumberCount = new Scooter()
    expect(testserialNumberCount.serialNumberCount).toBe(103)
})

test('station must be within Dallas', () => {
    const teststation = new Scooter("Dallas")
    expect(teststation.station).toBe("Dallas")

})

test('user must have a name', () => {
    const user1 = new Scooter("station", "Nadege")
    expect(user1.user).toBe("Nadege")

})

