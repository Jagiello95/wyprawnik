import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  public readonly stateKey = 'auth-token';
  public state$: Observable<boolean>;
  public jwtService = new JwtHelperService()
  private readonly state = new BehaviorSubject<boolean>(false);

  constructor(private readonly cookieService: CookieService) {
    this.state$ = this.state.asObservable();
    if (this.cookieService.get(this.stateKey)) {
      this.setState(this.isAuthenticated());
    }
  }

  public set token(token: string) {
    console.log(this.isTokenValid(token))
    const expired = this.jwtService.getTokenExpirationDate(token)
    console.log(expired)
    if (this.isTokenValid(token) && expired) {
      console.log('good')
      this.cookieService.set(this.stateKey, token, expired);
      this.setState(true)
      console.log(this.state)
    }
  
  }

  public get token(): string {
    return this.cookieService.get(this.stateKey)
  }

  public logout(): void {
    
    this.cookieService.delete(this.stateKey);
    this.setState(false)
  }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('auth-token');
    return this.isTokenValid(token);
  }

  public isTokenValid(token: string): boolean {
    try {
      return !this.jwtService.isTokenExpired(token);
    }
    catch (error: unknown) {
      return false;
    }
  }

  public isCurrentUser(username: string): boolean {
    const token = this.cookieService.get('auth-token');
    const decodeToken = this.jwtService.decodeToken(token);
    return decodeToken.unique_name === username;
  }

  public setState(state:boolean): void{
    this.state.next(state)
  }
}
