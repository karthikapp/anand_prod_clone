import { Component, OnInit , Input } from '@angular/core';
import { FirebaseserviceService } from '../firebaseservice.service';

@Component({
  selector: 'app-getcompetitorname',
  templateUrl: './getcompetitorname.component.html',
  styleUrls: ['./getcompetitorname.component.css']
})
export class GetcompetitornameComponent implements OnInit {
@Input() id: string;
  competitorname : string;

  constructor(private firebaseservice : FirebaseserviceService) { }

  ngOnInit() 
  {
  	this.firebaseservice.getcompetitorname(this.id).snapshotChanges().subscribe((val: any) => {
  		// console.log("from comp", val.payload.val())
  		this.competitorname = val.payload.val().competitor_name
  	})
  }

}
