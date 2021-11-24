class Scooter {
    static serialNumberCount = 101
    constructor(station, user){
        this.serialNumberCount = Scooter.serialNumberCount;
        Scooter.serialNumberCount+= 1
        this.station = station
        this.user = user

    }
    recharge() {
        return console.log("finish recharging")
    }

}

module.exports = Scooter;

const scooter1 = new Scooter('Dallas','Martin');
const scooter2 = new Scooter('Mansfiled','Preeti');
console.log(scooter1.serialNumberCount);
console.log(scooter2.serialNumberCount);

console.log(scooter1.station);

console.log(scooter1.recharge())