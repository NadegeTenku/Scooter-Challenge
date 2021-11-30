class User {
    
    constructor(userName, password, age) {
        this.userName = userName
        this.password = password
        this.age = age
        if(age<18) {
            this.validUser = false

            }
            else {
                this.validUser = true
            }
       
    }

}
module.exports = User;
