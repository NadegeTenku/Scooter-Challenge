const User = require('../src/User')

class ScooterApp {

    Constructor(user, registration, duration) {
        this.user = user
        this.registration = registration
        this.duration = duration
        // this.hasPaid = false
    }

    // show the customer amount    
    updatePayment() {
        if(this.hasPaid === false) {
          this.hasPaid = true; 
        };

        }
    
}

module.exports = ScooterApp;

// const user1 = new User("Jane", , 50);
// const user2 = new User(true, (rate * time), 35);
// console.log(user1.payment);
// console.log(user2.payment);