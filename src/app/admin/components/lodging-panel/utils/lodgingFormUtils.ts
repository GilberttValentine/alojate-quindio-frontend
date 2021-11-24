import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { Injectable } from '@angular/core';
import { LodgingResponse } from '../../../models/lodgingResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceResponse } from 'src/app/models/response/service';
@Injectable({
    providedIn: 'root'
})

export class LodgingFormUtil {
    constructor(private lodgingService: LodgingServiceService, private fb: FormBuilder,) { }

    setEditStatusForButtons(button: HTMLButtonElement, form: FormGroup): HTMLButtonElement {
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

    resetForm(button: HTMLButtonElement, form: FormGroup): void {
        const containerParent = (button.parentNode as HTMLDivElement);
        try {
            form.get('user_id')?.enable();
            form.get('municipality_id')?.enable();
            form.get('qualification')?.enable();
            form.get('id')?.enable();
            form.get('id')?.removeValidators(Validators.required);
            form.get('type_id')?.enable();
            form.reset();
            form = this.setInitialFormGroup()
            containerParent.children[1].remove()
            this.resetServices();
        } catch (error) {
        }
    }

    enableLodgingFormItemsAndReset(form: FormGroup) {
        form.get('user_id')?.enable();
        form.get('municipality_id')?.enable();
        form.get('qualification')?.enable();
        form.get('id')?.enable();
        form.get('type_id')?.enable();
        form.reset();
    }

    disableLodgingFormItems(form: FormGroup) {
        form.get('user_id')?.disable();
        form.get('municipality_id')?.disable();
        form.get('qualification')?.disable();
        form.get('id')?.disable();
        form.get('type_id')?.disable();
    }

    resetServices(): void {
        try {
            document.querySelectorAll('#services_container').forEach(it => {
                it.remove();
            })
        } catch (error) {
        }
    }

    addNewService(button: HTMLButtonElement): void {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceContainer = document.createElement('div');
            serviceContainer.setAttribute('id', 'services_container')

            const title = document.createElement('span');
            title.innerText = `Nuevo servicio`
            title.setAttribute('class', 'form-control')
            title.style.backgroundColor = '#000'
            title.style.color = '#fff';

            const serviceInputId = document.createElement('input');
            serviceInputId.setAttribute('class', 'form-control form-control-lg shadow-none mt-2');
            serviceInputId.setAttribute('placeholder', 'Id servicio');
            serviceInputId.setAttribute('type', 'number');

            const serviceAreaDescription = document.createElement('textarea');
            serviceAreaDescription.setAttribute('class', 'form-control mt-2');
            serviceAreaDescription.setAttribute('placeholder', 'Descripcion');

            const deleteServiceBtn = document.createElement('button');
            deleteServiceBtn.setAttribute('class', 'btn btn-danger form-control animate__animated animate__fadeInLeft mb-2');
            deleteServiceBtn.innerText = 'Borrar'

            deleteServiceBtn.addEventListener('click', function () {
                e.preventDefault();
                (this.parentNode as HTMLDivElement).remove()
            })
            serviceContainer.append(title);
            serviceContainer.append(serviceInputId);
            serviceContainer.append(serviceAreaDescription);
            serviceContainer.append(deleteServiceBtn);

            (button.parentNode?.nextSibling as HTMLDivElement).appendChild(serviceContainer)
        })
    }

    addServicesToLodgingForm(button: HTMLButtonElement, lodgingService: Array<ServiceResponse>): void {
        lodgingService.forEach(it => {
            const serviceContainer = document.createElement('div');
            serviceContainer.setAttribute('id', 'services_container')

            const title = document.createElement('span');
            title.innerText = `Nuevo servicio`
            title.setAttribute('class', 'form-control')
            title.style.backgroundColor = '#000'
            title.style.color = '#fff';

            const serviceInputId = document.createElement('input');
            serviceInputId.setAttribute('class', 'form-control form-control-lg shadow-none mt-2');
            serviceInputId.setAttribute('placeholder', 'Id servicio');
            serviceInputId.setAttribute('type', 'number');
            serviceInputId.value = String(it.service_id)
            serviceInputId.disabled = true;

            const serviceAreaDescription = document.createElement('textarea');
            serviceAreaDescription.setAttribute('class', 'form-control mt-2');
            serviceAreaDescription.setAttribute('placeholder', 'Descripcion');
            serviceAreaDescription.value = String(it.description)
            serviceAreaDescription.disabled = true;

            const deleteServiceBtn = document.createElement('button');
            deleteServiceBtn.setAttribute('class', 'btn btn-danger form-control mb-2');
            deleteServiceBtn.innerText = 'Borrar'

            deleteServiceBtn.addEventListener('click', function (e) {
                e.preventDefault();
                (this.parentNode as HTMLDivElement).remove()
            })

            serviceContainer.append(title);
            serviceContainer.append(serviceInputId);
            serviceContainer.append(serviceAreaDescription);
            serviceContainer.append(deleteServiceBtn);

            (button.parentNode?.nextSibling as HTMLDivElement).appendChild(serviceContainer)
        })
    }
    setInitialFormGroup(): FormGroup {
        return this.fb.group({
            name: ['', Validators.required],
            night_value: ['', Validators.required],
            room_quantity: ['', Validators.required],
            bathroom_quantity: ['', Validators.required],
            bed_quantity: ['', [Validators.required]],
            persons_amount: ['', [Validators.required]],
            direction: ['', [Validators.required]],
            accesibility: ['', [Validators.required]],
            user_id: ['', [Validators.required]],
            municipality_id: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            type_id: ['', [Validators.required]],
            description: [0, [Validators.required]],
            url_pictures: ['url', [Validators.required]],
        })
    }

    setEditableFormGroup(lodging: LodgingResponse): FormGroup {
        return this.fb.group({
            name: [lodging.name, Validators.required],
            night_value: [lodging.night_value, Validators.required],
            room_quantity: [lodging.room_quantity, Validators.required],
            bathroom_quantity: [lodging.bathroom_quantity, Validators.required],
            bed_quantity: [lodging.bed_quantity, [Validators.required]],
            persons_amount: [lodging.persons_amount, [Validators.required]],
            direction: [lodging.direction, [Validators.required]],
            accesibility: [lodging.accesibility, [Validators.required]],
            user_id: [lodging.user.id, [Validators.required]],
            municipality_id: [lodging.municipality.id, [Validators.required]],
            qualification: [lodging.comments.qualification, [Validators.required]],
            id: [lodging.id, [Validators.required]],
            type_id: [lodging.type.id, [Validators.required]],
            description: [0, [Validators.required]],
            url_pictures: ['url', [Validators.required]]
        })
    }
}