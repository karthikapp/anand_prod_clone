import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-companyinfo',
  templateUrl: './companyinfo.component.html',
  styleUrls: ['./companyinfo.component.css']
})
export class CompanyinfoComponent implements OnInit {

  accounts: any;
  querystring: string;

  totalCounts: number;
  val: any;

  //initializing p to one for pagination pipe
  p: number = 1;


  constructor(private firebaseservice : FirebaseserviceService) {

    console.log("from companies info")

  }

  ngOnInit() 
  {
    //Get company details
   
    this.firebaseservice.getAccounts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.accounts = companies;
      console.log("accounts", this.accounts)
    });
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
      console.log("hello");
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
    console.log("address", add2,area,state, pincode)
    let address = '';
    if(add2 == undefined)
    {
      console.log("hello");
      add2 = '';
    }
    else
    {
      add2 = add2.toString().trim().replace(/[-,.]+/, "")
      if(add2 != ''){
        address = add2 + ','
        console.log("add", address, add2)
      }
    }

    if (area == undefined)
    {
      console.log("krishna");
      area = '';
    }
    else
    {
      area = area.toString().trim().replace(/[-,.]+/, "")
      if(area != ''){

        address = address + area + ','
        console.log("add", address, area)
      }
    }

    if (state == undefined )
    {
      console.log("bharadwaj");
      state = '';
    }
    else
    {
      state = state.toString().trim().replace(/[-,.]+/, "")
      console.log("state", state , "krishna")
      if(state != ''){
      address = address + state + ','
      console.log("add", address, state)
      }
    }

    if (pincode == undefined )
    {
      console.log("c");
      pincode = '';
    }
    else
    {
      pincode = pincode.toString().trim().replace(/[-,.]+/, "")
      if(pincode != ''){
        address = address + pincode
        console.log("add", address, pincode)
      }
    }

    return address;

  }

}
