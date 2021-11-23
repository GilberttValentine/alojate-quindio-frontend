import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lodging-card',
  templateUrl: './lodging-card.component.html',
  styleUrls: ['./lodging-card.component.css']
})
export class LodgingCardComponent implements OnInit, OnChanges {

  @Input() host = false;

  @Input() lodging = {} as any;

  url_server_pictures = environment.CLOUDINARY_LODGING_URL;
  url_server_owner_picture = environment.CLOUDINARY_PROFILE_URL;
  
  constructor() { }

  ngOnInit(): void {
    //console.log(this.lodging);
  }

  ngOnChanges(): void {
    console.log(this.lodging);
  }

}
