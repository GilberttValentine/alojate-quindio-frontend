import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stay-detail',
  templateUrl: './stay-detail.component.html',
  styleUrls: ['./stay-detail.component.css']
})
export class StayDetailComponent implements OnInit {

  @Input() reservation!:any
  constructor() { }

  ngOnInit(): void {
  }

}
