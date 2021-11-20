import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {
  lodgingId!: number;

  componentInfo: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private lodgingService: LodgingServiceService) {
    this.lodgingId = Number(this.route.snapshot.paramMap.get('id'));
  }

  async ngOnInit(): Promise<void> {
    const lodging = await this.getLodging();

    if (lodging) {
      const appLodgingNameInfo = {
        name: lodging.name,
        comments: lodging.comments,
        municipality: lodging.municipality,
        type: lodging.type
      }

      const appOwnerLodgingInfo = {
        name: lodging.user.name,
        picture: lodging.user.name,
        persons_amount: lodging.persons_amount,
        room_quantity: lodging.room_quantity,
        bed_quantity: lodging.bed_quantity,
        bathroom_quantity: lodging.bathroom_quantity
      }

      this.componentInfo = {
        appLodgingNameInfo,
        appOwnerLodgingInfo
      }

      console.log(lodging);
    }
  }

  async getLodging() {
    return await this.lodgingService.getLodging(this.lodgingId).toPromise();
  }
}
