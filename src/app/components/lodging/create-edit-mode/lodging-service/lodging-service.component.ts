import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiceModelServiceService } from 'src/app/services/service/service-model-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lodging-service',
  templateUrl: './lodging-service.component.html',
  styleUrls: ['./lodging-service.component.css']
})
export class LodgingServiceComponent implements OnInit {
  @Input('serviceForm') serviceForm!: any;
  @Input() services: Array<Service> = [];
  @Input() selectedServices: Array<string> = [];

  constructor(private serviceService: ServiceModelServiceService, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.loadSelect()
  }

  loadSelect() {
    this.sweetAlertService.waitAlert();

    this.serviceService.findAllServices()
      .subscribe(res => {
        this.services = res

        this.sweetAlertService.closeAlert();
      }, (err) => {
        this.sweetAlertService.errorAlert('Error en el servidor', err['error']['message']);
      });
  }

  selectService(evt: any) {
    const serviceTemp = evt.target.value;

    const serviceFind = this.services.find(s => {
      return s.name === serviceTemp
    })

    if (serviceFind && !this.serviceForm.get('services').value.includes(serviceFind.id)) {
      this.selectedServices.push(serviceTemp)
      this.serviceForm.get('services').value.push(serviceFind.id)
    }

    this.serviceForm.controls['services'].updateValueAndValidity();
    const ele = document.getElementById('services') as HTMLInputElement;
    ele.value = "";
  }

  deleteService(service: string) {
    this.selectedServices = this.selectedServices.filter(s => {
      return s !== service
    })

    const serviceFind = this.services.find(s => {
      return s.name === service
    })

    this.serviceForm.get('services').value = this.serviceForm.get('services').value.filter((s: any) => {
      return serviceFind!.id !== s
    })

    this.serviceForm.controls['services'].updateValueAndValidity();
  }

}
