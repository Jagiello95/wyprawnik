import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthState } from '@core/state/auth.state';
import { environment } from '@env/environment';
import { AuthService } from '@features/auth/auth.service';
// import { NotificationService } from '@shared/notification/notification.service';
import { Observable, throwError } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';


@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router, private readonly authService: AuthService
  ) {
  }

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let resultMessage: string;
    return next.handle(req).pipe(
        tap(
          (event: any) => {
            resultMessage = event instanceof HttpResponse ? 'succeeded' : 'failed';
          },
          (error: HttpErrorResponse) => {
            if (error.status === 401) {
              // this.authService.setState(false)
              this.router.navigate(['auth', 'login'])
            }
            return throwError(error);
          }
        ),
      finalize(() => {
        if (!environment.production) {
          const elapsed = Date.now() - started;
          console.log(elapsed)
          const msg = `${req.method} "${req.urlWithParams}" ${resultMessage} in ${elapsed} ms.`;
          console.log(msg);
        }
      })
    );
  }

  private handleLogout(): void {
    // this.messageService.addError('common.unauthorized');
    // this.authState.removeToken();
    // this.router.navigate(['/auth/login/dev']);
  }


}
