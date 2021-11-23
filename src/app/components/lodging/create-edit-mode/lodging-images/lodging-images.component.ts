import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-images',
  templateUrl: './lodging-images.component.html',
  styleUrls: ['./lodging-images.component.css']
})
export class LodgingImagesComponent implements OnInit {

  @Input() img!: Array<string>;
  @Input('imagesForm') imagesForm!: any;
  @Input() files!: Array<File>;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(evt: any, pos: number) {
    var file = evt.target.files[0];
    if (file) {
      this.files[pos] = file;
      this.img[pos] = file.name;
      this.handleFiles(file, `img${pos}`);
    } else {
      this.img[pos] = "";
      var img = document.getElementById(`img${pos}`) as HTMLImageElement;
      img.src = "";
    }
    this.imagesForm.setValue({
      url_pictures: ' '
    })
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
