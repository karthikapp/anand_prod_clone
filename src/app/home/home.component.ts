import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../category/category.component'
import { CustomerComponent } from '../customer/customer.component'
import { CategoryProductComponent } from '../category-product/category-product.component'
import { FirebaseserviceService } from '../firebaseservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	

  public isActive: Boolean
  public isActive_chats: Boolean
  public isActive_create: Boolean

  constructor(private firebaseservice : FirebaseserviceService, private router: Router) 
  {
    this.isActive = false;
    this.isActive_chats = true;
    this.isActive_create = false;
  }

  toggle() 
  {
    this.isActive = true
    this.isActive_chats = false
    this.isActive_create = false
  }
  togglechats() 
  {
    this.isActive_chats = true
    this.isActive = false
    this.isActive_create = false
  }

  togglechatscreate()
  {
    this.isActive = false
    this.isActive_chats = false
    this.isActive_create = true
  }

  ngOnInit() {
  }

    //Logout from any page once logged in and not return to any page
    doLogout(){
      this.firebaseservice.logoutUser()
      .then(success => {  
        this.router.navigateByUrl('/login');
       
      })
      .catch( error => {
        console.log(error);
      });
    }
}
