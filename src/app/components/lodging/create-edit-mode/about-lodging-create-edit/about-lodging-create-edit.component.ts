import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-lodging-create-edit',
  templateUrl: './about-lodging-create-edit.component.html',
  styleUrls: ['./about-lodging-create-edit.component.css']
})
export class AboutLodgingCreateEditComponent implements OnInit {

  @Input('aboutForm') aboutForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
