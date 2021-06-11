import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './containers/profile-layout/profile-layout.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileLeftSidebarComponent } from './containers/profile-left-sidebar/profile-left-sidebar.component';
import { ProfileMainComponent } from './containers/profile-main/profile-main.component'
import { SharedModule } from '@shared/shared.module';
import { ProfileRightSidebarComponent } from './containers/profile-right-sidebar/profile-right-sidebar.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { ProfileSquadsComponent } from './components/profile-squads/profile-squads.component';



@NgModule({
  declarations: [
    ProfileLayoutComponent,
    ProfileHeaderComponent,
    ProfileLeftSidebarComponent,
    ProfileRightSidebarComponent,
    ProfileMainComponent,
    ProfileMenuComponent,
    ProfileSquadsComponent
  ],
  imports: [
    RouterModule,
    ProfileRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
