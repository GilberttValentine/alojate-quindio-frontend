import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
@Injectable({
    providedIn: 'root'
})

export class UserPanelUtil {
    constructor(private userService: UserServiceService) { }

    async findAllUsers() {
        return await this.userService.findAllUsers().toPromise();
    }

    async deactivateUser(id: number) {
        return await this.userService.deactivateUser(id).toPromise();
    }

    createUser(user: User) {
        return this.userService.createUser(user)
    }
}