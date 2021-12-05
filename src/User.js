 class User {
    
    constructor(userName, password, age) {
        this.userName = userName
        this.password = password
        this.age = age
        this.hasPaid = false
        if(age<18) {
            this.validUser = false

            }
            else {
                this.validUser = true
            }
       
    }

     //show amount to be paid
      payment(duration) {
         if (this.hasPaid === false) {
            const rate = 2
        
            return rate * duration
         }

    }

}

const user1 = new User("Jane-Doe", "password", 20)
//console.log(user1)
user1.payment(50);
module.exports = User;
