import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-reservation',
  templateUrl: './view-reservation.component.html',
  styleUrls: ['./view-reservation.component.css']
})
export class ViewReservationComponent implements OnInit {

  host = false;
  reservation = {} as ReservationResponse;

  lodgingCard: any = {}
  hostCard: any = {}
  guestCard: any = {}
  paymentCard: any = {}
  yourStay: any = {}

  cancel: boolean = false;

  userId!: number;
  reservationId!: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private reservationService: ReservationServiceService) { }

  async ngOnInit(): Promise<void> {
    this.activatedRoute.data.subscribe(data => {
      this.host = data.host
    });

    await this.loadInformation()
  }

  async loadInformation() {
    this.userId = Number(localStorage.getItem('user'));
    this.reservationId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.reservation = Object(await this.getReservation()) as ReservationResponse;

    this.cancel = this.reservation.actual_state == 1

    const lodgingPhoto = `${environment.CLOUDINARY_LODGING_URL}/${this.reservation.lodging.url_pictures.split(',')[0]}`;
    const hostPhoto = `${environment.CLOUDINARY_PROFILE_URL}/${this.reservation.host.photo}`
    const guestPhoto = `${environment.CLOUDINARY_PROFILE_URL}/${this.reservation.guest.photo}`
    const dif = moment(this.reservation.end_date).diff(moment(this.reservation.start_date), 'days')

    this.lodgingCard = {
      type: this.reservation.lodging.type,
      name: this.reservation.lodging.name,
      qualification: this.reservation.lodging.comments.qualification,
      count: this.reservation.lodging.comments.count,
      photo: lodgingPhoto,
      night_value: this.reservation.night_value,
      total_value: dif * this.reservation.night_value,
      night: dif
    }

    console.log(this.reservation.host)
    
    this.hostCard = {
      name: this.reservation.host.name,
      photo: hostPhoto,
      email: this.reservation.host.email
    }

    this.guestCard = {
      name: this.reservation.guest.name,
      photo: guestPhoto
    }
    this.paymentCard = {
      total_value: dif * this.reservation.night_value
    }

    this.yourStay = {
      startDate: this.reservation.start_date,
      endDate: this.reservation.start_date,
      peopleAmount: this.reservation.persons_amount
    }

  }

  async getReservation() {
    return await this.reservationService.findReservation(this.userId, this.reservationId).toPromise()
  }

  return() {
    if(!this.host){
      this.router.navigate(['/reservations']);
    }else {
      this.router.navigate(['/host/lodgings']);
    }
  }

}
