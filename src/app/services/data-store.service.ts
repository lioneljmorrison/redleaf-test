import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOffice } from '../models/office';
import { MockOffices } from '../mock-data/offices';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }

  public getOffices(): Observable<IOffice[]> {
    return of(MockOffices);
  }
}
