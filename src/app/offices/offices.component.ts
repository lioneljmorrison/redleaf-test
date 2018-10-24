import {Component, OnDestroy, OnInit} from '@angular/core';
import { State } from '@progress/kendo-data-query';
import {Subscription} from 'rxjs';
import {IOffice} from '../models/office';
import {MockOffices} from '../mock-data/offices';
import {DataStoreService} from '../services/data-store.service';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit, OnDestroy {
  gridData: any[];
  loading = true;
  state: State = { skip: 0, take: 5 };

  officeObsSubscription: Subscription;

  constructor() {
    const officeObs = new DataStoreService;

    this.officeObsSubscription = officeObs.getOffices().subscribe(
      (data) =>  {
        this.gridData = data;
        this.loading = false;
        },
      (error: string) => { /** do something useful */ },
      () => { /** do something useful */ }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.officeObsSubscription.unsubscribe();
  }
}
