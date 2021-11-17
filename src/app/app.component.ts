import { Component, OnInit } from '@angular/core';
import { RouterService } from './services/router/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  nav: string = "normal";

  constructor(private routerService: RouterService) { }

  ngOnInit() {
    this.routerService.setTitle();
  }

  onActivate() {
    window.scroll(0, 0);

    const navigation = this.routerService.navigation;
    
    navigation.subscribe((event: any) => {
      const route = this.routerService.getChild(this.routerService.route);

      route.data.subscribe((data: any) => {
        this.nav = data.nav ? data.nav : "normal";
      });
    });
  }
}
