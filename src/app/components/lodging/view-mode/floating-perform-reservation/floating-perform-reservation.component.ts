import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-floating-perform-reservation',
  templateUrl: './floating-perform-reservation.component.html',
  styleUrls: ['./floating-perform-reservation.component.css']
})
export class FloatingPerformReservationComponent implements OnInit, OnChanges {

  @Input() lodgingNightRate: any;

  emailOwner = "";
  lodgingMiniumInformation: any;

  nightValue = 0;
  totalReviews = 0;
  totalRate = 0;

  limitNumber: number = 0;

  totalValueByNights = 0;
  total = 0;
  totalNights = 1;

  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {
    if (this.lodgingNightRate) {
      const { night_value, total_reviews, total_rate, email, lodging } = this.lodgingNightRate;

      this.nightValue = night_value;
      this.limitNumber = total_reviews >= 1000 ? 1 : 0;
      this.totalReviews = total_reviews;

      this.totalRate = total_rate;

      const totalValueByNights = night_value * this.totalNights;
      this.totalValueByNights = totalValueByNights;

      const total = (totalValueByNights * 0.19) + totalValueByNights;
      this.total = total;

      this.emailOwner = email;

      this.lodgingMiniumInformation = lodging;
    }
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


  bookLodging() {
    const startDate = moment(this.reservationForm.get('startDate')?.value)
    const endDate = moment(this.reservationForm.get('endDate')?.value)
    const dif = endDate.diff(startDate, 'days');

    const reservation = {
      startDate: this.reservationForm.get('startDate')?.value,
      endDate: this.reservationForm.get('endDate')?.value,
      peopleAmount: this.reservationForm.get('peopleAmount')?.value,
      total_value: dif,
      nightValue: this.nightValue,
      email: this.emailOwner,
      lodging: this.lodgingMiniumInformation
    }

    const navigationExtras: NavigationExtras = {
      state: {
        reservation
      }
    }

    const lodgingId = this.route.snapshot.paramMap.get('id');

    this.router.navigate([`/lodgings/${lodgingId}/reservation`], navigationExtras);
  }

  scrollTo() {
    const element = document.getElementById('comments');

    element!.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
