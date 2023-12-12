import { Component } from '@angular/core';

@Component({
    selector: 'app-directive-test',
    templateUrl: './directive-test.component.html',
    styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent {

    displayText= false;
    logActivities:string[] = [];

    toggleDisplay() {
        this.displayText= !this.displayText;
        this.logActivities.push('Clicked at ' + new Date());
    }

    getBgColor(): string {
        if(this.logActivities.length >= 5) {
            return 'blue';
        }
        return 'white';
    }

    getTextColor(): boolean {        
        if(this.logActivities.length >= 5) {
            return true;
        }
        return false;
    }
}