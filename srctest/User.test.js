const ScooterApp = require('./ScooterApp')
const Scooter = require('./Scooter')
const User = require('./User')

describe('User', () => {
    test('has userName and password', () => {
        const testuserName = new User()
        const testpassword = new User()
        expect(testuserName.testpassword.User).toBeTruthy();
        console.log('User verified');

    })
    test('is 18 and above', () => {
        if(User.age <= 17)
        expect(testage.age).toBeNull()
        console.log('Age not verified');

    })

    const userName1 = new Scooter('pswd', 'age');
    const userName2 = new Scooter('pswd', 'age');

})


console.log(userName1.userName.pswd.age);
console.log(userName2.userName.pswd.age);