import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-game-odd',
    templateUrl: './odd.component.html'
})
export class OddComponent {
    @Input() number: number = 0;

}