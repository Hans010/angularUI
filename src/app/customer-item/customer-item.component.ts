import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-item',
  templateUrl: './customer-item.component.html',
  styleUrls: ['./customer-item.component.css']
})
export class CustomerItemComponent implements OnInit {

  @Input() customerItem: Customer;

  constructor() { }

  ngOnInit() {
  }

}
