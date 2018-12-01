import { Component, OnInit , Input} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getcompanydetails',
  templateUrl: './getcompanydetails.component.html',
  styleUrls: ['./getcompanydetails.component.css']
})
export class GetcompanydetailsComponent implements OnInit {
@Input() id: string;
  companydetails : any;
  contacts: any;
  companydet: any;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() {
  	this.companydetails= []
  	this.contacts = []
  	this.companydet = []
  	this.firebaseservice.getContactbyAccount(String(this.id)).snapshotChanges().subscribe((val: any) => {
  		 //console.log("from comp", val, this.id)
  		this.companydetails = []
  		this.companydet = []
  		this.contacts = []
  		if(val.payload.val() != undefined){
  			this.companydetails = val.payload.val()
  			console.log("companydetails", this.companydetails.length)
  			this.companydet = Object.values(this.companydetails)
  			this.companydet.forEach( v=>
  				this.contacts.push(v)
  				)
  				// for(let i=0; i< Object.keys(this.companydetails).length; i++)
  				// {
  				// 	if(this.companydetails != undefined)
  				// 	{
  				// 		this.contacts.push()
  				// 		console.log(this.contacts)
  				// 	}
  				// }
  			
  		}
  		else
  		{
  			this.contacts = []
  		}
  	})

  }

  removewhitespaces(data: string){
  return data ? data.replace(/^\s+|\s+$/gm, '') : '';
}

}
