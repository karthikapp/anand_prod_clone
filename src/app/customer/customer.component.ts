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
  employee_count: any;
  oppoaccounts: any;
  totalamount: any;
  rakprods: Boolean;
  compprods: Boolean;
  contactshow: Boolean;
  contacts: any;
  customerlandscape: any;
  ecompanyname: any;
  ecompanyid: any;
  eindustrytype: any;
  ecompanytype: any;
  eempcount: any;
 
  selected: Boolean = false;
  compproducts: any;
  products: any;
  items: any;
  competitors: any;
  Product_name: any;
  competitor_name: any;
  productkey: any;
  competitorid: any;
  license_expiry_dt: any;

  elaptops: any;
  emobiles: any;
  edesktops: any;
  ecloud: any;
  eonprem: any;
  endpoints: any;
  totalendpoints: any;

  private value:any = {};

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
    this.employee_count = '';
    this.rakprods = true
    this.customerlandscape = []
    this.compproducts = []
    this.competitor_name = ''
    this.Product_name = ''
    this.productkey = ''
    this.competitorid = ''
    this.oppoaccounts = []
    this.license_expiry_dt = null;
    this.endpoints = []
    this.totalendpoints = 0;
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0

    //Display the company detail based on company id on respective fields
    this.company_id = this.router.snapshot.params['companyid'];
    console.log("companyid", this.company_id)


    this.firebaseservice.getOpportunitiesbycmpnyid(this.company_id).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.oppoaccounts = companies;
      //console.log(this.oppoaccounts)
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

    
    this.firebaseservice.getAccount(this.company_id).snapshotChanges().subscribe(value => {
      this.account = value.payload.val()
       // console.log(this.account)
       this.account_name = this.account.companyname
       this.industry_type = this.account.industrytype
       this.company_type = this.account.companytype
       this.employee_count = this.account.employee_count
       this.contacts = Object.values(this.account.contact_persons)
       if(this.account.competitor_products != undefined)
       {
        this.compproducts = Object.values(this.account.competitor_products)
        }
        else
      {
        this.compproducts = []
       //console.log(this.contacts)
      }

      if(this.account.endpoints != undefined){
        this.endpoints = this.account.endpoints
      }
      else
      {
        this.endpoints = []
      }

      //console.log(this.endpoints, this.totalendpoints)
      this.totalendpoints = Number(this.endpoints.laptop) + Number(this.endpoints.desktop) 
                          + Number(this.endpoints.mobile) + Number(this.endpoints.servers.onprem) + Number(this.endpoints.servers.cloud)
      //console.log(this.endpoints, this.totalendpoints)
     })




    this.firebaseservice.getProducts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(products => {
      this.products = products;

    this.items = [];

    this.products.forEach( a =>
      this.items.push({
        id: a.productkey,
        text: `${a.Product_name}`
      })
      )
    });

    this.firebaseservice.getCompetitors().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(competitor => {
      this.competitors = competitor;
    });
  }

  public selected_prod(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }


  on_edit_accountname()
  {
    this.firebaseservice.updateAccountName(this.ecompanyname, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_industrytype()
  {
    this.firebaseservice.updateIndustryType(this.eindustrytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_companytype()
  {
    this.firebaseservice.updateCompanyType(this.ecompanytype, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_empcount()
  {
    this.firebaseservice.updateEmpCount(this.eempcount, this.ecompanyid).then(success => {
      alert("Updated Successfully!!")
    })
  }

  on_edit_product()
  {
    let comprod = {
      comprodkey: '',
      competitorid: this.competitorid,
      productid: this.productkey,
      license_expiry_dt: this.license_expiry_dt
    }

    this.firebaseservice.updateCompproducts(this.company_id, comprod ).then(success => {
      alert("Updated Successfully!!")
    })
  }

    on_edit_endpoints()
  {
    let endpoints = {
      servers:
      {
        cloud: this.ecloud,
        onprem: this.eonprem
      },
      desktop: this.edesktops,
      mobile: this.emobiles,
      laptop: this.elaptops
    }

    console.log("end", endpoints)

    this.firebaseservice.updateEndpoints(this.ecompanyid, endpoints ).then(success => {
      alert("Updated Successfully!!")
    })
  }

  editEndpoints(companyid){
    this.ecompanyid = ''
    this.elaptops = 0
    this.emobiles = 0
    this.eonprem = 0
    this.ecloud = 0
    this.edesktops = 0

    this.ecompanyid = companyid
    console.log("endoi", this.endpoints)
    if(this.endpoints.laptop != undefined){
      this.elaptops = this.endpoints.laptop
    }

    if(this.endpoints.desktop != undefined){
      this.edesktops = this.endpoints.desktop
    }

    if(this.endpoints.mobile != undefined){
      this.emobiles = this.endpoints.mobile
    }

    if(this.endpoints.servers.cloud != undefined){
      this.ecloud = this.endpoints.servers.cloud
    }

    if(this.endpoints.servers.onprem != undefined){
      this.eonprem = this.endpoints.servers.onprem
    }

  }


changeprod(value)
{
  //console.log(value)
  this.productkey = value
}

changecompname(value){
  //console.log(value)
  this.competitorid = value
}

onlicdtChange(value){
  this.license_expiry_dt = value
}

  editAccountName(companyname, companyid)
  {
    this.ecompanyname = ''
    this.ecompanyid = ''
    this.ecompanyname = companyname
    this.ecompanyid = companyid
  }

  editIndustryType(industrytype, companyid)
  {
    this.eindustrytype = ''
    this.ecompanyid = ''
    this.eindustrytype = industrytype
    this.ecompanyid = companyid
  }

  editCompanyType(companytype, companyid)
  {
    this.ecompanytype = ''
    this.ecompanyid = ''
    this.ecompanytype = companytype
    this.ecompanyid = companyid
  }

  editEmpCount(empcount, companyid)
  {
    this.eempcount = ''
    this.ecompanyid = ''
    this.eempcount = empcount
    this.ecompanyid = companyid
  }

  changeCompanyType(value){
    this.ecompanytype = value;
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
