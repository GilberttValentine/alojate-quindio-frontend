import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-sign-signup-navbar',
  templateUrl: './sign-signup-navbar.component.html',
  styleUrls: ['./sign-signup-navbar.component.css']
})
export class SignSignupNavbarComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      nav: "normal"
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home'], this.navigationExtras)
  }

  goLodgings() {
    this.router.navigate(['/lodgings'], this.navigationExtras)
  }
}
