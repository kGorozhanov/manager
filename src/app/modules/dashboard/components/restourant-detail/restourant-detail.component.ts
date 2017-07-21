import { DashboardState } from './../../../../store/dashboard/dashboard.reducer';
import { Observable } from 'rxjs/Observable';
import { RESTOURANT_ACTIONS, Restourant, RestourantState } from './../../../../store/dashboard/resourant/restourant.reducer';
import { AppState } from './../../../../store/app.reducer';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

export interface Tab {
  label: string;
  url: string;
}


@Component({
  selector: 'app-restourant-detail',
  templateUrl: './restourant-detail.component.html',
  styleUrls: ['./restourant-detail.component.scss']
})
export class RestourantDetailComponent implements OnInit, OnDestroy {
  private paramsSubscription: Subscription;
  public restourant: Observable<Restourant>;
  public tabs: Tab[];

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.paramsSubscription = this.route.params
      .subscribe(params => this.store.dispatch(RESTOURANT_ACTIONS.LOAD_SELECTED(params['id'])));

    const restourantState = this.store.select('dashboard').map((state: DashboardState) => state.restourant);

    this.restourant = restourantState.map((state: RestourantState) => state.selected);

    this.tabs = [
      {
        label: 'Reports',
        url: 'reports'
      },
      {
        label: 'Menu',
        url: 'menu'
      },
      {
        label: 'Desks',
        url: 'desks'
      },
      {
        label: 'Officiants',
        url: 'officiants'
      }
    ];
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
