import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HostResponse } from '../../../models/hostResponse';
import { FormBuilder } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})

export class UserPanelUtil {

    deletedArray!: any[]
    constructor(private fb: FormBuilder, private userService: UserServiceService) { }

    async findAllUsers() {
        return await this.userService.findAllUsers().toPromise();
    }

    async deactivateUser(id: number) {
        return await this.userService.deactivateUser(id).toPromise();
    }

    async createUser(user: User) {
        return this.userService.createUser(user).toPromise()
    }

    async updateHost(userId: number, body: HostResponse) {
        return this.userService.updateHost(userId, body).toPromise();
    }

    async updateUser(userId: number, body: User) {
        return this.userService.updateUser(userId, body).toPromise();
    }

    async createHost(userId: number, body: HostResponse) {
        return this.userService.createHost(userId, body).toPromise();
    }

    async createGuest(userId: number, body: User) {
        return this.userService.createGuest(userId, body).toPromise();
    }

    async updateGuest(userId: number, body: User) {
        return this.userService.updateGuest(userId, body).toPromise();
    }

    async findUserById(id: number) {
        return this.userService.findUserById(id).toPromise();
    }

    async getUsers(user: User[]): Promise<Array<User>> {
        user = Object.values(await this.findAllUsers())[0]
        user = user.filter(it => it.actual_state && it.role_id === 5)
        return user
    }

    async getGuests(user: User[]): Promise<Array<User>> {
        user = Object.values(await this.findAllUsers())[0]
        user = user.filter(it => it.actual_state && (it.role_id === 3 || it.role_id === 4))
        return user
    }

    async getHosts(host: User[]): Promise<Array<User>> {
        host = Object.values(await this.findAllUsers())[0]
        host = host.filter(it => it.actual_state && (it.role_id === 2 || it.role_id === 4))
        host = await Promise.all(await host.map(async (it) => {
            return await this.findUserById(it.id)
        }))
        return host
    }
}