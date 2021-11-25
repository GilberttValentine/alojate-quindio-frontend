import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityServiceService } from '../services/security/security-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private securityService: SecurityServiceService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this.securityService.hostAuth() || this.securityService.mixAuth() || this.securityService.guestAuth() || this.securityService.adminAuth() || this.securityService.userAuth()) {
        return true;
      }
      this.router.navigate(['/home'])
      return false;
  }
}
