import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-location',
  templateUrl: './lodging-location.component.html',
  styleUrls: ['./lodging-location.component.css']
})
export class LodgingLocationComponent implements OnInit, OnChanges {

  @Input() location: any;
  address = "";
  municipality = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.location) {
      this.address = this.location.address;
      this.municipality = this.location.municipality;
    }
  }

}
