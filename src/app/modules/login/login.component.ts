import { Observable } from 'rxjs';
import { AUTH_ACTIONS, AuthState } from './../../store/auth/auth.reducer';
import { AppState } from './../../store/app.reducer';
import { ValidationService } from './../shared/services/validation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public disableForm: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', Validators.required]
    });
    this.disableForm = this.store
      .select('auth')
      .map((state: AuthState) => state.loginState === 'sending');
  }

  login() {
    if(this.form.invalid) {
      Object.keys(this.form.controls)
        .forEach(control => this.form.get(control).markAsTouched());
        return false;
    }
    this.store.dispatch(AUTH_ACTIONS.LOGIN(this.form.value));
  }

}
