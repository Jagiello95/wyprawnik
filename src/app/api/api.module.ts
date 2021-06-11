import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ApiUrlInterceptor } from '@api/interceptors/api-url.interceptor';
import { ResponseInterceptor } from '@api/interceptors/response.interceptor';
import { AuthInterceptor } from '@api/interceptors/auth.interceptor';
import { AuthRest } from '@api/rest/auth.rest';
import { SquadRest } from '@api/rest/squads.rest';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: []
})
export class ApiModule {
  constructor(@Optional() @SkipSelf() parentModule?: ApiModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  public static forRoot(): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        AuthRest,
        SquadRest,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ResponseInterceptor,
          multi: true
        }
      ]
    };
  }
}
