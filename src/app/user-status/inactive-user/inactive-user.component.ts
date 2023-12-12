import { Component, OnInit } from "@angular/core";
import { User, UserService } from "../service/user-service/user-service.service";

@Component({
    selector: 'app-inactive-user',
    templateUrl: './inactive-user.component.html'
})
export class InActiveUserComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}
    
    ngOnInit(): void {
        this.users = this.userService.users;
    }

    setActiveStatus(index: number) {
        this.userService.updateStatus(index, 'active');
    }
}