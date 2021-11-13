import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Home";
  welcomeBannerContext: any;
  hostBannerContext: any;

  constructor() { }

  ngOnInit(): void {
    this.welcomeBannerContext = {
      title: "Disfruta las vacaciones de tus sueños en los mejores lugares del Quindío",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "welcome",
      action: {
        text: "Iniciar sesión",
        route: "/sign-in"
      }
    }

    this.hostBannerContext = {
      title: "Anímate a ser anfitrión",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      class: "host",
      action: {
        text: "Hazte anfitrión",
        route: "/sign-in"
      }
    }
  }

}
