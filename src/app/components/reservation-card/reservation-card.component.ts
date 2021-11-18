import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() host = false;
  reservation_user = "";
  constructor() { }

  ngOnInit(): void {
    this.reservation_user = this.host?"Huésped":"Anfitrión";
  }

}
