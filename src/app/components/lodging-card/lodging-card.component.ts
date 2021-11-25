import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lodging-card',
  templateUrl: './lodging-card.component.html',
  styleUrls: ['./lodging-card.component.css']
})
export class LodgingCardComponent implements OnInit {
  @Input() host = false;
  @Input() lodging = {} as any;
  @Input() actualRoute = "";
  url_server_pictures = environment.CLOUDINARY_LODGING_URL;
  url_server_owner_picture = environment.CLOUDINARY_PROFILE_URL;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  showLodging(id: number) {
    this.route.navigate([this.actualRoute, id])
  }

  showReservations(id: number) {
    this.route.navigate([`${this.actualRoute}/${id}/reservations`])
  }
}
