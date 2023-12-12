import { Injectable, OnInit } from "@angular/core";
import { UserService } from "../user-service/user-service.service";

@Injectable({
    providedIn: 'root'
})
export class UserCounterService {//implements OnInit { this does not work
    statusChangeCounter: number = 0;
    constructor(private userService: UserService) {
        this.userService.statusChanged.subscribe(next => {
            console.log('Status changed for user' + next.username);
            console.log('counter:'+ ++this.statusChangeCounter);
        },
        error=> {
            console.log(error);
        });
    }
    //this does not work
    ngOnInit(): void {
    }
}