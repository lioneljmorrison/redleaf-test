import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MockUsers} from '../mock-data/users';
import {IUser} from '../models/user';
import {subscribeToObservable} from 'rxjs/internal-compatibility';
import {AuthenticationService} from '../services/authentication.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginEmail') accountLoginEmail: ElementRef;
  @ViewChild('loginPassword') accountLoginPassword: ElementRef;

  // Login Form placeholder
  mockUser: IUser = MockUsers[0];
  error = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onValidate(email: HTMLInputElement, password: HTMLInputElement) {
    const loginObs = new AuthenticationService;
    const loginObj: IUser = { email: email.value, password: password.value };

    loginObs.login(loginObj).subscribe(
      (value => {
        if (value instanceof Object) {
          // Send user to the dashboard
          // Probably should set a cookie or variable to prevent having to log back in again
          this.router.navigate(['/dashboard']);
        } else {
          // Set the error flag to true and display a message to the use.
          this.error = true;
        }
      })
    );
  }
}
