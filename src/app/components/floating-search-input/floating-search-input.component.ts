import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  filtersForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {
    const { municipalities, lodgingTypes } = this.filtersInputs;
    
    this.municipalities = municipalities;
    this.lodgingTypes = lodgingTypes;
  }

  createForm() {
    this.filtersForm = this.fb.group({
      municipality: '',
      typeId: '',
      peopleAmount: ''
    })
  }

  filterLodgings() {
    const municipality = this.municipalities.find(item => { return this.filtersForm.get('municipality')?.value == item.name })?.id;
    const typeId = this.lodgingTypes.find(item => { return this.filtersForm.get('typeId')?.value == item.name })?.id;
    const peopleAmount = this.filtersForm.get('peopleAmount')?.value;

    let filters = {}

    if(municipality) {
      filters = {
        ...filters,
        mun: municipality
      };
    }

    if(typeId) {
      filters = {
        ...filters,
        typ: typeId
      };
    }

    if(peopleAmount > 0) {
      filters = {
        ...filters,
        peo: peopleAmount
      };
    }

    this.router.navigate([`/lodgings`], { queryParams: { ...filters } });
  }
}
