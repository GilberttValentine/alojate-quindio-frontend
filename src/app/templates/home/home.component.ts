import { Component, OnInit } from '@angular/core';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { MunicipalityResponse } from 'src/app/models/response/municipalityResponse';
import { TypeLodging } from 'src/app/models/typeLodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import { TypeLodgingServiceService } from 'src/app/services/typeLodging/type-lodging-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";

  welcomeBannerContext: any;
  hostBannerContext: any;

  municipalities = [] as MunicipalityResponse[];
  lodgingTypes = [] as TypeLodging[];
  bestLodgings = [] as LodgingResponse[];
  lodgingTypesReduced = [] as TypeLodging[];

  constructor(private municipalityService: MunicipalityServiceService, private lodgingTypesService: TypeLodgingServiceService, private lodgingService: LodgingServiceService) {}

  async ngOnInit(): Promise<void> {
    this.welcomeBannerContext = {
      title: "Disfruta las vacaciones de tus sueños en los mejores lugares del Quindío",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "welcome",
      action: {
        text: "Iniciar sesión",
        route: "/sign-in"
      }
    }

    this.hostBannerContext = {
      title: "Anímate a ser anfitrión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "host",
      action: {
        text: "Hazte anfitrión",
        route: "/sign-in"
      }
    }

    const municipalities = await this.getMunicipalities();
    this.municipalities = municipalities;

    const lodgingTypes = await this.getLodgingTypes();
    this.lodgingTypes = lodgingTypes;
    
    this.lodgingTypesReduced = this.lodgingTypes.sort(() => Math.random() - 0.5).splice(0, 4);


    const bestLodgings:any = await this.getBestLodgings();
    this.bestLodgings = bestLodgings.results;
  }

  async getMunicipalities() {
    return await this.municipalityService.getAllMunicipalities().toPromise();
  }

  async getLodgingTypes() {
    return await this.lodgingTypesService.getAllTypeLodging().toPromise();
  }

  async getBestLodgings() {
    return await this.lodgingService.getAllLodgings().toPromise();
  }
}
