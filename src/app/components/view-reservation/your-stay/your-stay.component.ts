import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-stay',
  templateUrl: './your-stay.component.html',
  styleUrls: ['./your-stay.component.css']
})
export class YourStayComponent implements OnInit {

  @Input() host = false;
  title = "";

  fecha1:Date = new Date('2022-01-28'); 
  fecha2:Date = new Date('2022-02-04'); 
  constructor() { }

  ngOnInit(): void {
    this.title = this.host?"Estadía":"Tu estadía"
  }

}
