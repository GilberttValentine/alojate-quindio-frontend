import { UserServiceService } from 'src/app/services/user/user-service.service';
import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
@Injectable({
    providedIn: 'root'
})

export class FormPanelUtil {

    constructor(private fb: FormBuilder) { }

    setEditStatusForButtons(button: HTMLButtonElement): HTMLButtonElement {
        const containerParent = (button.parentNode as HTMLDivElement);
        try {
            containerParent.children[1].remove()
        } catch (e) { }
        button.innerText = 'Editar'
        const clearBtn = document.createElement('button')
        clearBtn.innerText = 'Limpiar';
        clearBtn.setAttribute('class', 'btn btn-dark d-block  w-100  shadow-none');
        containerParent.appendChild(clearBtn);
        return clearBtn
    }

    setInitialUserFormGroup(): FormGroup {
        return this.fb.group({
            first_name: ['', Validators.required],
            second_name: [''],
            first_lastname: ['', Validators.required],
            second_lastname: [''],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        })
    }

    setEditableUserFormGroup(user: User): FormGroup {
        return this.fb.group({
            first_name: [user.first_name, Validators.required],
            second_name: [user.second_name],
            first_lastname: [user.first_lastname, Validators.required],
            second_lastname: [user.second_lastname, Validators.required],
            email: [user.email, [Validators.required, Validators.email]],
            id: [user.id, [Validators.required]],
            password: [user.password, [Validators.required, Validators.minLength(8)]]
        })
    }

    enableUserFormItemsAndReset(form: FormGroup) {
        form.get('password')?.enable();
        form.get('email')?.enable();
    }

    disableUserFormItems(form: FormGroup) {
        form.get('password')?.disable();
        form.get('email')?.disable();
    }
}