import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterService } from './services/router/router.service';
import { SecurityServiceService } from './services/security/security-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  nav: string = "normal";
  user = {} as any;
  context: string = "";

  constructor(private routerService: RouterService, private securityService: SecurityServiceService) { }

  ngOnInit() {
    this.routerService.setTitle();
  }

  onActivate() {
    window.scroll(0, 0);

    const token = localStorage.getItem('token');

    const isAuth = this.securityService.isAuth(token);

    if (isAuth) {
      const payload = this.securityService.validateToken({ token: token });

      payload.subscribe(response => {
        const { role, name, url_picture }: any = response;

        this.nav = "user";

        const user = {
          role, name, url_picture
        };

        this.user = user;
      });
    }

    const navigation = this.routerService.navigation;

    navigation.subscribe((event: any) => {
      const route = this.routerService.getChild(this.routerService.route);
      route.data.subscribe((data: any) => {

        this.nav = data.nav ? data.nav : this.nav;

        console.log(data.context);

        this.context = data.context ? data.context : this.context;
      });
    });
  }
}
