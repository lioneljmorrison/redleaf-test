import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MockUsers} from '../mock-data/users';
import {IUser} from '../models/user';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('loginEmail') accountLoginEmail: ElementRef;
  @ViewChild('loginPassword') accountLoginPassword: ElementRef;

  // Login Form placeholder
  mockUser: IUser = MockUsers[0];
  error = false;

  loginObsSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loginObsSubscription.unsubscribe();
  }

  onValidate(email: HTMLInputElement, password: HTMLInputElement) {
    const loginObs = new AuthenticationService;
    const loginObj: IUser = { email: email.value, password: password.value };

    this.loginObsSubscription = loginObs.login(loginObj).subscribe(
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
