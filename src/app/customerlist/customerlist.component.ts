import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  accounts: any;
  querystring: string;
  account_list: any;

  totalCounts: number;
  val: any;

  category: any;

  //initializing p to one for pagination pipe
  q: number = 1;
  industrytypess: any;
  industrytypes: any;
  industrytype: any;
  companytype: any;
  
  constructor(private firebaseservice : FirebaseserviceService) {

  }

  ngOnInit() 
  {
    //Get company details
   
    this.category = 'All';
    this.accounts = [];
    this.account_list = [];
    this.industrytype = 'All';
    this.companytype = 'All';
    this.industrytypes = [];
    this.industrytypess = [];

    this.firebaseservice.getAccounts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.accounts = companies;
      this.onChangeofBoth();
    });

    this.firebaseservice.getIndustryType().snapshotChanges().subscribe(value => {
      this.industrytypess = value.payload.val();
      this.industrytypes = Object.values(this.industrytypess);
      //console.log("com", this.typeofcontact)
    });
  }

  onChangeofBoth(){
     this.account_list = [];
    if (this.category == 'All' && this.companytype == 'All' && this.industrytype == 'All'){
      this.account_list = this.accounts 
    } 
    else if ((this.category != '' && this.category != undefined && this.category != 'All') && this.companytype == 'All' && this.industrytype == 'All') {
      this.account_list = this.accounts.filter (u =>  {
        return (u.category == this.category)
      })
    }
    else if ((this.companytype != '' && this.companytype != undefined && this.companytype != 'All') && this.category == 'All' && this.industrytype == 'All') {
      this.account_list = this.accounts.filter (u =>  {
        return (u.companytype == this.companytype)
      })
    }
    else if ((this.industrytype != '' && this.industrytype != undefined && this.industrytype != 'All') && this.companytype == 'All' && this.category == 'All') {
      this.account_list = this.accounts.filter (u =>  {
        return (u.industrytype == this.industrytype)
      })
    }
    else if ((this.category != '' && this.category != undefined && this.category != 'All') && (this.companytype != '' && this.companytype != undefined && this.companytype != 'All') && this.industrytype == 'All') {
      this.account_list = this.accounts.filter (u =>  {
        return (u.category == this.category
          && u.companytype == this.companytype)
      })
    }
    else if ((this.category != '' && this.category != undefined && this.category != 'All') && this.companytype == 'All' && (this.industrytype != '' && this.industrytype != undefined && this.industrytype != 'All')) {
      this.account_list = this.accounts.filter (u =>  {
        return (u.category == this.category
          && u.industrytype == this.industrytype)
      })
    }
    else if ((this.industrytype != '' && this.industrytype != undefined && this.industrytype != 'All') && (this.companytype != '' && this.companytype != undefined && this.companytype != 'All') && this.category == 'All') {
      this.account_list = this.accounts.filter (u =>  {
        return (u.companytype == this.companytype
          && u.industrytype == this.industrytype)
      })
    }
    else if ((this.category != '' && this.category != undefined && this.category != 'All') && (this.companytype != '' && this.companytype != undefined && this.companytype != 'All') 
      && (this.industrytype != '' && this.industrytype != undefined && this.industrytype != 'All')) {
      this.account_list = this.accounts.filter (u =>  {
        return (u.category == this.category
          && u.industrytype == this.industrytype
          && u.companytype == this.companytype)
      })
    }
  }

  onCategoryChange(value)
  {
    this.category = ''
    this.category = value
    this.onChangeofBoth();
  }

  onCompanyTypeChange(value){
    this.companytype = ''
    this.companytype = value
    this.onChangeofBoth();
  }

  onIndustryTypeChange(value){
    this.industrytype = ''
    this.industrytype = value
    this.onChangeofBoth();
  }

  //Display the count of Contact Persons 
  countContactPerson(contct){
    if(contct == undefined)
    {
      return "None";
    } else {
      return Object.keys(contct).length;
    }   
  }

  getStringValue(data: string){
    if (data == undefined)
    {
      return 'NA';
    }
    else 
    {
      data = data.toString().replace(/[^a-zA-Z 0-9]+/g, "")
      if(data == '')
      {
        return 'NA';
      }
      else
      {
        return data;
      }
    }   
  }

  

  getAddressline1(add1){

    if(add1 == undefined)
    {
      add1 = '';
      return add1;
    }
    else
    {
      add1 = add1.toString().trim().replace(/[-,.]+/, "")
      if(add1 != ''){
        return add1;
      }
      else{
        return add1 = '';
      }
    }

  }

  getAddress(add2, area, state, pincode){
    let address = '';
    if(add2 == undefined)
    {
      add2 = '';
    }
    else
    {
      add2 = add2.toString().trim().replace(/[-,.]+/, "")
      if(add2 != ''){
        address = add2 + ','
      }
    }

    if (area == undefined)
    {
      area = '';
    }
    else
    {
      area = area.toString().trim().replace(/[-,.]+/, "")
      if(area != ''){

        address = address + area + ','
      }
    }

    if (state == undefined )
    {
      state = '';
    }
    else
    {
      state = state.toString().trim().replace(/[-,.]+/, "")
      if(state != '')
      {
      	address = address + state + ','
      }
    }

    if (pincode == undefined )
    {
      pincode = '';
    }
    else
    {
      pincode = pincode.toString().trim().replace(/[-,.]+/, "")
      if(pincode != ''){
        address = address + pincode
      }
    }

    return address;

  }

}


