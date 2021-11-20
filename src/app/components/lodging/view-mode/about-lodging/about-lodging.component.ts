import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-lodging',
  templateUrl: './about-lodging.component.html',
  styleUrls: ['./about-lodging.component.css']
})
export class AboutLodgingComponent implements OnInit, OnChanges {

  @Input() aboutLodging: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.aboutLodging) {
      const description = document.getElementById("description");

      description!.innerHTML = this.aboutLodging.about.replace(/\\n/g, '<br>');

      const lengthText = this.aboutLodging.about.length;

      if(lengthText >= 450) {
        const buttonShowMore = document.getElementById("show-more-description");

        description!.classList.add('hide-text');
        buttonShowMore!.classList.remove('d-none');
      }else {
        description!.classList.add('mb-5');
      }
    }
  }

  showMore() {
    const description = document.getElementById("description");
    const buttonShowMore = document.getElementById("show-more-description");
    
    if (description?.matches('.hide-text')) {
      description?.classList.remove('hide-text');

      buttonShowMore!.innerHTML = "Mostrar menos";
    } else {
      description?.classList.add('hide-text');

      buttonShowMore!.innerHTML = "Mostrar más";
    }
  }
}
