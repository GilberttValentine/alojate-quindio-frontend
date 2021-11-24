import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})

export class HostFormPanelUtil {

    constructor(private fb: FormBuilder) { }

    addNewLanguage(button: HTMLButtonElement): void {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceContainer = document.createElement('div');
            serviceContainer.setAttribute('id', 'language_container')

            const title = document.createElement('span');
            title.innerText = `Nuevo lenguaje`
            title.setAttribute('class', 'form-control mt-2')
            title.style.backgroundColor = '#000'
            title.style.color = '#fff';

            const languageInputId = document.createElement('input');
            languageInputId.setAttribute('class', 'form-control form-control-lg shadow-none mt-2');
            languageInputId.setAttribute('placeholder', 'Id lenguaje');
            languageInputId.setAttribute('type', 'number');

            const deleteServiceBtn = document.createElement('button');
            deleteServiceBtn.setAttribute('class', 'btn btn-danger form-control animate__animated animate__fadeInLeft mb-2');
            deleteServiceBtn.innerText = 'Borrar'

            deleteServiceBtn.addEventListener('click', function () {
                e.preventDefault();
                (this.parentNode as HTMLDivElement).remove()
            })
            serviceContainer.append(title);
            serviceContainer.append(languageInputId);
            serviceContainer.append(deleteServiceBtn);

            (button.parentNode?.nextSibling as HTMLDivElement).appendChild(serviceContainer)
        })
    }

    addLanguagesToHostForm(button: HTMLButtonElement, hostArray: Array<{ id: number, name: string }>): void {
        hostArray.forEach(it => {
            const serviceContainer = document.createElement('div');
            serviceContainer.setAttribute('id', 'language_container')

            const title = document.createElement('span');
            title.innerText = `Nuevo lenguaje`
            title.setAttribute('class', 'form-control mt-2')
            title.style.backgroundColor = '#000'
            title.style.color = '#fff';

            const languageInputId = document.createElement('input');
            languageInputId.setAttribute('class', 'form-control form-control-lg shadow-none mt-2');
            languageInputId.setAttribute('placeholder', 'Id lenguaje');
            languageInputId.setAttribute('type', 'number');
            languageInputId.valueAsNumber = it.id
            languageInputId.disabled = true

            const languageInputName = document.createElement('input');
            languageInputName.setAttribute('class', 'form-control form-control-lg shadow-none mt-2');
            languageInputName.setAttribute('placeholder', 'Nombre lenguaje');
            languageInputName.value = it.name
            languageInputName.disabled = true

            serviceContainer.append(title);
            serviceContainer.append(languageInputId);
            serviceContainer.append(languageInputName);

            (button.parentNode?.nextSibling as HTMLDivElement).appendChild(serviceContainer)
        })
    }

    setInitialHostFormGroup(): FormGroup {
        return this.fb.group({
            user_id: ['', Validators.required]
        })
    }

    enableHostFormItemsAndReset(form: FormGroup) {
        form.get('user_id')?.enable();
    }

    disableHostFormItems(form: FormGroup) {
        form.get('user_id')?.disable();
    }

    resetLanguages(): void {
        try {
            document.querySelectorAll('#language_container').forEach(it => {
                it.remove();
            })
        } catch (error) {
        }
    }

}