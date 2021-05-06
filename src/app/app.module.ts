import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HalfLayoutComponent } from './shared/half-layout/half-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    HalfLayoutComponent
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    NgbModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
