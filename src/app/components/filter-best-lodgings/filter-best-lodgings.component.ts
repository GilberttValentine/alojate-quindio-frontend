import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filter-best-lodgings',
  templateUrl: './filter-best-lodgings.component.html',
  styleUrls: ['./filter-best-lodgings.component.css']
})
export class FilterBestLodgingsComponent implements OnInit, OnChanges {
  @Input() lodgings = [] as LodgingResponse[];

  bestLodgings: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dragScroll();
  }

  ngOnChanges(): void {
    const bestLodgings = this.lodgings.map((it: LodgingResponse) => {
      const id = it.id;

      const qualification = Math.floor(it.comments.qualification * 10) / 10;

      const name = it.name;

      const commaOccurrence = it.url_pictures.indexOf(",");
      const image = `${environment.CLOUDINARY_LODGING_URL}/${it.url_pictures.slice(0, commaOccurrence)}`;

      return {
        id,
        qualification,
        name,
        image
      };
    });

    this.bestLodgings = bestLodgings;
  }

  showLodging(id: number) {
    this.router.navigate([`/lodgings/${id}`]);
  }

  dragScroll() {
    const ele = document.getElementById('best-lodgings');
    ele!.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e: any) {
      ele!.style.cursor = 'grabbing';
      ele!.style.userSelect = 'none';

      pos = {
        left: ele!.scrollLeft,
        top: ele!.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: any) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele!.scrollTop = pos.top - dy;
      ele!.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele!.style.cursor = 'grab';
      ele!.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele!.addEventListener('mousedown', mouseDownHandler);
  }



}
