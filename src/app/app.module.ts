import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { LodgingComponent } from './templates/lodging/lodging.component';
import { LodgingsComponent } from './templates/lodgings/lodgings.component';
import { SignInComponent } from './templates/sign-in/sign-in.component';
import { SignUpComponent } from './templates/sign-up/sign-up.component';
import { PageNotFoundComponent } from './templates/page-not-found/page-not-found.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { FloatingSearchInputComponent } from './components/floating-search-input/floating-search-input.component';
import { FilterMunicipalitiesComponent } from './components/filter-municipalities/filter-municipalities.component';
import { FilterBestLodgingsComponent } from './components/filter-best-lodgings/filter-best-lodgings.component';
import { FilterTypesLodgingsComponent } from './components/filter-types-lodgings/filter-types-lodgings.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LodgingComponent,
    LodgingsComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    WelcomeBannerComponent,
    FloatingSearchInputComponent,
    FilterMunicipalitiesComponent,
    FilterBestLodgingsComponent,
    FilterTypesLodgingsComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
