import { Component,OnInit } from '@angular/core';
import { CategoryComponent } from './category/category.component'
import { CustomerComponent } from './customer/customer.component'
import { CreateCustomerComponent } from './create-customer/create-customer.component'
import { CategoryProductComponent } from './category-product/category-product.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{

	public isActive: Boolean
	public isActive_chats: Boolean
  public isActive_create: Boolean
	constructor() 
	{
		this.isActive = true;
		this.isActive_chats = false;
    this.isActive_create = false;
	}

  toggle() 
   {
        this.isActive = true
        this.isActive_chats = false
        this.isActive_create = false
        console.log(this.isActive)
   }
   togglechats() 
   {
         this.isActive_chats = true
         this.isActive = false
         this.isActive_create = false
        console.log(this.isActive_chats)
   }

   togglechatscreate()
   {
      this.isActive = false
        this.isActive_chats = false
        this.isActive_create = true
        console.log(this.isActive_create)
   }


	ngOnInit() 
	{
	}
}




