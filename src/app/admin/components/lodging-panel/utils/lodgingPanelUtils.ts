import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { Injectable } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CreateLodgingResponse } from 'src/app/models/response/createLodging';
@Injectable({
    providedIn: 'root'
})

export class LodgingPanelUtil {
    constructor(private lodgingService: LodgingServiceService, private fb: FormBuilder,) { }

    async getAllLodgings(): Promise<object> {
        return await this.lodgingService.getAllLodgingsNoPage().toPromise();
    }

    createLodging(userId: number, lodging: CreateLodgingResponse) {
        return this.lodgingService.createLodging(userId, lodging).toPromise();
    }

    editLodging(userId: number, lodgingId: number, lodging: CreateLodgingResponse) {
        return this.lodgingService.editLodging(userId, lodgingId, lodging).toPromise();
    }

    deactivateLodging(userId: number, lodgingId: number) {
        return this.lodgingService.deactivateLodging(userId, lodgingId).toPromise();
    }
}