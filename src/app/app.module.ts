import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule , RouterLink, RouterLinkActive } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { CategoryProductComponent } from './category-product/category-product.component'
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from '../environments/firebase.config'
import { FirebaseserviceService } from '../app/firebaseservice.service';
import { ProductSearchPipe } from './product-search.pipe';
import { SortorderPipe } from './sortorder.pipe';
import { HomeComponent } from './home/home.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { MzterialDesignLiteDirective } from './mzterial-design-lite.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { GetproductnameComponent } from './getproductname/getproductname.component';
import { GetbrandnameComponent } from './getbrandname/getbrandname.component';
import { GetassignedtonameComponent } from './getassignedtoname/getassignedtoname.component';
import { GetcatsubcatComponent } from './getcatsubcat/getcatsubcat.component';
import { GetcompetitornameComponent } from './getcompetitorname/getcompetitorname.component';
import {SelectModule} from 'ng2-select';
import {NgPipesModule} from 'ngx-pipes';
import Chart from 'chart.js';
import { ChartsModule } from 'ng2-charts';
import { MomentModule } from 'angular2-moment';
import { MultiselectDropdownModule } from 'ng2-multiselect';
import { GetneednameComponent } from './getneedname/getneedname.component';
import { GetcompanynameComponent } from './getcompanyname/getcompanyname.component';
import { GetcompanydetailsComponent } from './getcompanydetails/getcompanydetails.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent},
{ path: 'companyinfo/:companyid', component: CustomerComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    CustomerComponent,
    CategoryProductComponent,
    ProductSearchPipe,
    SortorderPipe,
    HomeComponent,
    CustomerlistComponent,
    MzterialDesignLiteDirective,
    GetproductnameComponent,
    GetbrandnameComponent,
    GetassignedtonameComponent,
    GetcatsubcatComponent,
    GetcompetitornameComponent,
    GetneednameComponent,
    GetcompanynameComponent,
    GetcompanydetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    SelectModule,
    NgPipesModule,
    ChartsModule,
    MomentModule,
    AngularFireAuthModule,
    MultiselectDropdownModule
  ],
  providers: [FirebaseserviceService,
  AngularFireDatabase],
  bootstrap: [AppComponent]
})



export class AppModule { }
