import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LodgingImagesComponent } from 'src/app/components/lodging/create-edit-mode/lodging-images/lodging-images.component';
import { Lodging } from 'src/app/models/lodging';
import { CreateLodgingResponse } from 'src/app/models/response/createLodging';
import { LodgingResponse } from 'src/app/models/response/lodging';
import { ServiceResponse } from 'src/app/models/response/service';
import { CloudinaryServiceService } from 'src/app/services/cloudinary/cloudinary-service.service';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-lodging',
  templateUrl: './create-edit-lodging.component.html',
  styleUrls: ['./create-edit-lodging.component.css']
})
export class CreateEditLodgingComponent implements OnInit {
  img: Array<string> = ["", "", "", "", ""];
  files: Array<File> = Array(5);
  lodgingForm!: FormGroup;

  constructor(private fb: FormBuilder, private lodgingService: LodgingServiceService, private cloudinaryService: CloudinaryServiceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

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

  submit() {
    const user_id = Number(localStorage.getItem('user'))

    if (this.lodgingForm.valid) {
      var servicesTemp: Array<ServiceResponse> = [];
      this.lodgingForm.get('service')?.value['services'].map(function (item: number) {
        servicesTemp.push({
          service_id: item
        })
      })

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

      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere un momento...',
        icon: 'info',
        confirmButtonText: 'Ok',
      });

      Swal.showLoading();

      this.lodgingService.createLodging(user_id, lodging)
        .subscribe((resp) => {
          this.uploadImage()
        }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el Registro',
            text: err['error']['message']
          })
        });
    }
  }

  limpiar() {
    this.img = ["", "", "", "", ""]
    this.lodgingForm = this.fb.group({
      lodging: this.fb.group({
        night_value: '',
        municipality_id: '',
        type_id: '',
        direction: '',
        persons_amount: '',
        room_quantity: '',
        bed_quantity: '',
        bathroom_quantity: ''
      }),
      title: this.fb.group({
        name: ''
      }),
      about: this.fb.group({
        description: ''
      }),
      service: this.fb.group({
        services: []
      }),
      accessibility: this.fb.group({
        accesibility: ''
      }),
      images: this.fb.group({
        url_pictures: ''
      })
    })
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

  uploadImage() {
    this.files.map(async (item) => {
      const cloudinaryTemp: FormData = new FormData();
      cloudinaryTemp.append('file', item);
      cloudinaryTemp.append('upload_preset', environment.CLOUDINARY_UPLOAD_PRESET)
      console.log(cloudinaryTemp)
      this.cloudinaryService.uploadImage(cloudinaryTemp)
        .subscribe((resp) => {
          Swal.close();
          console.log(resp)
          this.router.navigate([`/hosts/lodgings`]);
        });
    });
  }
}

