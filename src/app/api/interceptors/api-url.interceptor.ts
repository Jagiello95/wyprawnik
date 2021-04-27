import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

  constructor() {
  }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.endsWith('.json')) {
      if (!request.url.match('http?.://')) {
        request = request.clone({ url: environment.apiUrl + request.url });
      }
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    }
    return next.handle(request);
  }
}
