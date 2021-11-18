import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-name-info',
  templateUrl: './lodging-name-info.component.html',
  styleUrls: ['./lodging-name-info.component.css']
})
export class LodgingNameInfoComponent implements OnInit {

  @Input() nav!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
