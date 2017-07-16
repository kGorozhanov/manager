import { Store } from '@ngrx/store';
import { HttpClient } from './services/http-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';
import 'hammerjs';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { appReducer } from "app/store/app.reducer";
import { RouterModule } from "@angular/router";
import { appEffects } from "app/store/app.effects";
import { AuthGuard } from "app/services/auth-guard.service";
import { MdSnackBarModule } from "@angular/material";
import { LoginGuard } from "app/services/login-guard.serevice";


let optionalModules = [];

if(isDevMode()) {
  optionalModules.push(StoreDevtoolsModule.instrumentOnlyWithExtension({
    maxAge: 10
  }));
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    StoreModule.provideStore(appReducer),
    ...optionalModules,
    ...appEffects,
    RouterModule.forRoot(routes),
    RouterStoreModule.connectRouter(),
    MdSnackBarModule
  ],
  providers: [
		{
			provide: HttpClient,
			useClass: HttpClient,
			deps: [XHRBackend, RequestOptions, Store]
		},
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
