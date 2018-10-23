import { TestBed } from '@angular/core/testing';

import { DataStoreService } from './data-store.service';
import { MockOffices } from '../mock-data/offices';

describe('DataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataStoreService = TestBed.get(DataStoreService);
    expect(service).toBeTruthy();
  });

  it('should return an observable list of office when #getOffices is called', () => {
    const service: DataStoreService = TestBed.get(DataStoreService);
    expect(service.getOffices().subscribe).toBeDefined();
    service.getOffices().subscribe(list => {
      expect(list).toEqual(MockOffices);     
    })
  });
});
