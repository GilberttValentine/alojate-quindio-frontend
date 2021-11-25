import { Component, OnInit } from '@angular/core';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-host-home',
  templateUrl: './host-home.component.html',
  styleUrls: ['./host-home.component.css']
})
export class HostHomeComponent implements OnInit {
  private userId: number = 0;

  lodgings = [] as any[];
  reservations = [] as ReservationResponse[];

  totalLodgings = 0;
  totalReservations = 0;
  totalReviews = 0;
  
  name = "";

  constructor(private securityService: SecurityServiceService, private lodgingService: LodgingServiceService, private reservationService: ReservationServiceService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    const isAuth = this.securityService.isAuth(token);

    if (isAuth) {
      const payload = this.securityService.validateToken({ token: token });

      payload.subscribe(response => {
        const { id, name }: any = response;

        this.name = name;
        this.userId = id;

        const lodgings = this.lodgingService.getAllLodgingsHost(id);

        lodgings.subscribe((response: any) => {
          const { results, total } = response;

          this.lodgings = results.map((it: LodgingResponse) => {
            const id = it.id;

            const qualification = Math.floor(it.comments.qualification * 10) / 10;

            const name = it.name;

            const commaOccurrence = it.url_pictures.indexOf(",");
            const image = `${environment.CLOUDINARY_LODGING_URL}/${it.url_pictures.slice(0, commaOccurrence)}`;

            return {
              id,
              qualification,
              name,
              image
            };
          }).slice(0, 4);

          this.totalLodgings = total;

        });

        const reservations = this.reservationService.listReservationsForHost(id);

        reservations.subscribe((response: any) => {
          const { results, total } = response;

          this.totalReservations = total;
          this.reservations = results;
        })
      });
    }
  }

}
