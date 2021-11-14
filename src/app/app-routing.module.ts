import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { LodgingComponent } from './templates/lodging/lodging.component';
import { LodgingsComponent } from './templates/lodgings/lodgings.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { SignInComponent } from './templates/sign-in/sign-in.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home" } },
  { path: 'sign-in', component: SignInComponent, data: { title: "Iniciar sesión" } },
  { path: 'sign-up', component: SignUpComponent, data: { title: "Regístrate" } },
  { path: 'lodgings', component: LodgingsComponent, data: { title: "Alojamientos - Alójate Quindío" } },
  { path: 'lodging/:id', component: LodgingComponent, data: { title: "Alojamiento - Alójate Quindío" } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: "Page not found" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
