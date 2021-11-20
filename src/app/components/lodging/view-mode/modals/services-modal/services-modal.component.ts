import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.css']
})
export class ServicesModalComponent implements OnInit, OnChanges {
  @Input() services: any;
  servicesNames = new Array();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.services) {
      this.servicesNames = this.services.services;
    }
  }

}
