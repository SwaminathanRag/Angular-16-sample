import { Component } from "@angular/core";

@Component({
    selector: 'app-pipe-test',
    templateUrl: './pipe-test.component.html'
})
export class PipeTestComponent {
    servers = [
        new Server('Production', 'MEDIUM', new Date()),
        new Server('User Database', 'LARGE', new Date()),
        new Server('Development Server', 'SMALL', new Date())
    ];


}
export class Server {
    constructor(public name: string, public instanceType: string, public startDate: Date) {}
}