import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LodgingPanelComponent } from './components/lodging-panel/lodging-panel.component';
import { CommentsPanelComponent } from './components/comments-panel/comments-panel.component';


@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    UserPanelComponent,
    LodgingPanelComponent,
    CommentsPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
