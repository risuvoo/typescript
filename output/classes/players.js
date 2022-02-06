export class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`this player name is ${this.name} and he came from ${this.country} and he is ${this.age} years old`);
    }
}
