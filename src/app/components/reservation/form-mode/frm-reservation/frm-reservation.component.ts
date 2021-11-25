import { Component, Input, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateReservationResponse } from 'src/app/models/response/createReservation';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-frm-reservation',
  templateUrl: './frm-reservation.component.html',
  styleUrls: ['./frm-reservation.component.css']
})
export class FrmReservationComponent implements OnInit {
  
  @Input() reservation: any;
  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder, private sweetAlertService: SweetAlertService, private reservationService: ReservationServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.createForm()
    console.log(this.reservation)
  }

  createForm() {
    this.reservationForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      expDate: ['', Validators.required],
      securityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  submit() {
    if (this.reservationForm.valid) {
      const user_id = Number(localStorage.getItem('user'));
      const lodging_id = Number(this.route.snapshot.paramMap.get('id'));

      const reservation: CreateReservationResponse = {
        end_date: this.reservation.end_date,
        persons_amount: this.reservation.persons_amount,
        start_date: this.reservation.start_date
      }

      this.sweetAlertService.waitAlert()
      this.reservationService.createReservation(user_id, lodging_id, reservation)
        .subscribe(res => {
          const date = new Date(this.reservation.start_date);
          const day = date.getDate();
          const month = date.getMonth();

          const months = new Array("enero", "febrero", "marzo",
            "abril", "mayo", "junio", "julio", "agosto", "septiembre",
            "octubre", "noviembre", "diciembre");

          const createdAt = `${day} ${months[month]}`;

          this.sweetAlertService.successAlert('¡Reserva exitosa, gracias por preferirnos!', `Te esperamos el ${createdAt} en ${this.reservation.lodging.name}`)
          this.router.navigate([`/lodgings/${lodging_id}`]);
        }, err => {
          this.sweetAlertService.errorAlert('Ups, ocurrió un problema creando la reserva', err['error']['message'])
        })
    }
  }
}
