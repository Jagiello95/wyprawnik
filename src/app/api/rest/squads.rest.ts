import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointEnum } from '../models/enum/endpoint.enum';
import { users } from '@api/rest/auth.mocks'
import { RegisterModel } from '@api/models/register.model';

@Injectable()
export class SquadRest {
  private readonly endpoint = EndpointEnum.squads;
  constructor(private readonly http: HttpClient ) {}

  public getSquads(): Observable<any> {
    return this.http.get<any>('/api/squads')
  }
}
