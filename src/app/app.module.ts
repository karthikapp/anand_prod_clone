import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebase.config'
import { FirebaseserviceService } from '../app/firebaseservice.service'



@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CustomerComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule,
     FormsModule

  ],
  providers: [FirebaseserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
