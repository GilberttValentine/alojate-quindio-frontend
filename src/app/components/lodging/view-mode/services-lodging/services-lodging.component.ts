import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-services-lodging',
  templateUrl: './services-lodging.component.html',
  styleUrls: ['./services-lodging.component.css']
})
export class ServicesLodgingComponent implements OnInit, OnChanges {

  @Input() services: any;
  servicesSlice = new Array();
  length = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.services) {
      this.servicesSlice = this.services.services.slice(0, 10);
      this.length = this.services.services.length;
    }
  }

}
