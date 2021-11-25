import { Component, Input, OnInit } from '@angular/core';

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
