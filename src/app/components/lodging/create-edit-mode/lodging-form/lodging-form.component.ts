import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-form',
  templateUrl: './lodging-form.component.html',
  styleUrls: ['./lodging-form.component.css']
})
export class LodgingFormComponent implements OnInit {

  @Input('lodgingForm') lodgingForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
