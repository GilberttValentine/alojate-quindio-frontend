import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-host-information',
  templateUrl: './host-information.component.html',
  styleUrls: ['./host-information.component.css']
})
export class HostInformationComponent implements OnInit {

  @Input('hostForm') hostForm!: any
  language: Array<string> = []
  constructor() { }

  ngOnInit(): void {
    this.dragScroll();
  }

  selectLanguage(evt: any) {
    this.language.push(evt.target.value)
    this.hostForm.patchValue({
      languages: this.language
    })
    const ele = document.getElementById('languages') as HTMLInputElement;
    ele.value = "";
  }

  dragScroll() {
    const ele = document.getElementById('languagesList');
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
