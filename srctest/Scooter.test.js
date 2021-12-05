const Scooter = require('../src/Scooter')

describe("Scooter class", () =>{

    const testScooter = new Scooter('Dallas', 'Nadege', true)

    test('must have a unique serial number', () => {
        expect(testScooter.serialNumberCount).toBe(103)
    })
    
    test('station must be within Dallas', () => {
        expect(testScooter.station).toBe("Dallas")
    })
    
    test('user must have a name', () => {
        expect(testScooter.user).toBe("Nadege")
    
    })

    test('if checkedout, then true', () => {
        expect(testScooter.checkedOut).toBe(true)

    })

})