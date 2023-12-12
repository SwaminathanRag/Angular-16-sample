import { Component } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
})
export class GameComponent {

    oddNumbers: number[] = [];
    evenNumbers: number[] = [];

    onChangeGameCounter(game: {counter: number}) {
        console.log(game.counter);
        if(game.counter %2 != 0) {
            this.oddNumbers.push(game.counter);
        } else {
            this.evenNumbers.push(game.counter)
        }
    }
}