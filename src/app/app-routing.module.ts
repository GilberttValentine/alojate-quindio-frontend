import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { LodgingsComponent } from './templates/lodgings/lodgings.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: "Home" } },
  { path: 'lodgings', component: LodgingsComponent, data: { title: "Alojamientos - Alójate Quindío" } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { title: "Page not found" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
