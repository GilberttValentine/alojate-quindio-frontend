import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  filtersForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private municipalityService: MunicipalityServiceService, private lodgingTypeService: TypeLodgingServiceService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.createForm()

    const municipalities = await this.getAllMunicipalities();
    const types = await this.getAllTypesLodging();
    

    this.municipalities = municipalities;
    this.types = types;

    this.loadForm()
  }

  async getAllMunicipalities() {
    return await (this.municipalityService.getAllMunicipalities().toPromise());
  }

  async getAllTypesLodging() {
    return await (this.lodgingTypeService.getAllTypeLodging().toPromise());
  }

  createForm(){
    this.filtersForm = this.fb.group({
      municipality: "",
      typeId: "",
      peopleAmount: "",
      roomQuantity: "",
      bedQuantity: "",
      bathroomQuantity: ""
    })
  }

  loadForm() {
    const lodgingTypeId = Number(this.route.snapshot.queryParamMap.get('typ'));
    const municipalityId = Number(this.route.snapshot.queryParamMap.get('mun'));
    const people = Number(this.route.snapshot.queryParamMap.get('peo'));
    const room = Number(this.route.snapshot.queryParamMap.get('roo'));
    const bed = Number(this.route.snapshot.queryParamMap.get('bed'));
    const bathroom = Number(this.route.snapshot.queryParamMap.get('bat'));

    const municipality = this.municipalities.find(item => { return municipalityId === item.id })?.name;
    const typeId = this.types.find(item => { return lodgingTypeId === item.id })?.name;

    this.filtersForm = this.fb.group({
      municipality: municipality,
      typeId: typeId,
      peopleAmount: people,
      roomQuantity: room,
      bedQuantity: bed,
      bathroomQuantity: bathroom
    })
  }

  filter() {
    const municipality = this.municipalities.find(item => { return this.filtersForm.get('municipality')?.value == item.name })?.id;
    const typeId = this.types.find(item => { return this.filtersForm.get('typeId')?.value == item.name })?.id;
    const peopleAmount = this.filtersForm.get('peopleAmount')?.value;
    const roomQuantity = this.filtersForm.get('roomQuantity')?.value;
    const bedQuantity = this.filtersForm.get('bedQuantity')?.value;
    const bathroomQuantity = this.filtersForm.get('bathroomQuantity')?.value;

    let filters = {}

    if (municipality) {
      filters = {
        ...filters,
        mun: municipality
      };
    }

    if (typeId) {
      filters = {
        ...filters,
        typ: typeId
      };
    }

    if (peopleAmount > 0) {
      filters = {
        ...filters,
        peo: peopleAmount
      };
    }

    if (roomQuantity > 0) {
      filters = {
        ...filters,
        roo: roomQuantity
      };
    }

    if (bedQuantity > 0) {
      filters = {
        ...filters,
        bed: bedQuantity
      };
    }

    if (bathroomQuantity > 0) {
      filters = {
        ...filters,
        bat: bathroomQuantity
      };
    }

    this.router.navigate([`/lodgings`], { queryParams: { ...filters } }).then(() => {
      window.location.reload()
    })
  }

}
