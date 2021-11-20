import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
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
      };

      const appOwnerLodgingInfo = {
        name: lodging.user.name,
        picture: lodging.user.name,
        persons_amount: lodging.persons_amount,
        room_quantity: lodging.room_quantity,
        bed_quantity: lodging.bed_quantity,
        bathroom_quantity: lodging.bathroom_quantity
      };

      const appAboutLodging = {
        about: lodging.description
      };

      const appServicesLodging = {
        services: lodging.services.map(it => { 
          const name = it.name.charAt(0).toUpperCase() + it.name.slice(1);
          return { name };
        })
      };

      const appLodgingAccessibility = {
        accesibility: lodging.accesibility
      };

      const appLodgingLocation = {
        address: lodging.direction,
        municipality: lodging.municipality.name
      };

      const lodgingMiniumInformation = {
        type: lodging.type.name,
        image: "",
        name: lodging.name,
        total_reviews: lodging.comments.count,
        total_rate: lodging.comments.qualification
      };

      const appFloatingPerformReservation = {
        night_value: lodging.night_value,
        total_reviews: lodging.comments.count,
        total_rate: lodging.comments.qualification,
        email: lodging.user.email,
        lodging: {
          type: lodging.type.name,
          image: lodging.url_pictures,
          name: lodging.name,
          total_reviews: lodging.comments.count,
          total_rate: lodging.comments.qualification
        }
      };

      const appLodgingComments = {
        lodging_id: this.lodgingId,
        qualification: lodging.comments.qualification,
        count: lodging.comments.count
      };

      const appLodgingOwner = {
        name: lodging.user.name,
        photo: lodging.user.photo,
        languages: lodging.user.languages,
        created_at: lodging.user.created_at,
      };

      this.componentInfo = {
        appLodgingNameInfo,
        appOwnerLodgingInfo,
        appAboutLodging,
        appServicesLodging,
        appLodgingAccessibility,
        appLodgingLocation,
        appFloatingPerformReservation,
        appLodgingComments,
        appLodgingOwner
      };

      console.log(lodging);
    }
  }

  async getLodging() {
    return await this.lodgingService.getLodging(this.lodgingId).toPromise();
  }
}
