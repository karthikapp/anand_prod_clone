import { Component, OnInit} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';
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
  account: any;
  account_name: any;
  industry_type: any;
  company_type: any;

  oppoaccounts: any;

  constructor(private router: ActivatedRoute, private firebaseservice : FirebaseserviceService) 
  {
  this.isActive = true;
  this.isActive_chats = false;
  }

  ngOnInit() {
    this.company_id = ''
    this.account = [];
    this.account_name = '';
    this.company_type = '';
    this.industry_type = '';

    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
    
     this.firebaseservice.getAccount(this.company_id).snapshotChanges().subscribe(value => {
       this.account = value.payload.val()
       this.account_name = this.account.companyname
       this.industry_type = this.account.industrytype
       this.company_type = this.account.companytype
     })

     this.firebaseservice.getOpportunitiesbycmpnyid(this.company_id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.oppoaccounts = companies;
    });

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
