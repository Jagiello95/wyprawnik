
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { TokenService } from '@core/services/token.service';
// import { CookieService } from 'ngx-cookie-service';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private readonly cookieService: CookieService, private readonly tokenService: TokenService) {}

//   public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const authToken = this.tokenService.ssoToken;

//     if (authToken) {
//     const authReq = req.clone({
//       headers: req.headers.set('Authorization', `Bearer ${authToken}`)
//     });

//     return next.handle(authReq);
//     }
//     return next.handle(req);
//   }
// }
