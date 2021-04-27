import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointEnum } from '../models/enum/endpoint.enum';
import { users } from '@api/rest/auth.mocks'

@Injectable()
export class AuthRest {
  private readonly endpoint = EndpointEnum.auth;
  constructor(private readonly http: HttpClient ) {}

  public login(loginModel: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/login`, loginModel);
  }

  public getUsers(): Observable<any> {
    return of(users).pipe(map((el: any) => el))
  }
}
