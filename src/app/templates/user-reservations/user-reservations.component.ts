import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationServiceService } from 'src/app/services/reservation/reservation-service.service';

@Component({
  selector: 'app-user-reservations',
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  user_id!: number;
  filters = {} as any;  
  status = undefined as any;
  code = undefined as any;
  lastDays = undefined as any;  

  total = 0;
  actualPage = 1;
  previousPage = 1;

  totalPages = "";
  pagesAvailable: number[] = []

  
  constructor(private router: Router, private route: ActivatedRoute, private reservationService: ReservationServiceService) { }

  ngOnInit(): void {
    this.user_id = Number(localStorage.getItem('user'));
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

    console.log(reservations)
    let { results, total }: any = reservations;

    /**this.reservations = results.map((it: LodgingResponse) => {
      it.comments.qualification = Math.floor(it.comments.qualification * 10) / 10;
      return {
        ...it,
        pictures: it.url_pictures.split(',')
      }
    });*/

    this.total = total;

    if (total <= 10) {
      this.deactivateNextButton();
    }

    total = Number(((total / 10) - 0.5).toFixed(0));
    total++;

    this.pagesAvailable = Array(total).fill(1).map((x, i) => i + 1)
    this.totalPages = total <= 9 ? `0${total}` : total;

    if (this.actualPage === 1) {
      this.deactivateBackButton();
    }

    console.log(this.filters);
  }

  async getAllReservations() {
    return await (this.reservationService.listReservationsByUser(this.user_id, this.filters, this.actualPage - 1).toPromise());
  }

  getQueryParams() {
    const status = Number(this.route.snapshot.queryParamMap.get('sts'));
    const lastDays = Number(this.route.snapshot.queryParamMap.get('lst'));
    const code = Number(this.route.snapshot.queryParamMap.get('cod'));
    const page = Number(this.route.snapshot.queryParamMap.get('page'));

    return { status, lastDays, code, page };
  }

  deactivateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);
    back!.disabled = true;
  }

  activateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);
    back!.disabled = false;
  }

  deactivateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);
    next!.disabled = true;
  }

  activateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);
    next!.disabled = false;
  }

  back() {
    this.actualPage--;
    this.previousPage--;

    if (this.actualPage <= 1) this.deactivateBackButton();
    if (this.actualPage < Number(this.totalPages)) this.activateNextButton()

    this.router.navigate(['/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } });
  }

  next() {
    this.actualPage++;
    this.previousPage++;

    if (this.actualPage > 1) this.activateBackButton()
    if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

    this.router.navigate(['/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } });
  }
}
