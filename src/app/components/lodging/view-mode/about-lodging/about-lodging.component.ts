import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-lodging',
  templateUrl: './about-lodging.component.html',
  styleUrls: ['./about-lodging.component.css']
})
export class AboutLodgingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
