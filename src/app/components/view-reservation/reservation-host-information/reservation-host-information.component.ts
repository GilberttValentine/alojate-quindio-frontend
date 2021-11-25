import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-host-information',
  templateUrl: './reservation-host-information.component.html',
  styleUrls: ['./reservation-host-information.component.css']
})
export class ReservationHostInformationComponent implements OnInit {

  @Input() host: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
