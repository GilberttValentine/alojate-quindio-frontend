import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.css']
})
export class GuestInformationComponent implements OnInit {

  @Input('guestForm') guestForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
