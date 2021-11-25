import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-stats',
  templateUrl: './feed-stats.component.html',
  styleUrls: ['./feed-stats.component.css']
})
export class FeedStatsComponent implements OnInit, OnChanges {
  @Input() stats = {} as any;
  
  lodgingsLimiter = 0;
  reservationsLimiter = 0;

  totalLodgings = 0;
  totalReservations = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const { totalLodgings, totalReservations } = this.stats;
    
    this.lodgingsLimiter = totalLodgings >= 1000 ? 1 : 0;
    this.totalLodgings = totalLodgings;

    this.reservationsLimiter = totalReservations >= 1000 ? 1 : 0;
    this.totalReservations = totalReservations;

    console.log(this.stats);
  }

}
