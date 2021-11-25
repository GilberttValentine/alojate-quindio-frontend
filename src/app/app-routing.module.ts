import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './templates/account/account.component';
import { CreateEditLodgingComponent } from './templates/create-edit-lodging/create-edit-lodging.component';
import { HomeComponent } from './templates/home/home.component';
import { HostHomeComponent } from './templates/host-panel/host-home/host-home.component';
import { HostLodgingComponent } from './templates/host-panel/host-lodging/host-lodging.component';
import { HostLodgingsComponent } from './templates/host-panel/host-lodgings/host-lodgings.component';
import { LodgingComponent } from './templates/lodging/lodging.component';
import { LodgingReservationsComponent } from './templates/lodging-reservations/lodging-reservations.component';
import { LodgingsComponent } from './templates/lodgings/lodgings.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ReservationFormComponent } from './templates/reservation-form/reservation-form.component';
import { SignInComponent } from './templates/sign-in/sign-in.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';
import { UserReservationsComponent } from './templates/user-reservations/user-reservations.component';
import { ViewReservationComponent } from './templates/view-reservation/view-reservation.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { HostAuthGuard } from './guards/host-auth.guard';
import { MixAuthGuard } from './guards/mix-auth.guard';
import { GuestAuthGuard } from './guards/guest-auth.guard';
import { UserAuthGuard } from './guards/user-auth.guard';
import { UnsignUserGuard } from './guards/unsign-user.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home", context: ' ' } },
  { path: 'sign-in', component: SignInComponent, data: { title: "Iniciar sesión", nav: "sign-in-sign-up", context: ' ' }, canActivate: [UnsignUserGuard] },
  { path: 'sign-up', component: SignUpComponent, data: { title: "Regístrate", nav: "sign-in-sign-up", context: ' ' }, canActivate: [UnsignUserGuard] },

  { path: 'lodgings', component: LodgingsComponent, data: { title: "Alojamientos - Alójate Quindío", context: ' ' } },
  { path: 'lodgings/:id', component: LodgingComponent, data: { title: "Alojamiento - Alójate Quindío", context: ' ' } },
  { path: 'lodgings/:id/reservation', component: ReservationFormComponent, data: { title: "Realizar reserva - Alójate Quindío", context: ' ' }, canActivate: [GuestAuthGuard] },

  { path: 'host/home', component: HostHomeComponent, data: { title: "Home - Anfitrión - Alójate Quindío", context: 'panel-host' }, canActivate: [HostAuthGuard] },
  { path: 'host/lodgings/create', component: CreateEditLodgingComponent, data: { title: "Hospedaje - Alójate Quindío", context: 'panel-host' }, canActivate: [HostAuthGuard]  },
  { path: 'host/lodgings/:id/edit', component: CreateEditLodgingComponent, data: { title: "Hospedaje - Alójate Quindío", edit: true, context: 'panel-host' }, canActivate: [HostAuthGuard]  },
  { path: 'host/lodgings/:id', component: HostLodgingComponent, data: { title: "Alojamiento - Anfitrión - Alójate Quindío", context: 'panel-host' }, canActivate: [HostAuthGuard]  },
  { path: 'host/lodgings', component: HostLodgingsComponent, data: { title: "Alojamientos - Alójate Quindío", context: 'panel-host' }, canActivate: [HostAuthGuard]  },
  { path: 'host/lodgings/:id/reservations', component: LodgingReservationsComponent, data: { title: "Reservaciones - Alójate Quindío", context: 'panel-host' }, canActivate: [HostAuthGuard]  },
  { path: 'host/reservations/:id', component: ViewReservationComponent, data: { title: "Reservacion - Alójate Quindío", context: 'panel-host', host: true }, canActivate: [HostAuthGuard]  },

  { path: 'account', component: AccountComponent, data: { title: "Cuenta - Alójate Quindío" }, canActivate: [UserAuthGuard]  },

  { path: 'reservations', component: UserReservationsComponent, data: { title: "Reservaciones - Alójate Quindío", context: ' ' }, canActivate: [GuestAuthGuard]  },
  { path: 'reservations/:id', component: ViewReservationComponent, data: { title: "Reservacion - Alójate Quindío", context: ' ' }, canActivate: [GuestAuthGuard]  },
  
  { path: 'admin', data: { context: ' ' }, canActivate: [AdminAuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: "Page not found", nav: "error" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
