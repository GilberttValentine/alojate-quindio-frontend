import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

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
import { NavbarComponent } from './components/nav/navbar.component';
import { ImgsLodgingComponent } from './components/lodging/view-mode/imgs-lodging/imgs-lodging.component';
import { OwnerLodgingInfoComponent } from './components/lodging/view-mode/owner-lodging-info/owner-lodging-info.component';
import { FloatingPerformReservationComponent } from './components/lodging/view-mode/floating-perform-reservation/floating-perform-reservation.component';
import { LodgingNameInfoComponent } from './components/lodging/view-mode/lodging-name-info/lodging-name-info.component';
import { AboutLodgingComponent } from './components/lodging/view-mode/about-lodging/about-lodging.component';
import { ServicesLodgingComponent } from './components/lodging/view-mode/services-lodging/services-lodging.component';
import { ServicesModalComponent } from './components/lodging/view-mode/modals/services-modal/services-modal.component';
import { ReviewComponent } from './components/lodging/view-mode/modals/review/review.component';
import { LodgingAccessibilityComponent } from './components/lodging/view-mode/lodging-accessibility/lodging-accessibility.component';
import { LodgingLocationComponent } from './components/lodging/view-mode/lodging-location/lodging-location.component';
import { LodgingCommentsComponent } from './components/lodging/view-mode/comments/lodging-comments/lodging-comments.component';
import { LodgingCommentComponent } from './components/lodging/view-mode/comments/lodging-comment/lodging-comment.component';
import { LodgingOwnerComponent } from './components/lodging/view-mode/lodging-owner/lodging-owner.component';
import { FormsModule } from '@angular/forms';
import { ReservationFormComponent } from './templates/reservation-form/reservation-form.component';
import { FloatingLodgingComponent } from './components/reservation/form-mode/floating-lodging/floating-lodging.component';
import { FrmReservationComponent } from './components/reservation/form-mode/frm-reservation/frm-reservation.component';
import { StayDetailComponent } from './components/reservation/form-mode/stay-detail/stay-detail.component';
import { HostHomeComponent } from './templates/host-panel/host-home/host-home.component';
import { RouterService } from './services/router/router.service';
import { SignSignupNavbarComponent } from './components/nav/sign-signup-navbar/sign-signup-navbar.component';
import { NormalNavbarComponent } from './components/nav/normal-navbar/normal-navbar.component';
import { PanelHostNavbarComponent } from './components/nav/panel-host-navbar/panel-host-navbar.component';
import { SidebarPanelHostComponent } from './components/panel-host/sidebar-panel-host/sidebar-panel-host.component';
import { FilterBestLodgingsPanelHostComponent } from './components/panel-host/filter-best-lodgings-panel-host/filter-best-lodgings-panel-host.component';
import { FilterRecentBookingsComponent } from './components/panel-host/filter-recent-bookings/filter-recent-bookings.component';
import { FeedStatsComponent } from './components/panel-host/feed-stats/feed-stats.component';
import { RecentCardBookingComponent } from './components/panel-host/filter-recent-bookings/recent-card-booking/recent-card-booking.component';
import { HostLodgingsComponent } from './templates/host-panel/host-lodgings/host-lodgings.component';
import { HostLodgingComponent } from './templates/host-panel/host-lodging/host-lodging.component';
import { FloatingLodgingInfoComponent } from './components/lodging/view-mode/floating-lodging-info/floating-lodging-info.component';
import { ButtonsComponent } from './components/lodging/host-actions/buttons/buttons.component';
import { LodgingServiceService } from './services/lodging/lodging-service.service';

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
    NavbarComponent,
    ImgsLodgingComponent,
    OwnerLodgingInfoComponent,
    FloatingPerformReservationComponent,
    LodgingNameInfoComponent,
    AboutLodgingComponent,
    ServicesLodgingComponent,
    ServicesModalComponent,
    ReviewComponent,
    LodgingAccessibilityComponent,
    LodgingLocationComponent,
    LodgingCommentsComponent,
    LodgingCommentComponent,
    LodgingOwnerComponent,
    ReservationFormComponent,
    FloatingLodgingComponent,
    FrmReservationComponent,
    StayDetailComponent,
    HostHomeComponent,
    SignSignupNavbarComponent,
    NormalNavbarComponent,
    PanelHostNavbarComponent,
    SidebarPanelHostComponent,
    FilterBestLodgingsPanelHostComponent,
    FilterRecentBookingsComponent,
    FeedStatsComponent,
    RecentCardBookingComponent,
    HostLodgingsComponent,
    HostLodgingComponent,
    FloatingLodgingInfoComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Title,
    RouterService,
    LodgingServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
