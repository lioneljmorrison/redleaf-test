import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MockUsers } from '../mock-data/users';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated$ = new BehaviorSubject<IUser>(undefined);

  constructor() { }

  // Changed == (equals) to use the faster === (equality) operator. We are only interested in evaluating
  // strings, so there is no need to use string interpolation.

  // Modified login() use use the existing IUser interface
  login(loginObj: IUser): Observable<IUser> {
    const match = MockUsers.find(m => m.email === loginObj.email && m.password === loginObj.password) || undefined;
    this.authenticated$.next(match);
    return of(match);
  }
}
