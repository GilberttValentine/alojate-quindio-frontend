import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-lodging',
  templateUrl: './floating-lodging.component.html',
  styleUrls: ['./floating-lodging.component.css']
})
export class FloatingLodgingComponent implements OnInit {
  @Input() reservation!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
