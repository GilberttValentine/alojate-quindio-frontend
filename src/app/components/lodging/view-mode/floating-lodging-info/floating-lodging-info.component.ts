import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-lodging-info',
  templateUrl: './floating-lodging-info.component.html',
  styleUrls: ['./floating-lodging-info.component.css']
})
export class FloatingLodgingInfoComponent implements OnInit {

  @Input() lodging = {} as any;

  constructor() { }

  ngOnInit(): void {
  }

}
