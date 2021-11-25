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

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home" } },
  { path: 'sign-in', component: SignInComponent, data: { title: "Iniciar sesión", nav: "sign-in-sign-up" } },
  { path: 'sign-up', component: SignUpComponent, data: { title: "Regístrate", nav: "sign-in-sign-up" } },

  { path: 'lodgings', component: LodgingsComponent, data: { title: "Alojamientos - Alójate Quindío" } },
  { path: 'lodgings/:id', component: LodgingComponent, data: { title: "Alojamiento - Alójate Quindío" } },
  { path: 'lodgings/:id/reservation', component: ReservationFormComponent, data: { title: "Realizar reserva - Alójate Quindío" } },

  { path: 'host/home', component: HostHomeComponent, data: { title: "Home - Anfitrión - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/lodgings/create', component: CreateEditLodgingComponent, data: { title: "Hospedaje - Alójate Quindío" } },
  { path: 'host/lodgings/:id/edit', component: CreateEditLodgingComponent, data: { title: "Hospedaje - Alójate Quindío", edit:true} },
  { path: 'host/lodgings/:id', component: HostLodgingComponent, data: { title: "Alojamiento - Anfitrión - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/lodgings', component: HostLodgingsComponent, data: { title: "Alojamientos - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/lodgings/:lodging_id/reservations', component: LodgingReservationsComponent, data: { title: "Reservaciones - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/reservations/:id', component: ViewReservationComponent, data: { title: "Reservacion - Alójate Quindío", nav: "panel-host", host:true} },

  { path: 'account', component: AccountComponent, data: { title: "Cuenta - Alójate Quindío" } },
  
  { path: 'reservations', component: UserReservationsComponent, data: { title: "Reservaciones - Alójate Quindío" } },
  { path: 'reservations/:id', component: ViewReservationComponent, data: { title: "Reservacion - Alójate Quindío" } },
  
  { path: 'sign-in', component: SignInComponent, data: { title: "Iniciar sesión" } },
  { path: 'admin', canActivate: [AdminAuthGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'sign-up', component: SignUpComponent, data: { title: "Regístrate" } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: "Page not found", nav: "error" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
