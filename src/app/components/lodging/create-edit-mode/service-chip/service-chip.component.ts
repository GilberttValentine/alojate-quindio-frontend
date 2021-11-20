import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-chip',
  templateUrl: './service-chip.component.html',
  styleUrls: ['./service-chip.component.css']
})
export class ServiceChipComponent implements OnInit {

  @Input() service!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
