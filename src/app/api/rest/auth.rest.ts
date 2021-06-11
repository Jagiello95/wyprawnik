import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointEnum } from '../models/enum/endpoint.enum';
import { users } from '@api/rest/auth.mocks'
import { RegisterModel } from '@api/models/register.model';

@Injectable()
export class AuthRest {
  private readonly endpoint = EndpointEnum.auth;
  constructor(private readonly http: HttpClient ) {}

  public login(loginModel: any): Observable<any> {
    return this.http
    .post<any>(`${this.endpoint}/users/signin`, loginModel)
  }

  public logout(): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/users/signout`, {});
  }

  public register(registerModel: RegisterModel): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/users`, registerModel)
  }

  public getUsers(): Observable<any> {
    
    return this.http.get<any>(`${this.endpoint}/users`)
  }
}
