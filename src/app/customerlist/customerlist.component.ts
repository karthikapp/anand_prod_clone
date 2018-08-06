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

  totalCounts: number;
  val: any;

  //initializing p to one for pagination pipe
  q: number = 1;


  constructor(private firebaseservice : FirebaseserviceService) {

  }

  ngOnInit() 
  {
    //Get company details
   
    this.firebaseservice.getAccounts().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(companies => {
      this.accounts = companies;
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


