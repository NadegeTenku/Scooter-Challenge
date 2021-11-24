const Scooter = require("./Scooter");

class Usser {
    constructor(userName, password, age){
        this.userName = userName
        this.password = password
        this.age = age
    }
}
module.exports = User;

const userName1 = new Scooter('pswd', 'age')
const userName2 = new Scooter('pswd', 'age')

console.log(userName1.pswd);
console.log(userName2.age);