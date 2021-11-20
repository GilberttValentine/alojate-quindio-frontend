import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-floating-perform-reservation',
  templateUrl: './floating-perform-reservation.component.html',
  styleUrls: ['./floating-perform-reservation.component.css']
})
export class FloatingPerformReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm()
  }

  bookLodging() {
    const startDate = moment(this.reservationForm.get('startDate')?.value)
    const endDate = moment(this.reservationForm.get('endDate')?.value)
    const dif = endDate.diff(startDate, 'days');
    
    const reservation = {
      startDate: this.reservationForm.get('startDate')?.value,
      endDate: this.reservationForm.get('endDate')?.value,
      peopleAmount: this.reservationForm.get('peopleAmount')?.value,
      total_value: dif
    }
    const navigationExtras: NavigationExtras = {
      state: {
        reservation
      }
    }

    const lodgingId = this.route.snapshot.paramMap.get('id');

    this.router.navigate([`/lodgings/${lodgingId}/reservation`], navigationExtras);
  }

  createForm() {
    this.reservationForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      peopleAmount: ['', [Validators.required, this.nonZero]]
    })
  }

  nonZero(control: AbstractControl): { [key: string]: any } | null {
    if (Number(control.value) <= 0) {
      return { nonZero: true };
    } else {
      return null;
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      this.bookLodging();
    }
  }
}
