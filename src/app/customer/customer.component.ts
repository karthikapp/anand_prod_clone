import { Component, OnInit} from '@angular/core';
//import { FirebaseserviceService } from '../firebaseservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
		public isActive: Boolean
	public isActive_chats: Boolean
  company_id: any;

  constructor(private router: ActivatedRoute) 
  {
  this.isActive = true;
  this.isActive_chats = false;
  }

  ngOnInit() {
    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
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
