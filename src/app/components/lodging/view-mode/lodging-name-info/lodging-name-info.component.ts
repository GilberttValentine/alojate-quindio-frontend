import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommentResponse } from 'src/app/models/response/commentResponse';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';

@Component({
  selector: 'app-lodging-name-info',
  templateUrl: './lodging-name-info.component.html',
  styleUrls: ['./lodging-name-info.component.css']
})
export class LodgingNameInfoComponent implements OnInit, OnChanges {

  @Input() nav!: string;
  @Input() lodging = {} as LodgingResponse;

  name: string = "";
  qualification: number = 0;
  count: number = 0;
  municipality: string = "";
  type: string = "";

  limitNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.lodging) {


      this.name = this.lodging.name;
      this.qualification = Math.floor(this.lodging.comments.qualification * 10) / 10;
      this.municipality = this.lodging.municipality.name;

      const count = this.lodging.comments.count;
      this.count = count;

      this.limitNumber = count >= 1000 ? 1 : 0;

      const type = this.lodging.type.name;
      this.type = type.charAt(0).toUpperCase() + type.slice(1);
    }
  }

  scrollTo() {
    const element = document.getElementById('comments');

    element!.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
