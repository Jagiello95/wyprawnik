import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router } from '@angular/router';
import { AuthService } from '@features/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate, CanLoad {
  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  public canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('authenticated', this.auth.isAuthenticated() )
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

  public canActivateChild(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('authenticated', this.auth.isAuthenticated() )
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }

  public canLoad(route: Route): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
