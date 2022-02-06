import {isPlayer} from '../interfaces/isPlayer.js'
export class player implements isPlayer{
    constructor( public name: string,public age: number,readonly country: string) {
    }
    play() {
        console.log(`this player name is ${this.name} and he came from ${this.country} and he is ${this.age} years old`);
    }
}