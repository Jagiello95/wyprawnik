import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiUrlInterceptor } from '@api/interceptors/api-url.interceptor';
// import { AuthInterceptor } from '@api/interceptors/auth.interceptor';
import { AuthRest } from '@api/rest/auth.rest';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class ApiModule {
  constructor(@Optional() @SkipSelf() parentModule?: ApiModule) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import it in the CoreModule only');
    }
  }

  public static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        AuthRest,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true,
        },
        // { provide: HTTP_INTERCEPTORS,
        //   useClass: AuthInterceptor,
        //   multi: true },
      ],
    };
  }

}
