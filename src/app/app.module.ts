import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule , RouterLink, RouterLinkActive } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CategoryProductComponent } from './category-product/category-product.component'
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebase.config'
import { FirebaseserviceService } from '../app/firebaseservice.service';
import { ProductSearchPipe } from './product-search.pipe';
import { SortorderPipe } from './sortorder.pipe';
import { CompanyinfoComponent } from './companyinfo/companyinfo.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'companyinfo', component: CompanyinfoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CustomerComponent,
    CreateCustomerComponent,
    CategoryProductComponent,
    ProductSearchPipe,
    SortorderPipe,
    CompanyinfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFirestoreModule,
     FormsModule,
     RouterModule.forRoot(appRoutes)

  ],
  providers: [FirebaseserviceService,
  AngularFireDatabase],
  bootstrap: [AppComponent]
})



export class AppModule { }
