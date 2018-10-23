import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { MockUsers } from '../mock-data/users';

describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should have authenticated observable property', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service.authenticated$).toBeDefined();
    expect(service.authenticated$.subscribe).toBeDefined();
  });

  it('should login with correct credentials', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    const user = MockUsers[0];
    service.login(user.email, user.password);
    expect(service.authenticated$.value).toBeTruthy
  });

  it('should not login with incorrect credentials', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    service.login('not@real.login', 'abc');
    expect(service.authenticated$.value).toBeFalsy();
  });
});
