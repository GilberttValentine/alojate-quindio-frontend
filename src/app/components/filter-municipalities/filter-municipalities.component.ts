import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-municipalities',
  templateUrl: './filter-municipalities.component.html',
  styleUrls: ['./filter-municipalities.component.css']
})
export class FilterMunicipalitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.dragScroll();
  }

  dragScroll() {
    const ele = document.getElementById('municipalities');
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
