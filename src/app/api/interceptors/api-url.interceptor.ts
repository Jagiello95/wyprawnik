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
      // if (!request.url.match('http?.://')) {
      //   if (!request.url.match('http?.://')) {
      //     console.log(3)
      //   request = request.clone({ url: environment.apiUrl + request.url });
      // }
      if (request.url.match('squads')) {
        console.log('squad matched')
        request = request.clone({ url: environment.squadUrl + request.url });
      }
      else if (request.url.match('auth')) {
        console.log('auth matched')
        request = request.clone({ url: environment.authUrl + request.url });
      }
      request = request.clone({ headers: request.headers.set('Accept', 'application/json'), withCredentials: true });
    }
    return next.handle(request);
  }
}
