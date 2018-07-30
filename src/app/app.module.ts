import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CategoryProductComponent } from './category-product/category-product.component'

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebase.config'
import { FirebaseserviceService } from '../app/firebaseservice.service'


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CustomerComponent,
    CreateCustomerComponent,
    CategoryProductComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule,
     FormsModule

  ],
  providers: [FirebaseserviceService,
  AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
