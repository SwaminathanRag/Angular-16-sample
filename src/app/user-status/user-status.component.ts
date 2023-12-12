import { Component } from "@angular/core";
import { UserCounterService } from "./service/counter-service/counter-service.service";

@Component({
    selector: 'app-user-status',
    templateUrl: './user-status.component.html'
})
export class UserStatusComponent {

    constructor(private userCounterService: UserCounterService) {}

}