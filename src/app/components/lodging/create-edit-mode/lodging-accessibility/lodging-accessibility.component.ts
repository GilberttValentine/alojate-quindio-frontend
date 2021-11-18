import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-accessibility',
  templateUrl: './lodging-accessibility.component.html',
  styleUrls: ['./lodging-accessibility.component.css']
})
export class LodgingAccessibilityCreateEditComponent implements OnInit {

  @Input('accessibilityForm') accessibilityForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
