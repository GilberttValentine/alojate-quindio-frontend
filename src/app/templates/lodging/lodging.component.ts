import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lodging } from 'src/app/models/lodging';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {

  lodgingId!: number;
  lodging!: Lodging;

  constructor(private router: Router, private route: ActivatedRoute, private lodgingService: LodgingServiceService) {
    this.lodgingId = Number(this.route.snapshot.paramMap.get('id'));
  }

  async ngOnInit(): Promise<void> {
    this.lodging = await this.getLodging();
  }

  async getLodging() {
    return await this.lodgingService.getLodging(this.lodgingId).toPromise();
  }
}
