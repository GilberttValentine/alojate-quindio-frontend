import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-card',
  templateUrl: './lodging-card.component.html',
  styleUrls: ['./lodging-card.component.css']
})
export class LodgingCardComponent implements OnInit {

  @Input() host = false;
  constructor() { }

  ngOnInit(): void {
  }

}
