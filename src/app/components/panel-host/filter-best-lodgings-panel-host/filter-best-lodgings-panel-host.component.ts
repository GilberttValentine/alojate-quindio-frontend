import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';

@Component({
  selector: 'app-filter-best-lodgings-panel-host',
  templateUrl: './filter-best-lodgings-panel-host.component.html',
  styleUrls: ['./filter-best-lodgings-panel-host.component.css']
})
export class FilterBestLodgingsPanelHostComponent implements OnInit {
  @Input()lodgings = [] as any[];

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.dragScroll();
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

  showLodging(id: number) {
    this.router.navigate([`host/lodgings/${id}`]);
  }
}
