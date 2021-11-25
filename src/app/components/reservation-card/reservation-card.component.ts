import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { UserReservationResponse } from 'src/app/models/response/ReservationResponse/userReservationResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() host = false;
  @Input() reservation!: UserReservationResponse;
  reservation_user = "";
  total_value = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.reservation_user = this.host ? "Huésped" : "Anfitrión";

    const start_date = moment(this.reservation.start_date);
    const end_date = moment(this.reservation.end_date);
    const dif = end_date.diff(start_date, 'days');

    this.total_value = this.reservation.night_value * dif
  }

  viewLodging() {
    this.router.navigate([`/reservations/${this.reservation.id}`]);
  }

}
