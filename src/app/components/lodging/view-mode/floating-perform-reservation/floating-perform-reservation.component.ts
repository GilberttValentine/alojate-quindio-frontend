import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import * as moment from 'moment';
import { switchMap } from 'rxjs/operators';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-floating-perform-reservation',
  templateUrl: './floating-perform-reservation.component.html',
  styleUrls: ['./floating-perform-reservation.component.css']
})
export class FloatingPerformReservationComponent implements OnInit, OnChanges {

  @Input() lodgingNightRate: any;

  emailOwner = "";
  lodgingMiniumInformation: any;

  peopleAmount = 0;
  nightValue = 0;
  totalReviews = 0;
  totalRate = 0;
  persons_amount = 0;

  limitNumber: number = 0;

  totalValueByNights = 0;
  total = 0;
  totalNights = 1;

  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private reservationService: ReservationServiceService, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(): void {

    if (this.lodgingNightRate) {
      const { night_value, total_reviews, total_rate, email, lodging, peopleAmount } = this.lodgingNightRate;

      this.peopleAmount = peopleAmount;
      this.nightValue = night_value;
      this.limitNumber = total_reviews >= 1000 ? 1 : 0;
      this.totalReviews = total_reviews;
      this.persons_amount = lodging.persons_amount;
      this.totalRate = Math.floor(total_rate * 10) / 10;

      const totalValueByNights = night_value * this.totalNights;
      this.totalValueByNights = totalValueByNights;

      const total = (totalValueByNights * 0.19) + totalValueByNights;
      this.total = total;

      this.emailOwner = email;

      lodging.total_rate = Math.floor(lodging.total_rate * 10) / 10

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

  async onSubmit() {
    if (this.reservationForm.valid) {
      await this.bookLodging();
    }
  }


  async bookLodging() {
    const lodgingId = Number(this.route.snapshot.paramMap.get('id'));

    let startDate = this.reservationForm.get('startDate')?.value
    let endDate = this.reservationForm.get('endDate')?.value

    this.sweetAlertService.waitAlert();

    try {
      await this.reservationService.validateLodgingDisponibility(lodgingId, { start_date: startDate, end_date: endDate }).toPromise()

      this.sweetAlertService.closeAlert()

      startDate = moment(startDate)
      endDate = moment(endDate)
      const dif = endDate.diff(startDate, 'days');

      const persons_amount_input = this.reservationForm.get('peopleAmount')?.value

      if (persons_amount_input > this.persons_amount) {
        this.sweetAlertService.errorAlert('Ups, parece que no se pudo realizar la reserva', 'La cantidad ingresada de huéspedes excede la capacidad máxima del alojamiento')
      } else {
        const reservation = {
          start_date: this.reservationForm.get('startDate')?.value,
          end_date: this.reservationForm.get('endDate')?.value,
          persons_amount: this.reservationForm.get('peopleAmount')?.value,
          total_value: dif * this.nightValue,
          night_value: this.nightValue,
          night_count: dif,
          email: this.emailOwner,
          lodging: this.lodgingMiniumInformation
        }

        const navigationExtras: NavigationExtras = {
          state: {
            reservation
          }
        }

        this.router.navigate([`/lodgings/${lodgingId}/reservation`], navigationExtras);
      }
    } catch (error: any) {
      this.sweetAlertService.errorAlert('Ups, parece que no se pudo realizar la reserva', error['error']['message'])
    }
  }

  scrollTo() {
    const element = document.getElementById('comments');

    element!.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
