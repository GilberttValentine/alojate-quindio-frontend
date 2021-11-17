import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  navigation!: any;

  constructor(private titleService: Title, private router: Router, public route: ActivatedRoute) {
    this.navigation = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
  }

  setTitle() {
    this.navigation.subscribe((event: any) => {
      const route = this.getChild(this.route);

      route.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title);
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  };
}
