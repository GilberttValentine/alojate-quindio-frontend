import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-navbar',
  templateUrl: './normal-navbar.component.html',
  styleUrls: ['./normal-navbar.component.css']
})
export class NormalNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLodgings() {
    this.router.navigate(['/lodgings']).then(() => {
      window.location.reload();
    });
  }
}
