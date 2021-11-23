import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-imgs-lodging',
  templateUrl: './imgs-lodging.component.html',
  styleUrls: ['./imgs-lodging.component.css']
})
export class ImgsLodgingComponent implements OnInit {

  @Input() imagesLodging!:any;
  url: string = '';
  images:Array<string> = new Array(5).fill('');;
  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.imagesLodging){
      this.images = this.imagesLodging['images'];
      this.url = environment.CLOUDINARY_LODGING_URL;
    }
  }

}
