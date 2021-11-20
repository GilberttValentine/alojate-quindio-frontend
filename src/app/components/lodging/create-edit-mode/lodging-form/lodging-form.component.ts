import { Component, Input, OnInit } from '@angular/core';
import { Municipality } from 'src/app/models/municipality';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lodging-form',
  templateUrl: './lodging-form.component.html',
  styleUrls: ['./lodging-form.component.css']
})
export class LodgingFormComponent implements OnInit {

  @Input('lodgingForm') lodgingForm!: any;

  municipality!:Array<Municipality>;
  lodgingType!:Array<Object>;
  constructor(private municipalityService: MunicipalityServiceService) { }

  ngOnInit(): void {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere un momento...',
      icon: 'info',
      confirmButtonText: 'Ok',
    });

    Swal.showLoading();
    this.municipalityService.getAllMunicipalities()
      .subscribe(res => {
        Swal.close();
        
        this.municipality = res
        console.log(this.municipality)
      }, (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error en el Registro',
          text: err['error']['message']
        })
      });
  }

}
