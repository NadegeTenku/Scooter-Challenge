class Scooter {
    static serialNumberCount = 101
    constructor(station, user, checkedOut) {
        this.serialNumberCount = Scooter.serialNumberCount;
        Scooter.serialNumberCount+= 1
        this.station = station
        this.user = user
        this.checkedOut = checkedOut

    }
    checkOut() {
        this.checkedOut = !this.checkedOut
    }

}

module.exports = Scooter;

const scooter1 = new Scooter('Dallas','Martin');
const scooter2 = new Scooter('Dallas','Preeti');
console.log(scooter1.serialNumberCount);
console.log(scooter2.serialNumberCount);
