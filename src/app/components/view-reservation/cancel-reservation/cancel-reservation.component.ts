import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancel-reservation',
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent implements OnInit {

  reservationId!: number;
  userId!: number;

  constructor(private reservationService: ReservationServiceService, private activatedRoute: ActivatedRoute, private router: Router, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('user'));
    this.reservationId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  cancel() {
    Swal.fire({
      title: '¿Estas seguro que deseas cancelar la reserva?',
      text: "Si cancelas la reserva tu dinero sera reembolsado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Cancelar Reserva'
    }).then((result) => {
      if (result.isConfirmed) {
        const user_id = Number(localStorage.getItem('user'));
        this.reservationService.cancelReservation(this.userId, this.reservationId)
        .subscribe(res=>{
          this.sweetAlertService.successAlert('Reserva Cancelada', 'La reserva se cancelo exitosamente');
          this.router.navigate([`/reservations`]);
        }, err =>{
          this.sweetAlertService.errorAlert('Error deshabilitando cuenta', err['error']['message']);
        })
      }
    })
  }

}
