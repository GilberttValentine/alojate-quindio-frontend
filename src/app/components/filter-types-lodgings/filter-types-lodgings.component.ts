import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LodgingFilters } from 'src/app/models/filters/lodgingFilters';
import { TypeLodging } from 'src/app/models/typeLodging';

@Component({
  selector: 'app-filter-types-lodgings',
  templateUrl: './filter-types-lodgings.component.html',
  styleUrls: ['./filter-types-lodgings.component.css']
})
export class FilterTypesLodgingsComponent implements OnInit {

  @Input() lodgingTypes = [] as TypeLodging[];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  filterLodgings(id: number): void {
    this.router.navigate([`/lodgings`], { queryParams: { typ: id } });
  }

}
