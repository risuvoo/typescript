export class player{
    private name: string;
    public age: number;
    readonly country: string;
    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country=c
    }
    play() {
        console.log(`this player name is ${this.name} and he came from ${this.country} and he is ${this.age} years old`)
    }
}