import { Component, Input, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-owner-lodging-info',
  templateUrl: './owner-lodging-info.component.html',
  styleUrls: ['./owner-lodging-info.component.css']
})
export class OwnerLodgingInfoComponent implements OnInit {

  @Input() nav!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
