import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-game-even',
    templateUrl: './even.component.html'
})
export class EvenComponent {
    @Input() number: number = 0;
    
}