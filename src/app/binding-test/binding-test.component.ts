import { Component } from '@angular/core';


@Component({
    selector: 'app-binding-test',
    templateUrl: './binding-test.component.html'

})
export class BindingTestComponent {

    username: string = '';

    resetUserName() {
        this.username = '';
    }

}