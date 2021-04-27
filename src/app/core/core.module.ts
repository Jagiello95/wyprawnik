import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { GlobalErrorHandler } from './services/global-error.handler';
import { CoreLayoutComponent } from './containers/core-layout/core-layout.component';
import { CoreHeaderComponent } from './components/core-header/core-header.component';

@NgModule({
  declarations: [CoreComponent, CoreLayoutComponent, CoreHeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreRoutingModule,
  ],
  exports: [RouterModule, CoreComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() module?: CoreModule) {
    if (module) {
      throw new Error('Core module is already loaded.');
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: ErrorHandler,
          useClass: GlobalErrorHandler,
        },
      ]
    };

  }
}
