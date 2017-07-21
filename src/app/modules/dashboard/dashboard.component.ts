import { DashboardState } from './../../store/dashboard/dashboard.reducer';
import { Observable } from 'rxjs';
import { RESTOURANT_ACTIONS, Restourant } from './../../store/dashboard/resourant/restourant.reducer';
import { HttpClient } from './../../services/http-client.service';
import { AUTH_ACTIONS, AuthState, User } from './../../store/auth/auth.reducer';
import { AppState } from './../../store/app.reducer';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia } from '@angular/flex-layout';
import 'rxjs/add/operator/startWith';
import { Store } from '@ngrx/store';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	public menuOpened: boolean;
	public menuMode: string;
	public user: Observable<User>;
	public isManager: Observable<boolean>;
	public restourants: Observable<Restourant[]>;
	private mediaWatcher: Subscription;
	private userSubscription: Subscription;
	@ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
		private media: ObservableMedia,
		private store: Store<AppState>
  ) { }

  ngOnInit() {
  	this.mediaWatcher = this.media
			.asObservable()
			.startWith({})
			.subscribe(() => this.updateMenuMode());

		this.restourants = this.store.select('dashboard')
			.map((state: DashboardState) => state.restourant.list);

		this.user = this.store.select('auth')
			.map((state: AuthState) => state.user);

		this.isManager = this.user.map(user => user && user.role === 'manager');

		this.userSubscription = this.user
			.subscribe((user: User) => {
				if (!user) return this.store.dispatch(RESTOURANT_ACTIONS.RESET());
				if (user.role === 'manager') return this.store.dispatch(RESTOURANT_ACTIONS.LOAD());
			});
  }

  updateMenuMode() {
		this.menuMode = (
		  this.media.isActive('lg') ||
      this.media.isActive('md') ||
      this.media.isActive('xl')
    ) ? 'side' : 'over';
		this.menuOpened = this.menuMode === 'side';
	}

	logout() {
		this.store.dispatch(AUTH_ACTIONS.LOGOUT());
	}

	onMenuClick() {
		if (this.menuMode === 'over') {
			this.sidenav.toggle();
		}
	}

	ngOnDestroy() {
		this.userSubscription.unsubscribe();
	}
}
