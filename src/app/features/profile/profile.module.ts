import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileLayoutComponent } from './containers/profile-layout/profile-layout.component';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';



@NgModule({
  declarations: [
    ProfileLayoutComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
