import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { HostLodgingComponent } from './templates/host-panel/host-lodging/host-lodging.component';
import { FloatingLodgingInfoComponent } from './components/lodging/view-mode/floating-lodging-info/floating-lodging-info.component';
import { ButtonsComponent } from './components/lodging/host-actions/buttons/buttons.component';
import { LodgingServiceService } from './services/lodging/lodging-service.service';
import { LodgingCardComponent } from './components/lodging-card/lodging-card.component';
import { LodgingReservationsComponent } from './templates/lodging-reservations/lodging-reservations.component';
import { ReservationCardComponent } from './components/reservation-card/reservation-card.component';
import { UserReservationsComponent } from './templates/user-reservations/user-reservations.component';
import { AccountComponent } from './templates/account/account.component';
import { UserInformationComponent } from './components/account/user-information/user-information.component';
import { HostInformationComponent } from './components/account/host-information/host-information.component';
import { GuestInformationComponent } from './components/account/guest-information/guest-information.component';
import { LanguageChipComponent } from './components/account/language-chip/language-chip.component';
import { ViewReservationComponent } from './templates/view-reservation/view-reservation.component';
import { ViewReservationCardComponent } from './components/view-reservation/view-reservation-card/view-reservation-card.component';
import { YourStayComponent } from './components/view-reservation/your-stay/your-stay.component';
import { PaymentMethodComponent } from './components/view-reservation/payment-method/payment-method.component';
import { ReservationHostInformationComponent } from './components/view-reservation/reservation-host-information/reservation-host-information.component';
import { ReservationGuestInformationComponent } from './components/view-reservation/reservation-guest-information/reservation-guest-information.component';
import { CancelReservationComponent } from './components/view-reservation/cancel-reservation/cancel-reservation.component';
import { CancelAccountComponent } from './components/account/cancel-account/cancel-account.component';
import { CreateEditLodgingComponent } from './templates/create-edit-lodging/create-edit-lodging.component';
import { HeaderTitleComponent } from './components/lodging/create-edit-mode/header-title/header-title.component';
import { LodgingImagesComponent } from './components/lodging/create-edit-mode/lodging-images/lodging-images.component';
import { LodgingFormComponent } from './components/lodging/create-edit-mode/lodging-form/lodging-form.component';
import { LodgingServiceComponent } from './components/lodging/create-edit-mode/lodging-service/lodging-service.component';
import { ServiceChipComponent } from './components/lodging/create-edit-mode/service-chip/service-chip.component';
import { HostLodgingsComponent } from './templates/host-panel/host-lodgings/host-lodgings.component';
import { AboutLodgingCreateEditComponent } from './components/lodging/create-edit-mode/about-lodging-create-edit/about-lodging-create-edit.component';
import { AccessibilityLodgingCreateEditComponent } from './components/lodging/create-edit-mode/accessibility-lodging-create-edit/accessibility-lodging-create-edit.component';
import { NumberSuffixPipe } from './utils/pipes/number-suffix.pipe';
import { CommentServiceService } from './services/comment/comment-service.service';
import { LanguageServiceService } from './services/language/language-service.service';

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
    HostLodgingComponent,
    FloatingLodgingInfoComponent,
    ButtonsComponent,
    LodgingCardComponent,
    LodgingReservationsComponent,
    ReservationCardComponent,
    UserReservationsComponent,
    AccountComponent,
    UserInformationComponent,
    HostInformationComponent,
    GuestInformationComponent,
    LanguageChipComponent,
    ViewReservationComponent,
    ViewReservationCardComponent,
    YourStayComponent,
    PaymentMethodComponent,
    ReservationHostInformationComponent,
    ReservationGuestInformationComponent,
    CancelReservationComponent,
    CancelAccountComponent,
    CreateEditLodgingComponent,
    HeaderTitleComponent,
    LodgingImagesComponent,
    LodgingFormComponent,
    LodgingServiceComponent,
    ServiceChipComponent,
    HostLodgingsComponent,
    AboutLodgingCreateEditComponent,
    AccessibilityLodgingCreateEditComponent,
    NumberSuffixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    RouterService,
    LodgingServiceService,
    CommentServiceService,
    LanguageServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
