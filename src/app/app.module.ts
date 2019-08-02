import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatExpansionModule} from '@angular/material';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { AppRoutingModule } from './app-routing.module';

import { GetServiceComponent } from './get-service/get-service.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomerDataService } from './shared/customer-dataservice.service';
import { CdkDetailRowDirective } from './get-service/cdk-detail-row.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    DropdownDirective,
    
    GetServiceComponent,
    CustomerItemComponent, 
    CdkDetailRowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule, 
    MatExpansionModule

  ],
  providers: [CustomerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
