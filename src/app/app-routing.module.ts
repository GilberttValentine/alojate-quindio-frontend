import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { HostHomeComponent } from './templates/host-panel/host-home/host-home.component';
import { HostLodgingComponent } from './templates/host-panel/host-lodging/host-lodging.component';
import { HostLodgingsComponent } from './templates/host-panel/host-lodgings/host-lodgings.component';
import { LodgingComponent } from './templates/lodging/lodging.component';
import { LodgingsComponent } from './templates/lodgings/lodgings.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { ReservationFormComponent } from './templates/reservation-form/reservation-form.component';
import { SignInComponent } from './templates/sign-in/sign-in.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home" } },
  { path: 'sign-in', component: SignInComponent, data: { title: "Iniciar sesión", nav: "sign-in-sign-up" } },
  { path: 'sign-up', component: SignUpComponent, data: { title: "Regístrate", nav: "sign-in-sign-up" } },
  { path: 'lodgings', component: LodgingsComponent, data: { title: "Alojamientos - Alójate Quindío" } },
  { path: 'lodgings/:id', component: LodgingComponent, data: { title: "Alojamiento - Alójate Quindío" } },
  { path: 'lodgings/:id/reservation', component: ReservationFormComponent, data: { title: "Realizar reserva - Alójate Quindío" } },
  { path: 'host/home', component: HostHomeComponent, data: { title: "Home - Anfitrión - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/lodgings', component: HostLodgingsComponent, data: { title: "Mis alojamientos - Anfitrión - Alójate Quindío", nav: "panel-host" } },
  { path: 'host/lodgings/:id', component: HostLodgingComponent, data: { title: "Alojamiento - Anfitrión - Alójate Quindío", nav: "panel-host" } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: "Page not found", nav: "error" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
