import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
		public isActive: Boolean
	public isActive_chats: Boolean
  constructor() 
  {
  this.isActive = true;
  this.isActive_chats = false;
  }

  ngOnInit() {
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

}
