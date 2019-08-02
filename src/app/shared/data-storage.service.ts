import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}
/**
 * This method will return an observable that can be subscribed to wherever its needed
 */
  getService() {
    return this.http
      .get<Customer[]>(
        'http://localhost:7001/bring-bigbank-customers/api/customers/customer'
      )
      .pipe(
        map(customers => {
          return customers.map(customer => {
            return {
              ...customer
            };
          });
        })
      )
  }
}
