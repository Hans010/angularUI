import {
  Component,
  OnInit,
  Injectable
} from '@angular/core';
import {
  DataStorageService
} from '../shared/data-storage.service';
import {
  Customer
} from '../models/customer.model';
import {
  CustomerDataSource
} from './customer.datasource';
import {
  CustomerDataService
} from '../shared/customer-dataservice.service';
import { Address } from '../models/address.model';

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  // animations: ['detailExpand'],
  styleUrls: ['./get-service.component.css']
})

@Injectable()
export class GetServiceComponent implements OnInit {

  customerData: CustomerDataSource;
  displayedColumns = ['customerId', 'name', 'contactNumber', 'taxPayerNumber', 'address'];
  addressDisplayedColumns = ['addressId', 'street_number', 'zipCode', 'city', 'country'];
  activeAddress: Address = null;


  constructor(private customerDataService: CustomerDataService) {}

  ngOnInit() {

    this.customerData = new CustomerDataSource(this.customerDataService);

    this.customerData.loadCustomers('http://localhost:7001/bring-bigbank-customers/api/customers/customer');

    console.log(this.customerData);
  }

  getService(url: string) {
    this.customerData.loadCustomers(url);
    console.log(url);
  }

  onClickAddress(address) {
    console.log('address clicked');
    console.log(address);
  }



}