const ScooterApp = require('../src/ScooterApp')
const Scooter = require('../src/Scooter')
const User = require('../src/User')

describe('User', () => {
    const testuser = new User("Nadege", "password", 18)
    test('has userName and password', () => {
        expect(testuser.userName).toBe("Nadege");
        expect(testuser.password).toBe("password");

    })
    test('is 18 and above', () => {
        expect(testuser.age).toBe(18)
        expect(testuser.validUser).toBeTruthy()
    })

})