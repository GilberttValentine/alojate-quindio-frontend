import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LodgingImagesComponent } from 'src/app/components/lodging/create-edit-mode/lodging-images/lodging-images.component';
import { CreateLodgingResponse } from 'src/app/models/response/createLodging';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { ServiceResponse } from 'src/app/models/response/service';
import { Service } from 'src/app/models/service';
import { CloudinaryServiceService } from 'src/app/services/cloudinary/cloudinary-service.service';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-lodging',
  templateUrl: './create-edit-lodging.component.html',
  styleUrls: ['./create-edit-lodging.component.css']
})
export class CreateEditLodgingComponent implements OnInit {
  @ViewChild(LodgingImagesComponent) lodgingImagesComponent!: LodgingImagesComponent;
  edit: Boolean = false;
  img: Array<string> = ["", "", "", "", ""];
  files: Array<File> = Array(5);
  lodgingForm!: FormGroup;
  services: Array<Service> = [];
  selectedServices: Array<string> = []

  constructor(private fb: FormBuilder, private lodgingService: LodgingServiceService, private route: ActivatedRoute, private cloudinaryService: CloudinaryServiceService, private sweetAlertService: SweetAlertService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.createForm();
    this.checkMode();
  }

  /**
   * GENERAL METHODS
   */

   createForm() {
    this.lodgingForm = this.fb.group({
      lodging: this.fb.group({
        night_value: ['', [Validators.required, this.nonZero]],
        municipality_id: ['', Validators.required],
        type_id: ['', Validators.required],
        direction: ['', Validators.required],
        persons_amount: ['', [Validators.required, this.nonZero]],
        room_quantity: ['', [Validators.required, this.nonZero]],
        bed_quantity: ['', [Validators.required, this.nonZero]],
        bathroom_quantity: ['', [Validators.required, this.nonZero]]
      }),
      title: this.fb.group({
        name: ['', Validators.required]
      }),
      about: this.fb.group({
        description: ['', Validators.required]
      }),
      service: this.fb.group({
        services: [[], [Validators.required, this.minServices]]
      }),
      accessibility: this.fb.group({
        accesibility: ['', Validators.required]
      }),
      images: this.fb.group({
        url_pictures: ['', Validators.required]
      })
    })
  }

   async submit() {
    const user_id = Number(localStorage.getItem('user'))

    if (this.lodgingForm.valid) {
      this.sweetAlertService.waitAlert();

      Swal.showLoading();

      var servicesTemp = this.buildServices();

      await this.buildImgForm();

      const lodging: CreateLodgingResponse = {
        lodging: {
          ... this.lodgingForm.get('lodging')?.value,
          ... this.lodgingForm.get('title')?.value,
          ... this.lodgingForm.get('about')?.value,
          ... this.lodgingForm.get('accessibility')?.value,
          ... this.lodgingForm.get('images')?.value
        },
        services: servicesTemp
      }

      if (this.edit) {
        await this.editLodging(user_id, lodging);
      } else {
        await this.createLodging(user_id, lodging);
      }
    }
  }

  async buildImgForm() {
    var aImg: Array<string> = this.img.filter(e => !e.includes('.'))

    await Promise.all(this.files.map(async (item, index) => {
      const cloudinaryTemp: FormData = new FormData();

      cloudinaryTemp.append('file', item);
      cloudinaryTemp.append('upload_preset', environment.CLOUDINARY_UPLOAD_PRESET)

      const cloudImg = await this.uploadImage(cloudinaryTemp);
      aImg.push(Object(cloudImg)['public_id']);
    }));

    this.lodgingForm.get('images')!.setValue({
      url_pictures: `${aImg[0]},${aImg[1]},${aImg[2]},${aImg[3]},${aImg[4]}`
    })
  }

  buildServices() {
    var servicesTemp: Array<ServiceResponse> = [];
    this.lodgingForm.get('service')?.value['services'].map(function (item: number) {
      servicesTemp.push({
        service_id: item
      })
    })

    return servicesTemp;
  }

  checkMode() {
    this.activatedRoute.data
      .subscribe(async (data) => {
        this.edit = data.edit
        if (this.edit) {
          this.sweetAlertService.waitAlert()
          const lodging: LodgingResponse = await this.getLodging();
          this.sweetAlertService.closeAlert()
          this.loadLodgingInfo(lodging);
        }
      })
  }

  async uploadImage(cloudinaryTemp: FormData): Promise<Object> {
    return await (this.cloudinaryService.uploadImage(cloudinaryTemp).toPromise())
  }

  limpiar() {
    this.img = ["", "", "", "", ""];
    this.createForm();
    this.router.navigate([`/host/lodgings`]);
  }

  nonZero(control: AbstractControl): { [key: string]: any } | null {
    if (Number(control.value) <= 0) {
      return { nonZero: true };
    } else {
      return null;
    }
  }

  minServices(control: AbstractControl): { [key: string]: any } | null {
    if (control.value.length < 1) {
      return { "minService": true }
    } else {
      return null;
    }
  }

  /**
   * CREATE METHODS
   */


  async createLodging(user_id: number, lodging: CreateLodgingResponse) {
    this.lodgingService.createLodging(user_id, lodging)
      .subscribe(resp => {
        this.sweetAlertService.successAlert('Hospedaje creado con éxito', 'Felicitaciones tu hospedaje ha sido registrado exitosamente')
        this.router.navigate([`/host/lodgings`]);
      }, err => {
        this.sweetAlertService.errorAlert('Error creando hospedaje', err['error']['message']);
      });
  }


  /**
   * EDIT METHODS
   */

  async editLodging(user_id: number, lodging: CreateLodgingResponse) {
    const lodging_id = Number(this.route.snapshot.paramMap.get('id'));

    this.lodgingService.updateLodging(user_id, lodging_id, lodging)
      .subscribe(resp => {
        this.sweetAlertService.successAlert('Hospedaje editado con éxito', 'Felicitaciones tu hospedaje ha sido Actualizado exitosamente')
        this.router.navigate([`/host/lodgings`]);
      }, err => {
        this.sweetAlertService.errorAlert('Error editando hospedaje', err['error']['message']);
      });
  }

  getServices(lodging: LodgingResponse) {
    this.services = lodging.services;

    var serviceList: Array<number> = this.services.map(s => {
      return s['id']
    })

    this.selectedServices = this.services.map(s => {
      return Object(s)['name']
    })

    return serviceList;
  }

  async getLodging() {
    const lodgingId = Number(this.route.snapshot.paramMap.get('id'));
    return await this.lodgingService.getLodging(lodgingId).toPromise();
  }

  async loadLodgingInfo(lodging: LodgingResponse) {
    const services = this.getServices(lodging);
    this.img = lodging.url_pictures.split(',')
    this.lodgingImagesComponent.getImages(this.img);

    this.lodgingForm.get('lodging')!.setValue({
      night_value: lodging.night_value,
      municipality_id: lodging.municipality.id,
      type_id: lodging.type.id,
      direction: lodging.direction,
      persons_amount: lodging.persons_amount,
      room_quantity: lodging.room_quantity,
      bed_quantity: lodging.bed_quantity,
      bathroom_quantity: lodging.bathroom_quantity
    })

    this.lodgingForm.get('title')?.setValue({
      name: lodging.name
    })

    this.lodgingForm.get('about')?.setValue({
      description: lodging.description
    })

    this.lodgingForm.get('service')?.setValue({
      services: services
    })

    this.lodgingForm.get('accessibility')?.setValue({
      accesibility: lodging.accesibility
    })

    this.lodgingForm.get('images')?.setValue({
      url_pictures: lodging.url_pictures
    })
  }
}

