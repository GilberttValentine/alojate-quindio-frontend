import { Component, Input, OnInit } from '@angular/core';
import { Municipality } from 'src/app/models/municipality';
import { TypeLodging } from 'src/app/models/typeLodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import { TypeLodgingServiceService } from 'src/app/services/typeLodging/type-lodging-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lodging-form',
  templateUrl: './lodging-form.component.html',
  styleUrls: ['./lodging-form.component.css']
})
export class LodgingFormComponent implements OnInit {

  @Input('lodgingForm') lodgingForm!: any;

  municipality!: Array<Municipality>;
  lodgingType!: Array<TypeLodging>;
  constructor(private municipalityService: MunicipalityServiceService, private typeLodgingService: TypeLodgingServiceService) { }

  ngOnInit(): void {
    this.loadSelects()
  }

  loadSelects(){
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere un momento...',
      icon: 'info',
      confirmButtonText: 'Ok',
    });

    Swal.showLoading();
    this.municipalityService.getAllMunicipalities()
      .subscribe(res => {
        this.typeLodgingService.getAllTypeLodging()
          .subscribe(resp => {
            this.lodgingType = resp
          }, (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Error con el servidor',
              text: err['error']['message']
            })
          });

        Swal.close();
        this.municipality = res
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error con el servidor',
          text: err['error']['message']
        })
      });
  }

}
