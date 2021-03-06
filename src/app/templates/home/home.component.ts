import { Component, OnInit } from '@angular/core';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { MunicipalityResponse } from 'src/app/models/response/municipalityResponse';
import { TypeLodging } from 'src/app/models/typeLodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
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

  constructor(private securityService: SecurityServiceService, private municipalityService: MunicipalityServiceService, private lodgingTypesService: TypeLodgingServiceService, private lodgingService: LodgingServiceService) { }

  async ngOnInit(): Promise<void> {
    this.buildContext();

    const token = localStorage.getItem('token');

    const isAuth = this.securityService.isAuth(token);

    if (isAuth) {
      this.welcomeBannerContext.action.text = "Ver alojamientos";
      this.welcomeBannerContext.action.route = "/lodgings";

      const payload = this.securityService.validateToken({ token: token });

      payload.subscribe(response => {
        const { role, name, url_picture }: any = response;

        if (role === 2 || role === 4) {
          this.hostBannerContext.title = "Gestiona tus alojamientos"
          this.hostBannerContext.action.text = "Ver mis alojamientos";
          this.hostBannerContext.action.route = "/host/home";
        } else {
          this.hostBannerContext.action.route = "/account";
        }
      });
    }

    const municipalities = await this.getMunicipalities();
    this.municipalities = municipalities;

    const lodgingTypes = await this.getLodgingTypes();
    this.lodgingTypes = lodgingTypes;

    this.lodgingTypesReduced = this.lodgingTypes.sort(() => Math.random() - 0.5).splice(0, 4);

    const bestLodgings: any = await this.getBestLodgings();
    this.bestLodgings = bestLodgings.results;
  }

  buildContext() {
    this.welcomeBannerContext = {
      title: "Disfruta las vacaciones de tus sue??os en los mejores lugares del Quind??o",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "welcome",
      action: {
        text: "Iniciar sesi??n",
        route: "/sign-in"
      }
    }

    this.hostBannerContext = {
      title: "An??mate a ser anfitri??n",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "host",
      action: {
        text: "Hazte anfitri??n",
        route: "/sign-in"
      }
    }
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
