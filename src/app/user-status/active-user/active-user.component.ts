import { Component, OnInit } from "@angular/core";
import { User, UserService } from "../service/user-service/user-service.service";

@Component({
    selector: 'app-active-user',
    templateUrl: './active-user.component.html'
})
export class ActiveUserComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}
    
    ngOnInit(): void {
        this.users = this.userService.users;
    }

    setInactiveStatus(index: number) {
        this.userService.updateStatus(index, 'inactive');
    }
}