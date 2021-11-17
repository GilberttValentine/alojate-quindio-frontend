import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-accessibility',
  templateUrl: './lodging-accessibility.component.html',
  styleUrls: ['./lodging-accessibility.component.css']
})
export class LodgingAccessibilityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
