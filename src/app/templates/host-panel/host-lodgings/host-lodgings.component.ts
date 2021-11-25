import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LodgingResponse } from 'src/app/models/response/lodgingResponse';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';

@Component({
  selector: 'app-host-lodgings',
  templateUrl: './host-lodgings.component.html',
  styleUrls: ['./host-lodgings.component.css']
})
export class HostLodgingsComponent implements OnInit {
  name = "";

  lodgings = [] as any;
  filters = {} as any;

  total = 0;
  actualPage = 1;
  previousPage = 1;

  totalPages = "";
  pagesAvailable: number[] = []

  disabledNext = false;
  disabledBack = false;

  actualRoute = '/host/lodgings';

  constructor(private router: Router, private route: ActivatedRoute, private lodgingService: LodgingServiceService, private securityService: SecurityServiceService) { }

  ngOnInit(): void {
    const { page } = this.getQueryParams();

    if (page) {
      this.actualPage = page;
    } else {
      this.actualPage = this.previousPage;
    }

    const token = localStorage.getItem('token');
    const payload = this.securityService.validateToken({ token: token });

    payload.subscribe(response => {
      const { id, name }: any = response;

      this.name = name;

      const lodgings = this.lodgingService.getAllLodgingsHost(id, this.actualPage - 1);

      lodgings.subscribe(response => {
        let { results, total }: any = response;

        this.lodgings = results.map((it: LodgingResponse) => {
          it.comments.qualification = Math.floor(it.comments.qualification * 10) / 10;
          return {
            ...it,
            pictures: it.url_pictures.split(',')
          }
        });

        if (results != 0) {
          this.total = total;
    
          if (total <= 3) this.deactivateNextButton();
    
          total = Number(Math.ceil(total / 10));
    
          this.pagesAvailable = Array(total).fill(1).map((x, i) => i + 1)
          this.totalPages = total <= 9 ? `0${total}` : total;
    
          if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()
    
          if (this.actualPage === 1) this.deactivateBackButton();
        }
      })
    });
  }

  getQueryParams() {

    const page = Number(this.route.snapshot.queryParamMap.get('page'));

    return { page };
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

    this.router.navigate(['host/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } }).then(() => {
      window.location.reload();
    });;
  }

  next() {
    this.actualPage++;
    this.previousPage++;

    if (this.actualPage > 1) this.activateBackButton()
    if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

    this.router.navigate(['host/lodgings'], { queryParams: { ...this.filters, page: this.actualPage } }).then(() => {
      window.location.reload();
    });
  }
}
