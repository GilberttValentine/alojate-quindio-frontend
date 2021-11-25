import { Component, Input, OnInit } from '@angular/core';

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
