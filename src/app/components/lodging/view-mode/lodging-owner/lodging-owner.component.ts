import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-owner',
  templateUrl: './lodging-owner.component.html',
  styleUrls: ['./lodging-owner.component.css']
})
export class LodgingOwnerComponent implements OnInit {

  @Input() nav!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
