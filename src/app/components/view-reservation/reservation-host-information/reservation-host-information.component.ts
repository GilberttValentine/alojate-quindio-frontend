import { Component, Input, OnInit } from '@angular/core';
import { ReservationHostResponse } from 'src/app/models/response/ReservationResponse/hostResponse';
import { ReservationLodgingResponse } from 'src/app/models/response/ReservationResponse/lodgingResponse';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';

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
