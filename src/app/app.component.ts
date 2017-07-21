import {Subscription} from 'rxjs/Subscription';
import {MessageState, Message, MESSAGE_ACTIONS} from './store/message/message.reducer';
import {AppState} from './store/app.reducer';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private currentMessage: Message;
  private messageSubscription: Subscription;

  constructor(
    private mdSnackBar: MdSnackBar,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store
      .select('message')
      .map((state: MessageState) => state.list)
      .filter(items => !!items.length && !this.currentMessage)
      .map(items => items[0])
      .switchMap((message: Message) => {
        this.currentMessage = message;
        const bar = this.mdSnackBar.open(message.text, null, {duration: 1000});
        return bar.afterDismissed().map(() => message);
      })
      .subscribe((message: Message) => {
        this.currentMessage = null;
        this.store.dispatch(MESSAGE_ACTIONS.DELETE(message.id));
      });
  }

  ngOnDestroy() {
    this.messageSubscription.unsubscribe();
  }
}
