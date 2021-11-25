import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CloudinaryServiceService } from 'src/app/services/cloudinary/cloudinary-service.service';
import { LodgingPanelUtil } from 'src/app/admin/components/lodging-panel/utils/lodgingPanelUtils'
import { LodgingResponse } from '../../models/lodgingResponse';
import Swal from 'sweetalert2';
import { CreateLodgingResponse } from 'src/app/models/response/createLodging';
import { ServiceResponse } from 'src/app/models/response/service';
import { LodgingFormUtil } from './utils/lodgingFormUtils';

@Component({
  selector: 'app-lodging-panel',
  templateUrl: './lodging-panel.component.html',
  styleUrls: ['./lodging-panel.component.css']
})
export class LodgingPanelComponent implements OnInit {
  lodgings!: LodgingResponse[]
  lodgingForm!: FormGroup;
  editStatus!: boolean;

  constructor(private lodgingPanelUtils: LodgingPanelUtil, private lodgingFormUtil: LodgingFormUtil, private cloudinaryService: CloudinaryServiceService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.createForm();
    this.editStatus = false;
    this.lodgings = Object.values((await this.lodgingPanelUtils.getAllLodgings()))[0]
    this.lodgings = this.lodgings.filter(it => it.actual_state)
    this.lodgingFormUtil.addNewService((document.querySelector('.add-service') as HTMLButtonElement))
  }

  async ngOnChanges() {
    this.createForm();
    this.editStatus = false;
    this.lodgings = Object.values((await this.lodgingPanelUtils.getAllLodgings()))[0]
    this.lodgings = this.lodgings.filter(it => it.actual_state)
  }

  createForm() {
    this.lodgingForm = this.lodgingFormUtil.setInitialFormGroup()
  }

  async submit() {
    (document.querySelector('#admin-lodging-btn') as HTMLButtonElement).innerText === 'Editar' ?
      this.editStatus = true :
      this.editStatus = false

    const lodging: CreateLodgingResponse = {
      lodging: {
        ...this.lodgingForm.value,
      },
      services: []
    }

    document.querySelectorAll('#services_container').forEach(it => {
      const id = (it.children[1] as HTMLInputElement).value
      const description = (it.children[2] as HTMLInputElement).value
      const currentService: ServiceResponse = {
        service_id: parseInt(id),
        description: description
      }
      lodging.services.push(currentService)
    })

    try {
      if (!this.editStatus) {
        Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });
        Swal.showLoading();

        await this.lodgingPanelUtils.createLodging(lodging['lodging'].user_id, lodging)
        this.router.navigate([`/admin`]);
        Swal.close();
        this.ngOnChanges();
        this.lodgings = Object.values((await this.lodgingPanelUtils.getAllLodgings()))[0]
        this.lodgings = this.lodgings.filter(it => it.actual_state)
        this.lodgingFormUtil.resetForm((document.querySelector('#admin-lodging-btn') as HTMLButtonElement), this.lodgingForm)

      } else {

        Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });

        Swal.showLoading();

        await this.lodgingPanelUtils.editLodging(lodging['lodging'].user_id, lodging['lodging'].id, lodging)

        this.router.navigate([`/admin`]);
        Swal.close();
        this.ngOnChanges();
        this.lodgings = Object.values((await this.lodgingPanelUtils.getAllLodgings()))[0]
        this.lodgings = this.lodgings.filter(it => it.actual_state)
        this.lodgingFormUtil.resetForm((document.querySelector('#admin-lodging-btn') as HTMLButtonElement), this.lodgingForm)

      }
    } catch (err: any) {
      Swal.fire({ icon: 'error', title: 'Error en la ejecucion', text: err['error']['message'] || 'Tienes campos vacios' })
      this.lodgingFormUtil.addNewService((document.querySelector('.add-service') as HTMLButtonElement))
    }
    this.lodgingFormUtil.resetServices();
  }


  async deleteLodging(userId: number, lodgingId: number) {
    await this.lodgingPanelUtils.deactivateLodging(userId, lodgingId);
    await this.ngOnChanges();
    this.lodgingFormUtil.resetForm((document.querySelector('#admin-lodging-btn') as HTMLButtonElement), this.lodgingForm)
  }

  editLodging(lodging: LodgingResponse) {
    document.querySelectorAll('#admin_lodging_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = true)

    this.editStatus = true;
    this.lodgingFormUtil.addServicesToLodgingForm((document.querySelector('.add-service') as HTMLButtonElement), lodging.services)
    this.lodgingFormUtil.disableLodgingFormItems(this.lodgingForm)
    this.lodgingForm = this.lodgingFormUtil.setEditableFormGroup(lodging)

    const clearBtn = this.lodgingFormUtil.setEditStatusForButtons((document.querySelector('#admin-lodging-btn') as HTMLButtonElement), this.lodgingForm)
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.resetForm(clearBtn);
      (document.querySelector('#admin-lodging-btn') as HTMLButtonElement).innerText = 'Guardar';
      (document.querySelector('#admin_lodging_id_btn') as HTMLButtonElement).disabled = false;
      document.querySelectorAll('#admin_lodging_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = false)
    });
  }

  resetForm(button: HTMLButtonElement): void {
    const containerParent = (button.parentNode as HTMLDivElement);
    try {
      this.lodgingFormUtil.enableLodgingFormItemsAndReset(this.lodgingForm)
      this.lodgingForm = this.lodgingFormUtil.setInitialFormGroup();
      containerParent.children[1].remove()
      this.lodgingFormUtil.resetServices();
    } catch (error) {
    }
  }

}
