import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationResponse } from 'src/app/models/response/ReservationResponse/reservationResponse';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lodging-reservations',
  templateUrl: './lodging-reservations.component.html',
  styleUrls: ['./lodging-reservations.component.css']
})
export class LodgingReservationsComponent implements OnInit {


  reservations = [] as any;
  user_id!: number;
  lodging_id!: number;
  filters = {} as any;
  status = undefined as any;
  code = undefined as any;
  lastDays = undefined as any;

  total = 0;
  actualPage = 1;
  previousPage = 1;
  
  disabledNext = false;
  disabledBack = false;

  totalPages = "";
  pagesAvailable: number[] = []


  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationServiceService) { }

  ngOnInit(): void {
    this.user_id = Number(localStorage.getItem('user'));
    this.lodging_id = Number(this.route.snapshot.paramMap.get('id'));

    const { lastDays, status, code, page } = this.getQueryParams();

    Promise.resolve(this.buildQueryParams(lastDays, status, code, page));
  }

  async buildQueryParams(lastDays: number | undefined, status: number | undefined, code: number | undefined, page: number | undefined) {
    if (lastDays) {
      this.filters = {
        ...this.filters,
        filtered_days: lastDays
      };

      this.lastDays = lastDays;
    }

    if (status) {
      this.filters = {
        ...this.filters,
        actual_state: status
      };

      this.status = status;
    }

    if (code) {
      this.filters = {
        ...this.filters,
        code: code
      };

      this.code = code;
    }

    if (page) {
      this.actualPage = page;
    } else {
      this.actualPage = this.previousPage;
    }

    const reservations = await this.getAllReservations();

    let { results, total }: any = reservations;
    
    console.log(results)

    this.reservations = results.map((it: ReservationResponse) => {
      it.lodging.comments.qualification = Math.floor(it.lodging.comments.qualification * 10) / 10;
      it.lodging.url_pictures = `${environment.CLOUDINARY_LODGING_URL}/${it.lodging.url_pictures.split(',')[0]}`
      it.guest.photo = `${environment.CLOUDINARY_PROFILE_URL}/${it.guest.photo}`
      
      return {
        ...it
      }
    });

    if (this.reservations.length != 0) {
      this.total = total;

      if (total <= 10) this.deactivateNextButton();

      total = Number(Math.ceil(total / 10));

      this.pagesAvailable = Array(total).fill(1).map((x, i) => i + 1)
      this.totalPages = total <= 9 ? `0${total}` : total;

      if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

      if (this.actualPage === 1) this.deactivateBackButton();
    }
  }

  async getAllReservations() {
    return await (this.reservationService.listReservationsByLodging(this.user_id, this.lodging_id, this.filters, this.actualPage - 1).toPromise());
  }

  getQueryParams() {
    const status = Number(this.route.snapshot.queryParamMap.get('sts'));
    const lastDays = Number(this.route.snapshot.queryParamMap.get('lst'));
    const code = Number(this.route.snapshot.queryParamMap.get('cod'));
    const page = Number(this.route.snapshot.queryParamMap.get('page'));

    return { status, lastDays, code, page };
  }

  deactivateBackButton() {
    this.disabledBack = true;
  }

  activateBackButton() {
    this.disabledBack = false;
  }

  deactivateNextButton() {
    this.disabledNext = true;
  }

  activateNextButton() {
    this.disabledNext = false;

  }

  back() {
    this.actualPage--;
    this.previousPage--;

    if (this.actualPage <= 1) this.deactivateBackButton();
    if (this.actualPage < Number(this.totalPages)) this.activateNextButton()

    this.router.navigate(['/host/reservations'], { queryParams: { ...this.filters, page: this.actualPage } }).then(() => {
      window.location.reload();
    });;
  }

  next() {
    this.actualPage++;
    this.previousPage++;

    if (this.actualPage > 1) this.activateBackButton()
    if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

    this.router.navigate(['/host/reservations'], { queryParams: { ...this.filters, page: this.actualPage } }).then(() => {
      window.location.reload();
    });
  }
}
