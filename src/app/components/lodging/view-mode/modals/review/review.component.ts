import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showModalCommentDialog();

  }

  showModalCommentDialog() {
  }

  setValue(event: any) {
    const value = event.target.value;
    const id = event.target.id;

    const element = document.getElementById(`${id}-value`);
    element!.innerText = value == 1 || value == 2 || value == 3 || value == 4 || value == 5 ? `${value}.0` : value;

  }

  getValue(event:any) {
    const value = event.target.value;

    console.log(value);
  }
}