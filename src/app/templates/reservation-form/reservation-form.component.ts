import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservation: any;
  lodgingId!: number;
  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    const reservation = navigation?.extras.state?.reservation;

    const lodgingId = Number(this.route.snapshot.paramMap.get('id'));

    if (!reservation) {
      //this.router.navigate([`/lodgings/${lodgingId}`]);
    }
    
    this.lodgingId = lodgingId;
    this.reservation = reservation;
  }

  ngOnInit(): void {
  }
  


}
