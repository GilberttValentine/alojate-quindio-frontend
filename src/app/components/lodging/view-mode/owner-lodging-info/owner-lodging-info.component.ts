import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router/router.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-owner-lodging-info',
  templateUrl: './owner-lodging-info.component.html',
  styleUrls: ['./owner-lodging-info.component.css']
})
export class OwnerLodgingInfoComponent implements OnInit, OnChanges {

  @Input() nav!: string;
  @Input() ownerLodgingInfo: any = {};

  name: string = ""
  picture: string = ""
  persons_amount: number = 0
  room_quantity: number = 0
  bed_quantity: number = 0
  bathroom_quantity: number = 0

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.ownerLodgingInfo) {
      this.name = this.ownerLodgingInfo.name;
      this.picture = `${environment.CLOUDINARY_PROFILE_URL}/${this.ownerLodgingInfo.picture}`;
      //this.picture = "https://media.discordapp.net/attachments/574438784611909645/909205401084510218/182325284_1161200667626223_5999048449218695878_n.jpg?width=580&height=580";
      this.persons_amount = this.ownerLodgingInfo.persons_amount;
      this.room_quantity = this.ownerLodgingInfo.room_quantity;
      this.bed_quantity = this.ownerLodgingInfo.bed_quantity;
      this.bathroom_quantity = this.ownerLodgingInfo.bathroom_quantity;
    }
  }

}
