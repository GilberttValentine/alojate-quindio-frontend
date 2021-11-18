import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-lodging',
  templateUrl: './about-lodging.component.html',
  styleUrls: ['./about-lodging.component.css']
})
export class AboutLodgingCreateEditComponent implements OnInit {

  @Input('aboutForm') aboutForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
