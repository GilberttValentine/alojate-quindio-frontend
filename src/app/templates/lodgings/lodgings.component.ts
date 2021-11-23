import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipality } from 'src/app/models/municipality';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import { TypeLodgingServiceService } from 'src/app/services/typeLodging/type-lodging-service.service';

@Component({
  selector: 'app-lodgings',
  templateUrl: './lodgings.component.html',
  styleUrls: ['./lodgings.component.css']
})
export class LodgingsComponent implements OnInit, OnChanges {

  lodgings = [] as any;

  filters = {} as any;

  municipality = undefined as any;
  type = undefined as any;
  persons = undefined as any;
  rooms = undefined as any;
  beds = undefined as any;
  bathrooms = undefined as any;

  total = 0;
  actualPage = 1;
  previousPage = 1;

  totalPages = "";
  pagesAvailable: number[] = []

  constructor(private router: Router, private route: ActivatedRoute, private lodgingService: LodgingServiceService, private municipalityService: MunicipalityServiceService, private lodgingTypeService: TypeLodgingServiceService) { }

  async ngOnInit(): Promise<void> {
    const { lodgingTypeId, municipalityId, people, page, room, bed, bathroom } = this.getQueryParams();

    Promise.resolve(this.buildQueryParams(lodgingTypeId, municipalityId, people, page, room, bed, bathroom));
  }

  async ngOnChanges(): Promise<void> {
    
  }

  getQueryParams() {
    const lodgingTypeId = Number(this.route.snapshot.queryParamMap.get('typ'));
    const municipalityId = Number(this.route.snapshot.queryParamMap.get('mun'));
    const people = Number(this.route.snapshot.queryParamMap.get('peo'));
    const page = Number(this.route.snapshot.queryParamMap.get('page'));
    const room = Number(this.route.snapshot.queryParamMap.get('roo'));
    const bed = Number(this.route.snapshot.queryParamMap.get('bed'));
    const bathroom = Number(this.route.snapshot.queryParamMap.get('bat'));

    return { lodgingTypeId, municipalityId, people, page, room, bed, bathroom };
  }

  async buildQueryParams(lodgingTypeId: number | undefined, municipalityId: number | undefined, people: number | undefined, page: number | undefined, room: number | undefined, bed: number | undefined, bathroom: number | undefined) {
    if (municipalityId) {
      this.filters = {
        ...this.filters,
        municipality_id: municipalityId
      };

      const municipality = await this.getMunicipality(municipalityId);
      this.municipality = municipality;
    };

    if (lodgingTypeId) {
      this.filters = {
        ...this.filters,
        type_lodging: lodgingTypeId
      };

      const type = await this.getLodgingType(lodgingTypeId);
      this.type = type;
    }

    if (people) {
      this.filters = {
        ...this.filters,
        persons_amount: people
      };

      this.persons = people;
    }

    if (room) {
      this.filters = {
        ...this.filters,
        room_quantity: room
      };

      this.rooms = room;
    }

    if (bed) {
      this.filters = {
        ...this.filters,
        bed_quantity: bed
      };

      this.beds = bed;
    }

    if (bathroom) {
      this.filters = {
        ...this.filters,
        bathroom_quantity: bathroom
      };

      this.bathrooms = bathroom;
    }

    if (page) {
      this.actualPage = page;
    } else {
      this.actualPage = this.previousPage;
    }

    const lodgings = await this.getAllLodgings();

    let { results, total }: any = lodgings;

    this.lodgings = results.map((it: LodgingResponse) => {
      it.comments.qualification = Math.floor(it.comments.qualification * 10) / 10;
      return {
        ...it,
        pictures: it.url_pictures.split(',')
      }
    });

    this.total = total;

    if (total <= 10) {
      this.deactivateNextButton();
    }

    total = Number(((total / 10) - 0.5).toFixed(0));
    total++;

    this.pagesAvailable = Array(total).fill(1).map((x, i) => i + 1)
    this.totalPages = total <= 9 ? `0${total}` : total;

    if (this.actualPage === 1) {
      this.deactivateBackButton();
    }

    console.log(this.filters);
  }

  async getAllLodgings() {
    return await (this.lodgingService.getAllLodgings(this.filters, this.actualPage - 1).toPromise());
  }

  async getMunicipality(id: number) {
    return await (this.municipalityService.getMunicipalityById(id).toPromise());
  }

  async getLodgingType(id: number) {
    return await (this.lodgingTypeService.getLodgingTypeById(id).toPromise());
  }

  deactivateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);
    back!.disabled = true;
  }

  activateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);
    back!.disabled = false;
  }

  deactivateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);
    next!.disabled = true;
  }

  activateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);
    next!.disabled = false;
  }

  back() {
    this.actualPage--;
    this.previousPage--;

    if (this.actualPage <= 1) this.deactivateBackButton();
    if (this.actualPage < Number(this.totalPages)) this.activateNextButton()

    this.router.navigate(['/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } });
  }

  next() {
    this.actualPage++;
    this.previousPage++;

    if (this.actualPage > 1) this.activateBackButton()
    if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

    this.router.navigate(['/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } });
  }
}
