import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-host-lodging',
  templateUrl: './host-lodging.component.html',
  styleUrls: ['./host-lodging.component.css']
})
export class HostLodgingComponent implements OnInit {

  context: string = "panel-host";
  componentInfo: any = {};
  lodgingId: number = 0;

  constructor(private route: ActivatedRoute, private lodgingService: LodgingServiceService) {
    this.lodgingId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.lodgingService.getLodging(this.lodgingId).subscribe((response: LodgingResponse) => {
      const {
        id,
        name,
        comments,
        municipality,
        type,
        user,
        persons_amount,
        room_quantity,
        bed_quantity,
        bathroom_quantity,
        description,
        services,
        accesibility,
        direction,
        night_value,
        url_pictures,
        actual_state } = response;

      const appLodgingNameInfo = {
        name: name,
        comments: comments,
        municipality: municipality,
        type: type,
        actual_state: actual_state,
        id: id
      };

      const appOwnerLodgingInfo = {
        name: user.name,
        picture: user.photo,
        persons_amount: persons_amount,
        room_quantity: room_quantity,
        bed_quantity: bed_quantity,
        bathroom_quantity: bathroom_quantity
      };

      const appAboutLodging = {
        about: description
      };

      const appServicesLodging = {
        services: services.map(it => {
          const name = it.name.charAt(0).toUpperCase() + it.name.slice(1);
          return { name };
        })
      };

      const appLodgingAccessibility = {
        accesibility: accesibility
      };

      const appLodgingLocation = {
        address: direction,
        municipality: municipality.name
      };

      const appFloatingLodgingInfo = {
        night_value: night_value,
        municipality: municipality.name,
        type: type.name,
        direction: direction
      };

      const appImgsLodging = {
        images: url_pictures.split(',')
      }

      const appLodgingComments = {
        name: name,
        lodging_id: this.lodgingId,
        qualification: comments.qualification,
        count: comments.count
      };

      const appLodgingOwner = {
        name: user.name,
        photo: user.photo,
        languages: user.languages,
        created_at: user.created_at,
      };

      this.componentInfo = {
        appLodgingNameInfo,
        appOwnerLodgingInfo,
        appAboutLodging,
        appServicesLodging,
        appLodgingAccessibility,
        appLodgingLocation,
        appFloatingLodgingInfo,
        appLodgingComments,
        appLodgingOwner,
        appImgsLodging
      };
    })
  }
}
