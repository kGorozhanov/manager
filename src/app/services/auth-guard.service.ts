import { AppState } from './../store/app.reducer';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AuthState, AUTH_ACTIONS } from '../store/auth/auth.reducer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class AuthGuard implements CanActivate {
  loggedin: Observable<boolean>;
  constructor(private store: Store<AppState>) {
    this.loggedin = this.store.select('auth').map((state: AuthState) => state.isLoggedIn);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.loggedin
      .distinctUntilChanged()
      .do(state => {
        if (!state) this.store.dispatch(AUTH_ACTIONS.LOGOUT());
      });
  }
}
