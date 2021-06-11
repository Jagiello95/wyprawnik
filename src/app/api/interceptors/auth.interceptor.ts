import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@features/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly authState: AuthService) {}

  public intercept(originalRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request = originalRequest;
    const authToken = this.authState.token;

      if (authToken !== null) {
        request = originalRequest.clone({
          headers: originalRequest.headers.set('Authorization', `Bearer ${authToken}`),
        });
      }


    return next.handle(request);
  }
}
