import {MESSAGE_ACTIONS} from '../../message/message.reducer';
import {Observable} from 'rxjs/Observable';
import {RESTOURANT_CONSTANTS, RESTOURANT_ACTIONS} from './restourant.reducer';
import {HttpClient} from '../../../services/http-client.service';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {go} from '@ngrx/router-store';


@Injectable()
export class RestourantEffects {
  constructor(private actions: Actions, private http: HttpClient) {
  }

  @Effect()
  load = this.actions
    .ofType(RESTOURANT_CONSTANTS.LOAD)
    .switchMap(action => {
      return this.http.get('/api/restourants')
        .map(res => res.json())
        .map(res => RESTOURANT_ACTIONS.LOAD_SUCCESS(res))
        .catch(err => Observable.from([
          RESTOURANT_ACTIONS.LOAD_ERROR(),
          MESSAGE_ACTIONS.ADD('Error on load restourats')
        ]));
    });

  @Effect()
  add = this.actions
    .ofType(RESTOURANT_CONSTANTS.ADD)
    .map(toPayload)
    .switchMap(payload => {
      return this.http.post('/api/restourants', payload)
        .map(res => res.json())
        .mergeMap(restourant => [
          RESTOURANT_ACTIONS.ADD_SUCCESS(restourant),
          go(['/restourants', restourant.id])
        ])
        .catch(err => Observable.from([
          RESTOURANT_ACTIONS.ADD_ERROR(),
          MESSAGE_ACTIONS.ADD('Error on add restourat')
        ]));
    });

  @Effect()
  selected = this.actions
    .ofType(RESTOURANT_CONSTANTS.LOAD_SELECTED)
    .map(toPayload)
    .switchMap(payload => {
      return this.http.get(`/api/restourants/${payload}`)
        .map(res => res.json())
        .map(res => RESTOURANT_ACTIONS.LOAD_SELECTED_SUCCESS(res))
        .catch(err => Observable.from([
          RESTOURANT_ACTIONS.LOAD_SELECTED_ERROR(),
          MESSAGE_ACTIONS.ADD(`Restourat with id "${payload}" not found`)
        ]));
    });
}
