import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {
	Http,
	RequestOptions,
	Response,
	RequestOptionsArgs,
	Headers,
	Request,
	XHRBackend
} from '@angular/http';
import {AUTH_ACTIONS, AuthState} from "../store/auth/auth.reducer";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";

export class HttpClient extends Http {
	token: string;

	constructor(backend: XHRBackend, defaultOptions: RequestOptions, private store: Store<AppState>) {
		super(backend, defaultOptions);
		this.store.select('auth').subscribe((state: AuthState) => this.token = state.token);
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.request(url, this.getRequestOptionArgs(options)));
	}

	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.get(url, this.getRequestOptionArgs(options)));
	}

	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
	}

	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
	}

	delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
		return this.intercept(super.delete(url, this.getRequestOptionArgs(options)));
	}

	getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
		if (options == null) {
			options = new RequestOptions();
		}
		if (options.headers == null) {
			options.headers = new Headers();
		}
		options.headers.append('Authorization', `Bearer ${this.token}`);
		return options;
	}

	intercept(observable: Observable<Response>): Observable<Response> {
		return observable.catch((err, source) => {
			if (err.status === 401) this.store.dispatch(AUTH_ACTIONS.LOGOUT())
			return Observable.throw(err);
		});
	}
}
