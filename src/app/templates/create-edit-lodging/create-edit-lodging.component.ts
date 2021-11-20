import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LodgingImagesComponent } from 'src/app/components/lodging/create-edit-mode/lodging-images/lodging-images.component';
import { Lodging } from 'src/app/models/lodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-lodging',
  templateUrl: './create-edit-lodging.component.html',
  styleUrls: ['./create-edit-lodging.component.css']
})
export class CreateEditLodgingComponent implements OnInit {
  img: Array<string> = ["", "", "", "", ""];
  lodgingForm!: FormGroup;

  constructor(private fb: FormBuilder, private lodgingService: LodgingServiceService, private router: Router) { }

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
        bathroom_amount: ['', [Validators.required, this.nonZero]]
      }),
      title: this.fb.group({
        name: ['', Validators.required]
      }),
      about: this.fb.group({
        description: ['', Validators.required]
      }),
      service: this.fb.group({
        services: ['', Validators.required]
      }),
      accessibility: this.fb.group({
        accesibility: ['', Validators.required]
      }),
      images: this.fb.group({
        image: ['', Validators.required]
      })
    })
  }

  submit() {
    if (this.lodgingForm.valid) {
      const user_id = Number(localStorage.getItem('user'))
      const lodging: Lodging = {
        ... this.lodgingForm.get('lodging')?.value,
        ... this.lodgingForm.get('title')?.value,
        ... this.lodgingForm.get('about')?.value,
        ... this.lodgingForm.get('service')?.value,
        ... this.lodgingForm.get('accessibility')?.value,
        ... this.lodgingForm.get('images')?.value
      }

      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere un momento...',
        icon: 'info',
        confirmButtonText: 'Ok',
      });

      Swal.showLoading();

      /**this.lodgingService.createLodging(user_id, lodging)
        .subscribe(resp => {
          Swal.close();
          
          this.router.navigate([`/hosts/lodgings`]);
        }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el Registro',
            text: err['error']['message']
          })
        });*/
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
        bathroom_amount: ''
      }),
      title: this.fb.group({
        name: ''
      }),
      about: this.fb.group({
        description: ''
      }),
      service: this.fb.group({
        services: ''
      }),
      accessibility: this.fb.group({
        accesibility: ''
      }),
      images: this.fb.group({
        image: ''
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

}
