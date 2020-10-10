import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getBudget(): Observable<any> {
    const myBudget = [{
        title: 'Eat out',
        budget: 45
      },
      {
        title: 'Rent',
        budget: 320
      },
      {
        title: 'Grocery',
        budget: 150
      },
      {
        title: 'Clothes',
        budget: 100
      },
      {
        title: 'Entertainment',
        budget: 45
      },
      {
        title: 'Transportation',
        budget: 75
      },
      {
        title: 'Utilities',
        budget: 150
      },
    ];
    return of(myBudget);
  }
}
