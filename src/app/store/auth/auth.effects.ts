import {MESSAGE_ACTIONS} from '../message/message.reducer';
import {HttpClient} from '../../services/http-client.service';
import {AUTH_ACTIONS, AUTH_CONSTANTS} from './auth.reducer';
import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/of';
import 'rxjs/add/Observable/from';
import {Observable} from 'rxjs/Observable';
import {go} from '@ngrx/router-store';

@Injectable()
export class AuthEffects {
  constructor(private http: HttpClient, private actions: Actions) {
  }

  @Effect()
  login = this.actions
    .ofType(AUTH_CONSTANTS.LOGIN)
    .map(toPayload)
    .mergeMap(payload => {
      const request = this.http.post('/api/jwt', payload);
      return request
        .map(res => res.json())
        .mergeMap(res => [
          AUTH_ACTIONS.LOGIN_SUCCESS(res.token),
          AUTH_ACTIONS.ACCOUNT(),
          go(['/'])
        ])
        .catch(err => Observable.from([
          AUTH_ACTIONS.LOGIN_ERROR(),
          MESSAGE_ACTIONS.ADD('Login Error')
        ]));
    });

  @Effect()
  account = this.actions
    .ofType(AUTH_CONSTANTS.ACCOUNT)
    .switchMap(action => {
      const request = this.http.get('/api/users/me');
      return request
        .map(res => res.json())
        .map(res => AUTH_ACTIONS.ACCOUNT_SUCCESS(res))
        .catch(err => Observable.of(AUTH_ACTIONS.ACCOUNT_ERROR()));
    });

  @Effect()
  logout = this.actions
    .ofType(AUTH_CONSTANTS.LOGOUT)
    .map(action => go('/login'));
}
