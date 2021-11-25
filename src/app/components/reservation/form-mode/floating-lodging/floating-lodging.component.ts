import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-floating-lodging',
  templateUrl: './floating-lodging.component.html',
  styleUrls: ['./floating-lodging.component.css']
})
export class FloatingLodgingComponent implements OnInit {
  @Input() reservation!: any;
  imgUrl:string = "";

  constructor() { }

  ngOnInit(): void {
    this.imgUrl = `${environment.CLOUDINARY_LODGING_URL}/${this.reservation.lodging.image.split(',')[0]}`
  }

}
