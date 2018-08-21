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
  totalamount: any;
  rakprods: Boolean;
  compprods: Boolean;
  contactshow: Boolean;
  contacts: any;
  customerlandscape: any;


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
    this.rakprods = true
    this.customerlandscape = []

    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
    
    this.firebaseservice.getAccount(this.company_id).snapshotChanges().subscribe(value => {
      this.account = value.payload.val()
       // console.log(this.account)
       this.account_name = this.account.companyname
       this.industry_type = this.account.industrytype
       this.company_type = this.account.companytype
       this.contacts = Object.values(this.account.contact_persons)
       console.log(this.contacts)
     })

    this.firebaseservice.getOpportunitiesbycmpnyid(this.company_id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.oppoaccounts = companies;
      console.log(this.oppoaccounts)
      companies.forEach((el: any) => 
      {
        this.firebaseservice.getproductname(el.product_key).snapshotChanges().subscribe((val: any)=>
        {
          var categorylist = val.payload.val().category
          // console.log(categorylist)
          if (categorylist == undefined)
          {
            console.log("found none")
          }
          else 
          {
            console.log(categorylist.category)
            this.customerlandscape.push(categorylist.category)
          }
        
        })
      })

      this.customerlandscape = this.customerlandscape

    });

  }


  removenull(customerlandscape)
  {
    return customerlandscape.filter(function(e){return e});
  }


  returnrupee(amount)
  {
    var retrupee = amount.toLocaleString('en-IN',{ style: 'currency', currency: "INR",minimumFractionDigits:2,maximumFractionDigits:2 });
    return retrupee
  }

  getTotal() {
    let total = 0;
    if (this.oppoaccounts)
    {
      for (var i = 0; i < this.oppoaccounts.length; i++) {
        if (this.oppoaccounts[i].value) {
          total += this.oppoaccounts[i].value;
          this.totalamount = total;
        }
      }
    }
    else 
    {
      total = 0
    }

    return total;
  }

  returnindustrytype(industry_type)
  {
    if(industry_type)
    {
      var returnvalue = industry_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }

  returncompanytype(company_type)
  {
    if(company_type)
    {
      var returnvalue = company_type
    }
    else 
    {
      returnvalue = 'NA'
    }

    return returnvalue

  }


  togglerakprod() 
  {
    this.rakprods = true
    this.compprods = false
    this.contactshow = false
        // console.log(this.isActive)
      }

      togglecompprods() 
      {
        this.rakprods = false
        this.compprods = true
        this.contactshow = false
        // console.log(this.isActive)
      }





      togglechats() 
      {
        this.rakprods = false
        this.compprods = false
        this.contactshow = true
        // console.log(this.isActive_chats)
      }

    }
