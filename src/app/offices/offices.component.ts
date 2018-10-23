import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';
import {DataStoreService} from '../services/data-store.service';
import {IOffice} from '../models/office';
import {Observable} from 'rxjs';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss']
})
export class OfficesComponent implements OnInit {
  view: Observable<any>;
  state: State = { skip: 0, take: 5 };

  officeObs = new DataStoreService;


  // Observables always give my issues. But my time is up. So, I have to stop here.
  constructor() {
    this.officeObs.getOffices().subscribe(value =>  {
        this.view = value;
      })
    );
  }

  ngOnInit() {
  }
}
