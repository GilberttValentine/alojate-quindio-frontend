import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Municipality } from 'src/app/models/municipality';
import { TypeLodging } from 'src/app/models/typeLodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { MunicipalityServiceService } from 'src/app/services/municipality/municipality-service.service';
import { TypeLodgingServiceService } from 'src/app/services/typeLodging/type-lodging-service.service';

@Component({
  selector: 'app-lodging-filters',
  templateUrl: './lodging-filters.component.html',
  styleUrls: ['./lodging-filters.component.css']
})
export class LodgingFiltersComponent implements OnInit {

  @Input() types = [] as TypeLodging[];
  @Input() municipalities = [] as Municipality[];

  constructor(private municipalityService: MunicipalityServiceService, private lodgingTypeService: TypeLodgingServiceService) { }

  async ngOnInit(): Promise<void> {
    const municipalities = await this.getAllMunicipalities();
    const types = await this.getAllTypesLodging();

    this.municipalities = municipalities;
    this.types = types;
  }

  async getAllMunicipalities() {
    return await (this.municipalityService.getAllMunicipalities().toPromise());
  }

  async getAllTypesLodging() {
    return await (this.lodgingTypeService.getAllTypeLodging().toPromise());
  }

}
