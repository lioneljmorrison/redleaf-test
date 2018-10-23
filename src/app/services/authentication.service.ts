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

  login(email: string, password: string): Observable<IUser> {
    const match = MockUsers.find(m => m.email == email && m.password == password) || undefined;
    this.authenticated$.next(match);
    return of(match)
  }
}
