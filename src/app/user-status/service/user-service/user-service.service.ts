import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users: User[] = [new User('max', 'active'), new User('sara', 'active'),
                    new User('mini', 'inactive'), new User('sam', 'inactive')];

    @Output() statusChanged = new EventEmitter<User>(); 

    updateStatus(index: number, newStatus: string) {
        this.users[index].status = newStatus;
        this.statusChanged.emit(this.users[index]);
    }
}

export class User {
    constructor(public username: string, public status: string){}
}