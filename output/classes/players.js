export class player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`this player name is ${this.name} and he came from ${this.country} and he is ${this.age} years old`);
    }
}
