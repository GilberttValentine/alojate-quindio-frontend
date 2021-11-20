import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-accessibility',
  templateUrl: './lodging-accessibility.component.html',
  styleUrls: ['./lodging-accessibility.component.css']
})
export class LodgingAccessibilityComponent implements OnInit, OnChanges {

  @Input() accesibility: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.accesibility) {
      const description = document.getElementById("accessibility-description");

      description!.innerHTML = this.accesibility.accesibility.replace(/\\n/g, '<br>');

      const lengthText = this.accesibility.accesibility.length;

      if(lengthText >= 450) {
        const buttonShowMore = document.getElementById("show-more-accessibility-description");

        description!.classList.add('hide-text');
        buttonShowMore!.classList.remove('d-none');
      }else {
        description!.classList.add('mb-5');
      }
    }
  }

  showMore() {
    const description = document.getElementById("accessibility-description");
    const buttonShowMore = document.getElementById("show-more-accessibility-description");
    
    if (description?.matches('.hide-text')) {
      description?.classList.remove('hide-text');

      buttonShowMore!.innerHTML = "Mostrar menos";
    } else {
      description?.classList.add('hide-text');

      buttonShowMore!.innerHTML = "Mostrar más";
    }
  }
}
