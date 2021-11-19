import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-service',
  templateUrl: './lodging-service.component.html',
  styleUrls: ['./lodging-service.component.css']
})
export class LodgingServiceComponent implements OnInit {

  @Input('serviceForm') serviceForm!: any;
  services: Array<string> = []
  constructor() { }

  ngOnInit(): void {
  }

  selectService(evt: any) {
    this.services.push(evt.target.value)
    this.serviceForm.patchValue({
      services: this.services
    })
    const ele = document.getElementById('services') as HTMLInputElement;
    ele.value = "";
  }

}
