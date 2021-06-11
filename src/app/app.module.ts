import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HalfLayoutComponent } from './shared/half-layout/half-layout.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    HalfLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule.forRoot(),
    NgbModule,
    TranslocoRootModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

