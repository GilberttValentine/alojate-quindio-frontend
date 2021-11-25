import { Component, Input, OnInit } from '@angular/core';
import { ReservationLodgingResponse } from 'src/app/models/response/ReservationResponse/lodgingResponse';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';

@Component({
  selector: 'app-view-reservation-card',
  templateUrl: './view-reservation-card.component.html',
  styleUrls: ['./view-reservation-card.component.css']
})
export class ViewReservationCardComponent implements OnInit {

  @Input() lodging: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
