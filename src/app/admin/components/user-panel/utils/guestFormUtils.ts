import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
@Injectable({
    providedIn: 'root'
})

export class GuestFormPanelUtil {

    constructor(private fb: FormBuilder) { }

    setInitialGuestFormGroup(): FormGroup {
        return this.fb.group({
            id: ['', Validators.required],
            stratum: ['', Validators.required],
            studyLevelId: ['', Validators.required],
            civilStatus: ['', Validators.required],
        })
    }

    setEditableGuestFormGroup(user: User): FormGroup {
        return this.fb.group({
            id: [user.id, Validators.required],
            stratum: [user.stratum, Validators.required],
            studyLevelId: [user.study_level_id, Validators.required],
            civilStatus: [user.civil_status_id, Validators.required],
        })
    }

    enableGuestFormItemsAndReset(form: FormGroup) {
        form.get('id')?.enable();
    }

    disableGuestFormItems(form: FormGroup) {
        form.get('id')?.disable();
    }
}