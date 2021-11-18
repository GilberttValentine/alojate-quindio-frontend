import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';

@Component({
  selector: 'app-lodging',
  templateUrl: './lodging.component.html',
  styleUrls: ['./lodging.component.css']
})
export class LodgingComponent implements OnInit {

  lodgingId!:number;

  constructor(private route: ActivatedRoute, private lodgingService: LodgingServiceService) {
    this.lodgingId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    const lodging = this.lodgingService.getLodging(1);

    console.log(lodging);
  }

}
