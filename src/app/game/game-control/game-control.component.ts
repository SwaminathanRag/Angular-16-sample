import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html'
})
export class GameControlComponent {
    gameCounter: number = 0;
    intervalReference: any;
    @Output() counterChange = new EventEmitter<{counter: number}>();

    startGame() {
        this.intervalReference = setInterval(() => {
                ++this.gameCounter;
                this.counterChange.emit({counter: this.gameCounter});
        }, 1000)
    }

    stopGame() {
        clearInterval(this.intervalReference);
    }
}