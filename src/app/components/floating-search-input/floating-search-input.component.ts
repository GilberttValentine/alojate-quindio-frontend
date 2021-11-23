import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MunicipalityResponse } from 'src/app/models/response/municipalityResponse';
import { TypeLodging } from 'src/app/models/typeLodging';

@Component({
  selector: 'app-floating-search-input',
  templateUrl: './floating-search-input.component.html',
  styleUrls: ['./floating-search-input.component.css']
})
export class FloatingSearchInputComponent implements OnInit, OnChanges {
  @Input() filtersInputs: any;

  municipalities = [] as MunicipalityResponse[];
  lodgingTypes = [] as TypeLodging[];

  municipality = 0;
  typeId = 0;
  peopleAmount = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const { municipalities, lodgingTypes } = this.filtersInputs;

    this.municipalities = municipalities;
    this.lodgingTypes = lodgingTypes.map((it: TypeLodging) => ({ id: it.id, name: it.name.charAt(0).toUpperCase() + it.name.slice(1) }));
  }

  filterLodgings() {
    const municipality = this.municipality;
    const typeId = this.typeId;
    const peopleAmount = this.peopleAmount;
    
    let filters = {}

    if(municipality > 0) {
      filters = {
        ...filters,
        municipality
      };
    }

    if(typeId > 0) {
      filters = {
        ...filters,
        typeId
      };
    }

    if(typeId > 0) {
      filters = {
        ...filters,
        peopleAmount
      };
    }

    this.router.navigate([`/lodgings`], { queryParams: { ...filters } });
  }
}
