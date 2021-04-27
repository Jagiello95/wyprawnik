import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './containers/auth-layout/auth-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule
    
  ]
})
export class AuthModule { }
