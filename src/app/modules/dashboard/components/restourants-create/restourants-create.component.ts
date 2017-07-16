import { RESTOURANT_ACTIONS } from './../../../../store/dashboard/resourant/restourant.reducer';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AppState } from './../../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restourants-create',
  templateUrl: './restourants-create.component.html',
  styleUrls: ['./restourants-create.component.scss']
})
export class RestourantsCreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  add() {
    if(this.form.invalid) {
      Object.keys(this.form.controls)
        .forEach(control => this.form.get(control).markAsTouched());
        return false;
    }

    this.store.dispatch(RESTOURANT_ACTIONS.ADD(this.form.value));
  }

}
