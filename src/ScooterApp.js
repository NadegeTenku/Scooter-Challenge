const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
    Constructor(){
        this.stations = {
            'Dallas': []
        }
    
    }
    register(user) {
        if(!ScooterApp.registeredUsers.includes(user.username, user.password, user.age)) {ScooterApp.registeredUsers.push(user.username, user.password, user.age)
        } else {
            return 'user is already registered or age is invalid'
        }
    }
}
module.exports = ScooterApp;