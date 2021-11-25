import { Component, Input, OnInit } from '@angular/core';
import { ReservationGuestResponse } from 'src/app/models/response/ReservationResponse/guestRespone';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';

@Component({
  selector: 'app-reservation-guest-information',
  templateUrl: './reservation-guest-information.component.html',
  styleUrls: ['./reservation-guest-information.component.css']
})
export class ReservationGuestInformationComponent implements OnInit {

  @Input() guest: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
