import { Component, Input, OnInit } from '@angular/core';
import { Lodging } from 'src/app/models/lodging';

@Component({
  selector: 'app-lodging-name-info',
  templateUrl: './lodging-name-info.component.html',
  styleUrls: ['./lodging-name-info.component.css']
})
export class LodgingNameInfoComponent implements OnInit {

  @Input() nav!: string;
  @Input() lodging!: Lodging;

  constructor() { }

  ngOnInit(): void {
  }

}
