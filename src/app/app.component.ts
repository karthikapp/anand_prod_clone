import { Component,OnInit } from '@angular/core';
import { CategoryComponent } from './category/category.component'
import { CustomerComponent } from './customer/customer.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit 
{

	public isActive: Boolean
	public isActive_chats: Boolean
	constructor() 
	{
		this.isActive = true;
		this.isActive_chats = false;
	}

  toggle() 
   {
        this.isActive = true
        this.isActive_chats = false
        console.log(this.isActive)
   }
   togglechats() 
   {
         this.isActive_chats = true
         this.isActive = false
        console.log(this.isActive_chats)
   }


	ngOnInit() 
	{
	}
}




