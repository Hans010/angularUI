import { Address } from './address.model';


export interface Customer {

  firstName: string;
  lastName: string;
  customerId: string;
  contactNumber: string;
  taxPayerNumber: string;
  address : Address;

  notificationList: [];
  notificationPreferenceList: [];
  
}