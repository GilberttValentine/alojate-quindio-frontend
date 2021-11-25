import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit, OnChanges {
  @Input() user = {} as any;
  role = "";
  url_profile_server = environment.CLOUDINARY_PROFILE_URL;

  constructor(private router: Router, private securityService: SecurityServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const { role } = this.user;
    if (role === 5) {
      this.role = "Usuario";
    } else if(role === 3) {
      this.role = "Huésped";
    } else {
      this.role = "Anfitrión";
    }
  }

  goLodgings() {
    this.router.navigate(['/lodgings']).then(() => {
      window.location.reload();
    });
  }

  logout() {
    this.securityService.logout();
    this.router.navigate(['/sign-in']);
  }
}
