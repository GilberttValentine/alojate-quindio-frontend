import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiceModelServiceService } from 'src/app/services/service/service-model-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lodging-service',
  templateUrl: './lodging-service.component.html',
  styleUrls: ['./lodging-service.component.css']
})
export class LodgingServiceComponent implements OnInit {

  @Input('serviceForm') serviceForm!: any;
  services: Array<Service> = [];
  selectedServices: Array<string> = []
  constructor(private serviceService: ServiceModelServiceService) { }

  ngOnInit(): void {
    this.loadSelect()
  }

  loadSelect(){
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere un momento...',
      icon: 'info',
      confirmButtonText: 'Ok',
    });

    Swal.showLoading();
    
    this.serviceService.findAllServices()
      .subscribe(res => {
        this.services = res
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error en el Registro',
          text: err['error']['message']
        })
      });
  }

  selectService(evt: any) {
    const serviceTemp = evt.target.value;
  
    const serviceFind = this.services.find(s=>{
      return s.name === serviceTemp
    })

    if(serviceFind && !this.serviceForm.get('services').value.includes(serviceFind.id)) {
      this.selectedServices.push(serviceTemp)
      this.serviceForm.get('services').value.push(serviceFind.id)
    }

    this.serviceForm.controls['services'].updateValueAndValidity();
    const ele = document.getElementById('services') as HTMLInputElement;
    ele.value = "";
  }

}
