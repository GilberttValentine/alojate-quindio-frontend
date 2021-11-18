import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-images',
  templateUrl: './lodging-images.component.html',
  styleUrls: ['./lodging-images.component.css']
})
export class LodgingImagesComponent implements OnInit {

  img: Array<string> = ["", "", "", "", ""];
  @Input('imagesForm') imagesForm!: any;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(evt: any, pos: number) {
    var file = evt.target.files[0];
    if(file) {
      this.img[pos] = file.name;
      this.handleFiles(file, `img${pos}`);
    }else {
      this.img[pos] = "";
      this.handleFiles(file, `img${pos}`);
    }
  }

  handleFiles(file: any, element: string) {
    var img = document.getElementById(element) as HTMLImageElement;

    var reader = new FileReader();
    reader.onload = (function (aImg) { 
      return function (e: any) { 
        aImg.src = e.target.result; 
      }; 
    })(img);
    reader.readAsDataURL(file);
  }

}
