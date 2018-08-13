import { Component, OnInit , Input} from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getbrandname',
  templateUrl: './getbrandname.component.html',
  styleUrls: ['./getbrandname.component.css']
})
export class GetbrandnameComponent implements OnInit {
@Input() id: string;
  brandname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getproductname(this.id).snapshotChanges().subscribe((val: any) => {
  		// console.log("from comp", val.payload.val())
  		this.brandname = val.payload.val().Brand
  	})
  }

}
