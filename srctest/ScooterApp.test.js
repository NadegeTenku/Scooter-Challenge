const ScooterApp = require('../src/ScooterApp')

describe("Scooter class", () =>{

    const testScooterApp = new ScooterApp("user", "registration", "duration")

    test('to confirm registration', () => {
        expect(testScooterApp.registration).toBe(true)
    })
    
    test('payment must be done', () => {
        expect(testScooterApp.payment).toBe()
    })
    
    test('duration must be recorded in minutes', () => {
        expect(testScooterApp.duration).toBe()
    
    })


})