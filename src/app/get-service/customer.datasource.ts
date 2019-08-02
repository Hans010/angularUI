
import { Customer } from '../models/customer.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { CustomerDataService } from '../shared/customer-dataservice.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

export class CustomerDataSource implements DataSource<Customer> {
    
    private customerSubject = new BehaviorSubject<Customer[]>([]);
    
    constructor (private customerDataService: CustomerDataService) {}
    
    
    loadCustomers (url: string) {
        this.customerDataService.getService(url)
        
        .subscribe (customers => {
            this.customerSubject.next(customers);
            console.log(customers);
        })
    }
    
    connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
        console.log('Connecting to data source');
        return this.customerSubject.asObservable();
    }
    disconnect(collectionViewer: import("@angular/cdk/collections").CollectionViewer): void {
       this.customerSubject.complete();
    }

}

