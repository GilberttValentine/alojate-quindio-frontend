import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel-host-navbar',
  templateUrl: './panel-host-navbar.component.html',
  styleUrls: ['./panel-host-navbar.component.css']
})
export class PanelHostNavbarComponent implements OnInit, OnChanges {
  @Input() user = {} as any;
  role = "";
  url_profile_server = environment.CLOUDINARY_PROFILE_URL;

  constructor(private router: Router, private securityService: SecurityServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const { role } = this.user;

    this.role = "Anfitrión";
  }

  logout() {
    this.securityService.logout();
    this.router.navigate(['/sign-in']);
  }
}
