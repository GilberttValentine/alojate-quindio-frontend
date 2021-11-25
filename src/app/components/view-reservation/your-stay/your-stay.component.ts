import { Component, Input, OnInit } from '@angular/core';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';

@Component({
  selector: 'app-your-stay',
  templateUrl: './your-stay.component.html',
  styleUrls: ['./your-stay.component.css']
})
export class YourStayComponent implements OnInit {

  @Input() host = false;
  @Input() yourStay: any = {};
  title = "";

  fecha1:Date = new Date('2022-01-28'); 
  fecha2:Date = new Date('2022-02-04'); 
  constructor() { }

  ngOnInit(): void {
    this.title = this.host?"Estadía":"Tu estadía"
  }

}
