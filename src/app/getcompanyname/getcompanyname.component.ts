import { Component, OnInit , Input } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getcompanyname',
  templateUrl: './getcompanyname.component.html',
  styleUrls: ['./getcompanyname.component.css']
})
export class GetcompanynameComponent implements OnInit {
@Input() id: string;
  companyname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getAccount(this.id).snapshotChanges().subscribe((val: any) => {
  		// console.log("from comp", val.payload.val())
  		this.companyname = val.payload.val().companyname
  	})
  }

}
