const ScooterApp = require('./ScooterApp')
const Scooter = require('./Scooter')
const User = require('./User')

    test('must be registered on the app', () => {
        const testregisteredUser1 = 'new registeredUser'();
        expect(testregisteredUser1.registeredUser).toBe(Registered)
    })

    test('payment must be valid', () => {
        if ('validPayment') {
            return 'true';
        }
            else {
                return 'false';
            }
    })

    test('add scooter', () => {
        if ('addScooter') {
            return 'true';
        }
            else {
                return 'false';
            }
    })

    console.log(newRegisteredUser1.registeredUser1());
    console.log(newRegisteredUser2.registeredUser2());
    console.log(validPayment);
    //print paid if payment is valid