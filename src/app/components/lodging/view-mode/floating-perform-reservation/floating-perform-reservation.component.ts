import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-floating-perform-reservation',
  templateUrl: './floating-perform-reservation.component.html',
  styleUrls: ['./floating-perform-reservation.component.css']
})
export class FloatingPerformReservationComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  bookLodging(form: NgForm) {
    const reservation = {
      start_date: '26-11-2021',
      end_date: '25-12-2021',
      guests: 5,
      total_value: 5
    }
    const navigationExtras: NavigationExtras = {
      state: {
        reservation
      }
    }
    const lodgingId = this.route.snapshot.paramMap.get('id');

    this.router.navigate([`/lodgings/${lodgingId}/reservation`], navigationExtras);
  }
}
