import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodging-comments',
  templateUrl: './lodging-comments.component.html',
  styleUrls: ['./lodging-comments.component.css']
})
export class LodgingCommentsComponent implements OnInit {

  @Input() nav!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
