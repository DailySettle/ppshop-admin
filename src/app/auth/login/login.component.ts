import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers';
import {AuthActions} from '../action-types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>) {


  }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['test@angular-university.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login(): void {

    const val = this.form.value;

    this.auth.login(val.email, val.password)
      .pipe(
        tap(payload => {

          this.store.dispatch(AuthActions.login({user: payload.data.username}));

          this.router.navigateByUrl('/products');

        })
      )
      .subscribe(
        noop,
        () => alert('Login Failed')
      );


  }
}
