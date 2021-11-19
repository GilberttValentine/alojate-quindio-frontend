import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessibility-lodging-create-edit',
  templateUrl: './accessibility-lodging-create-edit.component.html',
  styleUrls: ['./accessibility-lodging-create-edit.component.css']
})
export class AccessibilityLodgingCreateEditComponent implements OnInit {

  @Input('accessibilityForm') accessibilityForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
