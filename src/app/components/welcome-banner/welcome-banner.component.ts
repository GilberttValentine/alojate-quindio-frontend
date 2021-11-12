import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {

  @Input() context!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
