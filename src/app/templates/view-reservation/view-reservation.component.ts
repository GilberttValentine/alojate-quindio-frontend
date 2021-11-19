import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {

  host = false;
  activatedRoute:ActivatedRoute;
  constructor(activatedRoute: ActivatedRoute) { 
    this.activatedRoute = activatedRoute
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.host=data.host
    });
  }

}
